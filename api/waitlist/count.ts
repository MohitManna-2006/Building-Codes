import type { VercelRequest, VercelResponse } from '@vercel/node';
import { getLeads } from '../../../server/googleSheets.js';

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
      const leads = await getLeads();
      res.json({ count: leads.length });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      res.status(500).json({ error: "Failed to get waitlist count" });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 