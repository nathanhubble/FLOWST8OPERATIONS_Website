# Global Core Integration

**Version:** 1.0.0  
**Last Updated:** 2025-12-02  
**Global Core Version:** 1.0.0

---

## What is Global Core?

**Global Core** is a shared repository of universal, project-agnostic primitives for building intelligent automation workspaces. It provides foundational components, frameworks, and patterns that can be reused across any workspace, regardless of industry or business context.

Think of it as the **operating system kernel** for automation workspaces: it provides core infrastructure while remaining completely agnostic to your specific use case.

This website development workspace now has access to Global Core primitives, which complement our web development workflows with powerful automation, quality assurance, and model routing capabilities.

---

## What's Available in This Workspace

The Global Core repository is located at:
```
/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website/global_core/
```

It contains the following components:

### 📋 Core Directives (`global_core/core_directives/`)

Universal Standard Operating Procedures (SOPs):

- **`system_expansion_guidelines.md`** - Rules for workspace growth, concurrency, and multi-agent safety
- **`workflow_validation.md`** - Automation idea validation framework with failure mode detection
- **`output_quality_assurance.md`** - Meta-rubrics and self-evaluation for all outputs
- **`model_routing.md`** - Intelligent LLM routing with cost optimization and fallback chains
- **`workflow_linking.md`** - Safe protocols for connecting workflows
- **`handover_ux_layer.md`** - Client documentation and UX generation primitives
- **`automation_workflow_builder.md`** - Make.com/n8n scenario generation engine
- **`client_onboarding.md`** - Generic client intake and scoping framework

### ⚙️ Core Executions (`global_core/core_executions/`)

Deterministic Python scripts implementing core functions:

- **`workflow_validation_engine/`** - Automation validation logic
- **`output_quality_assurance/`** - Rubric generation and self-evaluation
- **`handover_ux_layer/`** - Diagram and documentation generators
- **`automation_workflow_builder/`** - Platform-specific export logic

### 🔀 Core Routing (`global_core/core_routing/`)

LLM model routing and cost optimization:

- **`model_routing/`** - Complete routing system with vendor API priority and OpenRouter fallback

### 🔗 Core Meta (`global_core/core_meta/`)

Self-annealing and meta-cognitive improvement logic:

- **`workflow_linker/`** - Workflow analysis and linking tools

---

## How to Use Global Core in This Workspace

### When to Use Global Core

Use Global Core components when you need:

✅ **LLM Model Routing** - Intelligent model selection with cost optimization  
✅ **Quality Assurance** - Self-evaluation and rubric-based output validation  
✅ **Workflow Validation** - Validate automation ideas before implementation  
✅ **Documentation Generation** - Auto-generate flow diagrams, dashboards, or handover docs  
✅ **Automation Building** - Generate Make.com or n8n scenario blueprints

### When to Use Website Workflows

Use website-specific workflows (`.agent/workflows/`) for:

✅ **Component Creation** - Building React/website components  
✅ **Website Deployment** - Deploying the FLOWST8 website  
✅ **SEO Optimization** - Website performance and search optimization  
✅ **Project Initialization** - Setting up website development environment

### Using Global Core Directives

Reference Global Core directives in your workflows or ask agents to follow them:

```markdown
Follow the quality assurance process from:
`global_core/core_directives/output_quality_assurance.md`
```

### Running Global Core Executions

Execute Python scripts directly:

```bash
# Example: Run model routing
python global_core/core_routing/model_routing/route_model.py --task "your task description"

# Example: Validate a workflow
python global_core/core_executions/workflow_validation_engine/validate_workflow.py --workflow-file path/to/workflow.json
```

---

## Updating Global Core

Global Core is maintained as a Git repository and can be updated independently of this workspace.

### Pull Latest Updates

Use the workflow:
```bash
/update_global_core
```

Or manually:
```bash
cd global_core
git pull origin main
```

### Review Changes After Update

After pulling updates, review what changed:

```bash
cd global_core
git log --oneline -n 10
git diff HEAD~5 HEAD
```

### Merge Conflicts (Rare)

If you've customized Global Core files locally, you may encounter merge conflicts. To resolve:

1. **Preserve your changes:**
   ```bash
   cd global_core
   git stash
   git pull origin main
   git stash pop
   ```

2. **Resolve conflicts manually** in affected files

3. **Commit merged result:**
   ```bash
   git add .
   git commit -m "Merged latest Global Core updates"
   ```

**Best Practice:** Avoid editing Global Core files directly. Instead, copy them to your workspace and customize there.

---

## Proposing Improvements to Global Core

If you improve a Global Core component and want to share it with other workspaces:

### 1. Test Thoroughly

Ensure your improvement:
- ✅ Works in isolation
- ✅ Benefits multiple workspace types (not just this website workspace)
- ✅ Doesn't break existing implementations
- ✅ Includes clear documentation

### 2. Generalize

Remove workspace-specific details:
- ❌ "FLOWST8 website" → ✅ "website" or "web project"
- ❌ Specific company names → ✅ Generic placeholders
- ❌ Hardcoded paths → ✅ Configurable parameters

### 3. Create a Patch

From this workspace:

```bash
cd global_core

# Create a new branch for your improvement
git checkout -b improvement/descriptive-name

# Make your changes to Global Core files
# ... edit files ...

# Commit your changes
git add .
git commit -m "Improvement: [clear description]"

# Push to your fork or create a patch file
git format-patch main --stdout > ../proposed_global_core_improvement.patch
```

### 4. Submit for Review

Share the patch or branch with the Global Core maintainer (yourself in your Operations workspace) for review and integration.

### Quality Bar for Global Core Contributions

- **Universal Benefit**: Must help multiple workspace types
- **No Breaking Changes**: Must not break existing implementations
- **Clear Documentation**: Include usage examples and rationale
- **DOE Architecture**: Follow Directive-Orchestration-Execution pattern

---

## Integration Best Practices

### ✅ Do's

- **Reference, don't copy**: Link to Global Core directives rather than duplicating them
- **Extend, don't replace**: Build on top of Global Core, don't fork it
- **Update regularly**: Pull latest Global Core updates monthly
- **Test before updating**: Review changes before pulling into active projects

### ❌ Don'ts

- **Don't edit Global Core files directly** (unless proposing improvements)
- **Don't hardcode workspace paths** in Global Core scripts
- **Don't mix workspace-specific logic** into Global Core components
- **Don't commit workspace secrets** to Global Core repository

---

## File Organization

```
AG - FLOWST8 Website/
├── global_core/                    # ← Global Core (git-managed)
│   ├── core_directives/            # Universal SOPs
│   ├── core_executions/            # Python automation scripts
│   ├── core_routing/               # LLM model routing
│   └── core_meta/                  # Meta-cognitive tools
│
├── directives/                     # ← Website-specific directives
│   ├── company_context.md
│   ├── content_strategy.md
│   ├── design_system.md
│   └── website_architecture.md
│
├── .agent/workflows/               # ← Website-specific workflows
│   ├── create_component.md
│   ├── deploy_website.md
│   ├── initialize_project.md
│   ├── optimize_seo.md
│   └── update_global_core.md       # ← New workflow for updates
│
└── [website files...]              # React/Vite app
```

**Key Principle:** Global Core and website files remain separate. Global Core is a *resource library*, not a replacement for workspace-specific logic.

---

## Examples: Integrating Global Core with Website Development

### Example 1: Model Routing for Content Generation

When generating website copy, use Global Core's model routing for cost-effective LLM selection:

```bash
python global_core/core_routing/model_routing/route_model.py \
  --task "Generate homepage hero copy for FLOWST8 website" \
  --priority cost
```

### Example 2: Quality Assurance for Generated Components

After generating a new React component, use QA rubrics:

```bash
python global_core/core_executions/output_quality_assurance/self_evaluate_output.py \
  --file components/NewComponent.tsx \
  --rubric accessibility,performance,maintainability
```

### Example 3: Workflow Validation for Deployment

Before deploying a new workflow, validate it:

```bash
python global_core/core_executions/workflow_validation_engine/validate_workflow.py \
  --workflow-file .agent/workflows/deploy_website.md
```

---

## Support and Troubleshooting

### Global Core Repository Not Updating?

```bash
cd global_core
git status  # Check for uncommitted changes
git fetch origin
git pull origin main
```

### Python Scripts Not Running?

Ensure dependencies are installed:
```bash
cd global_core
pip install -r requirements.txt  # If a requirements file exists
```

### Questions About Global Core?

1. Check `global_core/README.md` for comprehensive documentation
2. Review directive comments in `global_core/core_directives/`
3. Examine script comments in `global_core/core_executions/`

---

## Version History

| Version | Date       | Changes                                      |
|---------|------------|----------------------------------------------|
| 1.0.0   | 2025-12-02 | Initial integration of Global Core v1.0.0    |

---

## Quick Reference

| Task                          | Command/Location                                      |
|-------------------------------|-------------------------------------------------------|
| View Global Core README       | `cat global_core/README.md`                           |
| Update Global Core            | `/update_global_core` or `cd global_core && git pull` |
| List directives               | `ls global_core/core_directives/`                     |
| List execution scripts        | `ls global_core/core_executions/`                     |
| Create improvement patch      | `cd global_core && git format-patch main`             |
| Check Global Core version     | `head -n 5 global_core/README.md`                     |

---

**Remember**: Global Core enriches this workspace with universal automation primitives. Use it to enhance website development workflows, not replace them. Keep Global Core updated and propose improvements that benefit all workspaces.
