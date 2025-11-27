# Version: 2.0.0
# Last Updated: 2025-11-27
# Author: Antigravity
# Purpose: Agent instructions for FLOWST8 website development

# Agent Instructions for Website Development

> This workspace is dedicated to developing the **FLOWST8 OPERATIONS agency website**. All work should focus on creating a modern, high-performing, accessible website that showcases FLOWST8's AI automation services and generates leads.

## Core Principles

### 1. Website Development Focus
You are building a **premium agency website**, not automation workflows. Your expertise should be in:
- Modern HTML, CSS, and JavaScript
- Responsive, mobile-first design
- Component-based architecture
- SEO optimization
- Web accessibility (WCAG 2.1 AA)
- Performance optimization
- User experience design

### 2. Design Excellence
Create designs that **WOW** the user:
- **Premium aesthetics**: Use curated color palettes, modern typography (Inter font), smooth gradients, and micro-animations
- **No placeholders**: Generate real images, write real copy from company context
- **Modern patterns**: Glassmorphism, dark mode support, dynamic hover effects
- **Mobile-first**: Responsive at all breakpoints
- **Accessibility**: Keyboard navigation, screen reader support, proper contrast

### 3. Directive-Driven Development

This workspace follows a **Directive-Orchestration-Execution** pattern adapted for web development:

#### **Directives** (The SOPs)
Located in `directives/`:
- **`company_context.md`**: Source of truth for brand, tone, messaging (consult for ALL content)
- **`website_architecture.md`**: Tech stack, site structure, file organization, technical standards
- **`design_system.md`**: Colors, typography, spacing, components, animations
- **`content_strategy.md`**: Page content, SEO strategy, CTAs, lead generation

**Always consult these directives before building.** They define what and how to build.

#### **Orchestration** (Your Role)
- Read directives to understand requirements
- Plan component architecture
- Execute development using directives as guide
- Self-anneal when issues arise
- Verify quality against directive standards

#### **Execution** (The Code)
- HTML pages in root
- CSS in `src/css/`
- JavaScript in `src/js/`
- Assets in `public/`

### 4. Workflows

Use workflows in `.agent/workflows/` for common tasks:
- `/initialize_project` - Set up complete project structure
- `/create_component` - Build new reusable components
- `/deploy_website` - Deploy to production
- `/optimize_seo` - SEO and performance optimization

## Development Standards

### HTML
- **Semantic HTML5** elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Unique IDs** for all interactive elements (for testing)
- **Accessibility**: Alt text, ARIA labels, proper heading hierarchy
- **SEO**: Unique titles, meta descriptions, Open Graph tags

### CSS
- **Mobile-first** responsive design (min-width media queries)
- **CSS Custom Properties** for theming (defined in `design_system.md`)
- **BEM naming convention** (`.block__element--modifier`)
- **Design system compliance**: Use variables, no magic numbers
- **Performance**: Avoid complex selectors, minimize reflows

### JavaScript
- **ES6+ syntax** (async/await, arrow functions, modules)
- **Progressive enhancement**: Works without JS, enhanced with it
- **Event delegation** where appropriate
- **No global variables**: Use modules or IIFE
- **Commented logic**: JSDoc for complex functions

### Performance Targets
- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse SEO**: 100
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s

### Browser Support
- **Modern browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari 14+, Chrome Android
- **Graceful degradation**: Core content accessible in older browsers

## Content Guidelines

### Brand Voice (from `company_context.md`)
- **Clear, concise, direct**
- **Helpful and structured**
- **Friendly but professional**
- **Confident, practical, solution-oriented**
- **No jargon or hype**

### SEO Best Practices
Every page must have:
- Unique `<title>` (50-60 characters)
- Meta description (150-160 characters)
- One H1 (page title)
- Proper heading hierarchy (H2, H3)
- Descriptive image alt text
- Internal links to related pages

### Lead Generation
- **Strategic CTAs**: "Schedule Free Audit", "Get Started", "Contact Us"
- **Minimal friction**: Simple forms (name, email, service interest, message)
- **Clear value**: Explain benefit before asking for information

## File Organization

```
AG - FLOWST8 Website/
├── index.html              # Homepage
├── services.html           # Services overview
├── training.html          # AI Training service
├── consultancy.html       # Automation Consulting service
├── development.html       # Custom Development service
├── about.html             # About FLOWST8
├── contact.html           # Contact form
├── src/
│   ├── css/
│   │   ├── base.css           # Reset, variables, base styles
│   │   ├── components.css     # Reusable components
│   │   ├── layout.css         # Layout utilities
│   │   └── pages.css          # Page-specific styles
│   └── js/
│       ├── main.js            # Core functionality
│       ├── navigation.js      # Nav interactions
│       └── forms.js           # Form handling
├── public/
│   ├── images/            # Optimized images
│   ├── icons/             # SVG icons
│   └── fonts/             # Web fonts (if self-hosted)
├── directives/            # Development directives (READ THESE)
├── .agent/workflows/      # Development workflows
└── .reference/           
    └── services/          # Archived service context (for content reference)
```

## Development Workflow

### 1. Planning
- Review relevant directives
- Understand component requirements
- Check design system for existing patterns
- Plan accessibility approach

### 2. Implementation
- Write semantic HTML
- Style using design system variables
- Add progressive JavaScript enhancement
- Test at multiple breakpoints

### 3. Verification
- Visual QA across browsers
- Accessibility audit (keyboard, screen reader)
- Performance check (Lighthouse)
- SEO validation
- Mobile device testing

### 4. Self-Annealing
When issues arise:
1. **Analyze**: Read error messages, check browser console
2. **Fix**: Patch code, update styles
3. **Test**: Verify fix works across browsers
4. **Document**: Update directives if pattern should be standard

## Safety & Best Practices

### Data Safety
- Never overwrite user content without confirmation
- Create backups before major changes
- Use version control (Git)

### Experimentation
- For major changes, create `[name]_experiment.html` or `[name]_experiment.css`
- Test thoroughly before replacing core files
- Self-anneal in experimental files first

### Confirmation
- Ask before making breaking changes
- Confirm design decisions if ambiguous
- Verify deployment settings before publishing

## Reference Files

Service context preserved in `.reference/services/`:
- `training.md` - AI Training details
- `consultancy.md` - Automation Consulting details
- `development.md` - Custom Development details

**Use these for writing accurate service descriptions and page content.**

## Tools & Technologies

### Required
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Inter, JetBrains Mono)
- Browser DevTools

### Optional
- Live Server (development)
- Lighthouse (auditing)
- axe DevTools (accessibility)
- Image optimization tools

### Avoid Unless Requested
- CSS frameworks (Tailwind, Bootstrap)
- JavaScript frameworks (React, Vue)
- Build tools (Webpack, Vite) - unless project grows complex

## Communication

### During Development
- Explain design decisions
- Highlight accessibility features
- Note performance optimizations
- Call out SEO implementations

### Asking for Clarification
If directives are unclear:
1. Check all relevant directives first
2. Review company context
3. Make reasonable defaults (modern best practices)
4. Ask user for clarification on critical decisions only

## Success Criteria

A successful FLOWST8 website:
- ✅ **Visually stunning**: Premium, modern design
- ✅ **Fully responsive**: Perfect on all devices
- ✅ **Accessible**: WCAG 2.1 AA compliant
- ✅ **Performant**: Lighthouse 90+ scores
- ✅ **SEO optimized**: Proper meta tags, structure
- ✅ **Brand accurate**: Reflects company context
- ✅ **Lead generating**: Clear CTAs, functional forms
- ✅ **Maintainable**: Clean code, documented components

---

**Remember**: You're not building automation workflows anymore. You're crafting a premium agency website that represents FLOWST8's expertise and generates business. Make it exceptional.
