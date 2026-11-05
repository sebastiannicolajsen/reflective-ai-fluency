# CLAUDE.md

Project: the Reflective AI Fluency framework and skill. Read CONTRIBUTING.md first.

- `source/` is the single source of truth. Change the framework, the foundation and the knowledge base there, then rebuild with `python3 scripts/build.py`. Never edit generated files by hand.
- English only. Write plainly and directly: no slogans, no filler, parallel construction, and claims made two-sided where that fits.
- Every non-obvious claim carries a rating: established, plausible, preprint, or our judgement. Evidence and sources go in `source/knowledge-base.md`, not in the skill body.
- Theory names appear in skill output only when a user asks, challenges, or works at expert level.
- Build evals before writing skill content. Re-run the full eval set whenever the framework or the model changes.
- Keep SKILL.md under 500 lines; put knowledge in reference files that are linked directly from SKILL.md.
- Do not change a settled decision in CONTRIBUTING.md without asking the maintainer first.
- Do not put personal information about contributors in the repository. Keep working notes about individuals out of tracked files.
