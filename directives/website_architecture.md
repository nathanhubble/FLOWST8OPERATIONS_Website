# Version: 1.0.0
# Last Updated: 2025-11-27
# Author: Antigravity

# Website Architecture Directive

## Goal
Define the technical architecture, structure, and development standards for the FLOWST8 OPERATIONS website.

## Tech Stack

### Core Technologies
- **HTML5**: Semantic markup for structure
- **CSS3**: Modern styling with custom properties (CSS variables)
- **Vanilla JavaScript**: Interactive functionality, no framework dependencies initially
- **Progressive Enhancement**: Works without JavaScript, enhanced with it

### Development Tools
- **Live Server**: Local development (VS Code extension or `npx live-server`)
- **Version Control**: Git for source control
- **Asset Optimization**: Manual optimization initially, can add build tools later

## Site Structure

### Pages
```
/
├── index.html              # Homepage
├── services.html           # Services overview
├── training.html          # AI Training & Literacy
├── consultancy.html       # Automation Audits & Consultancy
├── development.html       # Custom Development
├── about.html             # About FLOWST8
└── contact.html           # Contact & Lead Gen
```

### Navigation Hierarchy
1. **Primary Nav**: Home, Services (dropdown: Training, Consultancy, Development), About, Contact
2. **Footer Nav**: All primary links + Privacy, Terms (if needed)
3. **CTA Buttons**: Persistent in header and strategic page locations

## File Organization

```
AG - FLOWST8 Website/
├── index.html
├── services.html
├── training.html
├── consultancy.html
├── development.html
├── about.html
├── contact.html
├── src/
│   ├── css/
│   │   ├── base.css           # Reset, base styles, CSS variables
│   │   ├── components.css     # Reusable component styles
│   │   ├── layout.css         # Layout utilities
│   │   └── pages.css          # Page-specific styles
│   └── js/
│       ├── main.js            # Core functionality
│       ├── navigation.js      # Nav interactions
│       └── forms.js           # Form handling
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── directives/                # Development directives
├── .agent/workflows/          # Development workflows
└── .reference/                # Archived context
```

## Component Architecture

### Reusable Components
Each component should be:
- **Self-contained**: All HTML, CSS, JS for one component
- **Documented**: Comments explaining usage
- **Accessible**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design

#### Core Components
1. **Header/Navigation**
   - Logo
   - Primary navigation
   - Mobile menu toggle
   - CTA button

2. **Hero Section**
   - Headline
   - Subheadline
   - Primary CTA
   - Visual element (image/illustration)

3. **Service Card**
   - Icon
   - Title
   - Description
   - Link/CTA

4. **Testimonial**
   - Quote
   - Author name
   - Author role/company
   - Optional photo

5. **Contact Form**
   - Name, Email, Company, Message fields
   - Submit button
   - Validation
   - Success/error states

6. **Footer**
   - Navigation links
   - Contact information
   - Social links
   - Copyright

## Technical Standards

### HTML
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Unique IDs for all interactive elements (for testing)
- Alt text for all images
- ARIA labels where needed

### CSS
- Mobile-first approach (min-width media queries)
- CSS custom properties for theming
- BEM naming convention for classes (`.block__element--modifier`)
- Avoid `!important` unless absolutely necessary
- Comments for complex selectors

### JavaScript
- ES6+ syntax
- Async/await for asynchronous operations
- Event delegation where appropriate
- No global variables (use modules or IIFE)
- Comments for complex logic

### Performance
- Optimize images (WebP format, appropriate sizes)
- Lazy load images below the fold
- Minify CSS/JS for production
- Use system fonts or optimized web fonts
- Target Lighthouse score: 90+ on all metrics

### Accessibility
- Keyboard navigation support
- Focus indicators
- Screen reader friendly
- Color contrast ratios meet WCAG AA
- Skip links for main content

### SEO
- Unique `<title>` for each page (50-60 characters)
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Structured data (JSON-LD) where applicable
- Clean, descriptive URLs
- H1 hierarchy (one per page)

## Development Workflow

1. **Design System First**: Establish colors, typography, spacing before building pages
2. **Component Development**: Build and test components in isolation
3. **Page Assembly**: Compose pages from tested components
4. **Content Integration**: Add real content from `company_context.md` and service references
5. **Cross-browser Testing**: Test in Chrome, Firefox, Safari, Edge
6. **Mobile Testing**: Test on actual devices or browser dev tools
7. **Accessibility Audit**: Run automated tools (Lighthouse, axe) and manual testing
8. **Performance Optimization**: Optimize assets and code

## Browser Support
- **Modern Browsers**: Last 2 versions of Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari 14+, Chrome Android
- **Graceful Degradation**: Core content accessible even in older browsers

## Edge Cases

### No JavaScript
- Forms should use native HTML5 validation
- Navigation should work with anchor links
- Core content accessible

### Slow Connection
- Progressive loading
- Optimized images
- Critical CSS inline (if needed)

### Accessibility Tools
- Works with screen readers (NVDA, JAWS, VoiceOver)
- High contrast mode support
- Keyboard-only navigation possible

## Outputs
A fully functional, accessible, performant website that:
- Accurately represents FLOWST8 OPERATIONS brand and services
- Generates qualified leads through strategic CTAs
- Provides excellent user experience across all devices
- Ranks well in search engines
- Can be easily maintained and updated
