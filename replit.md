# BuildConform - AI-Powered Building Compliance Platform

## Overview

BuildConform is a comprehensive full-stack application that automates building permit compliance checks using AI. The platform allows users to upload architectural plans and receive instant code compliance analysis for various US jurisdictions. Built with a modern tech stack, it features a React-based landing page with lead capture functionality and an Express.js backend with PostgreSQL database integration.

## System Architecture

The application follows a monorepo structure with clear separation between client and server code:

- **Frontend**: React with TypeScript, styled with Tailwind CSS and shadcn/ui components
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Deployment**: Production-ready build system with environment-specific configurations

## Key Components

### Frontend Architecture
- **Component Structure**: Modular React components organized by feature (Hero, Problem, Solution, etc.)
- **Styling**: Tailwind CSS with custom design system using brand colors (purple #8B5CF6, accent green #34D399)
- **UI Library**: shadcn/ui components providing consistent, accessible UI elements
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **State Management**: React hooks for local state, TanStack Query for server state

### Backend Architecture
- **API Layer**: RESTful endpoints for waitlist management and lead capture
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Strategy**: Dual storage approach - primary database storage with JSON file backup
- **Environment Configuration**: Separate development and production configurations

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Waitlist Entries**: Lead capture system (id, name, company, email, created_at)
- **Type Safety**: Zod schemas for runtime validation and TypeScript integration

## Data Flow

1. **Lead Capture**: Users submit contact information through multiple forms across the landing page
2. **API Processing**: Form submissions are validated using Zod schemas and processed by Express endpoints
3. **Dual Storage**: Data is stored both in PostgreSQL database and local JSON file for redundancy
4. **Response Handling**: Success/error responses trigger toast notifications for user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for cloud database connectivity
- **drizzle-orm & drizzle-kit**: Type-safe ORM with migration management
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth user interactions
- **@radix-ui/react-***: Accessible, unstyled UI components foundation

### Build & Development Tools
- **Vite**: Fast build tool with hot module replacement
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **TypeScript**: Type safety across the entire application
- **Tailwind CSS**: Utility-first CSS framework

## Deployment Strategy

The application uses a comprehensive build strategy optimized for production:

- **Frontend Build**: Vite compiles React application to static assets in `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js` with external dependencies
- **Development**: Hot reload with Vite dev server and TypeScript compilation
- **Production**: Node.js server serving compiled assets and API endpoints
- **Database Management**: Drizzle Kit for schema migrations and database operations

The deployment supports both development (with Replit integration) and production environments with appropriate optimizations for each.

## Changelog
- July 02, 2025. Initial setup
- July 02, 2025. Complete BuildConform landing page implemented with:
  * PrelaunchBar with early access CTA
  * Hero section with email capture and animated blueprint SVG
  * Problem section highlighting compliance bottlenecks
  * Solution section with use-case tabs for different user types
  * Benefits grid showcasing key metrics
  * How It Works 3-step process
  * FAQ section with contact information
  * Product Vision with development timeline
  * Team grid with member profiles
  * Lead-Capture section with form validation
  * Final CTA section
  * Comprehensive footer with social links
  * Full dark mode design with brand colors
  * Responsive layout for all devices
  * Backend API for waitlist management with dual storage

## Recent Changes
- Implemented comprehensive landing page with 12 distinct sections
- Added advanced lead capture with floating labels and toast notifications
- Integrated API endpoints for waitlist management with JSON file backup
- Implemented framer-motion animations throughout
- Added proper SEO meta tags and structured content
- Created modular component architecture for maintainability

## User Preferences

Preferred communication style: Simple, everyday language.
Project focus: AI-powered building compliance automation for construction industry.