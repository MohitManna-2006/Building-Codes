import { google } from 'googleapis';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Authenticate using your service account credentials
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(readFileSync(path.join(__dirname, 'credentials.json'), 'utf8')),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Create a Sheets API client
const sheets = google.sheets({ version: 'v4', auth });

// Your Google Sheet ID
const SPREADSHEET_ID = '1gfnoH207c1t9SmAB6oNLk04-R1WD29F0W0c4Vw9LN74';

// Function to append a lead to the sheet
export async function appendLead({ name, company, email }: { name: string; company?: string; email: string }) {
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: 'Sheet1!A:D', // Tab name is Sheet1
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[name, company, email, new Date().toISOString()]],
    },
  });
} 