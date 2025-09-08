# replit.md

## Overview

This is a modern full-stack portfolio website for Omm Prakash Nayak, a developer specializing in web technologies and 3D design. The application features a cinematic, immersive design with a dark theme, interactive 3D elements, and smooth animations throughout. The portfolio showcases sections for hero content, about information, testimonials, projects, gallery, and contact functionality.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom dark theme configuration and CSS variables for consistent theming
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, pre-built components
- **Animations**: Framer Motion for sophisticated animations and transitions throughout the portfolio
- **3D Integration**: Embedded Spline 3D models via iframe for interactive hero section
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js for the web server
- **Language**: TypeScript throughout for consistency and type safety
- **API Design**: RESTful endpoints with structured error handling and validation
- **Validation**: Zod for runtime type checking and schema validation
- **Development**: Hot module replacement and development middleware via Vite integration

### Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Fallback Storage**: In-memory storage implementation for development and testing

### Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both database and in-memory implementations

### Development and Build Process
- **Package Management**: npm with lockfile for consistent dependencies
- **TypeScript Configuration**: Shared tsconfig across client, server, and shared modules
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Development Server**: Integrated Vite dev server with Express for full-stack development
- **Production Build**: Optimized client bundle with server-side rendering support

## External Dependencies

### Database and Infrastructure
- **Neon Database**: Serverless PostgreSQL database for production data storage
- **Drizzle ORM**: Type-safe database toolkit for PostgreSQL interactions

### UI and Styling
- **Radix UI**: Comprehensive component primitives for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom portfolio theme
- **Framer Motion**: Animation library for smooth transitions and interactive elements
- **Phosphor Icons**: Icon library for consistent iconography throughout the application

### 3D and Interactive Elements
- **Spline**: 3D design tool integration for interactive hero section robot model
- **Embla Carousel**: Touch-friendly carousel implementation for testimonials and gallery

### Development Tools
- **Replit Integration**: Development environment specific plugins and error handling
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **ESBuild**: Fast JavaScript bundler for production builds

### Form and Data Handling
- **React Hook Form**: Form state management with validation
- **TanStack Query**: Server state management and caching for API interactions
- **Date-fns**: Date manipulation utilities for application features

### Fonts and Typography
- **Google Fonts**: Inter font family for consistent typography
- **Custom Font Loading**: Optimized font loading with preconnect and display swap