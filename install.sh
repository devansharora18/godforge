#!/usr/bin/env bash
set -e
# godforge installer - adds AGENTS.md + .agents/skills/ to any repo
# Usage: curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash
#    or: bash <(curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh) [target-dir]

REPO="devansharora18/godforge"
BRANCH="main"
TARGET="${1:-.}"

if [ ! -d "$TARGET" ]; then
  echo "error: target directory '$TARGET' does not exist" >&2
  exit 1
fi

TMPDIR=$(mktemp -d)
trap 'rm -rf "$TMPDIR"' EXIT

echo "→ fetching godforge…"
# Try git clone first (works with private repos + auth), fallback to tarball
if git clone --depth 1 --branch "$BRANCH" "https://github.com/$REPO.git" "$TMPDIR" 2>/dev/null; then
  :
elif curl -fsSL "https://github.com/$REPO/archive/refs/heads/$BRANCH.tar.gz" 2>/dev/null | tar -xz -C "$TMPDIR" --strip-components=1 2>/dev/null; then
  :
else
  # fallback for local testing / offline: copy from script location if available
  SCRIPT_DIR="$(cd "$(dirname "$0")" 2>/dev/null && pwd)"
  if [ -f "$SCRIPT_DIR/AGENTS.md" ]; then
    cp -f "$SCRIPT_DIR/AGENTS.md" "$TMPDIR/AGENTS.md"
    mkdir -p "$TMPDIR/.agents/skills"
    cp -r "$SCRIPT_DIR/.agents/skills/." "$TMPDIR/.agents/skills/"
  elif [ -f "$SCRIPT_DIR/Agents.md" ]; then
    cp -f "$SCRIPT_DIR/Agents.md" "$TMPDIR/AGENTS.md"
    mkdir -p "$TMPDIR/.agents/skills"
    cp -r "$SCRIPT_DIR/.agents/skills/." "$TMPDIR/.agents/skills/"
  else
    echo "error: failed to fetch godforge (repo may be private - make it public or run with git credentials)" >&2
    exit 1
  fi
fi

SRC="$TMPDIR"

echo "→ installing to $TARGET…"
# Support both old (Agents.md) and new source layouts as input, but always install as AGENTS.md (canonical)
SRC_AGENTS=""
if [ -f "$SRC/AGENTS.md" ]; then SRC_AGENTS="$SRC/AGENTS.md"
elif [ -f "$SRC/Agents.md" ]; then SRC_AGENTS="$SRC/Agents.md"
fi
cp -f "$SRC_AGENTS" "$TARGET/AGENTS.md"
# Remove legacy duplicate if it exists from an older install
rm -f "$TARGET/Agents.md"

# Detect skills source (new: .agents/skills, legacy: skills)
SRC_SKILLS=""
if [ -d "$SRC/.agents/skills" ]; then SRC_SKILLS="$SRC/.agents/skills"
elif [ -d "$SRC/skills" ]; then SRC_SKILLS="$SRC/skills"
fi

mkdir -p "$TARGET/.agents/skills"
cp -r "$SRC_SKILLS/." "$TARGET/.agents/skills/"

# Ensure correct casing (SKILL.md not Skill.md)
for d in "$TARGET/.agents/skills"/*/; do
  if [ -f "$d/Skill.md" ] && [ ! -f "$d/SKILL.md" ]; then
    mv "$d/Skill.md" "$d/SKILL.md"
  fi
done

echo "✓ installed AGENTS.md + .agents/skills/ ($(ls -1 "$TARGET/.agents/skills" | wc -l) skills)"
echo "  - $TARGET/AGENTS.md"
echo "  - $TARGET/.agents/skills/"
