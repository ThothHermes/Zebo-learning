# Zebo-Learning Project Documentation

## Project Overview
Zebo-Learning is a Next.js-based web application inspired by [simpleshow.com/de/classroom/](https://simpleshow.com/de/classroom/). The platform aims to provide tools for creating and sharing educational videos to enhance learning experiences.

## Technology Stack
- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Custom CSS (originally attempted with Tailwind CSS)

## Project Structure

```
zebo-learning/
├── node_modules/
├── public/
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with header and footer
│   │   └── page.tsx      # Homepage
│   ├── components/       # Directory for React components (currently empty)
│   └── styles/
│       ├── globals.css   # Original CSS file with Tailwind directives (not in use)
│       └── main.css      # Custom CSS used in the project
├── .next/               # Next.js build directory (generated)
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.js   # Tailwind CSS configuration (not in use)
├── tsconfig.json        # TypeScript configuration
└── next-env.d.ts        # TypeScript declarations for Next.js
```

## Application Structure

### Root Layout (`layout.tsx`)
The root layout provides the common structure for all pages, including:
- HTML document structure
- Header with navigation
- Footer with copyright information
- Metadata for SEO

### Homepage (`page.tsx`)
The homepage consists of:
- Hero section with main heading and call-to-action
- Features section displaying three key benefits
- Call-to-action section at the bottom

### Styling
The project initially attempted to use Tailwind CSS but encountered configuration issues. Currently, it uses a custom CSS file (`main.css`) with:
- CSS custom properties (variables) for colors
- Basic styling for layout elements
- Responsive design with media queries
- Component-specific styles (hero, features, buttons, etc.)

## Development Challenges and Solutions

### Tailwind CSS Integration Issue
The project initially attempted to use Tailwind CSS but encountered an "Unknown at rule @tailwind" error. This was likely due to incomplete installation or configuration of Tailwind CSS.

**Solution**: We switched to a custom CSS approach without Tailwind directives. This provides a clean, maintainable styling solution while avoiding the Tailwind configuration issues.

### Next.js App Router
The project uses Next.js's modern App Router architecture (introduced in Next.js 13+) rather than the older Pages Router. This provides:
- Enhanced routing capabilities
- Improved performance features
- Better code organization with nested layouts

## Future Development Directions

### Styling Improvements
- Implement a complete design system
- Consider reintegrating Tailwind CSS with proper configuration
- Enhance responsive design for all device sizes

### Feature Additions
- Authentication system for users
- Video creation and editing tools
- Dashboard for managing created videos
- User profiles and sharing capabilities
- Search functionality

### Component Development
- Break down the homepage into reusable components
- Create a proper navigation component with active states
- Develop form components for user interaction
- Build a video player component

### Content Pages
- Add "Features" page with detailed information
- Create "Pricing" page with subscription options
- Develop "Resources" section with tutorials
- Build "Contact" page with form

## Running the Project
1. Install dependencies: `npm install`
2. Run development server: `npm run dev` or `npx next dev`
3. Access the site at: `http://localhost:3000`

## Notes for Continuing Development
- The project structure follows Next.js 13+ App Router conventions
- Components should be added to the `src/components` directory
- Additional pages should be added as directories under `src/app`
- All styling is currently in `main.css`, consider modularizing as the project grows 