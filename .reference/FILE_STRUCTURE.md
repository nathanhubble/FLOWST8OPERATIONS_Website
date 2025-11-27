# FLOWST8 Website - File Structure Reference

## Current Files for Web Development

### ✅ What You HAVE (and need):

**Directives** (`directives/`):
- `company_context.md` - Brand, tone, messaging
- `website_architecture.md` - Tech stack, structure, standards
- `design_system.md` - Colors, typography, components
- `content_strategy.md` - Page content, SEO, CTAs

**Development Setup**:
- `README.md` - Workspace documentation
- `.gitignore` - Version control exclusions
- `src/` - Source code directory (CSS, JS)
- `public/` - Static assets (images, icons, fonts)
- `.agent/workflows/` - Development workflows

**Agent Instructions**:
- `GEMINI.md`, `AGENTS.md`, `CLAUDE.md` - AI agent configs

**Reference**:
- `.reference/services/` - Service content for website copy

---

## ❌ What You DON'T NEED (Python-specific):

This is a **static website project** (HTML/CSS/JS), not Python automation:

- **NO `execution/`** - Not needed (no Python scripts to execute)
- **NO Python `venv/`** - Not needed (no Python dependencies)
- **NO `requirements.txt`** - Not needed (no Python packages)
- **NO `.env`** - Not needed unless adding backend later
- **NO `tmp/`** - Not needed (can create if needed for temp assets)

---

## 📦 Optional Files You MIGHT Add:

### If using npm for development tools:
```bash
npm init -y  # Creates package.json
```
Then install dev dependencies like:
```json
{
  "devDependencies": {
    "live-server": "^1.2.2",
    "lighthouse": "^11.0.0"
  }
}
```

### If adding a backend later:
- `.env` - Environment variables
- `server/` - Backend code
- Database configs

---

## Current vs Python Automation Workspace

| File/Folder | Website Dev | Python Automation |
|-------------|-------------|-------------------|
| `directives/` | ✅ Web directives | ✅ Automation SOPs |
| `src/` | ✅ CSS/JS | ❌ |
| `public/` | ✅ Images/assets | ❌ |
| `execution/` | ❌ | ✅ Python scripts |
| `venv/` | ❌ | ✅ Virtual env |
| `.env` | Optional | ✅ API keys |
| `.gitignore` | ✅ Node/IDE | ✅ Python/venv |
| `README.md` | ✅ | ✅ |

---

## Summary

**This workspace is for WEBSITE DEVELOPMENT, not Python automation.**

If you need a Python automation workspace (for actual automation workflows, not the website), that should be a separate workspace.

**For this website project, you have everything you need:**
- ✅ Directives for guidance
- ✅ Structure for code (src/, public/)
- ✅ Workflows for development
- ✅ Documentation (README)
- ✅ Git setup (.gitignore)

**Next step**: Run `/initialize_project` to create actual HTML/CSS/JS files!
