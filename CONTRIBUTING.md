# Contributing

How we work in this repository: what the project is, which decisions are settled, how the files fit together, and what comes next. Read this before changing anything.

## What this project is

Reflective AI Fluency is a framework that extends Anthropic's 4D AI Fluency Framework (Delegation, Description, Discernment, Diligence). The goal is a Claude skill that partly stands in for the framework's author when they are not available. It must:

1. **First:** help peers understand and apply the framework to their own and clients' work. That covers explaining it, choosing a way of working per step (including no AI), assessing quality, reflecting, and arguing for its positions when challenged.
2. **Then:** help them design learning goals, exercises and learning journeys using the learning design foundation, throughout the design process (scoping, outcomes, evidence, practice, feedback, transfer, evaluation, review, iteration).
3. Work at every level, from novices in AI and learning design to experienced facilitators, and from a quick question to a full learning journey.
4. Know the frameworks and the learning theory deeply, but name theories and studies only when a peer asks, challenges, or works at a level where the name helps. Plain reasons by default; evidence surfaces as arguments when needed.

## How we work

- Be direct, with little filler. Challenge claims, including your own, and point out what is missing.
- Research before assuming something is novel or unsolved.
- English only.
- Write plainly: plain words, no slogans, no filler, parallel construction. Make claims two-sided where it fits (when something belongs and when it does not). Be honest about evidence strength.
- Every non-obvious claim carries a rating: **established** (peer-reviewed, replicated or meta-analytic evidence, possibly from a neighbouring field), **plausible** (strong evidence from a neighbouring setting, untested on AI-assisted work), **preprint** (AI-specific, not peer-reviewed), or **our judgement** (a design choice with no direct evidence). Evidence and sources go in `source/knowledge-base.md`, not in the skill body.
- Build the evals before the skill content, and re-run the full set whenever the framework or the model changes.

## Files

```
reflective-ai-fluency/
├── README.md                     # what this is, download, how to build
├── CONTRIBUTING.md               # this guide
├── CLAUDE.md                     # standing instructions for Claude Code
├── source/                       # single source of truth, human-edited
│   ├── manifest.md               # the framework
│   ├── learning-design-foundation.md   # 7 layers, 19 rules, 2 checks
│   ├── knowledge-base.md         # argument register, judgement register, contested points, sources
│   └── frameworks-reference.md   # 4D in depth, related frameworks, learning theory
├── skill/                        # the two hand-written skill files
│   ├── SKILL.md                  # router: mode and level, conduct, hold-the-line, limits
│   └── references/review-protocol.md
├── scripts/build.py              # builds and packages the skill
├── dist/                         # the packaged .skill file
├── evals/                        # test cases, runner, findings
└── archive/                      # superseded drafts
```

`source/` is the single source of truth. Change the framework, the foundation and the knowledge base there, then rebuild. Never edit generated reference files by hand; they carry a header that says so. Reference files that do not exist yet are listed in the roadmap.

## Settled decisions

Settled decisions change only after discussion with the maintainer, and the change is recorded here.

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
- **Edge case:** more human involvement is not always safer. Whether this generalises is open.

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
- Split it only if trigger tests show collisions with other skills, for example a workshop-design skill.
- `SKILL.md` stays a short router of under 500 lines. Knowledge lives in reference files that load on demand.

**Skill conduct**
- Ask before judging, with at most two questions before giving something of value.
- Lead with the two or three points that matter most.
- Quote the design or text it is reacting to.
- Label claims as established, plausible, preprint, or our judgement.
- Never give a total score and never praise by default.
- End with a decision for the user.
- **Hold the line under pushback.** Separate new information from social pressure, and never drop a flagged risk silently.
- Phrase the framework's judgement calls as "the framework's position (our judgement)", not as an impersonation of its author.

## Build and test

```bash
python3 scripts/build.py          # build, validate, write dist/reflective-ai-fluency.skill
python3 scripts/build.py --check  # fail if dist/ is out of date
python3 evals/run_baseline.py --with-skill   # run the cases under conditions A, B and C
```

Commit `dist/` together with the change that caused it. Eval outputs go to `evals/runs/` and are not tracked; write what they show into `evals/baseline-findings.md`.

Treat eval scores as signals. A model judge grades them, each case runs once, and the same condition has moved by eight points between runs. Hand-check a sample and repeat cases before drawing conclusions.

## Roadmap

1. **Firm up the baseline.** Repeat each case at least three times per condition. Replace cases that every condition passes with harder ones. Hand-label a sample of outputs to check the judge.
2. **Build the eval set.**
   - Trigger tests: 8–10 should-trigger and 8–10 near-miss queries, including collisions with workshop-design, reviewer, iterate and proposal-review skills.
   - Scenario tests across modes and levels.
   - Pressure tests over several turns.
   - 30–50 outputs labelled pass/fail with a short critique by a domain expert, plus a second rater on 20%.
3. **Capture knowledge from the framework's author:** three or four interviews of 60–90 minutes each.
   - A task breakdown.
   - Four to six real incidents, using the critical decision method.
   - The 20 pushbacks heard most often, with answers.
   - Labelling every claim as evidence or our judgement.
   - Output: `positions.md`, `worked-examples.md`, `contrasting-cases.md` and `worked-designs.md` reference files.
4. **Revise the skill** against the baseline failures: answer length, giving way under pressure, honouring format requests without repeating caveats, naming introspection tools, naming manager support.
5. **Iterate 3–5 rounds.** Run each eval with and without the skill, several times, on every model peers use. Optimise the description.
6. **Pilot** with 5–8 peers across levels for 3–4 weeks, then roll out. Re-run the evals whenever the framework or the model changes.

## Open questions

- Verify the wording of the 24 behaviours against Anthropic's tutorial. The manifest uses a published adaptation.
- Should understanding how models work be part of the manifest?
- Should responsibility and disclosure, or keeping one's own skill, become explicit quality dimensions?
- What, if anything, trains calibration?
- Test the choosing table on real work-process maps.
- Does the name hold?
- Spot-check the sources marked "not re-fetched", "secondary" or "abstract only" in the knowledge base.
- Check the description length limit for the actual upload path. Claude.ai's help article lists 200 characters; the platform docs allow 1,024.
- Licensing: the 4D framework is released under CC BY-NC-SA 4.0. Decide how this repository's license relates to it before publishing.
