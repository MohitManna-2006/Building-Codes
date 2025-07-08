# Vercel Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Environment Variables Setup
- [ ] `GOOGLE_SHEETS_CREDENTIALS` - Service account JSON as single-line string
- [ ] `GOOGLE_SHEETS_SPREADSHEET_ID` - Your Google Sheet ID
- [ ] `NODE_ENV` - Set to `production`
- [ ] `CORS_ORIGIN` - Your Vercel app URL (optional)

### 2. Google Sheets Setup
- [ ] Google Cloud Project created
- [ ] Google Sheets API enabled
- [ ] Service account created and JSON downloaded
- [ ] Google Sheet created and shared with service account
- [ ] Sheet has correct columns: Name, Company, Email, Timestamp

### 3. Code Review
- [ ] All API routes in `api/` directory
- [ ] No file system operations in serverless functions
- [ ] CORS headers properly set
- [ ] Error handling implemented
- [ ] TypeScript compilation passes

### 4. Build Testing
- [ ] `npm run build:frontend` succeeds
- [ ] `npm run check` (TypeScript) passes
- [ ] No console errors in development

### 5. Local Testing
- [ ] Development server runs: `npm run dev`
- [ ] API endpoints work locally
- [ ] Frontend can communicate with backend
- [ ] Form submissions work correctly

## 🚀 Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Connect to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "New Project"
- Import your GitHub repository
- Vercel will auto-detect the configuration

### 3. Set Environment Variables
In Vercel dashboard → Settings → Environment Variables:
- Add all required environment variables
- Set environment to "Production" (and optionally "Preview")

### 4. Deploy
- Vercel will automatically build and deploy
- Monitor the build logs for any errors
- Check the deployment URL

## 🔍 Post-Deployment Verification

### 1. Health Check
- Visit: `https://your-app.vercel.app/api/health`
- Should return: `{"status":"ok","timestamp":"...","environment":"production"}`

### 2. API Testing
- Test waitlist submission: `POST /api/waitlist`
- Test email check: `GET /api/waitlist/check/[email]`
- Test count: `GET /api/waitlist/count`

### 3. Frontend Testing
- Visit the main page
- Test the lead capture form
- Verify form validation works
- Check that success/error messages appear

### 4. Google Sheets Integration
- Submit a test lead through the form
- Verify it appears in your Google Sheet
- Check that duplicate emails are rejected

## 🛠️ Troubleshooting

### Build Failures
- Check Vercel build logs
- Verify all dependencies are installed
- Ensure TypeScript compilation passes

### API Errors
- Check function logs in Vercel dashboard
- Verify environment variables are set correctly
- Test API routes locally first

### CORS Issues
- Verify `CORS_ORIGIN` is set to your Vercel URL
- Check browser console for CORS errors
- Ensure API routes have proper CORS headers

### Google Sheets Issues
- Verify service account has proper permissions
- Check that sheet is shared with service account
- Ensure spreadsheet ID is correct

## 📊 Monitoring

### Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor Core Web Vitals
- Track API function performance

### Error Tracking
- Monitor function logs in Vercel dashboard
- Set up error alerts if needed
- Check Google Sheets for data consistency

## 🔒 Security Checklist

- [ ] Environment variables are encrypted
- [ ] No sensitive data in code
- [ ] CORS properly configured
- [ ] Input validation implemented
- [ ] Rate limiting considered

## 📈 Performance

- [ ] Images optimized
- [ ] Code splitting implemented
- [ ] Bundle size reasonable
- [ ] CDN caching working
- [ ] API response times acceptable

---

**Ready for deployment! 🚀** 