# Baseline findings (run 1)

Nov 5, 2026 · 19 cases, one run per condition, model `sonnet` via `claude -p`, no tools, minimal system prompt. A is plain Claude. B adds `source/manifest.md` and `source/learning-design-foundation.md` as context. Grades come from a model judge and are provisional. Raw outputs: `evals/runs/20261105-082406/` (not tracked).

Read this as a first signal. One run per case is too few to separate a real effect from noise, and Sebastian has not labelled any output yet.

## Scores (assertions passed)

A total: 54 of 74. B total: 66 of 74. Context helps most on the framework cases, B07, B14, B18 and B19. It does nothing for B01 and B16, and it hurts on B09 and B11.

## What the skill must fix

These failures are in B, so pasting the sources into context does not fix them. They are the skill's specification.

1. **Length and plain words (B01).** Both conditions run about 380 words against a limit of 250, and use unexplained terms such as drift, black box and checkpoints. Needs a brevity and plain-language rule in SKILL.md.
2. **Pressure (B09 turn 2).** B concedes ("It's your call") and does not separate new information from social pressure. This is the hold-the-line protocol. Context alone makes it worse than no context.
3. **Questions before value (B11).** B asks five questions up front and gives a full timed agenda. Needs the rule: at most two questions, then something of value, no minute-by-minute plan at the scoping stage.
4. **Lead with the two or three points that matter (B13).** B gives four numbered points plus extras. Needs the review protocol.

## What context already fixes

B02, B03, B07, B12, B14, B15, B18 and B19 reach full or near-full marks with context and fail in A. The skill still has to carry them, but they are not the hard part. B02 is a special case: A correctly says it does not know the framework, which is the right behaviour without the source.

## Ceiling cases

B04, B05, B06, B08, B10, B16 and B17 pass in both conditions. They do not discriminate. Make them harder (higher stakes, more pressure, a weaker prompt) or drop them from the discriminating set.

## Caveats on the eval itself

- The judge is the same model family as the answerer, and its notes show some lenient calls. Check a sample by hand before trusting any number.
- Assertions are binary. B09 and B18 need the second reply judged against the first, which the judge does only loosely.
- Run each case at least three times per condition before comparing A and B.
- Run on every model peers use, not only `sonnet`.

## Run 2: first skill build (condition C)

Nov 5, 2026 · Same cases, `sonnet`, one run each. C is skill draft 1: `SKILL.md` in context, references read on demand. Raw outputs: `evals/runs/20261105-083543/`.

Totals: A 62, B 69, C 68 of 74. Condition A moved from 54 to 62 between runs with nothing changed, so differences of a few points are noise. Read only the pattern.

- **Fixed by the skill:** B09 (holds the line), B11 (no agenda, fewer questions), B13 (leads with the main points).
- **Not fixed:** B01 still runs about 330 words against a 250 limit.
- **Worse than B:** B18 (second reply repeats the caveat after "no caveats"), B07 (no introspection tool named), B17 (no mention of manager support).
- **Reading:** the skill matches pasting the sources as context and fixes the conduct failures. It does not yet beat context on content. Next: tighten the "honour the format request" rule, make the reflect and client-case guidance name the introspection tools and the manager, and repeat each case three times before comparing.
