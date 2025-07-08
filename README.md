# 🏗️ Building Codes - Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

> **Instantly verify building plans with next-gen AI. Save time, reduce errors, and accelerate approvals.**

Building Codes is a modern, responsive landing page for an AI-powered building code compliance platform. Built with React, TypeScript, and Tailwind CSS, it features a comprehensive lead capture system, beautiful animations, and a professional design optimized for conversion. **Optimized for Vercel deployment with serverless functions.**

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Automatic theme switching with smooth transitions
- **Beautiful Animations**: Framer Motion powered micro-interactions
- **Professional UI**: Clean, modern design with purple brand colors

### 📝 **Lead Capture System**
- **Multi-point Capture**: Hero section and dedicated lead capture section
- **Form Validation**: Real-time email and input validation
- **Google Sheets Integration**: Direct storage to Google Sheets for easy data management
- **Backup Storage**: Local JSON backup for data redundancy
- **Success Feedback**: Toast notifications and loading states

### 🚀 **Performance & UX**
- **Fast Loading**: Vite build system for optimal performance
- **SEO Optimized**: Semantic HTML and meta tags
- **Accessibility**: ARIA labels and keyboard navigation
- **Smooth Scrolling**: Intersection Observer for scroll animations

### 🛠 **Technical Features**
- **TypeScript**: Full type safety across the application
- **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Data Storage**: Google Sheets API with local JSON backup
- **API**: Express.js backend with RESTful endpoints
- **Development**: Hot reload, error overlays, and debugging tools

## 🏗️ Project Structure

```
Building-Codes/
├── api/                    # Vercel serverless functions
│   ├── health.ts          # Health check endpoint
│   ├── waitlist.ts        # Waitlist management
│   └── waitlist/          # Nested API routes
│       ├── check/[email].ts
│       └── count.ts
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── api/           # API integration
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
│   └── index.html         # HTML template
├── server/                 # Backend server (development only)
│   ├── dev-server.ts      # Development server
│   ├── googleSheets.ts    # Google Sheets integration
│   └── routes.ts          # Express routes
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Database schema
├── repository/            # Data storage
├── attached_assets/       # Project assets
└── dist/                  # Build output
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **React Hook Form** - Form management
- **Lucide React** - Icons

### Backend
- **Express.js** - Web framework (development only)
- **Vercel Serverless Functions** - Production API routes
- **Google Sheets API** - Data storage
- **Zod** - Schema validation
- **Node.js** - Runtime environment

### Development
- **Vite** - Build tool
- **ESBuild** - TypeScript compilation
- **Drizzle Kit** - Database migrations

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Google Cloud Project** with Google Sheets API enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/LandingLens.git
   cd LandingLens
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Google Sheets integration**
   
   Follow the detailed setup instructions in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md):
   
   - Create a Google Sheet with the required columns
   - Set up a Google Cloud Project
   - Create a service account and download credentials
   - Share the Google Sheet with the service account
   - Update the spreadsheet ID in `server/config.ts`

5. **Start the development server**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately
   npm run dev:frontend  # Frontend only
   npm run dev          # Backend only
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

## 📖 Usage

### Development

The project uses a monorepo structure with the following scripts:

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:frontend     # Start frontend only (Vite dev server)
npm run dev:backend      # Start backend only

# Building
npm run build           # Build for production
npm run start           # Start production server

# Google Sheets
# See GOOGLE_SHEETS_SETUP.md for configuration

# Type checking
npm run check           # TypeScript type checking
```

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

The application will be available on port 5000.

## 🎨 Customization

### Styling

The project uses Tailwind CSS with custom design tokens. Key customization points:

- **Colors**: Defined in `tailwind.config.ts` under the `brandPurple` palette
- **Components**: UI components in `client/src/components/ui/`
- **Animations**: Framer Motion configurations in individual components

### Content

Update the following files to customize content:

- **Hero Section**: `client/src/components/Hero.tsx`
- **Lead Capture**: `client/src/components/LeadCapture.tsx`
- **Sections**: Individual section components in `client/src/components/`

### Google Sheets Configuration

Modify the Google Sheets configuration in `server/config.ts`:

```typescript
export const GOOGLE_SHEETS_CONFIG = {
  SPREADSHEET_ID: 'YOUR_SPREADSHEET_ID_HERE',
  SHEET_NAME: 'Sheet1',
  RANGE: 'Sheet1!A:D',
  // ... rest of config
};
```

For detailed setup instructions, see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md).

## 🔧 API Endpoints

### Waitlist Management
- **POST** `/api/waitlist` - Add new waitlist entry
  ```json
  {
    "name": "John Doe",
    "company": "Acme Corp",
    "email": "john@example.com"
  }
  ```
- **GET** `/api/waitlist` - Get all waitlist entries from Google Sheets
- **GET** `/api/waitlist/check/:email` - Check if email exists in waitlist
- **GET** `/api/waitlist/count` - Get total number of waitlist entries

## 🧪 Testing

```bash
# Run type checking
npm run check

# Run linting (if configured)
npm run lint

# Run tests (if configured)
npm test
```

## 📦 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables**:
   - `GOOGLE_SHEETS_CREDENTIALS` (base64 encoded credentials.json)
   - `SPREADSHEET_ID` (your Google Sheet ID)
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The application can be deployed to any platform that supports Node.js:

- **Railway**
- **Render**
- **Heroku**
- **DigitalOcean App Platform**

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test thoroughly**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use meaningful commit messages
- Test your changes locally
- Update documentation if needed
- Follow the existing code style

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Radix UI** for accessible components
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Google Sheets API** for easy data management

## 📞 Support

- **Email**: support@landinglens.com
- **Documentation**: [docs.landinglens.com](https://docs.landinglens.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/LandingLens/issues)

**Built with ❤️ for the construction industry**
