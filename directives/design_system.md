# Version: 1.0.0
# Last Updated: 2025-11-27
# Author: Antigravity

# Design System Directive

## Goal
Establish a cohesive visual design system for FLOWST8 OPERATIONS website that feels modern, premium, and professional while remaining accessible and performant.

## Design Philosophy

FLOWST8's design should communicate:
- **Efficiency**: Clean, streamlined interfaces
- **Intelligence**: Sophisticated use of space and typography
- **Capability**: Polished, professional execution
- **Approachability**: Clear, helpful, not intimidating

Avoid:
- Generic corporate templates
- Overly playful or casual aesthetics
- Dense, text-heavy layouts
- Flashy animations that distract

## Color Palette

### Primary Colors
```css
--color-primary: hsl(240, 85%, 55%);      /* Vibrant Blue - Main brand color */
--color-primary-light: hsl(240, 85%, 65%); /* Lighter blue for hover states */
--color-primary-dark: hsl(240, 85%, 45%);  /* Darker blue for emphasis */
```

### Accent Colors
```css
--color-accent: hsl(280, 75%, 60%);        /* Purple - Secondary actions */
--color-success: hsl(140, 60%, 50%);       /* Green - Success states */
--color-warning: hsl(35, 90%, 55%);        /* Orange - Warnings */
--color-error: hsl(0, 70%, 55%);           /* Red - Errors */
```

### Neutral Colors (Light Mode)
```css
--color-bg: hsl(0, 0%, 100%);              /* Pure white background */
--color-bg-secondary: hsl(220, 15%, 97%);  /* Off-white for cards/sections */
--color-bg-tertiary: hsl(220, 15%, 94%);   /* Subtle backgrounds */

--color-text: hsl(220, 20%, 15%);          /* Primary text - near black */
--color-text-secondary: hsl(220, 15%, 40%); /* Secondary text - gray */
--color-text-tertiary: hsl(220, 10%, 60%);  /* Tertiary text - light gray */

--color-border: hsl(220, 15%, 88%);        /* Subtle borders */
--color-border-strong: hsl(220, 15%, 75%); /* Stronger borders */
```

### Neutral Colors (Dark Mode)
```css
--color-bg-dark: hsl(220, 20%, 10%);           /* Deep dark background */
--color-bg-secondary-dark: hsl(220, 18%, 14%); /* Cards/sections in dark mode */
--color-bg-tertiary-dark: hsl(220, 16%, 18%);  /* Subtle backgrounds */

--color-text-dark: hsl(220, 15%, 95%);         /* Primary text - near white */
--color-text-secondary-dark: hsl(220, 10%, 70%); /* Secondary text */
--color-text-tertiary-dark: hsl(220, 8%, 50%);   /* Tertiary text */

--color-border-dark: hsl(220, 15%, 22%);       /* Subtle borders */
--color-border-strong-dark: hsl(220, 15%, 30%); /* Stronger borders */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(240, 85%, 55%), hsl(280, 75%, 60%));
--gradient-hero: linear-gradient(180deg, hsl(220, 15%, 97%), hsl(0, 0%, 100%));
--gradient-dark: linear-gradient(135deg, hsl(220, 20%, 10%), hsl(240, 25%, 15%));
```

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
```

**Implementation**: Import from Google Fonts
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### Type Scale
```css
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px - body text */
--font-size-lg: 1.125rem;   /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */
--font-size-5xl: 3rem;      /* 48px - hero headings */
--font-size-6xl: 3.75rem;   /* 60px - large displays */
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights
```css
--line-height-tight: 1.2;   /* Headlines */
--line-height-base: 1.5;    /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
```

### Typography Usage
- **H1**: 3xl-5xl, semibold-bold, tight line height, primary color or gradient
- **H2**: 2xl-3xl, semibold, tight line height
- **H3**: xl-2xl, semibold, tight line height
- **Body**: base-lg, normal weight, base line height
- **Captions**: sm-xs, normal-medium weight, secondary text color

## Spacing System

### Scale (8px base)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Container Sizes
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;
```

## Border & Radius

### Border Radius
```css
--radius-sm: 0.25rem;   /* 4px - subtle */
--radius-md: 0.5rem;    /* 8px - default */
--radius-lg: 0.75rem;   /* 12px - cards */
--radius-xl: 1rem;      /* 16px - prominent */
--radius-2xl: 1.5rem;   /* 24px - hero elements */
--radius-full: 9999px;  /* Pills, avatars */
```

### Border Widths
```css
--border-width: 1px;
--border-width-thick: 2px;
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
```

### Glassmorphism Effect
```css
--glass-bg: rgba(255, 255, 255, 0.15);
--glass-border: rgba(255, 255, 255, 0.25);
--glass-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15);
--glass-blur: blur(12px);
```

## Animations & Transitions

### Timing Functions
```css
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Durations
```css
--duration-fast: 150ms;
--duration-base: 250ms;
--duration-slow: 350ms;
--duration-slower: 500ms;
```

### Common Transitions
```css
--transition-all: all var(--duration-base) var(--ease-in-out);
--transition-colors: color var(--duration-fast) var(--ease-in-out),
                     background-color var(--duration-fast) var(--ease-in-out),
                     border-color var(--duration-fast) var(--ease-in-out);
--transition-transform: transform var(--duration-base) var(--ease-out);
```

### Micro-Animations
- **Hover lift**: `transform: translateY(-2px)` + shadow increase
- **Button press**: `transform: scale(0.98)`
- **Fade in**: Opacity 0 → 1 over 350ms
- **Slide up**: `transform: translateY(20px)` + opacity animation

## Component Styling Patterns

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--gradient-primary);
  color: white;
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  font-weight: var(--font-weight-medium);
  transition: var(--transition-all);
  box-shadow: var(--shadow-md);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--color-primary);
  border: var(--border-width-thick) solid var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-6);
  transition: var(--transition-colors);
}

.btn-secondary:hover {
  background: var(--color-primary);
  color: white;
}
```

### Cards
```css
.card {
  background: var(--color-bg-secondary);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: var(--transition-all);
  box-shadow: var(--shadow-sm);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-light);
}
```

### Forms
```css
input, textarea, select {
  background: var(--color-bg);
  border: var(--border-width) solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  transition: var(--transition-colors);
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px hsla(240, 85%, 55%, 0.1);
}
```

## Responsive Breakpoints

```css
/* Mobile-first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

## Accessibility Standards

### Contrast Ratios
- **Normal text**: Minimum 4.5:1
- **Large text** (18px+): Minimum 3:1
- **Interactive elements**: Minimum 3:1 against background

### Focus Indicators
```css
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Dark Mode Implementation

Use CSS custom properties with a data attribute toggle:
```css
:root {
  /* Light mode by default */
}

[data-theme="dark"] {
  --color-bg: var(--color-bg-dark);
  --color-text: var(--color-text-dark);
  /* ... all other dark variants */
}
```

## Outputs
A consistent, accessible, premium-feeling design system that:
- Creates a strong, memorable brand impression
- Ensures consistency across all pages and components
- Meets WCAG 2.1 AA accessibility standards
- Works seamlessly in light and dark modes
- Provides smooth, delightful interactions
- Can be easily maintained and extended
