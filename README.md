# FLOWST8 OPERATIONS - Landing Page

> Modern landing page for FLOWST8 OPERATIONS - AI Training, Strategic Consultancy & Custom Automation Development

**Live Site:** [www.flowst8operations.com](http://www.flowst8operations.com)

---

## Tech Stack

- **React 19** - Modern UI framework
- **Vite 6.2** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** (CDN) - Utility-first styling
- **Gemini AI** - Workflow idea generator
- **Cal.com** - Discovery call booking

---

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment:**
   - Copy `.env.example` to `.env`
   - Add your API keys:
     - `API_KEY` - Gemini API key
     - `CAL_API_KEY` - Cal.com API key (optional)

3. **Run development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Project Structure

```
├── components/          # React components
│   ├── BookingModal.tsx
│   ├── Button.tsx
│   ├── Logo.tsx
│   ├── Marquee.tsx
│   └── WorkflowIdeator.tsx
├── services/           # API integrations
│   └── geminiService.ts
├── directives/         # Development guidelines
├── public/            # Static assets
├── App.tsx            # Main application
├── constants.ts       # Content & configuration
└── types.ts          # TypeScript definitions
```

---

## Key Features

✨ **Hero Section** with premium 3D button design  
🎨 **Marquee Ticker** showcasing integrated tools  
🤖 **AI Workflow Generator** (Gemini-powered)  
📅 **Cal.com Integration** for discovery calls  
📱 **Fully Responsive** mobile-first design  
♿ **Accessible** WCAG 2.1 AA compliant

---

## Content Management

All website copy is centralized in `constants.ts`:
- Benefits
- Services
- Process steps
- Workflow examples
- FAQs

Update content there, and it automatically reflects across the site.

---

## Deployment

**GitHub:** https://github.com/nathanhubble/FLOWST8OPERATIONS_Website

**Live Site:** Deployed at www.flowst8operations.com

To update:
```bash
git add .
git commit -m "feat: your changes"
git push origin main
```

---

## Environment Variables

Never commit `.env` to version control. Required variables:

- `API_KEY` - Gemini API key for workflow generator
- `CAL_API_KEY` - Cal.com API (optional)
- `CAL_USERNAME` - Cal.com username
- `CAL_EVENT_TYPE` - Cal.com event type slug
- `CAL_BOOKING_LINK` - Full Cal.com booking URL

---

## Support

For questions about this codebase, contact: nathanhubble.nh@gmail.com

---

**Built with ❤️ for FLOWST8 OPERATIONS**
