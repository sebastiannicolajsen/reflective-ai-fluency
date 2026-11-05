# Handover: Reflective AI Fluency skill

Nov 4, 2026 · Sebastian Nicolajsen (Implement Consulting Group)

## What this project is

Reflective AI Fluency is a framework that extends Anthropic's 4D AI Fluency Framework (Delegation, Description, Discernment, Diligence). The goal is a Claude skill that partly replaces Sebastian when he is not there. It must:

1. **First:** help peers understand and apply the framework to their own and clients' work. That covers explaining it, choosing a way of working per step (including no AI), assessing quality, reflecting, and arguing for its positions when challenged.
2. **Then:** help them design learning goals, exercises and learning journeys using the learning design foundation, throughout the design process (scoping, outcomes, evidence, practice, feedback, transfer, evaluation, review, iteration).
3. Work at every level, from novices in AI and learning design to experienced facilitators, and from a quick question to a full learning journey.
4. Know the frameworks and the learning theory deeply, but name theories and studies only when a peer asks, challenges, or works at a level where the name helps. Plain reasons by default; evidence surfaces as arguments when needed.

## Working with Sebastian

- He has a PhD in Computer Science and Education. He is a management consultant working on AI adoption and learning design.
- Be direct, with little filler. Spar and challenge; point out what he is missing.
- Research before assuming something is novel or unsolved.
- English only.
- Writing style for all documents: plain words, no slogans, no filler, parallel construction. Make claims two-sided where it fits (when something belongs and when it does not). Be honest about evidence strength.

## Files

```
reflective-ai-fluency/
├── HANDOVER.md                   # this brief
├── CLAUDE.md                     # standing instructions for Claude Code
├── source/                       # single source of truth, human-edited
│   ├── manifest.md               # the framework (draft 6)
│   ├── learning-design-foundation.md   # 7 layers, 19 rules, 2 checks (draft 2)
│   ├── knowledge-base.md         # argument register, judgement register, contested points, 85 sources
│   └── frameworks-reference.md   # 4D in depth, related frameworks, learning theory
├── evals/
│   ├── baseline-cases.md         # 19 baseline cases with assertions
│   └── baseline-runner.html      # runs cases via the Claude API in a claude.ai artifact preview
└── archive/                      # superseded drafts and the original uploads
```

The four full research reports are not in this zip. They live as artifacts in the original claude.ai chat, and their content is merged into `knowledge-base.md`. Add them under `research/` if you want them alongside.

## Settled decisions

**Framework (manifest draft 6)**
- **Two axes, with domain knowledge as a precondition under both.**
- **Ways of working:** single interaction, collaboration, workflow and agency, sorted by who sets the path. There is no ladder; the choice is made per step and can be no AI. It uses a choosing table plus step-down and re-test triggers.
- **Quality:** reflective quality (curiosity, noticing, reviewing, adjusting, carrying forward) and six dimensions that run from weaker to stronger, with no levels: reliability, proportionate checking, calibration, reasoning, adaptation and transfer.
  - Reliability counts errors found, not errors avoided.
  - Calibration needs outside feedback, because reflection alone does not sharpen it.
- **Traces** (two runs of the same task plus a stated reason) show changed behaviour. They do not measure reflective capacity.
- **Tools for introspection:** comparing two runs, debriefs, outside feedback, and reading back one's own conversations.
- **Satisficing is the default AI creates.** Fluency means ensuring quality, not assuming it.
- **Behaviours:** all 24 of the 4D behaviours count equally, not only the 11 that can be measured in a chat.
- **Edge case:** more human involvement is not always safer. Sebastian is not convinced this generalises.

**Learning design (foundation draft 2)**
- **Layers:** starting point, outcome, evidence, practice, feedback and reflection, transfer and environment, evaluation.
- **Cross-layer checks:** alignment (including the AI-use condition and its evidence) and an AI stress-test.
- **Learning versus performance:** they come apart when AI does the thinking. Each design element states which one it serves.
- **Theories with a reduced role:**
  - Constructive alignment is a check, not the spine.
  - SOLO and semantic waves are vocabulary only.
  - The zone of proximal development is replaced by expertise reversal.

**Skill architecture**
- One combined skill. Separate skills cannot share files and handoffs between them are untested.
- Split it only if trigger tests show collisions, for example with Implement's `workshop-design`.
- `SKILL.md` stays a short router of under 500 lines. Knowledge lives in reference files that load on demand.

Proposed structure:

```
reflective-ai-fluency/            # the skill
├── SKILL.md                      # route by mode and level; hold-the-line protocol; evidence labels; handoffs
└── references/
    ├── framework-core.md         # from manifest
    ├── ways-of-working.md        # choosing table, triggers, mini-cases
    ├── quality-and-traces.md     # dimensions, traces, introspection tools
    ├── positions.md              # Sebastian's decision rules + pushback responses (needs interviews)
    ├── worked-examples.md        # real cases, anonymised (needs material)
    ├── contrasting-cases.md      # weaker/stronger trace pairs (needs material)
    ├── arguments.md              # from knowledge-base: claim, reason, evidence, limits
    ├── frameworks-reference.md   # 4D, related frameworks, learning theory
    ├── design-rules.md           # from foundation
    ├── cross-layer-checks.md
    ├── review-protocol.md        # ask first, top 3 issues, no total score, end with a question
    └── worked-designs.md         # annotated real designs (needs material)
```

**Skill conduct**
- Ask before judging, with at most two questions before giving something of value.
- Lead with the two or three points that matter most.
- Quote the design or text it is reacting to.
- Label claims as established, plausible, preprint, or our judgement.
- Never give a total score and never praise by default.
- End with a decision for the user.
- **Hold the line under pushback.** Separate new information from social pressure, and never drop a flagged risk silently.
- Phrase Sebastian's judgement as "the framework's position (our judgement)", not as an impersonation.

## Next steps

1. **Run the baseline.** Run the 19 cases with no skill, and again with the manifest and foundation as context. Record the failures; they are the skill's specification.
   - In Claude Code, run them with `claude -p`, or with skill-creator's eval tooling.
   - The HTML runner only works inside a claude.ai artifact preview.
2. **Knowledge capture with Sebastian:** three or four interviews of 60–90 minutes each.
   - A task breakdown.
   - Four to six real incidents, using the critical decision method.
   - The 20 pushbacks he hears most, with his answers.
   - Labelling every claim as evidence or our judgement.
   - Output: `positions.md`, the worked examples and the contrasting cases.
3. **Build the eval set.**
   - Trigger tests: 8–10 should-trigger and 8–10 near-miss queries, including collisions with workshop-design, reviewer, iterate and proposal-qa-feedback.
   - Scenario tests across modes × levels.
   - Pressure tests over several turns.
   - 30–50 outputs that Sebastian labels pass/fail with a short critique, plus a second rater on 20%.
4. **Draft the minimum skill** that fixes the baseline failures. Generate the reference files from `source/` with a build script rather than editing them by hand.
5. **Iterate 3–5 rounds.** Run each eval with and without the skill, several times, on every model peers use. Optimise the description with skill-creator.
6. **Pilot** with 5–8 peers across levels for 3–4 weeks, then roll out to the organisation. Re-run the evals whenever the framework or the model changes.

## Open questions

- Verify the wording of the 24 behaviours against Anthropic's tutorial. The manifest uses a published adaptation.
- Should understanding how models work be part of the manifest?
- Should responsibility and disclosure, or keeping one's own skill, become explicit quality dimensions?
- What, if anything, trains calibration?
- Test the choosing table on real work-process maps.
- Does the name hold?
- Spot-check the sources marked "not re-fetched", "secondary" or "abstract only" in the knowledge base.
- Check the description length limit for the actual upload path. Claude.ai's help article lists 200 characters; the platform docs allow 1,024.
