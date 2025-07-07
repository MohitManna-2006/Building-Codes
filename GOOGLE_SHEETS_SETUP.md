# Google Sheets Integration Setup

This application uses Google Sheets as the primary data storage for the waitlist. Here's how to set it up and use it effectively.

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name the first sheet "Sheet1" (or update the config if you use a different name)
4. Add headers in the first row:
   - Column A: Name
   - Column B: Company
   - Column C: Email
   - Column D: Timestamp

### 2. Set up Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

### 3. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"
6. Click on your new service account
7. Go to the "Keys" tab
8. Click "Add Key" > "Create New Key"
9. Choose "JSON" format
10. Download the JSON file and save it as `credentials.json` in the `server/` directory

### 4. Share the Google Sheet

1. Open your Google Sheet
2. Click "Share" in the top right
3. Add your service account email (found in the credentials.json file)
4. Give it "Editor" permissions
5. Copy the spreadsheet ID from the URL (the long string between /d/ and /edit)

### 5. Update Configuration

Update the spreadsheet ID in `server/config.ts`:

```typescript
export const GOOGLE_SHEETS_CONFIG = {
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
  // ... rest of config
};
```

## API Endpoints

The application provides the following endpoints for Google Sheets integration:

### POST /api/waitlist
Add a new waitlist entry to Google Sheets.

**Request Body:**
```json
{
  "name": "John Doe",
  "company": "Acme Corp",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully added to waitlist!"
}
```

### GET /api/waitlist
Retrieve all waitlist entries from Google Sheets.

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "company": "Acme Corp",
    "email": "john@example.com",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/waitlist/check/:email
Check if an email already exists in the waitlist.

**Response:**
```json
{
  "exists": true
}
```

### GET /api/waitlist/count
Get the total number of waitlist entries.

**Response:**
```json
{
  "count": 42
}
```

## Features

### ✅ Email Duplicate Prevention
The system checks for existing emails before adding new entries to prevent duplicates.

### ✅ Backup Storage
In addition to Google Sheets, entries are also saved to a local JSON file as backup.

### ✅ Error Handling
Robust error handling ensures the application continues to work even if Google Sheets is temporarily unavailable.

### ✅ Real-time Data
All data is stored in Google Sheets, making it easy to view and manage in a familiar spreadsheet interface.

## Troubleshooting

### Common Issues

1. **"Invalid credentials" error**
   - Ensure `credentials.json` is in the `server/` directory
   - Verify the service account has access to the spreadsheet

2. **"Spreadsheet not found" error**
   - Check that the spreadsheet ID is correct in `config.ts`
   - Ensure the service account has been shared with the spreadsheet

3. **"Permission denied" error**
   - Make sure the service account has "Editor" permissions on the spreadsheet
   - Check that the Google Sheets API is enabled in your Google Cloud project

### Debugging

Enable debug logging by checking the console output. The application logs all Google Sheets operations for debugging purposes.

## Security Considerations

- Keep your `credentials.json` file secure and never commit it to version control
- Use environment variables for sensitive configuration in production
- Regularly rotate your service account keys
- Monitor API usage to stay within Google's quotas

## Performance Notes

- Google Sheets API has rate limits (100 requests per 100 seconds per user)
- For high-traffic applications, consider implementing caching
- The system includes built-in error handling for rate limit issues 