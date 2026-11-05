# Reflective AI Fluency: Knowledge base (draft 1)

Nov 4, 2026 · Sebastian Nicolajsen

This is the combined evidence register for the framework, the learning design foundation and the skill. It merges four research passes (verification of the educational theory, the evidence base for the design principles, the learning-design foundation research, and the skill-design research). It is the source from which the skill's argument file will be built.

## How to use it

- **Entries are arguments.** Each states a claim, the plain argument a peer would accept, the evidence, a rating, the limits, and source IDs.
- **IDs.** F = framework, L = learning design (numbered to match the foundation's rules where possible), K = the skill's own behaviour, C = contested points and edge cases, J = our judgement, S = sources.
- **Ratings.** Established (peer-reviewed, replicated or meta-analytic, possibly from a neighbouring field) · Plausible (strong neighbouring evidence, untested on AI-assisted work) · Preprint (AI-specific, not peer-reviewed) · Thin (single small studies or grey literature) · Our judgement (no direct evidence).
- **When the skill surfaces an argument.** When the peer challenges a position, when a design choice is contested, when the peer asks why, or when the peer works at expert level. Plain argument first; evidence second; source names only on request or when they help.
- **Verification.** Sources marked "not re-fetched" or "secondary" need a spot-check before being quoted outside Implement.

## Contents

- A. Framework arguments (F01–F22)
- B. Learning design arguments (L01–L21)
- C. Skill behaviour arguments (K01–K07)
- D. Contested points and edge cases (C01–C09)
- E. Judgement register (J01–J12)
- F. Open questions
- G. Sources (S01–S85)

---

## A. Framework arguments

**F01 Fluency is behaviour, not knowledge**
- Claim: Fluency shows in what people do with AI in their work, not in what they know about it.
- Argument: You can know the 4Ds and still accept polished output unchecked. What matters is the decision and the check on a real step.
- Evidence: Most published AI-literacy scales are self-report (13 of 16 in a systematic review; 3 performance-based), so knowing and self-rating are what gets measured, not practice. In training research, how much people liked a course or what they knew right after it predicts later behaviour only weakly.
- Rating: Plausible.
- Limits: Some knowledge about how models fail may be a prerequisite for good behaviour (open question).
- Sources: S28, S48, S02.

**F02 Fluency lives in one's own context**
- Claim: Fluency is built on one's own tasks and domain.
- Argument: Where AI helps and where it fails differs by task. You learn where the edge is only on tasks you know.
- Evidence: Expertise is domain-bound. In the BCG field experiment (758 consultants), AI improved work inside its capability frontier and made people 19 percentage points less likely to be correct outside it, and the frontier was hard to see. A preprint competency model proposes that judging AI output is bounded by domain knowledge.
- Rating: Established for domain-bound expertise; plausible for AI fluency.
- Limits: Some transferable habits (asking for alternatives, checking sources) work across domains.
- Sources: S71, S05, S27.

**F03 Domain knowledge is a precondition**
- Claim: You can only catch errors you can recognise; judging AI output outside your domain is guessing.
- Argument: Careful process does not replace knowing what right looks like.
- Evidence: In WildChat transcripts, novices' failures were mostly invisible to them, while fluent users' failures were visible and recoverable. Novices debugging ML code were often led by the model rather than leading it. Domain scientists using a structured error schema caught issues they had overlooked. Trained linguists over-trusted fluent AI text.
- Rating: Established in general (expertise research); preprint for AI-specific findings.
- Limits: Domain knowledge is necessary, not sufficient: experts also show automation complacency.
- Sources: S04, S16, S17, S20, S12, S71.

**F04 Fluency is awareness of AI inclusion and exclusion**
- Claim: Knowing where AI does not belong is as much part of fluency as using it well.
- Argument: AI makes some steps better and some worse. Choosing no AI is a decision, not a gap in skill.
- Evidence: Across 106 experiments, human-AI combinations did worse on average than the better of human or AI alone (g = −0.23), and worse on decision tasks. Outside the frontier, consultants with AI did worse. Experienced developers were 19% slower with AI on their own repositories while believing they were 20% faster. Danish register data showed no measurable effect on earnings or hours. Other trials show clear gains (writing tasks about 40% faster; support agents about 14% more productive).
- Rating: Established that effects are mixed and task-dependent.
- Limits: Productivity results date quickly as models improve.
- Sources: S06, S05, S30, S31, S32, S33.

**F05 Checking matches the stakes, not the polish**
- Claim: Fluent people check where an error would be costly, whatever the output looks like.
- Argument: Polished output lowers checking exactly where it should rise.
- Evidence: In the AI Fluency Index, conversations that produced finished artifacts showed less checking: fewer flagged missing context (−5.2 points), checked facts (−3.7) or questioned reasoning (−3.1). Fluent text is judged truer in lab studies. People preferred reasoning formats that did not best support error detection, with high trust and low willingness to verify. Automation complacency and bias are well documented; both over- and under-reliance are failures.
- Rating: Established for automation and fluency effects; correlational for the AI-specific data.
- Limits: In the Index, artifact tasks may be checked outside the chat (for example by running code).
- Sources: S02, S63, S19, S12, S13, S79.

**F06 No single way of working is the goal; choose per step**
- Claim: The way of working is chosen per step, and no way is better in itself.
- Argument: Steps differ in how checkable and reversible they are. One choice for a whole task hides the risky step.
- Evidence: Automation research recommends choosing the level of automation per function (gathering information, analysing, deciding, acting), not per system.
- Rating: Established for per-function choice; our four categories are our judgement.
- Limits: No study trains the choice among our four ways.
- Sources: S64, S05; J01, J02.

**F07 Workflow and agency differ in what you can inspect**
- Claim: A workflow exposes every step; agency exposes goals, boundaries and results.
- Argument: Use a workflow where the path must be repeatable and auditable; agency where the path cannot be set in advance and results can be checked.
- Evidence: Mirrors Anthropic's own distinction between predefined workflows and self-directing agents.
- Rating: Our judgement.
- Sources: J01.

**F08 Autonomy grows with capability and judgement; re-test**
- Claim: More can be handed over as models improve, but only as far as you can judge the result.
- Argument: Yesterday's limits are not today's, and today's checks may not catch tomorrow's errors.
- Evidence: The capability frontier is uneven and moving; productivity studies date within a year.
- Rating: Plausible.
- Sources: S05, S30; J03.

**F09 Satisficing is the default AI creates**
- Claim: With AI, people tend to accept the first acceptable output.
- Argument: The output always looks fine and the model rarely says what is missing, so stopping early feels free.
- Evidence: In the Index, 14.3% of conversations had no iteration. In one course dataset, 3.8% of student turns were verification (labels assisted by a model). In an experiment, once people handed over an answer they did so again on the next item about 70% of the time without feedback. A vendor-linked survey found 40% of desk workers had received low-quality AI output from colleagues in the past month, each costing almost two hours.
- Rating: Plausible for the phenomenon; thin for interventions.
- Limits: Simon described satisficing as adaptive under limits (C02).
- Sources: S62, S02, S26, S07, S34.

**F10 Getting better needs deliberate tools**
- Claim: Using AI does not teach fluency by itself; people improve when their practice is made visible to them.
- Argument: AI can raise today's output while leaving the person's own judgement unchanged. Comparing runs, debriefs and outside feedback show what to change.
- Evidence: Students with unguarded AI performed 48% better in practice and 17% worse on a later unaided exam; a guarded tutor avoided the harm. Short feedback on how people had used an assistant halved answer handing-over and improved unaided performance (preprint, N = 704). A preprint meta-analysis in programming found productivity gains during AI use with no significant learning effect. Practice volume alone explains little performance in professions.
- Rating: Established (field experiment) plus preprint.
- Sources: S08, S07, S84, S61, S10.

**F11 Reflection improves practice more than self-knowledge**
- Claim: Reflecting makes the next attempt better but does not reliably tell people how good their judgement is.
- Argument: You cannot see your own blind spots by looking harder at them.
- Evidence: Deliberate reflection raised diagnostic accuracy without changing confidence or calibration. Feedback on AI use changed behaviour without improving measured metacognitive accuracy (preprint). AI improved performance without improving metacognition. In training research, metacognition related only weakly to learning (ρ = .16).
- Rating: Established in medicine; preprint for AI.
- Sources: S44, S07, S73, S45.

**F12 Traces show changed behaviour with a reason**
- Claim: A trace (two runs with a stated reason) is the evidence we can see; it does not by itself measure reflective capacity.
- Argument: One output can be made by AI; a reasoned change is harder to fake and is what we want to grow.
- Evidence: Process evidence resists AI better than single artefacts, but reflections can be written by AI and rubrics reward polish.
- Rating: Our judgement, informed by assessment research.
- Sources: S25, S21, S20; J05.

**F13 Reliability counts errors found, not errors avoided**
- Claim: Visible, recovered failures are a sign of fluency.
- Argument: People who push further meet more failures. A clean record often means the failures went unseen.
- Evidence: Fluent users had more failures but more visible ones; novices' failures were mostly invisible. Training that encourages errors improves performance on new tasks.
- Rating: Preprint plus established analogy.
- Sources: S04, S35.

**F14 Proportionate checking**
- Claim: Checking should match what an error would cost.
- Argument: Too little checking lets costly errors through; too much wastes the gain and can make results worse.
- Evidence: Over- and under-reliance are both failures. Forcing people to think before seeing AI advice reduced over-reliance but was disliked and helped mainly people who enjoy effortful thinking. Several interventions reduced over-reliance at the cost of useful reliance and did not improve appropriate reliance overall.
- Rating: Established that calibration matters; contested which interventions produce appropriate reliance; thin for training it.
- Sources: S12, S13, S14, S15, S79.

**F15 Calibration**
- Claim: Knowing how often you and the AI are right is a separate part of quality, and checking depends on it.
- Argument: You cannot match checks to stakes without knowing how far to trust your own judgement and the AI's output.
- Evidence: Higher confidence in AI went with less critical thinking, higher self-confidence with more (survey of 319 knowledge workers). Perceived confidence strongly predicted handing answers over (preprint). Reflection did not improve calibration. Nothing reviewed reliably trains calibration.
- Rating: Established concept; thin for training.
- Sources: S09, S07, S13, S44.

**F16 Reasoning**
- Claim: Being able to say why, and what would change the choice, marks stronger practice.
- Argument: A reason can be challenged and improved; a habit cannot.
- Evidence: Explaining one's own reasoning improves learning (meta-analysis). AI explanations framed as questions improved people's logical discernment. Model justifications often do not help people tell right from wrong answers, so a person's reasoning cannot be outsourced to the model's.
- Rating: Established (education); preprint for AI.
- Limits: People produce fluent after-the-fact reasons; ask what would change the choice.
- Sources: S77, S78, S18, S19.

**F17 Adaptation**
- Claim: Practice on the same task should change when the output or conditions change.
- Evidence: Error-management training produced its largest gains on structurally new tasks (d = 0.80). The capability frontier is uneven.
- Rating: Plausible.
- Sources: S35, S05.

**F18 Transfer**
- Claim: Learning should carry to new tasks and other ways of working.
- Evidence: Far transfer is rare without deliberate bridging. Transfer of judgement-based skills depends on the work environment.
- Rating: Established in general; thin for transfer across ways of working.
- Sources: S60, S47.

**F19 Required quality rises with autonomy and stakes**
- Claim: The later you would see an error and the more it costs, the more quality you need.
- Argument: In collaboration you see errors as they happen; in agency only at checkpoints.
- Evidence: Consistent with automation research on monitoring and complacency.
- Rating: Our judgement, plausible. See edge case C01.
- Sources: S12, S64.

**F20 All 24 behaviours count**
- Claim: The 13 behaviours outside the conversation matter as much as the 11 measured in chat.
- Argument: Being open about AI's role and considering the consequences of releasing work happen around the work and carry the most risk.
- Evidence: Anthropic measured only the 11 visible in chat and itself described some of the others as among the most consequential.
- Rating: Framework definition.
- Limits: The list in the manifest follows a published adaptation; verify wording.
- Sources: S02, S03, S01.

**F21 Description has two moments: framing and steering**
- Claim: Specifying the task up front and steering it during the work are different.
- Evidence: A preprint competency model argues 4D fuses them; its evidence comes from simulated learners only.
- Rating: Preprint; our answer is our judgement.
- Sources: S27.

**F22 Keeping one's own skill**
- Claim: Fluency includes protecting the skills you need to judge AI.
- Evidence: Clinicians who had used AI assistance in colonoscopy performed worse when working without it (peer-reviewed). Unguarded AI harmed later unaided exam performance. An EEG preprint suggests reduced engagement with AI-assisted writing (small sample, preliminary).
- Rating: Plausible; currently covered only by stance statement 3.
- Sources: S74, S08, S72.

---

## B. Learning design arguments

Numbers L01–L03 and L05–L17 match the foundation's rule numbers. L04 is rule 4. L18 is rule 18, L19 rule 19, L20 the alignment check, L21 the dropped theories.

**L01 Support per way of working (rule 1)**
- Evidence: Meta-analysis of 60 experiments (N = 5,924): low-prior-knowledge learners gained from high support (d = 0.505), high-prior-knowledge learners from low support (d = −0.428); the effect is asymmetric. Rating: established; mostly students. Sources: S36, S58.

**L02 Judgement practice in a known domain (rule 2)**
- Evidence: as F02 and F03. Rating: established in general; preprint for AI. Sources: S71, S04, S17, S27.

**L03 Outcomes as behaviour in a named way of working (rule 3)**
- Evidence: Transfer of judgement-based skills is more sensitive to motivation and work environment than transfer of procedural skills (89 studies). Rating: plausible; wording is our judgement. Sources: S47.

**L04 Learning versus performance (rule 4, foundation section 3)**
- Claim: What people show during assisted practice differs from what they retain.
- Argument: When AI does the thinking, the work improves and the learner's own construction does not happen.
- Evidence: Learning and performance are distinct in cognitive psychology. Unguarded AI raised practice performance 48% and lowered later unaided exam performance 17%; guarded tutoring avoided the harm. A ChatGPT group improved essay scores most without differences in knowledge gain or transfer. Metacognitive feedback on AI use improved unaided performance (preprint).
- Rating: Established. Sources: S70, S08, S10, S07.

**L05 Evidence a trace AI cannot produce alone; AI stress-test (rule 5)**
- Evidence: AI-written exam answers went undetected in 94% of cases and outscored 83.4% of random sets of real students. Stated AI rules are discursive; validity needs structural task change. A writing rubric gave LLM essays 18.35 points more, 44.7% of the gap from orthography and register. Stress-testing tasks against AI is reported as routine in one module (preprint). Rating: established for the problem; preprint for patterns. Sources: S21, S22, S20, S25, S23, S24.

**L06 Two runs and a reason (rule 6)**
- Evidence: as F12. Rating: our judgement. Sources: S25, S26.

**L07 Whole tasks from own work, varied (rule 7)**
- Evidence: Whole-task programmes, d = 0.79 (meta-analysis, mostly education). Critical-thinking instruction, g = 0.30 overall (341 effects), stronger with authentic problems, discussion and mentoring. Rating: established in education; plausible for consulting. Sources: S37, S38.

**L08 Errors on purpose, with clear signals (rule 8)**
- Evidence: 24 studies, N = 2,183, d = 0.44 overall, d = 0.80 on structurally new tasks, d = 0.20 on similar tasks; not significant where feedback was unclear; 21 of 24 studies on software. Rating: established. Sources: S35.

**L09 Good and poor examples, including no-AI (rule 9)**
- Evidence: Behaviour modelling, 117 studies: transfer greatest with mixed positive and negative models, trainee-generated scenarios and manager involvement. Human-AI combinations average g = −0.23. Rating: established. Sources: S39, S06.

**L10 Mixing decisions between ways of working (rule 10)**
- Evidence: Interleaving, 59 papers, N = 8,466, g = 0.42 (0.29 bias-adjusted); benefit only for similar categories shown close together; none for expository text. Rating: plausible analogy. Sources: S41.

**L11 Discussion of real cases led by a fluent practitioner (rule 11)**
- Evidence: Dialogue, authentic problems and mentoring each helped critical thinking; combined most effective (g = 0.57 for 19 studies in a secondary summary; verify). Rating: established in education. Sources: S38.

**L12 Structured debriefs (rule 12)**
- Evidence: 46 samples, N = 2,136, about 25% improvement over controls (d = .67), larger when facilitated and structured. Rating: established. Sources: S40.

**L13 Structured reflection on complex cases (rule 13)**
- Evidence: Reflection helped diagnosis on complex cases, not simple ones. Guided reflection meta-analysis of five studies, g = 0.365 (abstract only). Some null student studies. Rating: established in medicine. Sources: S42, S43.

**L14 Outside feedback for calibration (rule 14)**
- Evidence: as F11 and F15. Rating: established in medicine; preprint for AI. Sources: S44, S07, S09.

**L15 Feedback on task and next step (rule 15)**
- Evidence: Feedback effects large on average with wide variation (d ≈ 0.48 in a 2020 meta-analysis); over a third of feedback interventions lowered performance, especially those aimed at the self. Rating: established; not re-fetched. Sources: S50.

**L16 Safety to report AI errors (rule 16)**
- Evidence: Psychological safety predicts learning behaviour in teams. Rating: established in general; not re-fetched. Sources: S51.

**L17 Plan first real use (rule 17)**
- Evidence: If-then plans, 642 tests, .27 ≤ d ≤ .66, sample-weighted average d = .36 (the often-cited d = 0.65 comes from an earlier 94-test review). Transfer depends on environment and manager support. Rating: established; environment correlational. Sources: S46, S47.

**L18 Return after a gap (rule 18)**
- Evidence: Spacing improves retention (meta-analysis); spaced sessions were more effective in leadership training. Rating: plausible for judgement skills; not re-fetched. Sources: S52.

**L19 Evaluate by traces, collect usefulness ratings (rule 19)**
- Evidence: 34 studies: enjoyment ratings related weakly to later behaviour; usefulness ratings more strongly. Most AI-literacy scales are self-report. Rating: established. Sources: S48, S28.

**L20 Alignment as a check, not a method**
- Evidence: Constructive alignment is a design logic, not an empirically tested intervention; critiques say audit-style use creates an illusion of quality control and narrows learning. Rating: plausible. Sources: S56.

**L21 What was dropped and why**
- SOLO: grades responses, not behaviour over time; mixed rater reliability (S57).
- Semantic waves: descriptive evidence from schools and universities; no trials with working adults (S55, S54).
- Zone of proximal development: hard to operationalise; expertise reversal is better evidenced (S58, S36).
- 70-20-10: the percentages rest on executives' self-reports (S49).
- Andragogy: assumptions largely untested; not used as justification.
- Productive failure: g = 0.36 for conceptual knowledge, no effect on procedures; conceptual goals only (S53).
- Deliberate practice: explains under 1% of performance variance in professions (S61).
- "OK plateau": a popular-science metaphor, not evidence (C07).

---

## C. Skill behaviour arguments

**K01 AI review of learning designs is moderately reliable and tends to over-praise**
- Evidence: A reasoning model agreed moderately with a human standard on 32 lesson plans (α = .689, 73.8% exact agreement), weaker on complex constructs. Structured prompts produced evaluations comparable to experts; unstructured ones did worse. LLM-written feedback was identifiable by over-praise. Expert disagreements reflected different reasoning, not just errors. No study validates LLM judgements of SOLO levels or constructive alignment. Rating: plausible to established. Sources: S65, S66.
- Implication: ask before judging; use named checks; quote the design; state confidence; no total score.

**K02 Sycophancy rises under pushback**
- Evidence: In Anthropic's analysis of personal-guidance conversations, sycophancy occurred in 18% of conversations with pushback against 9% without. Experts disagree on which behaviours count as sycophancy, including implicit forms such as omitting criticism. Rating: established for the pattern. Sources: S67, S66.
- Implication: hold-the-line protocol: separate new information from pressure; never drop a flagged risk silently.

**K03 Curated, focused skills help; exhaustive or self-generated ones do not**
- Evidence: Curated skills raised average pass rate from 33.9% to 50.5% across 87 tasks; focused skills with few modules beat exhaustive bundles; self-generated skills gave no benefit in an earlier version. Rating: preprint; deterministic tasks. Sources: S69.

**K04 LLM judges need validation against expert labels**
- Evidence: Exact-match agreement overstated chance-corrected agreement by 33.8 to 41.3 points; an "85% agreement" judge corresponded to κ ≈ 0.48. Critique shadowing with one principal expert reached high agreement in one reported case. Rating: preprint and practitioner. Sources: S80.

**K05 Directive help with one good question suits busy professionals**
- Evidence: In a classroom trial, tutors approved 76.4% of an AI tutor's drafts with minimal edits; edits mostly slowed Socratic questioning that outlasted students' patience. Rating: thin for consultants. Sources: S83.

**K06 Tacit expertise is best captured through structured interviews about real incidents**
- Evidence: In a review of 35 studies on expert clinical decision-making, 31 used cognitive task analysis interviews, 23 the critical decision method. Transfer to skill writing is untested. Sources: S82.

**K07 Heavy skills can make simple tasks worse**
- Evidence: Preprints report skill-induced failures and lower performance on easier tasks with expert skills. Rating: preprint. Sources: S69.
- Implication: a light path for quick questions.

---

## D. Contested points and edge cases

**C01 More human involvement is not always safer.** Human-AI combinations averaged worse than the better of the two (g = −0.23); gains where the human alone was better (g = +0.46), losses where the AI alone was better (g = −0.54). Forcing human deliberation still left human+AI below AI alone in one study. Status: edge case in the manifest; whether it generalises is open. Sources: S06, S14.

**C02 Satisficing as default trap versus adaptive choice.** Simon framed satisficing as rational under limits. The manifest treats it as the failure mode of quality. Reconciliation: low-stakes steps justify stopping early (proportionate checking); the failure is accepting good enough on work that matters without having chosen to. Sources: S62.

**C03 Levels versus dimensions.** Dimensions running weaker to stronger are still ordinal. The field leans away from levels (revised AI Assessment Scale drawn as a circle; OECD framework uses domains). Sources: S23, S29.

**C04 Reflection as a quality versus a separable skill.** Evidence that reflection changes behaviour without improving self-knowledge suggests the two should be separated. The manifest keeps reflection as a quality, adds calibration as a dimension, and treats traces as behaviour evidence. Sources: S07, S44, S73.

**C05 Description: one competency or two skills.** See F21. Sources: S27.

**C06 Stated AI-use conditions versus structural design.** Scales that label permitted AI use are useful for dialogue but do not secure validity alone. Sources: S22, S23.

**C07 "OK plateau".** Popular coinage built on stage models of skill; not an empirical construct. Use as metaphor only.

**C08 Constructive alignment.** Widely used; criticised as an audit tool and for narrowing learning. Kept as a check. Sources: S56.

**C09 Productivity evidence is mixed.** Strong task-level gains in controlled trials; slowdowns for experienced developers on familiar code; null effects in national register data; downstream costs of low-quality output. Sources: S30, S31, S32, S33, S34.

---

## E. Judgement register

These are design choices without direct evidence. The skill says "our judgement" when it uses them.

- **J01** Four ways of working sorted by who sets the path, splitting Automation into single interaction and workflow.
- **J02** The questions and order of the choosing table, including the domain question.
- **J03** Step-down and re-test triggers.
- **J04** The six quality dimensions as a set, including calibration and the Adaptation versus Transfer split.
- **J05** Two runs with a stated reason as the core evidence of changed practice.
- **J06** The four tools for introspection.
- **J07** Domain knowledge as a precondition rather than a dimension.
- **J08** Quality assessed within a way of working.
- **J09** Treating all 24 behaviours as equal.
- **J10** The fourth alignment element: the AI-use condition and its evidence.
- **J11** Learning design details: the discussion lead should be fluent in the way of working; beginners see a good example before a poor one; seeded errors must be realistic; mixing ways of working by analogy.
- **J12** Skill conduct: names only when probed, ask before judging, at most two questions before giving value, no total scores.

---

## F. Open questions

- Verify the wording of the 24 behaviours against Anthropic's tutorial (the manifest uses a published adaptation).
- Should understanding how models work be part of the manifest?
- Should responsibility and disclosure, or keeping one's own skill, become explicit quality dimensions?
- What, if anything, trains calibration?
- Test the choosing table on real work-process maps.
- Does the name hold?
- Spot-check sources marked "not re-fetched", "secondary" or "abstract only".

---

## G. Sources

Status: PR = peer-reviewed · PP = preprint · IR = industry report · GL = grey literature · SEC = secondary source · NR = not re-fetched in these research passes.

**AI fluency and AI use**
- S01 Dakan, R. & Feller, J., with Anthropic. AI Fluency Framework. aifluencyframework.org; HEA edition (Dec 2025). Framework.
- S02 Anthropic (2026). The AI Fluency Index. Anthropic Education Report, 23 Feb 2026. IR.
- S03 AI Literacy Foundation (2026). Understand How AI Behaves: the 24 fluency behaviors. Adaptation of the 4D tutorials, CC BY-NC-SA 4.0. SEC.
- S04 Potts, C. & Sudhof, M. (2026). A paradox of AI fluency. arXiv:2604.25905. PP.
- S05 Dell'Acqua, F. et al. (2023). Navigating the jagged technological frontier. HBS Working Paper 24-013; reported published in Organization Science. PR status SEC.
- S06 Vaccaro, M., Almaatouq, A. & Malone, T. (2024). When combinations of humans and AI are useful. Nature Human Behaviour 8, 2293–2303. PR.
- S07 Maier, Schwabe, Schneider & Feuerriegel (2026). Designing against deskilling: metacognitive feedback reduces cognitive offloading to LLM assistants. arXiv:2609.20143. PP.
- S08 Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. PNAS 122(26), e2422633122. PR.
- S09 Lee, H.-P. et al. (2025). The impact of generative AI on critical thinking. CHI '25. PR.
- S10 Fan, Y. et al. (2025). Beware of metacognitive laziness. BJET 56(2), 489–530. PR.
- S11 Tankelevitch, L. et al. (2024). The metacognitive demands and opportunities of generative AI. CHI '24. PR.
- S12 Parasuraman, R. & Manzey, D. H. (2010). Complacency and bias in human use of automation. Human Factors 52(3), 381–410. PR, NR.
- S13 Lee, J. D. & See, K. A. (2004). Trust in automation. Human Factors 46(1), 50–80. PR, NR.
- S14 Buçinca, Z., Malaya, M. B. & Gajos, K. Z. (2021). To trust or to think. PACM HCI 5(CSCW1), Art. 188. PR.
- S15 Bo, J. Y., Wan, S. & Anderson, A. (2025). To rely or not to rely? CHI 2025. PR.
- S16 Bo, J. Y., Kazemitabaar, M., Zhuang, E. & Anderson, A. (2025). Who's the leader? arXiv:2505.08063. PP.
- S17 Martin-Boyle, A. et al. (2026). An expert schema for evaluating LLM errors in scholarly QA systems. CHI 2026. PR.
- S18 Zhu, X. et al. (2026). Justified or just convincing? Error verifiability as a dimension of LLM quality. arXiv:2604.04418. PP.
- S19 Lim, J., Shin, S. & Hong, S. (2026). Do reasoning representations help humans evaluate LLM outputs? arXiv:2609.09038. PP.
- S20 Park, S. & Han, Y.-S. (2026). When LLM essays outscore student essays. arXiv:2601.19913. PP.
- S26 McNichols, H., Ikram, S. & Lan, A. (2026). The StudyChat dataset. LAK26. PR.
- S27 Apartsin & Aperstein (2026). Framing, judging, steering. arXiv:2606.05983. PP.
- S28 Lintner, T. (2024). A systematic review of AI literacy scales. npj Science of Learning 9:50. PR.
- S29 OECD & European Commission (2026). Empowering learners for the age of AI: AI literacy framework, final version June 2026. GL.
- S30 Becker, J., Rush, N., Barnes, E. & Rein, D. (2025). Measuring the impact of early-2025 AI on experienced open-source developer productivity. arXiv:2507.09089. PP.
- S31 Humlum, A. & Vestergaard, E. (2025). Large language models, small labor market effects. NBER/BFI working paper; SSRN 5219933. GL.
- S32 Noy, S. & Zhang, W. (2023). Science 381, 187–192. PR, NR.
- S33 Brynjolfsson, E., Li, D. & Raymond, L. (2025). Generative AI at work. QJE 140(2). PR, NR.
- S34 Niederhoffer, K. et al. (2025). AI-generated "workslop" is destroying productivity. HBR, 25 Sep 2025. GL.
- S63 Reber, R. & Schwarz, N. (1999). Consciousness and Cognition 8(3); Alter, A. & Oppenheimer, D. (2009). PSPR 13(3). PR, NR.
- S64 Parasuraman, R., Sheridan, T. & Wickens, C. (2000). A model for types and levels of human interaction with automation. IEEE SMC-A 30(3). PR, NR.
- S71 Chi, M., Glaser, R. & Farr, M. (Eds.) (1988). The Nature of Expertise. NR.
- S72 Kosmyna, N. et al. (2025). Your brain on ChatGPT. arXiv:2506.08872. PP.
- S73 Fernandes et al. (2026). AI makes you smarter but none the wiser. Computers in Human Behavior 175. PR, SEC (as cited in S07).
- S74 Budzyń, K. et al. (2025). Lancet Gastroenterology & Hepatology 10(10), 896–903. PR, SEC.
- S75 Sun et al. (2025). Journal of Applied Psychology 110(12). PR, SEC.
- S76 Guo, L. (2022). Metacognitive prompts in computer-based learning. JCAL 38(3). PR, NR.
- S77 Bisra, K. et al. (2018). Self-explanation meta-analysis. EPR 30(3). PR, NR.
- S78 Danry, V. et al. (2023). CHI 2023. PR, NR.
- S79 Goddard, K., Roudsari, A. & Wyatt, J. (2012). Automation bias: a systematic review. JAMIA 19(1). PR, NR.
- S84 Maier, Gunzenhäuser, Schweisthal, Schneider & Feuerriegel (2026). Meta-analysis of generative AI in programming. arXiv:2605.04779. PP.
- S85 OpenAI Academy courses; OpenAI Teen AI Literacy Blueprint (Nov 2025). GL.

**Assessment and alignment**
- S21 Scarfe, P. et al. (2024). A real-world test of AI infiltration of a university examinations system. PLOS ONE 19(6). PR.
- S22 Corbin, T., Dawson, P. & Liu, D. (2025). Talk is cheap. Assessment & Evaluation in Higher Education 50(7). PR.
- S23 Perkins, M., Furze, L., Roe, J. & MacVaugh, J. (2024). The AI Assessment Scale. JUTLP 21(6); Perkins, Roe & Furze (2025) JUTLP 22(7); Furze et al. (2024) AJET 40(4). PR.
- S24 Liu, D. & Bridgeman, A. Two-lane approach. Teaching@Sydney (2024–2025). GL.
- S25 Islam & Roelleke (2026). The X1-X2-X3 assessment pattern. arXiv:2608.12351. PP.
- S56 Biggs, J. (1996). Higher Education 32(3); Biggs, Tang & Kennedy (2022). Teaching for Quality Learning at University, 5th ed.; Loughlin, Lygo-Baker & Lindberg-Sand (2021). EJHE 11(2); Newby & Cornelissen (2025). Teaching in Higher Education. PR.
- S57 Biggs, J. & Collis, K. (1982). The SOLO Taxonomy; Chan et al. (2002). PR, NR.

**Learning and training**
- S35 Keith, N. & Frese, M. (2008). Effectiveness of error management training. JAP 93(1), 59–69. PR.
- S36 Tetzlaff, L., Simonsmeier, B., Peters, T. & Brod, G. (2025). Learning and Instruction 98, 102142. PR.
- S37 Costa, J. M., Miranda, G. L. & Melo, M. (2022). 4C/ID meta-analysis. Learning Environments Research 25, 445–463. PR.
- S38 Abrami, P. et al. (2015). Strategies for teaching students to think critically. RER 85(2), 275–314. PR.
- S39 Taylor, P., Russ-Eft, D. & Chan, D. (2005). Behavior modeling training. JAP 90(4), 692–709. PR.
- S40 Tannenbaum, S. & Cerasoli, C. (2013). Do team and individual debriefs enhance performance? Human Factors 55(1), 231–245. PR.
- S41 Brunmair, M. & Richter, T. (2019). Similarity matters. Psychological Bulletin 145(11). PR.
- S42 Mamede, S., Schmidt, H. & Penaforte, J. (2008). Medical Education 42(5); Mamede (2023) review, Medical Education. PR.
- S43 Lambe, K. et al. Guided reflection meta-analysis (5 studies). PR, abstract only.
- S44 Costa Filho, G. et al. (2019). Perspectives on Medical Education 8(4), 230–236. PR.
- S45 Sitzmann, T. & Ely, K. (2011). Psychological Bulletin 137(3), 421–442. PR.
- S46 Gollwitzer, P. & Sheeran, P. (2006). AESP 38; Sheeran, Listrom & Gollwitzer (2025). European Review of Social Psychology 36(1). PR.
- S47 Baldwin, T. & Ford, J. (1988). Personnel Psychology 41(1); Blume, B. et al. (2010). Journal of Management 36(4); Burke, L. & Hutchins, H. (2007). HRDR 6(3). PR.
- S48 Alliger, G. et al. (1997). Personnel Psychology 50(2). PR.
- S49 Clardy, A. (2018). 70-20-10 and the dominance of informal learning. HRDR 17(2). PR.
- S50 Hattie, J. & Timperley, H. (2007). RER 77(1); Kluger, A. & DeNisi, A. (1996). Psychological Bulletin 119(2); Wisniewski, B., Zierer, K. & Hattie, J. (2020). Frontiers in Psychology 10. PR, NR.
- S51 Edmondson, A. (1999). ASQ 44(2). PR, NR.
- S52 Cepeda, N. et al. (2006). Psychological Bulletin 132(3); Lacerenza, C. et al. (2017). JAP 102(12). PR, NR.
- S53 Sinha, T. & Kapur, M. (2021). RER 91(5). PR.
- S54 Fyfe, E. et al. (2014). Concreteness fading. EPR 26. PR.
- S55 Maton, K. (2013). Linguistics and Education 24(1); Maton (2014); Maton, Hood & Shay (2016); Curzon, P. et al. (2020). WiPSCE '20. PR.
- S58 Vygotsky (1978); Wood, Bruner & Ross (1976); Collins, Brown & Newman (1989); Kalyuga, S. et al. (2003). PR.
- S59 Zimmerman, B. (2002); Schön, D. (1983); Argyris, C. & Schön, D. (1978). NR.
- S60 Salomon, G. & Perkins, D. (1989). Educational Psychologist 24(2); Perkins & Salomon (1988). PR.
- S61 Ericsson, K. A. et al. (1993); Macnamara, B., Hambrick, D. & Oswald, F. (2014). Psychological Science 25(8). PR.
- S62 Simon, H. (1956). Psychological Review 63(2); Simon (1955). QJE 69(1). PR.
- S70 Soderstrom, N. & Bjork, R. (2015). Learning versus performance. Perspectives on Psychological Science 10(2). PR, NR.

**Learning design tools and the skill**
- S65 How reliable are LLMs in analysing the quality of written lesson plans? Computers and Education: AI (2025); structured-prompt evaluation of engineering design lesson plans (2025); He et al. (2026) Judging the judges, arXiv:2602.13243; Almatrafi, O. & Johri, A. (2025) Computers and Education: AI 8. PR and PP.
- S66 Feedback on feedback (LAK 2025); Sycophancy is an educational safety risk, arXiv:2605.14604; Sycophantic praise, arXiv:2606.07441; What counts as AI sycophancy?, arXiv:2605.21778. PR and PP.
- S67 Anthropic (2026). How people ask Claude for personal guidance. 30 Apr 2026. IR.
- S68 Pishtari, G. et al. (2023) EC-TEL; (2024) LAK; Pereira, E. et al. (2024) IJETHE 21; KU Leuven Learning Lab prompt; USask ALDA; Stokkink, arXiv:2506.23815. Mixed.
- S69 SkillsBench, arXiv:2602.12670; Agent skills can be harmful, arXiv:2608.11888; SoK: Agentic skills, arXiv:2602.20867. PP.
- S80 Husain, H. Using LLM-as-a-judge for evaluation (practitioner); Norman, Rivera & Hughes (2026). Reliability without validity. arXiv:2606.19544. PP.
- S81 Anthropic. Skill authoring best practices; Equipping agents for the real world with Agent Skills (Oct 2025); The Complete Guide to Building Skills for Claude (Jan 2026); skill-creator; Claude Help Center articles on custom skills. Official.
- S82 Swaby, L. et al. (2022). Cognitive task analysis review. Pilot and Feasibility Studies. PR.
- S83 LearnLM and Eedi classroom trial. arXiv:2512.23633. PP.
