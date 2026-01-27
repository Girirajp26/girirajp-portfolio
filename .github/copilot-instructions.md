# Copilot Instructions for Giriraj Patel Portfolio

## Project Overview
Personal portfolio website built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS 4**. The site showcases professional experience, projects, and personal information with a dark-themed, gradient-rich design aesthetic.

## Architecture

### Next.js App Router Structure
- **Page routes**: Located in `src/app/[route]/page.tsx` (about, contact, experience, projects)
- **Root layout**: `src/app/layout.tsx` - sets up Raleway font and global dark theme
- **Shared components**: `src/components/` - currently contains Navbar only
- **Static assets**: `public/images/` for images

### Styling Approach
- **Tailwind CSS 4** with custom PostCSS plugin (`@tailwindcss/postcss`)
- **Dark theme**: Global background `bg-slate-950` with `text-slate-50`
- **Design patterns**:
  - Gradient overlays: `bg-gradient-to-br from-{color}/80 to-{color}/80`
  - Glass morphism: `backdrop-blur-sm` with semi-transparent backgrounds
  - Border emphasis: 4px borders (`border-4 border-white`) for headings and cards
  - Hover effects: `hover:scale-105` with `transition-transform duration-300`

### Component Patterns

#### Client Components
- **Mark with `'use client'`** when using hooks or browser APIs
- Example: [Navbar.tsx](src/components/Navbar.tsx) uses `useState` for mobile menu toggle

#### Navigation
- Uses simple `<a href>` tags (not Next.js `<Link>`) for navigation
- Navbar is a fixed hamburger menu (top-right) with slide-in drawer
- Mobile-first: transforms from `translate-x-full` to `translate-x-0` when open

#### Page Layout Pattern
```tsx
export default function PageName() {
  return (
    <main className="min-h-screen px-6 py-16">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* Page content */}
      </div>
    </main>
  );
}
```

## Development Workflow

### Commands
- **Dev server**: `npm run dev` (opens at http://localhost:3000)
- **Build**: `npm run build` (production build)
- **Start**: `npm start` (serves production build)
- **Lint**: `npm run lint` (ESLint with Next.js config)

### Path Aliases
- `@/*` maps to `src/*` (configured in [tsconfig.json](tsconfig.json))
- Example: `import Navbar from "@/components/Navbar"`

### TypeScript Configuration
- Strict mode enabled
- Using `react-jsx` transform (not React imports needed)
- Target ES2017 with Next.js bundler module resolution

## Conventions

### Color Scheme
- **Background gradient**: slate-900 → slate-950
- **Accent colors**: cyan/teal, purple/indigo, slate/blue for cards
- **Border colors**: slate-600/700 for containers, white for emphasis
- **Text hierarchy**: white for headings, slate-200/300 for body text

### Typography
- **Font**: Raleway (weights: 300, 400, 500, 600, 700, 800) via `next/font/google`
- **Heading style**: Large (4xl-6xl), bold, with bottom border (`border-b-4 border-white`)
- **Body text**: Small caps tracking (`tracking-widest font-light`) for subtitles

### Responsive Design
- Mobile-first with `md:` breakpoint for desktop
- Grid layouts: `grid-cols-1 md:grid-cols-2` or `md:grid-cols-3`
- Padding adjustments: `text-4xl md:text-6xl`, `p-8 md:p-12`

## Key Files
- [src/app/page.tsx](src/app/page.tsx) - Homepage with 3-card layout (reference for card styling)
- [src/app/about/page.tsx](src/app/about/page.tsx) - Two-column layout with image (reference for content pages)
- [src/components/Navbar.tsx](src/components/Navbar.tsx) - Client component example with state management
- [src/app/globals.css](src/app/globals.css) - Tailwind import and CSS variables

## Notes
- No testing framework currently configured
- ESLint uses Next.js flat config (eslint.config.mjs)
- Images referenced in About page (`/images/your-photo.jpg`) may need to be added to `public/images/`
