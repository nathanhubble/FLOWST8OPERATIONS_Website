---
description: Update Global Core to latest version from GitHub
---

# Update Global Core Workflow

This workflow pulls the latest version of the Global Core repository into this workspace.

## When to Use

Run this workflow when:
- You want to access new Global Core features or improvements
- A Global Core update is announced
- Monthly maintenance (recommended schedule)
- Before starting a new project phase that might benefit from latest primitives

## Prerequisites

- Global Core is already cloned at `global_core/`
- Git is installed and configured
- Internet connection available

## Steps

### 1. Navigate to Global Core Directory

```bash
cd "/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website/global_core"
```

### 2. Check Current Status

```bash
git status
```

**Expected:** Clean working directory. If you see uncommitted changes, you may have edited Global Core files locally.

### 3. Fetch Latest Changes

// turbo
```bash
git fetch origin
```

### 4. Review What Will Change

```bash
git log HEAD..origin/main --oneline
```

This shows commits that will be pulled. Review to understand what's changing.

### 5. Pull Latest Updates

// turbo
```bash
git pull origin main
```

**Expected:** Either "Already up to date" or a list of updated files.

### 6. Verify Update Success

```bash
git log --oneline -n 5
```

Check that the latest commits from origin are now in your local repository.

### 7. Review Updated Documentation

```bash
cat README.md
```

Look for version number changes and new features.

### 8. Return to Workspace Root

```bash
cd ..
```

## Handling Merge Conflicts

If you've customized Global Core files locally and a conflict occurs:

### Option 1: Preserve Your Changes (Recommended)

```bash
# Stash your local changes
git stash

# Pull updates
git pull origin main

# Reapply your changes
git stash pop

# Resolve conflicts manually in affected files
# Then commit the merged result
git add .
git commit -m "Merged latest Global Core with local customizations"
```

### Option 2: Accept Global Core Version

```bash
# Discard local changes and accept upstream
git reset --hard origin/main
```

**⚠️ Warning:** This discards all local modifications to Global Core files.

## Post-Update Actions

After updating Global Core:

1. **Review Changelog**: Check `global_core/README.md` for breaking changes
2. **Test Key Components**: Run a few Global Core scripts to ensure compatibility
3. **Update Dependencies**: If Global Core has new Python dependencies, install them
4. **Document**: Note the new version in your project logs if significant changes

## Example: Complete Update

```bash
# Full update workflow
cd "/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website/global_core"
git status
git fetch origin
git log HEAD..origin/main --oneline
git pull origin main
head -n 10 README.md
cd ..
```

## Troubleshooting

### "Not a git repository" Error

Global Core folder may be corrupted. Re-clone:

```bash
cd "/Users/macbookpro15/Documents/PANDY'S BOX/FLOWST8 OPERATIONS/AG - FLOWST8 Website"
rm -rf global_core
git clone https://github.com/nathanhubble/antigravity_global_core.git global_core
```

### "Permission denied" Error

Check GitHub authentication:

```bash
git config --get user.name
git config --get user.email
```

### Files Changed But No Updates Needed

You may have accidentally edited Global Core files. Check:

```bash
git diff
```

Either commit changes or reset to clean state.

## Best Practices

- ✅ **Update regularly** (monthly recommended)
- ✅ **Review changes** before pulling
- ✅ **Test after updating** to ensure compatibility
- ✅ **Avoid editing Global Core directly** (propose patches instead)
- ❌ **Don't pull during active projects** (finish current work first)
- ❌ **Don't skip conflict resolution** (resolve properly, don't ignore)

## Related Documentation

- Global Core integration guide: `GLOBAL_CORE_IN_THIS_WORKSPACE.md`
- Global Core README: `global_core/README.md`
- Proposing improvements: See `GLOBAL_CORE_IN_THIS_WORKSPACE.md` section "Proposing Improvements"

---

**Success Indicator:** After running this workflow, `git log -1` in the `global_core/` directory should show the latest commit from the main Global Core repository.
