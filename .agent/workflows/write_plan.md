---
description: Create detailed implementation plans with bite-sized tasks for engineers
version: 1.0.0
last_updated: 2025-12-05
concurrency_safe: true
auto_run_safe: false
---

# Write Plan Workflow

**Version:** 1.0.0  
**Purpose:** Create comprehensive implementation plans with bite-sized tasks assuming zero codebase context.  
**Inputs:** Design document or feature requirements  
**Outputs:** Detailed implementation plan in `docs/plans/`  
**Concurrency Notes:** Safe to run in parallel. Each plan is independent.

## When to Use

- After `/brainstorm_feature` produces a validated design
- For complex features requiring multiple files/components
- When work may be done over multiple sessions
- When you need clear checkpoints and verification steps

## DOE Framework Integration

### Directives to Consult
Before writing plans, review these directives:
- **`directives/design_system.md`**: Component patterns, CSS variables, BEM naming
- **`directives/website_architecture.md`**: File structure, technical standards
- **`directives/content_strategy.md`**: Content requirements, CTAs

### Orchestration
This workflow orchestrates implementation planning:
1. Review design document and directives
2. Break work into 2-5 minute bite-sized tasks
3. Include exact file paths and code examples
4. Add verification steps after each major change
5. Include commit steps for frequent checkpoints
6. Link to `/verify` workflow for final validation

### Execution
Produce the plan document. If plan reveals design gaps, self-anneal by returning to `/brainstorm_feature`.

## Guiding Principles

Write plans assuming the implementer:
- Is a **skilled developer** but knows nothing about this specific project
- Has **zero context** on the design system or file structure
- Needs **exact file paths** and complete code examples
- Benefits from **frequent commits** and clear verification

## Plan Document Structure

**File:** `docs/plans/YYYY-MM-DD-[feature-name].md`

```markdown
# [Feature Name] Implementation Plan

> **For Implementation:** Follow tasks in order. Each step is 2-5 minutes.

**Goal:** [One sentence describing what this builds]

**Design Document:** [Link to design if applicable]

**Files Affected:**
- Create: `exact/path/to/new/file.html`
- Modify: `exact/path/to/existing.css`

---
```

## Task Granularity

Each task should be **2-5 minutes of focused work**. One action per step:

**Too big:**
> "Create the hero section with all styling"

**Just right:**
1. Add hero HTML structure to `index.html`
2. Create hero CSS in `src/css/components.css`
3. Add responsive styles for mobile
4. Test at 320px breakpoint
5. Test at 768px breakpoint
6. Commit changes

## Task Template

```markdown
### Task N: [Component/Feature Name]

**Files:**
- Create: `exact/path/to/file.html`
- Modify: `src/css/components.css` (lines 45-60)

**Step 1: [Action Description]**

[Exact code or instructions]

```html
<!-- Exact HTML to add -->
<section class="hero">
  ...
</section>
```

**Step 2: [Next Action]**

[Exact code or instructions]

**Step 3: Verify**

- Open `http://localhost:3000`
- Check: [Specific thing to verify]
- Expected: [What you should see]

**Step 4: Commit**

```bash
git add src/path/to/files
git commit -m "feat: add hero section structure"
```
```

## Complete Example

```markdown
# Service Cards Implementation Plan

> **For Implementation:** Follow tasks in order. Each step is 2-5 minutes.

**Goal:** Create reusable service cards for the homepage services section.

**Design Document:** `docs/plans/2025-12-05-service-cards-design.md`

**Files Affected:**
- Modify: `index.html` (add service section)
- Modify: `src/css/components.css` (add card styles)

---

### Task 1: Add HTML Structure

**Files:**
- Modify: `index.html`

**Step 1: Add services section after hero**

Locate the closing `</section>` of the hero and add:

```html
<!-- Services Section -->
<section class="services" id="services">
  <div class="container">
    <h2 class="services__title">Our Services</h2>
    <div class="services__grid">
      <!-- Service cards will go here -->
    </div>
  </div>
</section>
```

**Step 2: Verify**

- Save file
- Refresh browser
- Expected: Empty section visible (may have no styling yet)

---

### Task 2: Add Service Card Component

**Files:**
- Modify: `index.html` (inside services__grid)

**Step 1: Add first service card**

Inside `.services__grid`, add:

```html
<article class="service-card">
  <div class="service-card__icon">
    <svg><!-- Icon SVG --></svg>
  </div>
  <h3 class="service-card__title">AI Training</h3>
  <p class="service-card__description">
    Upskill your team on AI tools and automation.
  </p>
  <a href="/training.html" class="service-card__link">
    Learn More →
  </a>
</article>
```

**Step 2: Duplicate for other services**

Copy the service-card and modify for:
- Automation Consulting
- Custom Development

**Step 3: Verify**

- Refresh browser
- Expected: Three unstyled cards visible

**Step 4: Commit**

```bash
git add index.html
git commit -m "feat: add service cards HTML structure"
```

---

### Task 3: Style Service Cards

**Files:**
- Modify: `src/css/components.css`

**Step 1: Add card base styles**

At end of file, add:

```css
/* ========================================
   Component: Service Card
   ======================================== */

.service-card {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

**Step 2: Verify**

- Refresh browser
- Expected: Cards have background and hover effect

**Step 3: Commit**

```bash
git add src/css/components.css
git commit -m "style: add service card base styles"
```

---

### Task 4: Add Responsive Grid

**Files:**
- Modify: `src/css/components.css`

**Step 1: Add grid layout**

After service card styles, add:

```css
.services__grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .services__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Step 2: Test responsive**

- Resize browser to 320px: Cards stack vertically
- Resize to 768px+: Cards in 3 columns

**Step 3: Commit**

```bash
git add src/css/components.css
git commit -m "style: add responsive service cards grid"
```

---

### Task 5: Final Verification

**Run `/verify` workflow** to confirm:
- [ ] Cards display correctly on all breakpoints
- [ ] Hover effects work
- [ ] Links navigate correctly
- [ ] Keyboard focus works on card links
- [ ] Lighthouse scores maintained

---

## Implementation Complete ✅

All service card tasks finished. Cards are:
- Semantic HTML with proper accessibility
- Styled per design system
- Responsive at all breakpoints
- Committed with meaningful messages
```

## Execution Options

After saving the plan, offer:

1. **Execute now** - Work through tasks immediately
2. **Save for later** - Reference plan in future session

When executing, follow each step exactly and verify before moving on.

## Success Criteria

- ✅ Every step is 2-5 minutes of work
- ✅ Exact file paths provided
- ✅ Complete code examples (no "add validation")
- ✅ Verification step after each major change
- ✅ Commit step after each logical unit
- ✅ Final verification using `/verify` workflow

## Self-Annealing

When planning encounters issues:

### Design Gaps Discovered
If plan reveals missing design decisions:
1. **Stop** - Don't guess at design
2. **Document** - Note what's unclear
3. **Return** - Go back to `/brainstorm_feature` to resolve
4. **Resume** - Continue planning once clarified

### Task Too Large
If a task is more than 5 minutes:
1. **Split** - Break into smaller sub-tasks
2. **Add verification** - Each sub-task should be verifiable
3. **Add commits** - Each logical unit should be committed

### Implementation Reveals Issues
If execution reveals plan problems:
1. **Update plan** - Add discovered steps
2. **Add gotcha notes** - Document what was learned
3. **Improve template** - If issue is common, update task template

## Related Workflows
- `/brainstorm_feature` - Design before planning
- `/create_component` - For simpler components
- `/verify` - Final verification after implementation
- `code-reviewer` - Review completed work
