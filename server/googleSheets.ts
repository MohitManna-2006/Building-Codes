import { google } from 'googleapis';
import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GOOGLE_SHEETS_CONFIG } from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to get credentials from environment variable or file
function getCredentials() {
  // Check if credentials exist as environment variable (for deployment)
  if (process.env.GOOGLE_SHEETS_CREDENTIALS) {
    try {
      return JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
    } catch (error) {
      console.error('Error parsing Google Sheets credentials from environment:', error);
      throw new Error('Invalid GOOGLE_SHEETS_CREDENTIALS environment variable');
    }
  }
  
  // Fallback to file (for local development)
  const credentialsPath = path.join(__dirname, 'credentials.json');
  if (existsSync(credentialsPath)) {
    try {
      return JSON.parse(readFileSync(credentialsPath, 'utf8'));
    } catch (error) {
      console.error('Error reading Google Sheets credentials file:', error);
      throw error;
    }
  }
  
  throw new Error('Google Sheets credentials not found. Please set GOOGLE_SHEETS_CREDENTIALS environment variable or add credentials.json file.');
}

// Lazy initialization of Google Sheets client
let sheetsClient: any = null;

function getSheetsClient() {
  if (!sheetsClient) {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: getCredentials(),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });
      sheetsClient = google.sheets({ version: 'v4', auth });
    } catch (error) {
      console.error('Failed to initialize Google Sheets client:', error);
      throw error;
    }
  }
  return sheetsClient;
}

// Function to append a lead to the sheet
export async function appendLead({ name, company, email }: { name: string; company?: string | null; email: string }) {
  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID,
      range: GOOGLE_SHEETS_CONFIG.RANGE,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, company || '', email, new Date().toISOString()]],
      },
    });
    
    console.log('Successfully appended to Google Sheets:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheets:', error);
    throw error;
  }
}

// Function to get all leads from the sheet
export async function getLeads() {
  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID,
      range: GOOGLE_SHEETS_CONFIG.RANGE,
    });
    
    const values = response.data.values || [];
    
    // Skip header row if it exists
    const dataRows = values.length > 0 && values[0][0] === 'Name' ? values.slice(1) : values;
    
    return dataRows.map((row: any[], index: number) => ({
      id: index + 1,
      name: row[0] || '',
      company: row[1] || '',
      email: row[2] || '',
      createdAt: row[3] || new Date().toISOString(),
    }));
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    throw error;
  }
}

// Function to check if email already exists
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const leads = await getLeads();
    return leads.some((lead: any) => lead.email.toLowerCase() === email.toLowerCase());
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false; // Default to false to allow signup if check fails
  }
}

// Function to get sheet metadata
export async function getSheetInfo() {
  try {
    const sheets = getSheetsClient();
    const response = await sheets.spreadsheets.get({
      spreadsheetId: GOOGLE_SHEETS_CONFIG.SPREADSHEET_ID,
    });
    
    return {
      title: response.data.properties?.title,
      sheets: response.data.sheets?.map((sheet: any) => ({
        title: sheet.properties?.title,
        sheetId: sheet.properties?.sheetId,
      })),
    };
  } catch (error) {
    console.error('Error getting sheet info:', error);
    throw error;
  }
}