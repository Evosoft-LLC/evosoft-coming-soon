# Evosoft LLC Coming Soon Website

A modern, responsive "Coming Soon" landing page for Evosoft LLC Software Engineering Consulting. Built with Next.js 15, React 19, TypeScript, and CSS Modules.

## 🚀 Features

- **Mobile-First Design**: Responsive layout centered on all devices including ultrawide monitors
- **Technical Aesthetic**: Matrix-style C# code rain, circuit patterns, and animated glow effects
- **Brand Consistency**: Uses Evosoft brand colors (Orange #FB4E14, Forest Green #228B22)
- **Performance Optimized**: 
  - Static export for fast loading
  - Memoized components to prevent unnecessary re-renders
  - Seeded random for SSR/client hydration consistency
- **Accessibility**: 
  - ARIA labels and roles
  - Supports `prefers-reduced-motion`
  - Proper focus indicators
  - Semantic HTML structure
- **SEO Ready**: Meta tags, Open Graph, and semantic HTML

## 📁 Project Structure

```
site/
├── app/
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main Coming Soon page component
│   ├── page.module.css   # Component styles (CSS Modules)
│   ├── globals.css       # Global styles and CSS variables
│   └── icon.svg          # Favicon
├── public/
│   ├── favicon.svg       # Browser favicon
│   └── robots.txt        # Search engine crawling rules
├── docs/
│   ├── README.md         # This file
│   ├── DEPLOYMENT.md     # Deployment instructions
│   └── DOMAIN-SETUP.md   # Domain configuration guide
├── package.json          # Dependencies and scripts
├── next.config.ts        # Next.js configuration (static export)
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint flat config
└── .gitignore            # Git ignore rules
```

## 🛠️ Technology Stack

- **Framework**: Next.js 15.1 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5.7
- **Styling**: CSS Modules with CSS Variables
- **Fonts**: Instrument Sans + JetBrains Mono (Google Fonts)
- **Linting**: ESLint 9 (flat config)
- **Build Output**: Static HTML (perfect for Vercel/Netlify)

## 💻 Local Development

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Getting Started

1. **Navigate to the site directory**:
   ```bash
   cd site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build the production static site |
| `npm run start` | Start a local production server |
| `npm run lint` | Run ESLint for code quality |

## 🎨 Customization

### Brand Colors

Edit `app/globals.css` to change the brand colors:

```css
:root {
  --primary-orange: #FB4E14;  /* Action color */
  --forest-green: #228B22;    /* Secondary accent */
  --white: #ffffff;           /* Primary text */
  --black: #000000;           /* Base */
}
```

### Content

Edit `app/page.tsx` to modify:
- Title and subtitle text
- Expertise areas (Desktop, Mobile, Enterprise, Systems)
- Company name

### Animations

All animations can be adjusted in `app/page.module.css`. Key animations:
- `matrixFall` - Code rain speed (20s default)
- `float1`, `float2` - Glow orb movement
- `typing` - Typing effect speed
- `logoPulse` - Logo glow effect

## 📱 Responsive Design

The site uses a centered layout that works on all screen sizes:

| Breakpoint | Target |
|------------|--------|
| Default | Mobile devices |
| `768px` | Tablets |
| `1200px` | Max content width (looks great on ultrawide) |

## ♿ Accessibility

The site includes:
- `prefers-reduced-motion` support (disables animations)
- ARIA labels on interactive elements
- Semantic HTML (`<main>`, `<header>`, `<section>`, `<footer>`)
- Proper heading hierarchy
- Focus indicators for keyboard navigation
- Screen reader friendly (aria-hidden on decorative elements)

## 🔧 Code Quality

Best practices implemented:
- **React.memo** on static components
- **useMemo** for expensive computations
- **Seeded random** to prevent hydration mismatches
- **TypeScript** strict mode
- **ESLint** with Next.js recommended rules
- **CSS Modules** for scoped styling

## 📦 Production Build

Generate the static export:

```bash
npm run build
```

This creates an `out/` directory with static HTML, CSS, and JavaScript files.

## 🌐 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for:
- Vercel (recommended)
- Netlify

## 🔗 Domain Setup

See [DOMAIN-SETUP.md](./DOMAIN-SETUP.md) for configuring your domain from Square Domains.

## 📄 License

© 2025 Evosoft LLC. All rights reserved.
