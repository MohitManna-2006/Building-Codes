import type { Express } from "express";
import { createServer, type Server } from "http";
import { appendLead } from "./googleSheets";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API endpoint
  app.post("/api/waitlist", async (req, res) => {
    try {
      const { name, company, email } = req.body;
      if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
      }
      // Optionally: add more validation here
      try {
        await appendLead({ name, company, email });
      } catch (sheetsError) {
        console.error("Error appending to Google Sheets:", sheetsError);
        return res.status(500).json({ error: "Failed to save to Google Sheets" });
      }
      res.json({ success: true });
    } catch (error) {
      console.error("Waitlist signup error:", error);
      res.status(400).json({ 
        error: "Invalid data provided",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
