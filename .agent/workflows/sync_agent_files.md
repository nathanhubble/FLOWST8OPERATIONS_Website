---
description: Sync AGENTS.md, CLAUDE.md, and GEMINI.md files
---

# Sync Agent Configuration Files

This workflow ensures that AGENTS.md, CLAUDE.md, and GEMINI.md remain synchronized.

## Purpose

These three files contain identical agent instructions but are named differently for different AI systems. When one is updated, all three must be updated to maintain consistency.

## When to Use

Run this workflow:
- After manually editing any of the three files
- When adding new sections to agent instructions
- When updating workflow lists or directives
- During workspace maintenance

## How It Works

The workflow compares all three files and ensures they're identical. If differences are found, it updates the out-of-sync files to match.

## Steps

### 1. Navigate to Workspace Root

```bash
cd "/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website"
```

### 2. Check for Differences

// turbo
```bash
diff AGENTS.md GEMINI.md && diff CLAUDE.md GEMINI.md
```

**Expected:** No output if files are identical. If there are differences, they'll be shown.

### 3. Choose Source of Truth

If files differ, determine which file has the correct, most up-to-date content:
- Check modification times: `ls -lt AGENTS.md CLAUDE.md GEMINI.md`
- Review recent changes: `git log --oneline -5 -- AGENTS.md CLAUDE.md GEMINI.md`

**Convention:** Use the most recently modified file as the source of truth.

### 4. Sync Files

Copy the source of truth to the other files.

**If GEMINI.md is source:**
```bash
cp GEMINI.md AGENTS.md
cp GEMINI.md CLAUDE.md
```

**If AGENTS.md is source:**
```bash
cp AGENTS.md GEMINI.md
cp AGENTS.md CLAUDE.md
```

**If CLAUDE.md is source:**
```bash
cp CLAUDE.md AGENTS.md
cp CLAUDE.md GEMINI.md
```

### 5. Verify Sync

// turbo
```bash
diff AGENTS.md GEMINI.md
diff CLAUDE.md GEMINI.md
```

**Expected:** No output (files are now identical).

### 6. Update Version and Date

Open the source file and update the header:

```markdown
# Version: 2.1.0
# Last Updated: 2025-12-02
```

Then sync again using Step 4.

### 7. Commit Changes

```bash
git add AGENTS.md CLAUDE.md GEMINI.md
git commit -m "Sync agent configuration files to version 2.1.0"
```

## Automated Sync (For Agents)

When an agent updates any of these files, they should:

1. **Make changes to ONE file** (preferably GEMINI.md)
2. **Immediately copy to the other two**:
   ```bash
   cp GEMINI.md AGENTS.md
   cp GEMINI.md CLAUDE.md
   ```
3. **Verify sync**:
   ```bash
   diff AGENTS.md GEMINI.md && diff CLAUDE.md GEMINI.md
   ```

## Manual Sync Safeguard

If you manually edit one file and forget to sync:

```bash
# Quick three-way sync (uses GEMINI.md as source)
cp GEMINI.md AGENTS.md && cp GEMINI.md CLAUDE.md
```

Or use this workflow: `/sync_agent_files`

## Troubleshooting

### Files Show Differences But Look Identical

Check for:
- Trailing whitespace differences
- Line ending differences (CRLF vs LF)
- Encoding differences

Fix with:
```bash
# Normalize line endings
dos2unix AGENTS.md CLAUDE.md GEMINI.md
```

### Accidentally Overwrote Important Changes

Check git history:
```bash
git log -p -- GEMINI.md
git checkout HEAD~1 -- GEMINI.md  # Restore previous version
```

### Want to See Exact Differences

Use a more detailed diff:
```bash
diff -u AGENTS.md GEMINI.md | head -50
```

## Best Practices

✅ **Edit one file, sync immediately** - Don't edit multiple files separately  
✅ **Use GEMINI.md as primary** - Convention for this workspace  
✅ **Verify after sync** - Always run diff to confirm  
✅ **Commit together** - All three files should change together in git  
✅ **Update version numbers** - Increment when making significant changes  

❌ **Don't edit all three separately** - Creates merge conflicts  
❌ **Don't skip verification** - Silent failures are hard to debug  
❌ **Don't forget to commit** - Keep git history clean  

## Version History

Track changes to agent instructions:

| Version | Date       | Changes                                  |
|---------|------------|------------------------------------------|
| 2.1.0   | 2025-12-02 | Added Global Core integration section    |
| 2.0.0   | 2025-11-27 | Initial website workspace setup          |

## Related Files

- `AGENTS.md` - Generic agent instructions
- `CLAUDE.md` - Claude-specific instructions (currently identical)
- `GEMINI.md` - Gemini-specific instructions (currently identical)
- `GLOBAL_CORE_IN_THIS_WORKSPACE.md` - Global Core integration guide

---

**Success Indicator:** Running `diff AGENTS.md GEMINI.md && diff CLAUDE.md GEMINI.md` returns no output, indicating all three files are identical.
