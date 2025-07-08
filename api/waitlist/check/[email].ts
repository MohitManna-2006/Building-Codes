import type { VercelRequest, VercelResponse } from '@vercel/node';
import { checkEmailExists } from '../../../server/googleSheets.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const { email } = req.query;
      
      if (!email || typeof email !== 'string') {
        return res.status(400).json({ error: 'Email parameter is required' });
      }

      const exists = await checkEmailExists(email);
      res.json({ exists });
    } catch (error) {
      console.error("Error checking email existence:", error);
      res.status(500).json({ error: "Failed to check email existence" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 