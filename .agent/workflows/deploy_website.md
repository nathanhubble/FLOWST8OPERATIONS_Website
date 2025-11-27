---
description: Deploy FLOWST8 website to production
---

# Deploy Website Workflow

This workflow guides the deployment process for the FLOWST8 website, ensuring all assets are optimized and tested before going live.

## Prerequisites
- Website development complete
- All pages tested locally
- Content finalized
- Hosting platform selected (GitHub Pages, Netlify, Vercel, etc.)

## Steps

### 1. Pre-Deployment Checklist
Verify all items before proceeding:
- [ ] All pages load without errors
- [ ] All links work (internal and external)
- [ ] All images optimized and loading
- [ ] Forms submit correctly
- [ ] Mobile responsive at all breakpoints
- [ ] Cross-browser tested (Chrome, Firefox, Safari)
- [ ] SEO optimization complete
- [ ] Accessibility audit passed

### 2. Optimize Assets

#### Images
```bash
# Install image optimization tool if needed
npm install -g @squoosh/cli

# Optimize images
for img in public/images/*.{jpg,png}; do
  squoosh-cli --webp auto "$img"
done
```

#### CSS
- Remove unused styles
- Combine into single file if needed
- Minify for production
```bash
# Using online tool or:
npx clean-css-cli -o src/css/styles.min.css src/css/*.css
```

#### JavaScript
- Remove console.log statements
- Minify for production
```bash
npx terser src/js/*.js -o src/js/bundle.min.js --compress --mangle
```

### 3. Update File References
If minified, update HTML to reference:
- `styles.min.css` instead of individual CSS files
- `bundle.min.js` instead of individual JS files

### 4. Final Testing
```bash
# Start local server one last time
npx -y live-server --port=3000
```

Test:
- All functionality still works
- No console errors
- Performance is good (run Lighthouse)

### 5. Deploy to Platform

#### Option A: GitHub Pages
```bash
# Initialize git if not already
git init
git add .
git commit -m "Production ready"

# Create gh-pages branch
git checkout -b gh-pages
git push origin gh-pages

# Enable in GitHub repo settings
```

#### Option B: Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

#### Option C: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

#### Option D: Manual Upload
- Export all files
- Upload via FTP/SFTP to hosting
- Verify file structure intact

### 6. Post-Deployment Verification
Test live site:
- [ ] All pages accessible
- [ ] SSL/HTTPS working
- [ ] Forms submit (test with real submission)
- [ ] Analytics tracking (if set up)
- [ ] Performance (run Lighthouse on live URL)
- [ ] Mobile devices (test on actual phones/tablets)

### 7. Set Up Monitoring
- Google Search Console
- Google Analytics (if applicable)
- Uptime monitoring
- Form submission notifications

### 8. Document Deployment
Create `DEPLOYMENT.md`:
```markdown
# Deployment Information

**Live URL**: https://flowst8.com (or actual URL)
**Platform**: [Platform name]
**Last Deployed**: [Date]
**Deployed By**: [Name]

## Deployment Process
[Steps taken]

## Credentials
[Where credentials are stored]

## Rollback Process
[How to revert if needed]
```

## Success Criteria
- ✅ Website accessible at production URL
- ✅ All pages and features work
- ✅ HTTPS enabled
- ✅ Performance meets standards (Lighthouse 90+)
- ✅ Forms functional
- ✅ No console errors
- ✅ Mobile responsive

## Troubleshooting

### Issue: Images not loading
- Check file paths (case-sensitive on some servers)
- Verify images uploaded to correct directory
- Check file permissions

### Issue: CSS/JS not applied
- Verify file paths in HTML
- Check MIME types on server
- Clear browser cache

### Issue: Forms not submitting
- Check form action URL
- Verify backend/service integration
- Test with different browsers

## Maintenance
After deployment:
- Regular content updates
- Performance monitoring
- Security updates
- Backup schedule
