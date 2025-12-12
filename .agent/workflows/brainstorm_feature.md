---
description: Collaboratively design new features or sections before implementation
version: 1.0.0
last_updated: 2025-12-05
concurrency_safe: true
auto_run_safe: false
---

# Brainstorm Feature Workflow

**Version:** 1.0.0  
**Purpose:** Refine rough ideas into fully-formed designs through collaborative questioning and incremental validation.  
**Inputs:** Feature idea, rough requirements  
**Outputs:** Validated design document in `docs/plans/`  
**Concurrency Notes:** Safe to run in parallel. No shared state during brainstorming.

## When to Use

- Planning a **new page** or major section
- Designing a **new component** pattern
- Making **significant changes** to existing features
- Uncertain about **approach or requirements**

**Don't use** for clear, mechanical tasks with obvious solutions.

## DOE Framework Integration

### Directives to Consult
Before brainstorming, review these directives:
- **`directives/company_context.md`**: Brand voice, messaging, company services
- **`directives/design_system.md`**: Colors, typography, existing component patterns
- **`directives/content_strategy.md`**: Page structure, CTAs, SEO requirements
- **`directives/website_architecture.md`**: Technical constraints, file organization

### Orchestration
This workflow orchestrates collaborative design:
1. Gather context from directives
2. Ask questions to understand requirements
3. Present 2-3 approaches with trade-offs
4. Incrementally validate design with user
5. Document final design
6. Hand off to `/write_plan` or `/create_component`

### Execution
Execute the brainstorming process below. If answers reveal misunderstanding, self-anneal by revisiting earlier questions.

## The Process

### Phase 1: Understanding the Idea

**Before asking questions:**
1. Review relevant directives (`company_context.md`, `design_system.md`)
2. Check existing components and patterns
3. Note any constraints or requirements

**Questioning rules:**
- **One question at a time** - Don't overwhelm with multiple questions
- **Multiple choice preferred** - Easier than open-ended when possible
- **Focus on**: Purpose, constraints, success criteria, accessibility needs

**Example questions:**
- "Is this section primarily for (A) lead generation, (B) information, or (C) trust building?"
- "Should this component match the existing service cards, or need a distinct style?"
- "What's the primary user action you want after viewing this section?"

### Phase 2: Exploring Approaches

Present **2-3 different approaches** with trade-offs:

```markdown
## Approaches

### Option A: [Name]
**Description:** Brief explanation
**Pros:** What's good about this
**Cons:** What's challenging
**Effort:** Low/Medium/High

### Option B: [Name]
**Description:** Brief explanation
**Pros:** What's good about this
**Cons:** What's challenging
**Effort:** Low/Medium/High

**Recommendation:** Option [X] because [reasoning]
```

**Always lead with your recommendation** and explain why.

### Phase 3: Presenting the Design

Once approach is agreed:

1. **Present in sections** (200-300 words max each)
2. **Ask after each section**: "Does this look right so far?"
3. **Cover these areas:**
   - Component structure (HTML)
   - Styling approach (CSS)
   - Interactions (JavaScript if needed)
   - Responsive behavior
   - Accessibility considerations
   - Content requirements

**Example section presentation:**
```markdown
## Hero Section Design

The hero will use a full-width layout with the headline on the left 
and an animated illustration on the right. On mobile, these stack 
vertically with the headline first.

**Structure:**
- Container with max-width constraint
- 2-column grid (60/40 split on desktop)
- Animated entrance using CSS keyframes

Does this structure look right so far?
```

### Phase 4: Documentation

After design is validated, save to a plan document:

**File:** `docs/plans/YYYY-MM-DD-[feature-name]-design.md`

```markdown
# [Feature Name] Design

**Created:** [Date]
**Status:** Approved

## Overview
[1-2 sentence summary]

## Requirements
- [Requirement 1]
- [Requirement 2]

## Design Decisions
[Key decisions and reasoning]

## Component Structure
[HTML structure outline]

## Styling Approach
[CSS approach, design system usage]

## Interactions
[JavaScript requirements if any]

## Accessibility
[A11y considerations]

## Implementation Notes
[Any gotchas or special considerations]
```

## Key Principles

| Principle | Application |
|-----------|-------------|
| One question at a time | Never ask 3 things in one message |
| Multiple choice preferred | "(A) or (B)?" better than "What do you think?" |
| YAGNI ruthlessly | Remove unnecessary complexity from all designs |
| Explore alternatives | Always propose 2-3 approaches before settling |
| Incremental validation | Present design in sections, validate each |
| Be flexible | Go back and clarify when something doesn't make sense |

## After Brainstorming

Once design is documented:

1. **Ask:** "Ready to create an implementation plan?"
2. If yes, use `/write_plan` workflow to create detailed tasks
3. Or use `/create_component` for simpler components

## Success Criteria

- ✅ Requirements clearly understood
- ✅ 2+ approaches explored
- ✅ Design presented incrementally and validated
- ✅ Design document saved to `docs/plans/`
- ✅ Accessibility considered
- ✅ Responsive behavior defined

## Self-Annealing

When brainstorming encounters issues:

### Wrong Direction Detected
If user feedback indicates misunderstanding:
1. **Acknowledge** - "I see I misunderstood the requirement"
2. **Backtrack** - Return to the last understood point
3. **Clarify** - Ask a focused question to correct course
4. **Resume** - Continue from corrected understanding

### Design Conflicts with Directives
If proposed design conflicts with design system or brand:
1. **Identify** - Note specific directive conflict
2. **Present options** - Suggest directive-compliant alternatives
3. **Escalate if needed** - Ask if directive should be updated

### Scope Creep
If brainstorming expands beyond original goal:
1. **YAGNI check** - Is this feature really needed?
2. **Split** - Separate into core vs. future enhancement
3. **Document** - Note future ideas in design doc

## Related Workflows
- `/write_plan` - Create detailed implementation tasks after design
- `/create_component` - Build simpler components directly
- `/verify` - Verify completed implementation
