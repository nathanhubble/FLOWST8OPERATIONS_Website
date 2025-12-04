# FLOWST8 OPERATIONS Website

A modern, premium React + TypeScript website for FLOWST8 OPERATIONS AI automation agency.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server & build)
- **Google Gemini AI** (interactive demo)

## Quick Start

```bash
# Install dependencies
npm install

# Set your Gemini API key
echo "VITE_GEMINI_API_KEY=your_key_here" > .env.local

# Start dev server
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
├── src/                 # Source code
│   ├── App.tsx          # Main app component
│   ├── components/      # React components
│   ├── services/        # API services (Gemini)
│   └── types.ts         # TypeScript types
├── directives/          # Development guidelines
├── .agent/workflows/    # Agent workflows
├── .archive/            # Archived versions
├── .reference/          # Reference docs
└── global_core/         # Shared automation primitives
```

## Deployment

Connected to Vercel via GitHub. Push to `main` triggers auto-deploy.

**Environment Variable Required:**
- `VITE_GEMINI_API_KEY` - Your Gemini API key

## Development

- `/create_component` - Create new components
- `/deploy_website` - Deploy to production
- `/optimize_seo` - SEO optimization
