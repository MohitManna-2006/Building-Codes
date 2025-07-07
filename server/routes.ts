import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertWaitlistSchema } from "../shared/schema.js";
import fs from "fs/promises";
import path from "path";
import { appendLead, getLeads, checkEmailExists } from "./googleSheets.js";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if email already exists in Google Sheets
      const emailExists = await checkEmailExists(validatedData.email);
      if (emailExists) {
        return res.status(400).json({ 
          error: "Email already registered",
          message: "This email address is already on our waitlist."
        });
      }
      
      // Append to Google Sheets (primary storage)
      try {
        await appendLead({
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email
        });
      } catch (sheetsError) {
        console.error("Error appending to Google Sheets:", sheetsError);
        return res.status(500).json({ 
          error: "Failed to save to Google Sheets",
          message: "Unable to save your information. Please try again later."
        });
      }
      
      // Also save to JSON file for backup
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

      res.json({ 
        success: true, 
        message: "Successfully added to waitlist!"
      });
    } catch (error) {
      console.error("Waitlist signup error:", error);
      res.status(400).json({ 
        error: "Invalid data provided",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get waitlist entries from Google Sheets
  app.get("/api/waitlist", async (req, res) => {
    try {
      const leads = await getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching waitlist from Google Sheets:", error);
      res.status(500).json({ error: "Failed to fetch waitlist entries" });
    }
  });

  // Check if email exists in waitlist
  app.get("/api/waitlist/check/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const exists = await checkEmailExists(email);
      res.json({ exists });
    } catch (error) {
      console.error("Error checking email existence:", error);
      res.status(500).json({ error: "Failed to check email existence" });
    }
  });

  // Get waitlist count
  app.get("/api/waitlist/count", async (req, res) => {
    try {
      const leads = await getLeads();
      res.json({ count: leads.length });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      res.status(500).json({ error: "Failed to get waitlist count" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
