# Version: 1.0.0
# Last Updated: 2025-11-27
# Author: Antigravity

# Service Directive: Custom Development


> **Usage Rule**: Consult this directive when scoping, planning, or documenting technical builds. Always inherit tone/identity from `directives/company_context.md`.

## 1. Service Overview
**Integrated Custom Development** is the hands-on building of agents, automations, and pipelines. We move from strategy to execution, delivering robust, production-grade systems.

## 2. Scope & Process
1.  **Requirements**: Define exactly what the system must do.
2.  **Discovery**: Explore API capabilities, data structures, and constraints.
3.  **Prototype**: Build a "Walking Skeleton" (MVP) to prove feasibility.
4.  **Build**: Develop the full solution with error handling and logging.
5.  **Refine**: Test, optimize, and document.

## 3. Referencing Components
Reuse existing workspace logic where possible:
- **Scrapers**: Adapt `execution/scrape_leads.py` patterns.
- **Enrichment**: Use `execution/enrich_emails.py` logic.
- **Verification**: Implement `execution/verify_leads.py` standards.

## 4. Documentation Rules
The agent must document:
- **Decisions**: Why a specific tool or pattern was chosen.
- **Assumptions**: What we assume about the data or API stability.
- **API Requirements**: Auth methods, rate limits, endpoints.
- **Testing Steps**: How to verify the build works.

## 5. Client Deliverables
- **Solution Outline**: High-level technical approach (pre-build).
- **Workflow Blueprint**: Detailed schema or diagram of the logic.
- **Integration Checklist**: Credentials and access needed from the client.
- **Development Roadmap**: Sprints or milestones for delivery.
- **Iteration Plan**: How we will handle feedback and improvements.
