# Reflective AI Fluency

A framework that extends Anthropic's 4D AI Fluency Framework with reflection and learning design, and the Claude skill built from it for Implement Consulting Group.

Start with [HANDOVER.md](HANDOVER.md). `source/` is the single source of truth. `evals/` holds the test cases and the runner. `archive/` holds superseded drafts.

## Running the baseline

```bash
python3 evals/run_baseline.py            # all cases, conditions A and B
python3 evals/run_baseline.py B03 B09    # selected cases
```

Outputs and grades land in `evals/runs/` (not tracked).
