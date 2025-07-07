# 🏗️ LandingLens - AI-Powered Code Compliance Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **Instantly verify building plans with next-gen AI. Save time, reduce errors, and accelerate approvals.**

LandingLens is a modern, responsive landing page for an AI-powered building code compliance platform. Built with React, TypeScript, and Tailwind CSS, it features a comprehensive lead capture system, beautiful animations, and a professional design optimized for conversion.

## ✨ Features

### 🎨 **Modern Design**
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Automatic theme switching with smooth transitions
- **Beautiful Animations**: Framer Motion powered micro-interactions
- **Professional UI**: Clean, modern design with purple brand colors

### 📝 **Lead Capture System**
- **Multi-point Capture**: Hero section and dedicated lead capture section
- **Form Validation**: Real-time email and input validation
- **Database Integration**: PostgreSQL with Drizzle ORM for data persistence
- **Success Feedback**: Toast notifications and loading states

### 🚀 **Performance & UX**
- **Fast Loading**: Vite build system for optimal performance
- **SEO Optimized**: Semantic HTML and meta tags
- **Accessibility**: ARIA labels and keyboard navigation
- **Smooth Scrolling**: Intersection Observer for scroll animations

### 🛠 **Technical Features**
- **TypeScript**: Full type safety across the application
- **Modern Stack**: React 18, Vite, Tailwind CSS, Framer Motion
- **Database**: PostgreSQL with Drizzle ORM
- **API**: Express.js backend with RESTful endpoints
- **Development**: Hot reload, error overlays, and debugging tools

## 🏗️ Project Structure

```
LandingLens/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── api/           # API integration
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   └── pages/         # Page components
│   └── index.html         # HTML template
├── server/                # Express.js backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Database operations
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schema
├── repository/           # Data storage
└── attached_assets/      # Project assets
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
- **Express.js** - Web framework
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database
- **Zod** - Schema validation
- **Passport.js** - Authentication

### Development
- **Vite** - Build tool
- **ESBuild** - TypeScript compilation
- **Drizzle Kit** - Database migrations

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database

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

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   cp .env.example .env
   ```
   
   Add your database URL:
   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/landinglens
   ```

4. **Set up the database**
   ```bash
   # Push the schema to your database
   npm run db:push
   ```

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

# Database
npm run db:push         # Push schema changes to database

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

### Database Schema

Modify the database schema in `shared/schema.ts`:

```typescript
export const waitlistEntries = pgTable("waitlist_entries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

## 🔧 API Endpoints

### Lead Capture
- **POST** `/api/leads` - Save a new lead
  ```json
  {
    "name": "John Doe",
    "company": "Acme Corp",
    "email": "john@example.com"
  }
  ```

### Waitlist
- **GET** `/api/waitlist` - Get all waitlist entries
- **POST** `/api/waitlist` - Add new waitlist entry

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
   - `DATABASE_URL`
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
- **Drizzle ORM** for type-safe database operations

## 📞 Support

- **Email**: support@landinglens.com
- **Documentation**: [docs.landinglens.com](https://docs.landinglens.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/LandingLens/issues)

---

**Built with ❤️ for the construction industry** 