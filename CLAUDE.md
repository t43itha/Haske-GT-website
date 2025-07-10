# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Testing
No test framework is currently configured in this project.

## Architecture Overview

This is a React-based luxury travel website built with modern web technologies:

### Tech Stack
- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom luxury brand colors
- **Routing**: React Router DOM
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation with responsive design
│   ├── Footer.tsx      # Site footer
│   ├── ContactForm.tsx # Contact form component
│   └── ...
├── pages/              # Route-based page components
│   ├── Homepage.tsx    # Main landing page with hero section
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component with routing
└── main.tsx            # React app entry point
```

### Design System
The project uses a luxury travel theme with these brand colors:
- **Navy**: `#0A1628` (primary dark)
- **Gold**: `#D4A574` (luxury accent)
- **Cream**: `#FAFAF8` (light background)
- **Charcoal**: `#2C3E50` (text)

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Framer Motion for page transitions and scroll animations
- **Scroll-based Effects**: Parallax and reveal animations on scroll
- **Modern UI**: Glassmorphism effects and gradient backgrounds
- **Contact Integration**: WhatsApp and phone number CTAs

### Component Patterns
- Components use TypeScript for type safety
- Framer Motion for animations with `whileInView` for scroll-triggered effects
- Tailwind CSS classes follow the established design system
- Responsive design using Tailwind's responsive prefixes
- Custom animations defined in `tailwind.config.js`

### Contact Information
- Primary Phone: +44 208 191 1882
- WhatsApp: +44 734 080 1274
- Company: Haske Global Travel (luxury travel services)

### Development Notes
- The project uses Vite's fast refresh for development
- ESLint is configured for code quality
- No testing framework is currently set up
- PostCSS and Autoprefixer are configured for CSS processing