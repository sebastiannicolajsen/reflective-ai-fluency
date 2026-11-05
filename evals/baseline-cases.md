# Baseline test cases (draft 2)

Nov 4, 2026 · 23 cases across modes and levels, English only. Each case lists the user turns and the assertions a strong answer meets. Run each under two conditions: **A** no context (plain Claude) and **B** manifest and learning design foundation pasted as context. Use baseline-runner.html to run them and mark results.

Purpose: find what Claude gets wrong before the skill exists. The failures become the skill's specification.


## B01 · Understand · Novice

- **Turn 1:** What's the difference between a workflow and an agent? I keep hearing both in our AI discussions.

**A strong answer:**
- [ ] Distinguishes them by who sets the path (fixed in advance vs AI chooses) or by what can be inspected
- [ ] Plain language, no unexplained jargon
- [ ] Gives a concrete work example
- [ ] Under about 250 words

## B02 · Understand · Expert

- **Turn 1:** How does Implement's Reflective AI Fluency framework differ from Anthropic's 4D AI Fluency framework? Be precise.

**A strong answer:**
- [ ] Does not invent details about a framework it does not know (says so, or asks for it)
- [ ] If it describes the framework: mentions ways of working sorted by who sets the path
- [ ] If it describes the framework: mentions the quality axis or dimensions
- [ ] Accurate about the 4D framework (Delegation, Description, Discernment, Diligence)

## B03 · Apply · Practitioner

- **Turn 1:** I'm preparing a market scan for a client pitch on Friday. Steps: collect competitor info, summarise annual reports, build a positioning matrix, write the recommendation. How should I use AI for this?

**A strong answer:**
- [ ] Chooses a way of working per step rather than one approach for the whole task
- [ ] Keeps the recommendation step under human judgement (AI drafts, human decides)
- [ ] Names specific checks matched to stakes (e.g. verify figures taken from annual reports)
- [ ] Raises whether AI is worth it for at least one step, or that some step may need no AI

## B04 · Choose · Novice

- **Turn 1:** Can I just let an agent write the board memo summarising our client's financials? It's due tonight.

**A strong answer:**
- [ ] Does not simply say yes
- [ ] Identifies the stakes (client board, financial figures) as the reason for caution
- [ ] Offers a practical path that fits the deadline (AI drafts, you verify the numbers and conclusions)
- [ ] Names what specifically to check

## B05 · Choose (exclusion) · Practitioner

- **Turn 1:** Should I use AI to write the feedback for my team member's annual review?

**A strong answer:**
- [ ] Treats some of this as work that should stay human (judgement, relationship, responsibility)
- [ ] Does not default to yes or to a blanket no
- [ ] Suggests a limited, specific use if any (e.g. structure, wording) with the judgement kept human
- [ ] Mentions sensitive data or being open about AI's role

## B06 · Assess · Practitioner

- **Turn 1:** Claude gave me a summary of a 40-page client report and it looks really polished. Can I send it to the client as is?

**A strong answer:**
- [ ] Does not approve sending it unchecked
- [ ] Says polish is not evidence of correctness
- [ ] Matches checking to the stakes (client-facing): key figures, claims, omissions
- [ ] Gives a short, concrete checking approach rather than a generic warning

## B07 · Reflect · Practitioner

- **Turn 1:** Last month I used AI to draft a proposal and it went fine. This month same kind of task and I did exactly the same. Is that a problem?

**A strong answer:**
- [ ] Says no change is not in itself a failure
- [ ] Asks or prompts what worked and what the checks caught
- [ ] Encourages looking for a better result or another way of working without forcing change
- [ ] Suggests a concrete introspection tool (compare runs, debrief, feedback from others)

## B08 · Assess (calibration) · Practitioner

- **Turn 1:** I double-check every number the AI gives me. It takes ages. Is that overkill?

**A strong answer:**
- [ ] Ties the amount of checking to what an error would cost
- [ ] Suggests tracking how often the AI is actually wrong (calibration) to adjust
- [ ] Does not give a blanket yes or no
- [ ] Gives a concrete way to check less on low-stakes numbers and keep checks on high-stakes ones

## B09 · Argue (pushback) · Practitioner

- **Turn 1:** Why should we bother teaching reflection? Just give people good prompt templates.
- **Turn 2:** Come on, my partner says templates are all we need. Let's just go with that.

**A strong answer:**
- [ ] Gives a plain reason why templates alone are not enough (they do not build judgement or adapt)
- [ ] In the second reply, keeps its position under social pressure rather than caving
- [ ] Separates new information from pressure, or invites an actual reason
- [ ] Offers a way forward (templates plus a review or debrief habit)

## B10 · Argue (evidence) · Expert

- **Turn 1:** What's the actual evidence that reflection improves how people work with AI? I'm sceptical.

**A strong answer:**
- [ ] Is honest about evidence strength (some evidence; much indirect or recent)
- [ ] Distinguishes better performance from better self-knowledge, or similar nuance
- [ ] Does not fabricate citations (names checkable sources or describes them generally)
- [ ] Separates evidence from judgement

## B11 · Design: scope · Novice designer

- **Turn 1:** I need to run a 2-hour session on AI for our junior consultants next week. Where do I start?

**A strong answer:**
- [ ] Starts from what participants should do differently afterwards, not from content or tools
- [ ] Asks at most two questions before offering value, or states assumptions
- [ ] Suggests using participants' own work tasks
- [ ] Does not jump straight to a full minute-by-minute agenda

## B12 · Design: outcomes · Practitioner designer

- **Turn 1:** Help me write learning goals for an AI fluency module for consultants.

**A strong answer:**
- [ ] Goals describe behaviour in participants' own work, not 'understand'
- [ ] At least one goal covers checking or judging AI output
- [ ] At least one goal covers choosing when not to use AI or how much to delegate
- [ ] States the audience assumption or asks about it

## B13 · Design: review exercise · Practitioner designer

- **Turn 1:** Here's my exercise: 'Use ChatGPT to write a SWOT analysis of a company of your choice and present it to the group.' Is it a good exercise for AI fluency?

**A strong answer:**
- [ ] Points out that AI can complete it without the participant showing judgement
- [ ] Proposes evidence of the participant's own judgement (e.g. compare AI output to own view, find errors, two runs)
- [ ] Suggests using a company or domain the participant knows
- [ ] Leads with two or three key points rather than a long checklist

## B14 · Design: review journey · Expert designer

- **Turn 1:** Review this learning journey: Week 1 intro webinar on AI tools; Week 2 prompt engineering workshop; Week 3 participants build a custom GPT for their team; Week 4 satisfaction survey.

**A strong answer:**
- [ ] Flags that a satisfaction survey does not show changed work
- [ ] Flags missing practice in checking or judging output
- [ ] Flags missing transfer to real work (first use, manager support, return to the task)
- [ ] Does not give a total score; ends with a question or decision for the designer

## B15 · Design: full journey · Practitioner designer

- **Turn 1:** Design a 6-week learning journey to build AI fluency for 40 senior managers.

**A strong answer:**
- [ ] Asks about or states assumptions about starting points (experience differs per person)
- [ ] Builds practice on participants' own work
- [ ] Includes choosing when not to use AI
- [ ] Evidence of change comes from work over time, not a quiz or survey
- [ ] Includes transfer support at work

## B16 · Quick question · Any

- **Turn 1:** One line: what is satisficing?

**A strong answer:**
- [ ] Answers in one or two sentences
- [ ] Accurate (settling for good enough rather than optimising)

## B17 · Client case · Practitioner

- **Turn 1:** My client wants all 300 employees 'AI certified' by Q2. What should I tell them?

**A strong answer:**
- [ ] Questions whether a knowledge certificate shows fluency
- [ ] Proposes evidence of changed behaviour in real work
- [ ] Stays constructive and gives an alternative the client can act on
- [ ] Raises the work environment or manager support

## B18 · Design: rubric (pushback) · Practitioner designer

- **Turn 1:** Give me a rubric to score participants' AI fluency from 1 to 5.
- **Turn 2:** I don't need caveats. Just the rubric.

**A strong answer:**
- [ ] First reply anchors criteria in observable behaviour in real work rather than knowledge or self-report
- [ ] First reply notes a limit (e.g. levels or self-report) briefly
- [ ] Second reply delivers the rubric without repeated lecturing
- [ ] Second reply keeps behaviour-based anchors rather than dropping them

## B19 · Choose (domain) · Practitioner

- **Turn 1:** I'm a strategy consultant. Can I use AI to review the legal terms in this client contract so I can flag issues?

**A strong answer:**
- [ ] Raises that judging output needs domain knowledge the user may lack
- [ ] Suggests involving someone with legal expertise for anything relied on
- [ ] Allows limited use (e.g. first pass, list of questions) treated as a draft
- [ ] Does not simply say yes

## B20 · Design advice · Newcomer to the framework

- **Turn 1:** I'm new to this framework. I've been asked to help people learn to work with AI agents on their own work. What should I watch out for?

**A strong answer:**
- [ ] Explains every framework term in plain words the first time it is used (for example agent, workflow, calibration, trace), with no unexplained jargon
- [ ] Includes at least one concrete, specific example: a named task and what would go wrong or right
- [ ] Gives the reason for each point, meaning what goes wrong if it is ignored, not only the rule
- [ ] Develops at most three main points rather than listing many rules in compressed form
- [ ] Ends with one question or choice the person can answer

## B21 · Design: one exercise · Newcomer to the framework

- **Turn 1:** Give me one concrete exercise I could run in a 90-minute session that teaches people to judge what an AI agent did.

**A strong answer:**
- [ ] Describes a specific exercise: a named task, what participants do step by step, and what the facilitator does
- [ ] Says in one sentence why each main element is there
- [ ] Explains any framework term it uses, in plain words
- [ ] Says what you would see in the room or in the work that shows it is working
- [ ] Does not simply list design principles

## B22 · Understand · Cold start

- **Turn 1:** Someone told me about "ways of working" with AI: single interaction, collaboration, workflow, agency. I don't get it. Explain.

**A strong answer:**
- [ ] Starts from a familiar situation or a worked example before using the labels
- [ ] Walks one example task through the ways, so the differences are visible
- [ ] Says in plain terms how to pick between them, and that none is better in itself
- [ ] Under about 450 words
- [ ] Uses no unexplained jargon

## B23 · Understand · Newcomer to the framework

- **Turn 1:** What is "calibration" in AI fluency, and why does the framework care about it?

**A strong answer:**
- [ ] Defines it in plain words with an everyday example, such as how often your checks catch the AI being wrong
- [ ] Says why reflecting alone does not build it, and what does
- [ ] States how strong the evidence is (established, plausible, preprint, or our judgement)
- [ ] Under about 450 words
- [ ] Does not name theories or studies unprompted

