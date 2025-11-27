# Version: 1.0.0
# Last Updated: 2025-11-27
# Author: Antigravity

# Service Directive: Consultancy & Auditing


> **Usage Rule**: Consult this directive when performing audits, diagnostics, or generating strategic recommendations. Always inherit tone/identity from `directives/company_context.md`.

## 1. Service Overview
**Consultancy & Automation Auditing** involves diagnosing business operations to identify friction points and recommending AI/Automation architectures to solve them.

**Goal**: Transform opaque, manual processes into transparent, automated systems.

## 2. Inputs Required
To perform an audit, the agent needs:
- **Process Documentation**: SOPs, Loom videos, or interview notes describing current workflows.
- **Tool Stack**: List of current software (CRM, Email, PM tools).
- **Pain Points**: Where is the bottleneck? (Time, Cost, Error Rate).
- **Goals**: What does success look like? (Scale, Speed, Savings).

## 3. Diagnostic Outputs
Structure consultancy outputs as follows:

### A. Process Maps
- **Current State**: Visual or text-based flow of the manual process.
- **Friction Points**: Highlighted areas of inefficiency.
- **Future State**: The proposed automated workflow.

### B. Automation Opportunity List
- **Name**: Brief title of the automation.
- **Impact**: High/Medium/Low (Time saved, Value added).
- **Complexity**: Easy/Medium/Hard (Implementation effort).
- **Priority**: Recommended order of attack.

### C. Architecture & Tools
- **Recommended Stack**: Specific tools (Make, n8n, OpenAI, etc.) and why.
- **Data Flow**: How data moves between systems.

### D. ROI Estimates
- **Efficiency**: "Reduces manual effort by X hours/week."
- **Cost**: "Estimated tool cost vs labor savings."

## 4. Referencing Workflows
When building recommendations, reference existing workspace capabilities as proof of concept:
- "We can implement a lead engine similar to our `scrape_leads` workflow..."
- "Data verification can be handled via our `verify_leads` logic..."

## 5. Standard Formats
- **Audit Report**: Comprehensive markdown document.
- **Executive Summary**: 1-page high-level overview.
- **Implementation Roadmap**: Phased timeline for rollout.
