// The framework as a map: concepts (nodes) and how they depend on each other (links).
// Hand-written from source/manifest.md for now. Every statement here must match that file.
// Ratings: established, plausible, preprint, judgement ("our judgement"), or `from` for ideas taken from the 4D framework.

export const CLUSTERS = {
  competency: { tagline: "Four questions to ask about any step", short: "Competencies", name: "The four competencies", hint: "Four questions to ask about any step of your work", color: "--c-comp", shape: "octa", frame: [0, 1.2, 0] },
  way: { tagline: "Who sets the path of the work", short: "Ways of working", name: "Ways of working", hint: "Who sets the path of the work", color: "--c-way", shape: "sphere" },
  quality: { tagline: "How reliably and reflectively you do it", short: "Quality", name: "Quality", hint: "How well and how reflectively you work", color: "--c-qual", shape: "box" },
  ground: { tagline: "What you know, what is at stake, and the default to resist", short: "Foundations", name: "Foundations", hint: "What the rest stands on", color: "--c-ground", shape: "cone" },
};

// Which clusters are visible at the start. The rest are one click away.
export const START_LAYERS = ["competency", "way"];

export const NODES = [
  // Competencies, from the 4D framework (Dakan and Feller)
  { id: "delegation", cluster: "competency", name: "Delegation", pos: [-1.4, 1.2, 1.4], rating: { from: "4D framework" },
    plain: "Deciding whether, when and how to use AI, and in which way of working.",
    ask: "Should AI help with this step, and how much should it do?" },
  { id: "description", cluster: "competency", name: "Description", pos: [1.4, 1.2, 1.4], rating: { from: "4D framework" },
    plain: "Telling the AI the goal, context, format and how to work. It has two moments: framing the task before it starts, and steering as the work develops.",
    ask: "Have I told it what I would tell a capable new colleague?" },
  { id: "discernment", cluster: "competency", name: "Discernment", pos: [-1.4, 1.2, -1.4], rating: { from: "4D framework" },
    plain: "Judging the output, the reasoning and the collaboration itself.",
    ask: "How would I know if this is wrong, incomplete or misleading?" },
  { id: "diligence", cluster: "competency", name: "Diligence", pos: [1.4, 1.2, -1.4], rating: { from: "4D framework" },
    plain: "Taking responsibility: choosing tools well, being open about AI's role, verifying before use.",
    ask: "Can I stand behind this, and would I be comfortable saying how it was made?" },

  // Ways of working, sorted by who sets the path
  { id: "noai", cluster: "way", name: "No AI", pos: [-4.4, -0.4, -0.9], rating: { judgement: true },
    plain: "Doing the step yourself. A real choice, not a failure. It protects your judgement or responsibility, or AI would cost more than it gives.",
    ask: "Does this step belong to me?",
    fits: 'Not worth it once you count tokens, time and review effort. Or the step protects your judgement, expertise or responsibility.', not: 'You can judge the result and the AI saves real effort.' },
  { id: "single", cluster: "way", name: "Single interaction", pos: [-3.0, -0.4, 0.9], rating: { judgement: true },
    plain: "You set the path in one step: one question or instruction, one response, which you judge. Often exactly right.",
    ask: "Is one exchange enough?",
    fits: 'One exchange is enough, the goal is clear and you can check the result quickly.', not: 'The work needs several rounds. Then collaborate.' },
  { id: "collab", cluster: "way", name: "Collaboration", pos: [-1.5, -0.4, -0.9], rating: { judgement: true },
    plain: "You and the AI set the path together, step by step. You iterate and the path emerges. You catch errors as they happen.",
    ask: "Do I need several rounds, or do I not yet know what good looks like?",
    fits: 'The goal is not clear yet, and you want to find what good looks like. You can check as you go.', not: 'The path can be fixed in advance and the work recurs. Then build a workflow.' },
  { id: "workflow", cluster: "way", name: "Workflow", pos: [0, -0.4, 0.9], rating: { judgement: true },
    plain: "You set the path in advance: the steps, inputs and checks. The AI runs them, often repeatedly. Every step can be inspected, so it suits repeatable and auditable work.",
    ask: "Can I fix the path in advance, and does it recur enough to be worth building?",
    fits: 'You can fix the path in advance, need to inspect it step by step, and the work recurs or has volume. Suits repeatable, consistent, auditable work.', not: 'The path cannot be set in advance, or the work is a one-off.' },
  { id: "agency", cluster: "way", name: "Agency", pos: [1.5, -0.4, -0.9], rating: { judgement: true },
    plain: "The AI sets its own path within boundaries you give. You judge goals, boundaries and results, not each step. It suits open-ended work, and errors surface only at checkpoints.",
    ask: "What may it decide, within which boundaries, and at what cost per run?",
    fits: 'The work is open-ended and its path cannot be set in advance. You can set boundaries and checkpoints and judge the results.', not: 'An undetected error is costly and hard to undo, or you cannot say how you would know it is wrong.' },
  { id: "choosing", cluster: "way", name: "Choosing per step", pos: [-0.3, 1.0, 0], rating: { judgement: true },
    plain: "Not a way of working but how you pick between them. There is no ladder: you choose per step, so one person uses all of these in a day, and some steps use none. Step down when output drifts, stakes rise or you cannot say how you would know it is wrong. Re-test the choice when the AI's capabilities or costs change.",
    ask: "Is it worth it, can I judge it, and what does an undetected error cost?" },

  // Quality
  { id: "reflective", cluster: "quality", name: "Reflective quality", pos: [0, 3.4, 0], rating: { judgement: true },
    plain: "Not a fifth competency: the quality with which all four are performed. It shows as curiosity (looking for a better result), noticing (during the work), reviewing (after it), adjusting, and carrying forward what worked.",
    ask: "Is this the best way to get high quality here, and how do I ensure it?" },
  { id: "reliability", cluster: "quality", name: "Reliability", pos: [-3.0, 3.0, -1.8], rating: { judgement: true },
    plain: "Counts errors found, not errors avoided. Stronger: you find the errors, during the work. Fluent people often meet more failures, but theirs are visible and recoverable.",
    ask: "Who finds my errors, and when?" },
  { id: "checking", cluster: "quality", name: "Proportionate checking", pos: [-1.6, 4.3, -2.0], rating: { plausible: true },
    plain: "The check matches what an error would cost. The same check whatever the risk, or none, is the weaker form.",
    ask: "Would an error here be costly or cheap, and is my checking matched to that?" },
  { id: "calibration", cluster: "quality", name: "Calibration", pos: [0.2, 4.6, -2.2], rating: { established: "in medicine", preprint: "for AI use" },
    plain: "Your confidence in your own judgement and in the AI matches how often each is right. Reflection alone does not sharpen it. Outside feedback does.",
    ask: "How do I find out how often I and the AI are actually right?" },
  { id: "reasoning", cluster: "quality", name: "Reasoning", pos: [2.0, 4.3, -1.9], rating: { judgement: true },
    plain: "You can give reasons for the way of working, the check or the prompt you chose, and say what would change the choice.",
    ask: "Why this way, and what would make me change it?" },
  { id: "adaptation", cluster: "quality", name: "Adaptation", pos: [3.2, 3.0, -1.6], rating: { judgement: true },
    plain: "Practice on the same task changes when the output or the conditions change.",
    ask: "What did I change since last time, and why?" },
  { id: "transfer", cluster: "quality", name: "Transfer", pos: [3.4, 1.8, -0.8], rating: { judgement: true },
    plain: "What you learned carries to new tasks and to other ways of working.",
    ask: "Where else does this lesson apply?" },

  // Foundations
  { id: "domain", cluster: "ground", name: "Domain knowledge", pos: [0, -3.0, 0], rating: { established: "expertise is domain-bound", preprint: "AI-specific findings" },
    plain: "You can only catch errors you can recognise. It is a precondition under everything else, not a dimension of fluency. A strong expert can still be a beginner with AI, and a fluent AI user is exposed in an unfamiliar domain. Outside your domain: lower autonomy, bring someone in, or treat the output as a draft.",
    ask: "Do I know this domain well enough to tell when the AI is wrong?" },
  { id: "stakes", cluster: "ground", name: "Stakes", pos: [3.8, -1.8, 2.4], rating: { plausible: true },
    plain: "What an undetected error costs, and whether it can be undone. Where it is high and irreversible, AI drafts and a human decides.",
    ask: "What does an undetected error cost, and is it reversible?" },
  { id: "satisficing", cluster: "ground", name: "Satisficing", pos: [-3.6, -2.0, -2.2], rating: { judgement: true },
    plain: "Accepting the first good-enough result. With AI it is the default, because output always looks acceptable and the model rarely shows what is missing. Fluency means ensuring quality, not assuming it. Stopping early on low-stakes work is fine, if you chose it.",
    ask: "Have I chosen to stop here, or just accepted what came?" },
  { id: "traces", cluster: "quality", name: "Traces", pos: [1.6, 2.1, 0.9], rating: { judgement: true },
    plain: "A difference between two points in time on the same task, with a reason: a check added after an error, a way of working switched, a prompt revised. It shows that practice changed. It does not measure how reflective someone is. No change and no reason is no evidence, not failure.",
    ask: "What changed between the two runs, and why?" },
  { id: "tools", cluster: "quality", name: "Tools for looking back", pos: [-1.6, 2.3, 0.9], rating: { judgement: true },
    plain: "Four ways to make your own practice visible: compare two runs of the same task, a short debrief, outside feedback, and reading back your own conversations.",
    ask: "How will I see what I missed?" },
];

// Four kinds of relation, each drawn differently. Arrows point from cause to effect.
export const TYPES = {
  raises: { label: "Calls for more", heading: "Raises what you need", dash: false, plain: "A raises how much of B you need." },
  caps: { label: "Limits", heading: "Limits or holds back", dash: true, plain: "A caps or works against B." },
  builds: { label: "Builds", heading: "Builds or makes possible", dash: false, plain: "A builds, frames or makes B possible." },
  shows: { label: "Makes visible", heading: "Makes visible", dotted: true, plain: "A makes B visible to you." },
};

// Only relations the manifest states. [from, to, type, one sentence naming both ends]. There is deliberately
// no chain between the ways of working: they are options, not steps on a ladder.
export const LINKS = [
  ["workflow", "checking", "raises", "A workflow others rely on needs its checks built into the process."],
  ["agency", "checking", "raises", "With agency you see an error only at checkpoints, so the checking has to be stronger."],
  ["stakes", "checking", "raises", "The higher the stakes, the stronger the checking."],
  ["stakes", "choosing", "caps", "What an undetected error would cost caps how much you can safely hand over."],
  ["domain", "choosing", "caps", "How much you hand over is capped by how well you know the domain."],
  ["domain", "discernment", "caps", "You can only recognise errors in a domain you know."],
  ["reflective", "satisficing", "caps", "Curiosity, part of reflective quality, tests whether better than good enough exists."],
  ["discernment", "reliability", "builds", "Judging output is how you find errors, which is what reliability counts."],
  ["calibration", "checking", "builds", "Matching checks to stakes needs knowing how often you and the AI are right."],
  ["tools", "calibration", "builds", "Calibration needs outside feedback, which reflection alone does not give."],
  ["tools", "reflective", "builds", "Comparing runs and debriefing make your practice visible, so you can look back."],
  ["delegation", "choosing", "builds", "Delegation is the competency that makes the choice per step."],
  ["description", "workflow", "builds", "Description frames a workflow's path up front."],
  ["description", "collab", "builds", "Description steers a collaboration as the work develops."],
  ["tools", "traces", "shows", "Comparing two runs, with a reason, produces traces."],
  ["traces", "adaptation", "shows", "A changed practice on the same task is a trace of adaptation."],
  ["stakes", "diligence", "raises", "The higher the stakes, the more it matters that you can stand behind the work and say how it was made."],
  ["traces", "transfer", "shows", "A change carried to a new task is a trace of transfer."],
];

export const ENTRIES = [
  { id: "choosing", title: "Decide how to use AI on a step", text: "Single question, collaboration, workflow, agency, or no AI at all." },
  { id: "checking", title: "Judge whether the work is good enough", text: "How hard to check, and how you would know you are wrong." },
  { id: "reflective", title: "Get better at it over time", text: "What reflection adds, and how to see your own practice." },
];

export const OVERVIEW = {
  title: "How the parts of AI fluency fit together",
  thread: "Using AI well is a series of choices, one for each step of your work: how much to hand over, how hard to check, and what an error would cost. These parts depend on each other, which is why this is a map and not a list.",
  outcome: "After exploring, you can find the part of the framework that bears on a step of your own work, and see what it asks of you.",
  caveat: "Most of this framework is our judgement, not tested evidence. Each concept says which.",
  relations: [
    "More autonomy and higher stakes need more quality.",
    "You can only judge what you know, so domain knowledge caps how much you hand over.",
    "The four competencies apply in every way of working. What changes is how they are performed.",
  ],
};
