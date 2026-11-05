# Reflective AI Fluency

A framework that extends Anthropic's 4D AI Fluency Framework with reflection and learning design, and the Claude skill built from it for Implement Consulting Group.

[![Download the skill](https://img.shields.io/badge/Download-reflective--ai--fluency.skill-1f6feb?style=for-the-badge)](https://raw.githubusercontent.com/sebastiannicolajsen/reflective-ai-fluency/main/dist/reflective-ai-fluency.skill)

To install, download the `.skill` file and add it in Claude under Settings > Capabilities > Skills (or open it from a Claude chat that offers a **Save skill** button). The file is rebuilt from `source/` by `scripts/build.py`; see below.

Start with [CONTRIBUTING.md](CONTRIBUTING.md). `source/` is the single source of truth. `evals/` holds the test cases and the runner. `archive/` holds superseded drafts.

## Building the skill

```bash
python3 scripts/build.py          # builds build/ and writes dist/reflective-ai-fluency.skill
python3 scripts/build.py --check  # exits non-zero if dist/ is out of date
```

- `source/` is the single source of truth. Never edit generated reference files.
- `skill/` holds the two hand-written files: `SKILL.md` and `references/review-protocol.md`.
- The build splits `source/` into the reference files, checks the skill (under 500 lines, valid frontmatter, every reference linked, no broken links) and zips it. The archive is reproducible, so `dist/` only changes when the content does.
- Commit `dist/` with the change that caused it. The download button points at it.

## Running the baseline

```bash
python3 evals/run_baseline.py            # all cases, conditions A and B
python3 evals/run_baseline.py B03 B09    # selected cases
python3 evals/run_baseline.py --with-skill   # adds condition C: the built skill
```

Outputs and grades land in `evals/runs/` (not tracked).
