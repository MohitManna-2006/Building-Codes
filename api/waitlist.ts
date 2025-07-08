import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertWaitlistSchema } from '../shared/schema.js';
import fs from 'fs/promises';
import path from 'path';
import { appendLead, getLeads, checkEmailExists } from '../server/googleSheets.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const validatedData = insertWaitlistSchema.parse(req.body);

      // Check if email already exists in Google Sheets
      const emailExists = await checkEmailExists(validatedData.email);
      if (emailExists) {
        return res.status(400).json({
          error: "Email already registered",
          message: "This email address is already on our waitlist.",
        });
      }

      // Append to Google Sheets (primary storage)
      try {
        await appendLead({
          name: validatedData.name,
          company: validatedData.company,
          email: validatedData.email,
        });
      } catch (sheetsError) {
        console.error("Error appending to Google Sheets:", sheetsError);
        return res.status(500).json({
          error: "Failed to save to Google Sheets",
          message: "Unable to save your information. Please try again later.",
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
          ts: new Date().toISOString(),
        };

        existingData.push(entryWithTimestamp);

        // Write back to file
        await fs.writeFile(waitlistPath, JSON.stringify(existingData, null, 2));
      } catch (fileError) {
        console.error("Error writing to waitlist file:", fileError);
        // Continue with the response even if file write fails
      }

      return res.json({
        success: true,
        message: "Successfully added to waitlist!",
      });
    } catch (error) {
      console.error("Waitlist signup error:", error);
      return res.status(400).json({
        error: "Invalid data provided",
        details: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const leads = await getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching waitlist from Google Sheets:", error);
      res.status(500).json({ error: "Failed to fetch waitlist entries" });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 