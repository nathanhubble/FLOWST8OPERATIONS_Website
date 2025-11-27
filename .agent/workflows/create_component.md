---
description: Create a new reusable component following design system
---

# Create Component Workflow

This workflow guides the creation of new reusable components for the FLOWST8 website, ensuring consistency with the design system.

## Prerequisites
- Design system directive: `directives/design_system.md`
- Base CSS files created
- Component name and purpose defined

## Steps

### 1. Define Component Requirements
Before coding, document:
- **Component name**: e.g., "Service Card", "Testimonial", "CTA Button"
- **Purpose**: What does this component do?
- **Props/Variants**: What variations exist? (e.g., primary/secondary button)
- **Accessibility**: Any special a11y requirements?
- **Responsive behavior**: How does it adapt to mobile?

### 2. Create HTML Structure
In the appropriate HTML file or as a reusable snippet:
```html
<!-- Component: [Name] -->
<div class="component-name">
  <!-- Semantic HTML structure -->
</div>
<!-- End Component: [Name] -->
```

**Requirements**:
- Use semantic HTML5 elements
- Add unique IDs for interactive elements
- Include ARIA labels where needed
- Add data attributes for JavaScript hooks

### 3. Add Component Styles
In `src/css/components.css`:
```css
/* ========================================
   Component: [Name]
   ======================================== */

.component-name {
  /* Use design system variables */
  /* Follow BEM naming convention */
}

.component-name__element {
  /* Child elements */
}

.component-name--variant {
  /* Variants/modifiers */
}

/* Responsive */
@media (min-width: var(--breakpoint-md)) {
  .component-name {
    /* Tablet+ styles */
  }
}
```

**Requirements**:
- Use CSS variables from design system
- Follow BEM naming (`.block__element--modifier`)
- Mobile-first media queries
- Document complex selectors with comments

### 4. Add Component Logic (if needed)
In appropriate `src/js/*.js` file:
```javascript
/**
 * Component: [Name]
 * Description: [What it does]
 */

function initComponentName() {
  // Component logic
  // Event listeners
  // State management
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initComponentName);
```

**Requirements**:
- Use ES6+ syntax
- Add JSDoc comments
- Handle edge cases
- Add error handling

### 5. Test Component
- **Visual**: Verify design matches design system
- **Responsive**: Test at all breakpoints (320px, 768px, 1024px, 1280px)
- **Interaction**: Click, hover, focus states work
- **Accessibility**: 
  - Keyboard navigation works
  - Screen reader announces correctly
  - Focus indicators visible
  - Color contrast passes
- **Browser**: Test in Chrome, Firefox, Safari

### 6. Document Component
Add to `README.md` or create `COMPONENTS.md`:
```markdown
## [Component Name]

**Purpose**: Brief description

**Usage**:
<div class="component-name">...</div>

**Variants**:
- `.component-name--variant1`
- `.component-name--variant2`

**JavaScript**: Required/Optional

**Accessibility**: Any special notes
```

## Example: Service Card Component

### HTML
```html
<!-- Component: Service Card -->
<article class="service-card">
  <div class="service-card__icon">
    <svg><!-- Icon --></svg>
  </div>
  <h3 class="service-card__title">Service Name</h3>
  <p class="service-card__description">Brief description of the service</p>
  <a href="#" class="service-card__link">Learn More →</a>
</article>
```

### CSS
```css
.service-card {
  background: var(--color-bg-secondary);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: var(--transition-all);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

## Success Criteria
- ✅ Component follows design system
- ✅ Responsive at all breakpoints
- ✅ Accessible (keyboard, screen reader)
- ✅ Documented with usage examples
- ✅ Tested in multiple browsers
- ✅ Code is clean and commented

## Common Components to Create
1. **Header/Navigation**
2. **Footer**
3. **Hero Section**
4. **Service Card**
5. **Testimonial Card**
6. **CTA Button**
7. **Contact Form**
8. **Feature List**
9. **Logo Grid** (tools used)
10. **Mobile Menu**
