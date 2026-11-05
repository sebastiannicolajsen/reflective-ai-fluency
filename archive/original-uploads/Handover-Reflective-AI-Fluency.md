# Handover: Reflective AI Fluency — conversation and findings

Nov 3, 2026 · Sebastian Nicolajsen

## Context and how to work with Sebastian

Sebastian is defining **Reflective AI Fluency**, a framework that extends Anthropic's 4D AI Fluency Framework, as the foundation for a future large-scale AI learning programme. The current task is the manifest only; the programme's direction will be decided later by its participants.

**Who:** Management consultant at Implement Consulting Group, Copenhagen. PhD in Computer Science and Education (ITU); works on AI adoption and learning design.

**Working style:**

- Be very direct, with little filler text.
- Spar and challenge his ideas; point out what he is missing.
- Research before assuming something is novel or unsolved.
- Do **not** design the programme or prescribe what it looks like. Stay at the level of the manifest and principles.

**Planned sequence of work:**

1. Manifest of Reflective AI Fluency (first draft done; attached as a separate file).
2. Learning design principles, written separately.
3. Combine both into a review rubric.
4. Build a skill: a collaboration partner that helps peers create exercises, learning goals and learning journeys that develop Reflective AI Fluency, giving constructive feedback.

## Research findings

Anthropic has an explicit, behaviour-level fluency model; OpenAI has an implicit, scope-based progression; neither covers how people improve their own practice.

### OpenAI (no explicit framework)

- **OpenAI Academy:** 14 free courses in four tracks (Apply AI at Work, Build with AI, Lead AI Adoption, Teach and Learn with AI). Badges at 80% on short quizzes; OpenAI says badges are not certifications. Formal "OpenAI Certified" is invite-only for ChatGPT Enterprise and Edu.
- **Implicit model:** a habit loop (instruct, add context, review outputs, use responsibly) and a progression from task to workflow to agent to organisation (AI Foundations → Applied AI Foundations → Agents and Workflows → AI Leadership).
- **Strengths:** learning on your own recurring tasks; workflow design with review points; an organisational layer.
- **Gaps:** little on whether to use AI at all; shallow on how models work; ethics as compliance; every course tied to an OpenAI product. Critical literacy (questioning outputs, learning rather than answer-getting) appears only in the Teen AI Literacy Blueprint (Nov 2025), not in the adult courses.
- **Terms:** "AI fluency" for the workforce, "AI literacy" for youth and policy.

### Anthropic: 4D framework and 24 behaviours

- **Framework** (Dakan & Feller, with Anthropic): fluency is working effectively, efficiently, ethically and safely with AI. Four competencies, each with three sub-competencies: Delegation (problem/goal, platform, task), Description (product, process, performance), Discernment (product, process, performance), Diligence (creation, transparency, deployment).
- **Three modes:** Automation, Augmentation, Agency. Not ranked; Dakan stresses matching the mode to the task. Mode choice sits within Delegation.
- **AI Fluency Index (23 Feb 2026):** 24 behavioural indicators, 11 observable in chat, 13 outside it (including all of Diligence). Measured on 9,830 Claude.ai conversations (20–26 Jan 2026).
- **Key numbers:** iterates 85.7%, clarifies goal 51.1%, examples 41.1%, format 30.0%, interaction mode 30.0%, tone 22.7%, missing context 20.3%, audience 17.6%, questions reasoning 15.8%, consults on approach 10.1%, checks facts 8.7%.
- **Artifact effect:** with polished output, users direct more (+14.7 points clarifying goals) but evaluate less (−5.2 missing context, −3.7 fact-checking, −3.1 questioning reasoning).
- **Replication** (Potts & Sudhof, arXiv 2604.25905, WildChat): fluent users fail more often but visibly and recoverably; 85.6% of novices' failures were invisible to them.
- **Gaps:** no proficiency levels; Description over-represented among observable indicators; the 13 off-chat indicators' exact wording not retrieved (it sits in a Claude Academy tutorial).
- **Teaching AI Fluency course:** thin and academic, but useful ideas: two loops (Delegation–Diligence strategic, Description–Discernment tactical); four teaching sequences (linear, non-linear, focused, loop-based); assessment by outcome, process and reflection; hand in prompts and drafts with the final work; analyse AI's impact on your discipline. Dakan also describes four roles AI can play in finished work: consultant, tool builder, cocreator, medium.

### Is it already solved?

Partly. The metacognitive angle is established (Tankelevitch et al., CHI 2024 best paper: generative AI places high metacognitive demands on users, and metacognition is teachable). AI feedback on learning design exists in pieces (constructive alignment prompt guides; heuristic semantic-wave profiling of lesson plans). Nothing combines AI-fluency-specific design with constructive alignment, SOLO and semantic waves as a design partner. Two papers worth reading in full: "Framing, Judging, Steering" (arXiv 2606.05983), which splits Description into initial specification and iterative steering, and the X1-X2-X3 assessment pattern (arXiv 2608.12351).

## Decisions so far

The framework moved from "4D plus extra behaviours" to "4D performed fluently and reflectively, across growing scope". Settled points, in the order they were reached:

1. **Name:** Reflective AI Fluency. Earlier shorthand "4D+R" is retired, since R is no longer a set of behaviours. Name still open to revision (it does not signal the levels).
2. **Core:** Anthropic's four competencies and three modes unchanged; the 24 behaviours as the behavioural core.
3. **Levels come from OpenAI's progression:** Curious → Task → Workflow → Agentic. Levels describe scope (how much of one's work the competencies govern), not sophistication. Organisational leadership is out of scope as a level.
4. **Same behaviours, larger object.** Levels are not new skills: the 4D behaviours apply to an answer, then a task, a workflow, an agent's run. Each competency is anchored per level.
5. **Modes are separate from levels.** Anthropic's modes say how much AI does in one interaction; levels say how much of the work the behaviours govern. Keep them as two axes.
6. **Automation is not the goal.** People often mean agency when they say automation; that is a misconception to address, not a framework change.
7. **Mode navigation** (a proposal, untested): decided by three questions — is the goal clear, can I check the output, does it recur? Start in augmentation, move to automation once you can describe and check, to agency once it recurs with boundaries, and step back down when output drifts or stakes rise.
8. **Reflection is a quality, not a loop or a fifth D.** Earlier ideas (R1 review, R2 codify, then a review/explore/codify loop) were dropped. Reflective fluency = curiosity, noticing, adjusting (including trying another mode), carrying forward. Evidenced by change over time. Explicit while developing; invisible when fluent.
9. **Fluency is always in one's own work.** Four questions per work step: which mode or no AI and why; how would I know it's wrong; what role AI plays in the result; should this stay human on purpose. Sebastian's team already runs work-process analyses.
10. **Discernment gates growth in scope.**
11. **Theory in the later skill:** use plain-language reasons, never hidden theory. Each theory gets one job: constructive alignment as spine; SOLO for depth of outcomes and task feedback (also exposes assumed prior knowledge); ZPD for sequencing and fit to starting point; semantic waves for moving between abstract principles and the learner's concrete domain. Keep SOLO levels distinct from fluency levels.

**Addendum: satisficing.** Added after the first draft. Satisficing (Herbert Simon) means stopping at the first good-enough result. With AI it is the default state: output always looks acceptable, the model rarely signals what is missing or pushes back, and good-enough use already saves time, so people plateau. The manifest now names it in a ninth stance statement ("Good enough is the default trap"), adds **curiosity** as a fourth facet of reflective fluency (looking for a better result even when the current one seems fine), and lists satisficing among the anti-patterns. The manifest names the problem; making the gap visible to learners is left to the programme.

## Current state

Two docs exist; the manifest is the live one.

| Doc | Status | Contains |
| --- | --- | --- |
| [Reflective AI Fluency: Manifest (draft 1)](https://claude.ai/artifact/1dZHwvckyuRT32srnJABDX) | Current | Definition; 9 stance statements; the 4 competencies as questions about one's work; reflective fluency; 4 levels with per-level anchors; mode navigation; the 11 observable + 13 off-chat behaviours; fluency in one's own work; what it is not; open checklist |
| [AI Fluency Programme: Framework Synthesis and Design Grounds](https://claude.ai/artifact/LgH6kVPvYfSZC4qNDjCayx) | Superseded in parts | Vendor comparison table, evidence summary, 7 theoretical claims with references, the earlier R1/R2 behaviours (now dropped), tailoring 2x2, design implications |

The manifest was deliberately stripped of programme design (no curriculum, no sequencing, no assessment plan). The synthesis doc still holds programme-level suggestions; treat those as background, not decisions.

## Next steps and open questions

Next is reviewing the manifest, then writing the learning design principles as a separate document.

**Open questions**

- [ ] Confirm the exact wording of Anthropic's 13 off-chat indicators (Claude Academy tutorial "The 4 Ds of AI Fluency — Behavioral Indicators").
- [ ] Licence: the framework appears under CC BY-NC-ND (v1.1 summary), CC BY-SA (HEA edition) and CC BY-NC-SA (courses). Non-commercial terms may block use in a paid Implement programme; clarify before building on it.
- [ ] Does the name hold, or should it signal levels?
- [ ] Should understanding how models work be part of the manifest?
- [ ] Test the mode-navigation questions on real work-process maps.
- [ ] Read "Framing, Judging, Steering" and the X1-X2-X3 pattern in full.

**For the later skill (not started)**

- Audience question asked but unanswered: are the peers experienced facilitators or consultants new to learning design? This sets tone and scaffolding.
- The skill should behave fluently itself: ask what the peer wants, show reasoning in plain language, prompt reflection.
- For every task it reviews: what must learners already know, and where does that come from? Flag tasks with no answer.
- Build an evaluation set first: 5–10 exercises Sebastian rates good or bad, to test the skill's feedback against his judgement.
- Hand-test the combined rubric on three real exercises before building the skill.

## Sources

**Anthropic**

- [The AI Fluency Index](https://anthropic.com/research/AI-fluency-index)
- [AI Fluency Framework (aifluencyframework.org)](https://aifluencyframework.org/)
- [HEA edition of the framework (Dec 2025)](https://hub.teachingandlearning.ie/wp-content/uploads/2025/12/hea-genai-fluency-framework.pdf)
- [Framework one-page summary (PDF)](https://www-cdn.anthropic.com/334975cdec18f744b4fa511dc8518bd8d119d29d.pdf)
- [Behavioral indicators tutorial](https://academy.claude.com/tutorials/the-4-ds-of-ai-fluency-behavioral-indicators)
- [Teaching AI Fluency (Coursera)](https://www.coursera.org/learn/teaching-ai-fluency)
- [Dakan: AI Fluency Framework for Educators (DataCamp)](https://www.datacamp.com/resources/webinars/ai-fluency-framework-for-educators)

**OpenAI**

- [OpenAI Academy courses (Help Center)](https://help.openai.com/en/articles/20001270-openai-academy-courses)
- [Academy courses for applying AI at work](https://openai.com/index/academy-courses-applying-ai-at-work/)
- [First OpenAI Certifications courses](https://openai.com/index/openai-certificate-courses/)
- [Teen AI Literacy Blueprint](https://cdn.openai.com/pdf/openai-teen-literacy-blueprint.pdf)

**Research**

- [Tankelevitch et al., Metacognitive Demands and Opportunities of Generative AI (CHI 2024)](https://arxiv.org/abs/2312.10893)
- [Potts & Sudhof, A paradox of AI fluency](https://arxiv.org/abs/2604.25905)
- [Framing, Judging, Steering](https://arxiv.org/pdf/2606.05983)
- [X1-X2-X3 assessment pattern](https://arxiv.org/pdf/2608.12351)
- [Constructive Alignment Prompt Guide](https://oersi.tesshub.hzdr.de/materials/constructive-alignment-prompt-guide)
- [LCT semantics for lesson plans (QMUL)](https://qmro.qmul.ac.uk/xmlui/handle/123456789/93456)
- [OECD/EC AI Literacy Framework (June 2026)](https://www.oecd.org/content/dam/oecd/en/publications/reports/2026/06/empowering-learners-for-the-age-of-ai_2f8315e7/65cd27d4-en.pdf)
