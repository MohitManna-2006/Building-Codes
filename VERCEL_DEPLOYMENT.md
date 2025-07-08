# Vercel Deployment Guide

This guide will walk you through deploying the Building Codes landing page to Vercel with optimal performance and configuration.

## 🚀 Quick Deploy

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

## ⚙️ Configuration

### Build Settings

The project is pre-configured for Vercel with the following settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

Set these in your Vercel project dashboard:

```bash
# Google Sheets Integration
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key_here
GOOGLE_SHEETS_CLIENT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id_here

# Optional
NODE_ENV=production
```

### Google Sheets Setup

1. **Create a Google Cloud Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing

2. **Enable Google Sheets API**
   - Go to APIs & Services > Library
   - Search for "Google Sheets API"
   - Enable it

3. **Create Service Account**
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "Service Account"
   - Fill in details and create

4. **Download Credentials**
   - Click on the service account
   - Go to "Keys" tab
   - Add new key > JSON
   - Download the JSON file

5. **Set up Google Sheet**
   - Create a new Google Sheet
   - Share it with the service account email
   - Note the spreadsheet ID from the URL

6. **Configure Environment Variables**
   - Copy the private key from the JSON file
   - Set `GOOGLE_SHEETS_PRIVATE_KEY` in Vercel
   - Set `GOOGLE_SHEETS_CLIENT_EMAIL` to the service account email
   - Set `GOOGLE_SHEETS_SPREADSHEET_ID` to your sheet ID

## 📁 Project Structure for Vercel

### API Routes

The project uses Vercel's serverless functions:

```
api/
├── health.ts              # GET /api/health
├── waitlist.ts            # POST/GET /api/waitlist
└── waitlist/
    ├── check/[email].ts   # GET /api/waitlist/check/[email]
    └── count.ts           # GET /api/waitlist/count
```

### Frontend

The React app is built to `dist/` and served statically:

- **Entry Point**: `client/index.html`
- **Build Output**: `dist/`
- **Static Assets**: Automatically optimized by Vercel

## 🔧 Vercel Configuration

### vercel.json

The project includes a `vercel.json` with:

- **Build Command**: `npm run vercel-build`
- **Output Directory**: `dist`
- **API Routes**: Automatic serverless function detection
- **Headers**: Security and caching headers
- **Routes**: SPA fallback for React Router

### Build Optimization

The build process is optimized for Vercel:

1. **Frontend Build**: Vite builds to `dist/`
2. **Code Splitting**: Automatic chunk splitting
3. **Asset Optimization**: Images and fonts optimized
4. **Tree Shaking**: Unused code removed
5. **Minification**: Production-ready bundles

## 🚀 Performance Features

### Automatic Optimizations

- **CDN Distribution**: Global edge network
- **Image Optimization**: Automatic WebP conversion
- **Caching**: Smart cache headers
- **Compression**: Gzip/Brotli compression
- **HTTP/2**: Modern protocol support

### Custom Optimizations

- **Code Splitting**: Vendor and UI component chunks
- **Lazy Loading**: Route-based code splitting
- **Preloading**: Critical resources preloaded
- **Service Worker**: Optional PWA support

## 🔍 Monitoring & Analytics

### Vercel Analytics

Enable Vercel Analytics in your project dashboard:

1. Go to your project settings
2. Navigate to Analytics
3. Enable Web Analytics
4. Add the tracking code to your app

### Performance Monitoring

- **Core Web Vitals**: Automatic monitoring
- **Real User Monitoring**: Performance insights
- **Error Tracking**: Automatic error reporting

## 🔒 Security

### Security Headers

The project includes security headers:

```json
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block"
}
```

### CORS Configuration

API routes include CORS headers for cross-origin requests:

```typescript
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
```

## 🛠️ Development Workflow

### Local Development

```bash
# Start development servers
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment Workflow

1. **Development**: Use `npm run dev` for local development
2. **Testing**: Test API routes locally
3. **Commit**: Push changes to GitHub
4. **Deploy**: Vercel automatically deploys on push
5. **Verify**: Check deployment in Vercel dashboard

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**
   - Check build logs in Vercel dashboard
   - Verify all dependencies are installed
   - Ensure TypeScript compilation passes

2. **API Route Issues**
   - Check function logs in Vercel dashboard
   - Verify environment variables are set
   - Test API routes locally first

3. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names match exactly
   - Redeploy after adding new variables

### Debug Commands

```bash
# Check build locally
npm run build

# Type check
npm run check

# Test API routes locally
npm run dev:backend
```

## 📈 Scaling

### Automatic Scaling

Vercel automatically scales your application:

- **Serverless Functions**: Scale to zero when not in use
- **CDN**: Global edge network for static assets
- **Database**: Consider using Vercel Postgres for data

### Performance Tips

1. **Optimize Images**: Use WebP format
2. **Minimize Bundle Size**: Remove unused dependencies
3. **Use CDN**: Leverage Vercel's edge network
4. **Cache Strategically**: Set appropriate cache headers

## 🎯 Best Practices

### Code Organization

- Keep API routes in `api/` directory
- Use TypeScript for type safety
- Follow Vercel's serverless function patterns

### Performance

- Optimize images and assets
- Use code splitting effectively
- Minimize bundle sizes
- Leverage caching strategies

### Security

- Validate all inputs
- Use environment variables for secrets
- Implement proper CORS policies
- Follow security best practices

## 📞 Support

For deployment issues:

1. Check Vercel documentation
2. Review build logs in dashboard
3. Test locally before deploying
4. Contact Vercel support if needed

---

**Happy Deploying! 🚀** 