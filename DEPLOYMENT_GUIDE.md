# Vercel Deployment Guide

## Prerequisites

1. **GitHub Account**: You need a GitHub account to host your code
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Google Cloud Project**: Set up as described in `GOOGLE_SHEETS_SETUP.md`

## Step 1: Prepare Your Code

### 1.1 Fix Dependencies
The duplicate express dependency has been fixed in `package.json`.

### 1.2 Create Vercel Configuration
A `vercel.json` file has been created to handle your monorepo structure.

### 1.3 Update Google Sheets Integration
The server code has been updated to handle credentials from environment variables.

## Step 2: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a GitHub repository**:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it something like `building-codes-app`
   - Don't initialize with README (you already have one)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/building-codes-app.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Prepare Google Sheets Credentials

### 3.1 Get Your Credentials JSON
1. Go to your Google Cloud Console
2. Navigate to "APIs & Services" > "Credentials"
3. Find your service account and download the JSON key
4. Open the JSON file and copy its entire contents

### 3.2 Convert to Single Line (Optional)
For easier handling, you can convert the JSON to a single line:
```bash
# On macOS/Linux
cat credentials.json | tr -d '\n' | tr -d ' '
```

## Step 4: Deploy to Vercel

### 4.1 Import Your Repository
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect your project structure

### 4.2 Configure Environment Variables
In the Vercel dashboard, go to your project settings and add these environment variables:

1. **GOOGLE_SHEETS_CREDENTIALS**
   - Value: The entire contents of your credentials.json file (as a single line)
   - Example: `{"type":"service_account","project_id":"your-project",...}`

2. **SPREADSHEET_ID**
   - Value: Your Google Sheet ID (the long string from the URL)
   - Example: `1gfnoH207c1t9SmAB6oNLk04-R1WD29F0W0c4Vw9LN74`

3. **NODE_ENV**
   - Value: `production`

### 4.3 Configure Build Settings
In your Vercel project settings:

1. **Framework Preset**: Other
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

### 4.4 Deploy
1. Click "Deploy" in the Vercel dashboard
2. Wait for the build to complete (usually 2-3 minutes)
3. Your app will be available at the provided URL

## Step 5: Test Your Deployment

### 5.1 Test the API
Visit your deployed URL and test the API endpoints:
- `https://your-app.vercel.app/api/waitlist` (GET)
- Try submitting the lead capture form

### 5.2 Check Google Sheets
1. Open your Google Sheet
2. Verify that new entries are being added when you submit the form

## Step 6: Custom Domain (Optional)

1. In your Vercel dashboard, go to "Settings" > "Domains"
2. Add your custom domain
3. Follow the DNS configuration instructions

## Troubleshooting

### Common Issues

1. **"Google Sheets credentials not found"**
   - Check that `GOOGLE_SHEETS_CREDENTIALS` environment variable is set correctly
   - Ensure the JSON is valid and complete

2. **"Spreadsheet not found"**
   - Verify `SPREADSHEET_ID` is correct
   - Ensure your service account has access to the spreadsheet

3. **Build fails**
   - Check the build logs in Vercel dashboard
   - Ensure all dependencies are in `package.json`

4. **API returns 500 errors**
   - Check the function logs in Vercel dashboard
   - Verify environment variables are set correctly

### Debugging

1. **View Logs**: In Vercel dashboard, go to "Functions" tab to see server logs
2. **Test Locally**: Run `npm run dev` to test locally first
3. **Check Environment**: Verify all environment variables are set in Vercel

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `GOOGLE_SHEETS_CREDENTIALS` | Service account JSON (single line) | `{"type":"service_account",...}` |
| `SPREADSHEET_ID` | Your Google Sheet ID | `1gfnoH207c1t9SmAB6oNLk04-R1WD29F0W0c4Vw9LN74` |
| `NODE_ENV` | Environment | `production` |

## Cost

- **Vercel Free Tier**: 100GB bandwidth/month, 100 serverless function executions/day
- **Google Sheets API**: Free for up to 300 requests/minute
- **Total Cost**: $0 for small to medium usage

## Next Steps

1. **Monitor Usage**: Check Vercel dashboard for usage statistics
2. **Set Up Analytics**: Add Google Analytics or similar
3. **Scale Up**: If you exceed free limits, Vercel Pro is $20/month
4. **Backup**: Consider setting up automated backups of your Google Sheet

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Google Sheets API**: [developers.google.com/sheets](https://developers.google.com/sheets)
- **Project Issues**: Check the GitHub repository issues 