import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import fs from "fs/promises";
import path from "path";
import { appendLead } from "./googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(validatedData);
      
      // Also save to JSON file for persistence
      const waitlistPath = path.join(process.cwd(), "repository", "waitlist.json");
      
      try {
        // Ensure directory exists
        await fs.mkdir(path.dirname(waitlistPath), { recursive: true });
        
        // Read existing data or create empty array
        let existingData = [];
        try {
          const fileContent = await fs.readFile(waitlistPath, "utf-8");
          existingData = JSON.parse(fileContent);
        } catch (error) {
          // File doesn't exist or is invalid, start with empty array
          existingData = [];
        }
        
        // Add new entry
        const entryWithTimestamp = {
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email,
          ts: new Date().toISOString()
        };
        
        existingData.push(entryWithTimestamp);
        
        // Write back to file
        await fs.writeFile(waitlistPath, JSON.stringify(existingData, null, 2));
      } catch (fileError) {
        console.error("Error writing to waitlist file:", fileError);
        // Continue with the response even if file write fails
      }

      // Append to Google Sheets
      try {
        await appendLead({
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email
        });
      } catch (sheetsError) {
        console.error("Error appending to Google Sheets:", sheetsError);
        // Continue with the response even if Google Sheets write fails
      }
      
      res.json({ success: true, entry });
    } catch (error) {
      console.error("Waitlist signup error:", error);
      res.status(400).json({ 
        error: "Invalid data provided",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get waitlist entries
  app.get("/api/waitlist", async (req, res) => {
    try {
      const entries = await storage.getWaitlistEntries();
      res.json(entries);
    } catch (error) {
      console.error("Error fetching waitlist:", error);
      res.status(500).json({ error: "Failed to fetch waitlist entries" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
