# Project Portfolio

A modern, dark-themed portfolio website for a Project Manager & AI Consultant. Built with Vite + React + TypeScript.

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** CSS (custom design system, no framework)
- **Fonts:** Space Grotesk + DM Sans (Google Fonts CDN)
- **Deployment:** Cloudflare Pages

## Getting Started

```bash
npm install
npm run dev
```

## Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create**
3. Select **Pages** > **Connect to Git**
4. Select your GitHub repository
5. Configure build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `20`
6. Click **Save and Deploy**

Every push to `main` triggers an automatic deployment. Pull requests get preview URLs.

### Option 2: Direct Upload (Wrangler CLI)

```bash
npm run build
npx wrangler pages deploy dist --project-name=your-project-name
```

### Custom Domain

In your Cloudflare Pages project > **Custom domains** > **Set up a custom domain** and follow DNS instructions.

## Customizing Content

All placeholder content is marked with `/* PLACEHOLDER */` comments. Key files:

| What | File |
|------|------|
| Name, title, tagline | `src/components/Hero.tsx` |
| Bio & expertise | `src/components/About.tsx` |
| Project entries | `src/components/Projects.tsx` |
| Skills & tools | `src/components/Skills.tsx` |
| Email & LinkedIn | `src/components/Contact.tsx` |
| Nav logo | `src/components/Navbar.tsx` |
| Page title & meta | `index.html` |

## Project Structure

```
src/
├── components/       # All section components with co-located CSS
├── hooks/useReveal.ts  # Intersection Observer scroll animations
├── App.tsx
├── index.css         # Global styles & design tokens
└── main.tsx
```

## License

MIT
