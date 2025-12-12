---
description: Run comprehensive verification checks before deployment or completion claims
version: 1.0.0
last_updated: 2025-12-05
concurrency_safe: true
auto_run_safe: true
---

# Verify Workflow

**Version:** 1.0.0  
**Purpose:** Ensure all quality gates pass before claiming work is complete or deploying.  
**Inputs:** None (runs against current project state)  
**Outputs:** Verification report with pass/fail status  
**Concurrency Notes:** Safe to run anytime. Read-only checks.

## Iron Law

```
NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE
```

If you haven't run verification in this session, you cannot claim work passes.

## Prerequisites
- Website files exist and are serveable
- Node.js installed (for Lighthouse CLI, if available)
- Browser available for visual checks

## DOE Framework Integration

### Directives to Consult
Before running verification, review these directives for standards:
- **`directives/design_system.md`**: Colors, typography, spacing standards to verify
- **`directives/website_architecture.md`**: Performance targets and browser support
- **`directives/content_strategy.md`**: SEO requirements and CTA standards

### Orchestration
This workflow orchestrates verification against directive-defined standards:
1. Run automated checks (Lighthouse, HTML validation)
2. Perform manual visual inspection against design system
3. Document findings in verification report
4. Self-anneal if issues found

### Execution
Execute checks in order, documenting results. If issues found, loop back to fix before claiming completion.

## Verification Checklist

### 1. Serve the Site
// turbo
```bash
# Start local server (use any available method)
npx serve . -p 3000
# OR
python -m http.server 3000
# OR
php -S localhost:3000
```

Keep server running for remaining checks.

### 2. Visual Check (All Pages)
Open each page and verify:
- [ ] Header renders correctly
- [ ] Navigation works
- [ ] All images load (no broken images)
- [ ] Footer displays properly
- [ ] Forms are visible and styled
- [ ] CTAs are prominent

**Pages to check:**
- `index.html` - Homepage
- All linked pages from navigation

### 3. Responsive Test
Test at these breakpoints:
- [ ] **Mobile** (320px) - Content readable, navigation accessible
- [ ] **Mobile Large** (480px) - Layout adjusts appropriately
- [ ] **Tablet** (768px) - Multi-column layouts appear
- [ ] **Desktop** (1024px) - Full layout displayed
- [ ] **Wide** (1280px+) - Content centered, not stretched

### 4. Accessibility Quick Check
- [ ] **Keyboard navigation**: Tab through page, all interactive elements reachable
- [ ] **Focus indicators**: Visible focus ring on all interactive elements
- [ ] **Heading structure**: One H1, logical H2/H3 hierarchy
- [ ] **Alt text**: All images have descriptive alt text
- [ ] **Color contrast**: Text readable on all backgrounds

### 5. Performance Check (Lighthouse)
// turbo
```bash
# Install Lighthouse CLI if needed
npm install -g lighthouse

# Run Lighthouse audit
lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless"
```

**Required scores:**
- Performance: **90+**
- Accessibility: **95+**
- Best Practices: **90+**
- SEO: **100**

### 6. HTML Validation (Optional)
// turbo
```bash
# Validate HTML
npx html-validate index.html
# OR use W3C validator online
```

### 7. Cross-Browser Test
If available, verify in:
- [ ] Chrome (primary)
- [ ] Safari
- [ ] Firefox
- [ ] Edge

## Verification Report Template

After running all checks, document results:

```markdown
## Verification Report - [DATE]

### Visual Check
- [ ] All pages render correctly
- [ ] No broken images
- [ ] Forms functional

### Responsive
- [ ] Mobile (320px): PASS/FAIL
- [ ] Tablet (768px): PASS/FAIL
- [ ] Desktop (1024px): PASS/FAIL

### Accessibility
- [ ] Keyboard navigation: PASS/FAIL
- [ ] Focus indicators: PASS/FAIL
- [ ] Color contrast: PASS/FAIL

### Lighthouse Scores
- Performance: [SCORE]
- Accessibility: [SCORE]
- Best Practices: [SCORE]
- SEO: [SCORE]

### Issues Found
1. [Issue description]
2. [Issue description]

### Status: READY / NOT READY
```

## Red Flags - Do NOT Proceed If:

| Excuse | Reality |
|--------|---------|
| "Should work now" | RUN the verification |
| "Looks correct" | Verify with actual checks |
| "Just a small change" | Small changes break things |
| "I checked it earlier" | Fresh verification required |

## Success Criteria

Only claim completion when:
- ✅ All visual checks pass
- ✅ Responsive at all breakpoints
- ✅ Accessibility checks pass
- ✅ Lighthouse scores meet targets
- ✅ No console errors

## Self-Annealing

When verification reveals issues:

### Analyze
1. **Categorize severity**: Critical (blocks deployment) vs Important (should fix) vs Minor (nice to have)
2. **Identify root cause**: Why did this fail? Was it a directive violation or implementation error?
3. **Check if pattern**: Is this a one-off or recurring issue?

### Fix
1. Address root cause, not just symptoms
2. Re-run the specific failed check
3. Document the fix for future reference

### Validate
1. Re-run full verification after fixes
2. Confirm all previously passing checks still pass
3. Only then claim completion

### Improve
If the same issue keeps occurring:
1. Update the relevant directive to prevent future occurrences
2. Add to this workflow's checklist if it's a common issue
3. Consider adding automated checks

## Integration with Deploy Workflow

The `/deploy_website` workflow should call `/verify` as its first step. Never deploy without verification.

## Related Workflows
- `/deploy_website` - Use after verification passes
- `code-reviewer` - Use before verification for code quality
- `/brainstorm_feature` - Use when planning new features
