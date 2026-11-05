# Reflective AI Fluency: Learning Theory (draft 1)

Nov 4, 2026 · Sebastian Nicolajsen

This document holds the learning theory behind Reflective AI Fluency. It is written against manifest draft 5 (two axes: ways of working and quality) and replaces the earlier synthesis and design-grounds document. It does not design a programme. It states which theories do which job, how strong the evidence is, and what follows for the design principles and the review rubric that come next.

Evidence strength is marked throughout: **established** (peer-reviewed, replicated or standard), **analogy** (a sound theory applied outside its original setting), **preprint** (not peer-reviewed), and **our move** (a design decision of ours with no published precedent).

## 1. What the theory has to explain

The manifest makes four claims that learning theory must support:

1. Fluency is behaviour in your own work, not knowledge about AI.
2. People choose a way of working per step (single interaction, collaboration, workflow, agency), including choosing no AI.
3. Quality is described by five dimensions (reliability, proportionate checking, reasoning, adaptation, transfer) and by reflective quality (curiosity, noticing, reviewing, adjusting, carrying forward).
4. Reflection is evidenced by change between two runs of the same task, not by a snapshot.

## 2. Theories and their jobs

Each theory gets one job. Nothing is applied as hidden background.

| Theory | Job in this framework | Evidence and caveats |
| --- | --- | --- |
| **Constructive alignment** (Biggs 1996; Biggs, Tang & Kennedy 2022) | Spine. Outcomes, activities and assessment all ask for the same behaviour. Section 3 extends it. | A design principle in wide use, used here as a coherence check, not as proof of learning gains. |
| **SOLO taxonomy** (Biggs & Collis 1982) | Depth of a learner's response to an exercise: one check named, several, checks related to the stakes, a principle carried to a new kind of work. | Established but ambiguous in practice: responses at the same level vary in quality, and rater agreement depends on training. Phrase judgements tentatively. Using SOLO to expose prerequisite knowledge is **our move**. Keep SOLO levels separate from the quality dimensions (section 4). |
| **ZPD, scaffolding, cognitive apprenticeship, expertise reversal** (Vygotsky 1978; Wood, Bruner & Ross 1976; Collins, Brown & Newman 1989; Kalyuga et al. 2003) | Starting point and stretch. Who is this for, what can they already do alone, what support closes the gap, and when does support fade? Applied **per way of working and per quality dimension**, not as one level. | Scaffolding comes from one-to-one tutoring of young children, so extension to adult professionals is an **analogy**. Expertise reversal matters here: a senior consultant can be an expert in their domain and a beginner with AI, and too much guidance then backfires. Fading refers to support for the learner; it is not a progression through the ways of working. |
| **Semantic waves** (Maton 2013, 2014; Curzon et al. 2020) | Movement between principle and the learner's own work: unpack an abstract idea into a concrete case, then repack it into a principle. Flags two flatlines: staying abstract (reciting the 4Ds) and staying concrete (prompt tips with no principle). | Qualitative case-study evidence, and described by Maton as "a key to" cumulative knowledge-building, not a requirement. Heuristic profiling is coarse and judged qualitatively. No published application to workplace AI training: **our move**. |
| **Self-regulated learning and reflective practice** (Zimmerman 2002; Schön 1983; Argyris & Schön 1978) | Explains reflective quality. Noticing is reflection-in-action; reviewing is reflection-on-action; adjusting the way of working, and not only the output, is double-loop learning. | Conceptual distinctions, not empirically validated as separate processes. |
| **Metacognition in generative AI** (Tankelevitch et al. 2024) | Names the demands: self-awareness and task decomposition when prompting; calibrated confidence when evaluating output; flexibility about when and how to use AI. Maps to Description, Discernment and the choice of way of working. | Conceptual analysis, not a user study. Best paper at CHI 2024. |
| **Transfer** (Salomon & Perkins 1989; Perkins & Salomon 1988; Baldwin & Ford 1988; Blume et al. 2010) | Design for high-road transfer (abstract the principle, name where else it applies) and for transfer climate (opportunity, permission, support at work). | Meta-analytic work finds predictors matter more for open skills than closed ones, and that same-source measurement inflates transfer effects. Fluency is largely an open skill. |
| **Feedback** (Hattie & Timperley 2007) | Learners need to know where they are going, how they are doing, and what to do next. | Established review. |
| **Deliberate practice, with a caution** (Ericsson et al. 1993; Macnamara et al. 2014) | Practice volume is not enough; it must be structured and fed back on. | In a meta-analysis, deliberate practice explained under 1% of performance variance in professions (not significant), against 26% in games. Our audience is a professions population. Do not promise that more practice produces fluency. |

## 3. Alignment

### 3.1 The classic triple, applied to behaviour

Constructive alignment requires outcomes, activities and assessment to ask for the same verb. The manifest's first statement fixes the kind of verb: outcomes describe what people do in their own work ("checks a claim that matters", "chooses a way of working for a step and says why"), not what they know ("understands the 4Ds"). An outcome phrased as understanding is already misaligned with the framework.

### 3.2 A fourth element: the AI-use condition

For AI fluency, alignment needs one more element: the way of working the task requires, permits or excludes. Research on assessment in the age of generative AI converges here. The AI Assessment Scale (Perkins, Furze, Roe & MacVaugh 2024; revised in a 2024 preprint) sets out five levels of AI involvement in assessment, from no AI to AI exploration (labels differ between versions). Guidance built on it asks designers to map each outcome to a level, noting that foundational outcomes may need no AI while others reflect professional practice and may benefit from it. An audit guide built on the scale recommends an alignment matrix of outcomes against tasks, and observes that many validity problems, such as outcomes that nothing assesses, predate generative AI.

Our adaptation: those frameworks govern how much AI a learner may use while being assessed on something else. Here AI use is itself the outcome, so the condition cuts both ways:

- A task that bans AI cannot evidence an outcome about using it.
- A task that allows any AI use cannot evidence an outcome about knowing when to leave it out (manifest statement 3).

Maturity: this extension is **our move**; the underlying scale is peer-reviewed in its first version, and the revision is a preprint.

### 3.3 Misalignment patterns the design partner should name

- **Verb drift.** The outcome says "judge" or "choose", the task only asks to list or describe.
- **Persuasive completion.** The task can be completed convincingly without showing the target reasoning. Islam & Roelleke (2026) frame this as the central GenAI misalignment.
- **Wrong condition.** The AI-use condition does not match the outcome (section 3.2).
- **Evidence mismatch.** An outcome that shows over time, such as reflective quality, is assessed from one artefact. An audit guide gives a parallel example: assessing editing when only final drafts are submitted.
- **Orphans and gaps.** Activities that serve no outcome, and outcomes that nothing assesses or lets learners practise.

### 3.4 Evidence of outcomes is a trace

Because the manifest defines reflection as change between two runs, assessment evidence has to contain two runs, a stated reason for what changed, or an equivalent trace. The X1-X2-X3 pattern (Islam & Roelleke 2026) is a usable template: a sourced AI extract, the learner's own answer and how it differs, and a reflection with a justified rating. It maps onto noticing (the differences), adjusting (the revision) and carrying forward (what was learned). Caveat: **preprint**, one second-year computing module, descriptive, and the authors claim a design method rather than measured learning gains.

## 4. Quality

The five dimensions in the manifest are each supported by separate literature. No study validates them as a set or shows that they separate people. They are our synthesis, and the test on real work remains necessary.

| Dimension | What the research points to | Strength |
| --- | --- | --- |
| **Reliability** (errors found by you, during the work) | In a replication on WildChat, fluent users failed more often but visibly and recoverably, while most of novices' failures (85.6%) were invisible to them (Potts & Sudhof). A small formative study found novices either led the model or were led by it, with different over- and under-reliance outcomes (Bo et al. 2025). Linguistically trained readers over-trusted fluent surface text, and a structured rubric improved expert detection over repeated phases (Park & Han 2026). Verifiability is also a property of the response: presentation format affects error detection (Zhu et al. 2026), so part of reliability is choosing a setup that makes errors visible. | Preprints, small samples. The pattern is consistent but not settled. |
| **Proportionate checking** (the check matches what an error would cost) | Complacency and bias toward automation affect experts and are not easily removed by training (Parasuraman & Manzey 2010). Reliance should match actual reliability, and both misuse and disuse are failures (Lee & See 2004). Knowledge workers with higher confidence in generative AI reported less critical thinking, and those with higher self-confidence reported more; effort shifted toward verifying, integrating and stewarding (Lee et al. 2025, self-report). In one course dataset, 3.8% of 16,851 student utterances were coded verification (McNichols et al. 2026). In a 50-person study, the reasoning formats people preferred were not the ones that best supported error detection, and some produced high trust with low willingness to verify. Fluent-looking text feels truer in lab studies (Reber & Schwarz 1999). | Established for complacency and calibration; self-report or preprint for the generative AI findings. Disuse is a real cost, so proportionate means neither more nor less checking by default. |
| **Reasoning** (can say why this way, check or prompt, and what would change it) | Domain scientists evaluating model answers used systematic strategies, including precision testing, value-based evaluation and meta-evaluation of their own practice, and a structured schema helped them find issues they had overlooked (Martin-Boyle et al. 2026). Metacognitive self-awareness and decomposition are named demands in Tankelevitch et al. (2024). Forethought is the first phase of self-regulation (Zimmerman 2002). | Small contextual inquiry (ten scientists), conceptual analysis, established theory. |
| **Adaptation** (practice changes when task or output changes) | Metacognitive flexibility about when and how to use AI (Tankelevitch et al. 2024). Changing the choice of strategy, not only the output, is double-loop learning (Argyris & Schön 1978). | Conceptual. |
| **Transfer** (learning carries to new tasks and ways of working) | High-road transfer and transfer climate (Salomon & Perkins 1989; Baldwin & Ford 1988). Predictors of transfer are stronger for open than for closed skills (Blume et al. 2010). | Established; the open-skill finding is a meta-analysis. |

**Quality is not SOLO.** SOLO describes the structure of one response to one exercise. The quality dimensions describe a person's practice across work and time. SOLO can help read the Reasoning dimension in a given response, but it should not score it, and its five levels should never be presented as quality levels. The manifest deliberately has no ladder.

**Practice alone is not enough.** The deliberate-practice caution in section 2 means improvement needs structure and feedback, which is why the framework relies on two-run comparison and on a feedback question in the design checks.

## 5. Reply to the Description critique

Apartsin & Aperstein (2026, preprint) argue that the 4D framework bundles framing a task before generation with steering after it, and propose separating Framing, Judging and Steering. Their evidence so far comes from simulated learners graded by language models.

Reflective AI Fluency partly answers this already:

- The anchors for Description differ by way of working: a specification or brief before the run (framing) in workflow and agency, and refinement as you go (steering) in collaboration.
- Noticing and adjusting cover monitoring and control, which is how their monitor-control framing describes Judging and Steering.

Open question for the rubric: should Description carry two behaviours (initial description, iterative description) so that exercises and feedback can target each? Recommendation: yes in the rubric, no in the manifest.

Reusable ideas from the paper: seeded-flaw exercises (imperfect output to critique), and the claim that judging is bounded by domain knowledge, which supports placing Discernment exercises inside the learner's own domain.

## 6. Existing work and the novelty claim

| Work | What it does | Feedback on others' designs | AI-fluency target |
| --- | --- | --- | --- |
| Pereira et al. 2024 | Generates outcomes, activities and assessments with ChatGPT for a project management course | No | No |
| KU Leuven Learning Lab prompt | Copilot prompt that scores constructive alignment 1-10 and recommends changes | Yes (self-review) | No |
| USask ALDA | Coaches educators through outcomes, activities and rubrics (built on SMARTIE) | Partly | No |
| Pishtari et al. 2023, 2024 | AI feedback on teachers' learning designs; measured design improvements in experiments | Yes | No |
| SOLO with language models (2025) | Classifies or diagnoses learner responses | No | No |
| CoRe-3 (Apartsin & Aperstein 2026) | Assesses learners' framing, judging and steering | No | Yes |

Narrowed claim: to our knowledge, as of November 2026, no published tool combines constructive alignment, SOLO, ZPD and semantic waves to give plain-language feedback on designs for AI-fluency learning. Each component has precedent, and Pishtari et al. are the closest evidence that AI feedback on designs can improve design quality. We did not check every commercial product.

## 7. Candidate design checks (input to the rubric)

These are inputs for the rubric step, not final. Compared with the earlier eight, they are restructured into seven plus a cross-cutting question.

1. **Alignment.** Same verb across outcome, activity and assessment, plus the AI-use condition and the patterns in 3.3.
2. **Depth.** Do the outcome and the task ask for the same SOLO level? Phrase tentatively.
3. **Starting point and stretch.** Merges the earlier prior-knowledge and reach checks. Who is it for, per way of working, and does support fade?
4. **Waves.** Does the journey unpack a principle into the learner's own work and repack it?
5. **Discernment.** Includes seeded-flaw material, and treats unexamined satisficing as the failure mode, not a separate check. Satisficing (Simon 1956) is adaptive in many settings; the problem is accepting good enough without having chosen to.
6. **Transfer.** High-road bridging plus transfer climate.
7. **AI stress-test.** Would a generic prompt to a current model complete the exercise persuasively? If so, it tests retrieval, not judgement.
- **Cross-cutting: feedback.** Does the learner learn where they are going, how they are doing, and what to do next?

Relevance for adult learners (a real work problem they recognise) is handled inside Waves and Transfer, not as its own check. Psychological safety matters for debriefs in which people admit errors, and belongs in facilitation guidance.

## 8. Caveats

- Several sources were confirmed from standard bibliographic knowledge and not re-fetched: Vygotsky 1978; Miller 1990; Reber & Schwarz 1999; Lee & See 2004; Parasuraman & Manzey 2010; Parasuraman, Sheridan & Wickens 2000; Ericsson et al. 1993; Zimmerman 2002; Schön 1983; Argyris & Schön 1978; Chi, Glaser & Farr 1988; Hattie & Timperley 2007; Knowles; Edmondson 1999. Spot-check volumes and pages before citing.
- Preprints used: Apartsin & Aperstein 2026; Islam & Roelleke 2026; Potts & Sudhof; Bo et al. 2025; Park & Han 2026; Zhu et al. 2026; the reasoning-representations study; Kosmyna et al. 2025.
- The AI Assessment Scale's first-version journal details need confirming; the revision cited here is a preprint.
- The "OK plateau" is Foer's popular metaphor, not a research finding. Do not cite it as evidence.
- Bastani et al. (2025, PNAS) is useful evidence that unguarded AI use can harm later unassisted performance and that guardrails reduce the harm, which supports designing in friction. Kosmyna et al. is suggestive only (small samples, not peer-reviewed).

## References

**Learning theory**
- Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*(3), 347-364.
- Biggs, J., Tang, C. & Kennedy, G. (2022). *Teaching for Quality Learning at University* (5th ed.). Open University Press.
- Biggs, J. B. & Collis, K. F. (1982). *Evaluating the Quality of Learning: The SOLO Taxonomy.* Academic Press.
- Vygotsky, L. S. (1978). *Mind in Society.* Harvard University Press.
- Wood, D., Bruner, J. S. & Ross, G. (1976). The role of tutoring in problem solving. *J. Child Psychology and Psychiatry, 17*(2), 89-100.
- Collins, A., Brown, J. S. & Newman, S. E. (1989). Cognitive apprenticeship. In L. B. Resnick (Ed.), *Knowing, Learning, and Instruction* (pp. 453-494). Erlbaum.
- Kalyuga, S., Ayres, P., Chandler, P. & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist, 38*(1), 23-31.
- Maton, K. (2013). Making semantic waves: A key to cumulative knowledge-building. *Linguistics and Education, 24*(1), 8-22.
- Maton, K. (2014). *Knowledge and Knowers.* Routledge. Maton, K., Hood, S. & Shay, S. (Eds.) (2016). *Knowledge-Building.* Routledge.
- Curzon, P., Waite, J., Maton, K. & Donohue, J. (2020). Using semantic waves to analyse the effectiveness of unplugged computing activities. *WiPSCE '20.*
- Zimmerman, B. J. (2002). Becoming a self-regulated learner. *Theory Into Practice, 41*(2), 64-70.
- Schön, D. A. (1983). *The Reflective Practitioner.* Basic Books. Argyris, C. & Schön, D. A. (1978). *Organizational Learning.* Addison-Wesley.
- Salomon, G. & Perkins, D. N. (1989). Rocky roads to transfer. *Educational Psychologist, 24*(2), 113-142. Perkins, D. N. & Salomon, G. (1988). Teaching for transfer. *Educational Leadership, 46*(1), 22-32.
- Baldwin, T. T. & Ford, J. K. (1988). Transfer of training. *Personnel Psychology, 41*(1), 63-105. Blume, B. D., Ford, J. K., Baldwin, T. T. & Huang, J. L. (2010). Transfer of training: A meta-analytic review. *Journal of Management, 36*(4), 1065-1105.
- Hattie, J. & Timperley, H. (2007). The power of feedback. *Review of Educational Research, 77*(1), 81-112.
- Ericsson, K. A., Krampe, R. T. & Tesch-Römer, C. (1993). *Psychological Review, 100*(3), 363-406. Macnamara, B. N., Hambrick, D. Z. & Oswald, F. L. (2014). *Psychological Science, 25*(8), 1608-1618.
- Simon, H. A. (1956). Rational choice and the structure of the environment. *Psychological Review, 63*(2), 129-138.

**AI, judgement and quality**
- Tankelevitch, L. et al. (2024). The metacognitive demands and opportunities of generative AI. *CHI '24.*
- Potts & Sudhof. A paradox of AI fluency. arXiv:2604.25905.
- Parasuraman, R. & Manzey, D. H. (2010). Complacency and bias in human use of automation. *Human Factors, 52*(3), 381-410.
- Lee, J. D. & See, K. A. (2004). Trust in automation. *Human Factors, 46*(1), 50-80.
- Lee, H.-P. et al. (2025). The impact of generative AI on critical thinking. *CHI '25.*
- Bastani, H. et al. (2025). Generative AI without guardrails can harm learning. *PNAS, 122*(26).
- Fan, Y. et al. (2025). Beware of metacognitive laziness. *BJET, 56*(2), 489-530.
- Kosmyna, N. et al. (2025). Your brain on ChatGPT. arXiv:2506.08872 (preprint).
- McNichols, H., Ikram, S. & Lan, A. (2026). The StudyChat dataset. *LAK26.*
- Reber, R. & Schwarz, N. (1999). Effects of perceptual fluency on judgments of truth. *Consciousness and Cognition, 8*(3), 338-342.
- Bo, J. Y. et al. (2025). Who's the leader? Analyzing novice workflows in LLM-assisted debugging of machine learning code. arXiv:2505.08063.
- Park, S. & Han, Y.-S. (2026). From intuition to expertise: Rubric-based cognitive calibration for human detection of LLM-generated Korean text. arXiv:2601.19913.
- Martin-Boyle, A. et al. (2026). An expert schema for evaluating large language model errors in scholarly question-answering systems. arXiv:2602.21059.
- Zhu, X. et al. (2026). Justified or just convincing? Error verifiability as a dimension of LLM quality. arXiv:2604.04418.
- Do reasoning representations help humans evaluate LLM outputs? arXiv:2609.09038.

**Alignment and design tools**
- Perkins, M., Furze, L., Roe, J. & MacVaugh, J. (2024). The AI Assessment Scale; revised version: arXiv:2412.09029.
- Apartsin & Aperstein (2026). Framing, judging, steering. arXiv:2606.05983.
- Islam & Roelleke (2026). Assessment design in the GenAI era: the X1-X2-X3 assessment pattern. arXiv:2608.12351.
- Pereira, E. et al. (2024). Constructive alignment in a graduate-level project management course using large language models. *IJETHE, 21,* Article 25.
- Pishtari, G. et al. (2023). *EC-TEL 2023.* Pishtari et al. (2024). *LAK '24.*
- Dakan, R. & Feller, J., with Anthropic. AI Fluency Framework. Anthropic (2026). The AI Fluency Index.
