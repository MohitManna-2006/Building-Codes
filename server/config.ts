// Google Sheets Configuration
export const GOOGLE_SHEETS_CONFIG = {
  SPREADSHEET_ID: process.env.SPREADSHEET_ID || '1gfnoH207c1t9SmAB6oNLk04-R1WD29F0W0c4Vw9LN74',
  SHEET_NAME: 'Sheet1',
  RANGE: 'Sheet1!A:D',
  COLUMNS: {
    NAME: 0,
    COMPANY: 1,
    EMAIL: 2,
    TIMESTAMP: 3,
  },
} as const;

// API Configuration
export const API_CONFIG = {
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100, // 100 requests per window
  },
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
} as const; 