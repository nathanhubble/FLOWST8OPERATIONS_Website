---
description: Optimize website for search engines and performance
version: 1.1.0
last_updated: 2025-12-01
concurrency_safe: true
auto_run_safe: false
performance_targets: "Lighthouse 90+ Performance, 95+ Accessibility, 100 SEO"
---

# SEO Optimization Workflow

**Version:** 1.1.0  
**Purpose:** Ensure the FLOWST8 website follows SEO best practices for maximum visibility and performance.  
**Inputs:** Complete website structure, content-filled pages, `content_strategy.md`  
**Outputs:** Optimized meta tags, structured data, sitemap, robots.txt, accessibility improvements, performance optimizations  
**Concurrency Notes:** Safe to run in parallel with component creation. Independent optimization checks.  
**Performance Targets:** Lighthouse scores - Performance: 90+, Accessibility: 95+, SEO: 100

This workflow ensures the FLOWST8 website follows SEO best practices for maximum visibility and performance.

## Prerequisites
- Website structure complete
- Content added to all pages
- `content_strategy.md` reviewed

## DOE Framework Integration

### Directives to Consult
Before optimization, review these directives:
- **`directives/content_strategy.md`**: Target keywords, meta tag templates, CTA requirements
- **`directives/website_architecture.md`**: Performance baselines, technical SEO constraints

### Orchestration
This workflow orchestrates SEO optimization:
1. Audit current state against targets
2. Apply on-page optimizations (tags, structure, schema)
3. Optimize technical assets (images, minification)
4. Validate against performance targets
5. Generate submission artifacts (sitemap, robots.txt)

### Execution
Execute optimizations below. If scores regress or targets aren't met, trigger self-annealing.

## Steps

### 1. Page Titles & Meta Descriptions

Verify each page has unique, optimized meta tags:

**Homepage** (`index.html`):
```html
<title>FLOWST8 OPERATIONS | AI Automation Agency</title>
<meta name="description" content="AI automation agency that designs, builds, and integrates automated workflows for businesses. Reduce manual work and increase efficiency.">
```

**Services** (`services.html`):
```html
<title>AI Automation Services | FLOWST8 OPERATIONS</title>
<meta name="description" content="Training, consulting, and custom development services for AI automation and workflow optimization. Full-service automation partner.">
```

**Training** (`training.html`):
```html
<title>AI Training & Literacy Programs | FLOWST8 OPERATIONS</title>
<meta name="description" content="Practical AI training for teams. Learn ChatGPT, automation workflows, and productivity tools that deliver real results.">
```

**Consultancy** (`consultancy.html`):
```html
<title>Automation Consulting & Audits | FLOWST8 OPERATIONS</title>
<meta name="description" content="Expert automation consulting to identify opportunities, recommend tools, and design workflows that transform operations.">
```

**Development** (`development.html`):
```html
<title>Custom AI Automation Development | FLOWST8 OPERATIONS</title>
<meta name="description" content="Custom workflow development, AI agents, and automation integrations built to your exact business needs.">
```

**About** (`about.html`):
```html
<title>About FLOWST8 OPERATIONS | AI Automation Agency</title>
<meta name="description" content="Meet FLOWST8 OPERATIONS, your AI automation partner delivering practical solutions and measurable results.">
```

**Contact** (`contact.html`):
```html
<title>Contact FLOWST8 | Schedule Free Consultation</title>
<meta name="description" content="Get in touch with FLOWST8 OPERATIONS. Schedule a free consultation to discuss your automation needs.">
```

### 2. Open Graph Tags

Add to all pages for social sharing:
```html
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Page Description]">
<meta property="og:type" content="website">
<meta property="og:url" content="https://flowst8.com/[page]">
<meta property="og:image" content="https://flowst8.com/public/images/og-image.jpg">
```

### 3. Structured Data

Add JSON-LD schema to homepage:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FLOWST8 OPERATIONS",
  "description": "AI automation agency that designs, builds, and integrates automated workflows",
  "url": "https://flowst8.com",
  "logo": "https://flowst8.com/public/images/logo.png",
  "sameAs": [
    "https://linkedin.com/company/flowst8",
    "https://twitter.com/flowst8"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "email": "contact@flowst8.com"
  }
}
</script>
```

### 4. Heading Hierarchy

Verify each page:
- Has exactly **one H1** (main page title)
- Uses H2 for major sections
- Uses H3 for subsections
- No skipped heading levels (H1 → H3)

### 5. Image Optimization

For all images:
```html
<!-- Always include alt text -->
<img src="public/images/hero.jpg" 
     alt="Automated workflow diagram showing process optimization"
     width="1200" 
     height="600"
     loading="lazy">
```

**Checklist**:
- [ ] All images have descriptive alt text
- [ ] Hero images loaded eagerly (no lazy load)
- [ ] Below-fold images lazy loaded
- [ ] Width and height attributes set (prevent layout shift)
- [ ] Images optimized (WebP format when possible)

### 6. Internal Linking

Create logical link structure:
- Homepage links to all service pages
- Service pages link to each other
- All pages link to contact
- Footer has sitemap links

Example:
```html
<!-- From homepage to services -->
<a href="training.html">Learn about our AI Training programs →</a>

<!-- Cross-linking services -->
<p>Also explore our <a href="consultancy.html">Automation Consulting</a> services.</p>
```

### 7. Performance Optimization

#### Lighthouse Audit
```bash
# Run Lighthouse in Chrome DevTools
# Or use CLI:
npm install -g lighthouse
lighthouse https://flowst8.com --view
```

**Target Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

#### Optimization Checklist
- [ ] Minify CSS and JavaScript
- [ ] Compress images
- [ ] Enable browser caching
- [ ] Use CDN for static assets (optional)
- [ ] Inline critical CSS (if needed)
- [ ] Defer non-critical JavaScript
- [ ] Use system fonts or optimize web fonts

### 8. Mobile Optimization

Test on actual devices or DevTools:
- [ ] Mobile viewport meta tag present:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```
- [ ] Touch targets at least 44×44px
- [ ] Text readable without zooming (16px minimum)
- [ ] No horizontal scrolling
- [ ] Fast tap response (no 300ms delay)

### 9. Robots.txt

Create `robots.txt` in root:
```
User-agent: *
Allow: /

Sitemap: https://flowst8.com/sitemap.xml
```

### 10. Sitemap

Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://flowst8.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://flowst8.com/services.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://flowst8.com/training.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://flowst8.com/consultancy.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://flowst8.com/development.html</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://flowst8.com/about.html</loc>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://flowst8.com/contact.html</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

### 11. Accessibility Audit

Use automated tools:
```bash
# Install axe CLI
npm install -g @axe-core/cli

# Run audit
axe https://flowst8.com
```

**Manual Checks**:
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Screen reader announces correctly
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Skip to main content link
- [ ] Form labels associated with inputs

### 12. Set Up Google Search Console

Post-deployment:
1. Verify site ownership
2. Submit sitemap
3. Monitor indexing status
4. Fix any crawl errors
5. Review search performance

### 13. Content Quality Check

For each page:
- [ ] **Clear value proposition** above the fold
- [ ] **Scannable content** (headings, bullets, short paragraphs)
- [ ] **Strong CTAs** (specific, action-oriented)
- [ ] **No keyword stuffing** (natural language)
- [ ] **Unique content** (not duplicated across pages)
- [ ] **Proper spelling and grammar**

## Success Criteria
- ✅ All pages have unique titles and meta descriptions
- ✅ Lighthouse SEO score: 100
- ✅ Lighthouse Performance score: 90+
- ✅ Lighthouse Accessibility score: 95+
- ✅ All images have alt text
- ✅ Structured data validated
- ✅ Sitemap submitted
- ✅ Mobile-friendly test passed
- ✅ No broken links

## Self-Annealing

When optimization targets aren't met:

### Score Regression
If optimizations lower a score:
1. **Isolate** - Revert last change to find the cause
2. **Analyze** - Why did it hurt performance? (e.g., heavy library added)
3. **Alternative** - Find lighter way to achieve same goal
4. **Retry** - Apply optimization and re-measure

### Missing Tags Detected
If audit shows missing meta tags:
1. **Check Template** - Is the page missing the header partial?
2. **Fix content** - Add missing content to page source
3. **Verify** - Re-run audit on specific page

### Structured Data Errors
If Google Rich Results Test fails:
1. **Validate** - specific JSON-LD syntax error
2. **Consult** - Check schema.org documentation
3. **Fix** - Correct syntax and re-validate

## Tools

**SEO**:
- Google Search Console
- Lighthouse (Chrome DevTools)
- screaming frog (free tier)

**Performance**:
- PageSpeed Insights
- WebPageTest
- Lighthouse

**Accessibility**:
- axe DevTools
- WAVE
- Lighthouse

## Monitoring

Post-launch monitoring:
- Weekly: Check Google Search Console for errors
- Monthly: Run Lighthouse audit
- Quarterly: Full SEO audit
- Ongoing: Monitor rankings for target keywords
