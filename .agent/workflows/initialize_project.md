---
description: Initialize FLOWST8 website project structure and development environment
version: 1.1.0
last_updated: 2025-12-01
concurrency_safe: true
auto_run_safe: false
has_turbo_commands: true
---

# Initialize Project Workflow

**Version:** 1.1.0  
**Purpose:** Set up the complete FLOWST8 website development environment with all necessary files and structure.  
**Inputs:** Workspace directory, directives (architecture, design system, content strategy)  
**Outputs:** Complete directory structure, CSS files with design system, HTML pages, JavaScript files, dev server running  
**Concurrency Notes:** Safe to run once per new project. Contains `// turbo` annotation for auto-running dev server command.  
**Auto-Run Commands:** Step 7 (dev server) is marked with `// turbo` for safe auto-execution.

This workflow sets up the complete FLOWST8 website development environment with all necessary files and structure.

## Prerequisites
- Workspace is in: `/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website`
- Directives are already created (architecture, design system, content strategy)

## Steps

### 1. Verify Directory Structure
Ensure core directories exist:
```bash
cd "/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website"
ls -la
```

### 2. Create Base CSS Files
Create the design system CSS variables and base styles:
- `src/css/base.css` - CSS variables, reset, base typography
- `src/css/components.css` - Reusable component styles
- `src/css/layout.css` - Layout utilities and grid
- `src/css/pages.css` - Page-specific styles

### 3. Create Base JavaScript Files
- `src/js/main.js` - Core functionality
- `src/js/navigation.js` - Navigation interactions (mobile menu, etc.)
- `src/js/forms.js` - Form validation and handling

### 4. Create HTML Structure
Create all main HTML files with:
- Proper DOCTYPE and meta tags
- Link to stylesheets
- Link to JavaScript files (defer)
- Semantic HTML5 structure
- Unique page titles and meta descriptions

Files to create:
- `index.html`
- `services.html`
- `training.html`
- `consultancy.html`
- `development.html`
- `about.html`
- `contact.html`

### 5. Set Up Asset Directories
Create placeholder structure:
```bash
mkdir -p public/images public/icons public/fonts
```

### 6. Initialize Git Repository (Optional)
```bash
git init
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
echo ".tmp/" >> .gitignore
git add .
git commit -m "Initial website structure"
```

### 7. Start Development Server
Use VS Code Live Server extension or:
// turbo
```bash
npx -y live-server --port=3000 --open="/index.html"
```

## Success Criteria
- ✅ All directories created
- ✅ CSS files with design system variables
- ✅ All HTML pages with proper structure
- ✅ JavaScript files ready for functionality
- ✅ Development server running
- ✅ Can navigate between pages

## Next Steps
After initialization:
1. Run **Create Component** workflow for individual components
2. Populate content from `content_strategy.md`
3. Test responsive design across breakpoints
4. Run **Optimize SEO** workflow
