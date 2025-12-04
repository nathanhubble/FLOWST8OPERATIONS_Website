# FLOWST8 Website - File Structure Reference

## Current Structure (React + Vite + TypeScript)

```
AG - FLOWST8 Website/
├── src/                      # All source code
│   ├── App.tsx               # Main React component
│   ├── index.tsx             # Entry point
│   ├── types.ts              # TypeScript definitions
│   ├── vite-env.d.ts         # Vite type declarations
│   ├── components/           # React components
│   │   ├── InteractiveDemo.tsx
│   │   ├── Marquee.tsx
│   │   ├── Modals.tsx
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx
│   │       └── FadeIn.tsx
│   └── services/             # API services
│       └── geminiService.ts  # Gemini AI integration
│
├── directives/               # Development guidelines
│   ├── company_context.md    # Brand, tone, messaging
│   ├── website_architecture.md
│   ├── design_system.md
│   └── content_strategy.md
│
├── .agent/workflows/         # Agent automation workflows
│   ├── create_component.md
│   ├── deploy_website.md
│   ├── initialize_project.md
│   ├── optimize_seo.md
│   ├── sync_agent_files.md
│   └── update_global_core.md
│
├── .archive/                 # Archived versions
│   ├── v1-20251204/
│   ├── v1_backup_before_v3/
│   └── v3_original_upload/
│
├── .reference/               # Reference documentation
│   ├── CAL_COM_INTEGRATION.md
│   ├── FILE_STRUCTURE.md
│   ├── archive/
│   └── services/
│
├── global_core/              # Shared automation primitives
│
├── index.html                # HTML entry point
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
├── vite.config.ts            # Vite config
├── .env.local                # API keys (gitignored)
├── .gitignore
├── README.md
├── GEMINI.md                 # Gemini agent instructions
├── AGENTS.md                 # Agent instructions
├── CLAUDE.md                 # Claude agent instructions
└── GLOBAL_CORE_IN_THIS_WORKSPACE.md
```

## Key Directories

| Directory | Purpose |
|-----------|---------|
| `src/` | All React/TypeScript source code |
| `directives/` | Development guidelines and SOPs |
| `.agent/workflows/` | Slash command workflows |
| `.archive/` | Versioned backups |
| `global_core/` | Shared automation components |

## Important Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Main website component |
| `vite.config.ts` | Build and dev server config |
| `.env.local` | API keys (VITE_GEMINI_API_KEY) |
| `GEMINI.md` | Agent instructions for this workspace |
