# Interactive map: design

A free-explore 3D map of Reflective AI Fluency. It is for looking around and finding your way, not for training. There is no fixed order, no quiz and no score.

## What a visitor can do

- See the whole framework at once (overview), open one part of it (a cluster), or open one concept.
- Move between the three levels from the bar, the breadcrumb, the map itself or the list. Esc goes up one level.
- Search for any concept with ⌘K, Ctrl+K or `/`.
- Read what a concept means, when it fits and when it does not, the question it asks about their own work, and how strong the evidence is.
- Follow its connections, grouped by kind and showing which way each points.
- Type one step of their own work. It then appears next to the question on every concept. It stays in the open tab and is never stored or sent.
- Share a link to a concept (`#calibration`) or to a part (`#part-quality`).

## The map

- **22 concepts in four parts:** the four competencies (4), the ways of working (5, plus how you choose between them), quality (9), and foundations (3: domain knowledge, stakes, and satisficing as the default to resist). Each part has its own shape and tone. Colour is never the only cue.
- **Three levels.** Overview shows four clouds with their names and a short text on how they relate. A part shows its concepts. A concept shows itself and what it connects to.
- **Connections are few and typed.** There are 18, each stated in the manifest. Four kinds, drawn differently, with an arrowhead showing direction. The key at the bottom left explains them.
  - Calls for more (solid): more autonomy or higher stakes call for more checking.
  - Limits (dashed): domain knowledge caps how much you hand over. Curiosity works against settling for good enough.
  - Builds (solid): calibration makes proportionate checking possible. Outside feedback sharpens calibration.
  - Makes visible (dotted): traces make adaptation and transfer visible.
- **The ways of working are not chained.** The manifest says there is no ladder. They sit along one labelled axis, who sets the path, with no arrows between them. "Choosing per step" is not a way of working: it floats above the axis as the act of picking between them.
- Nodes are shaded solids with a thin outline, sized by how many connections they have.

## Learning design rules applied

The page is not a course. It is still a learning design, so it follows the foundation (`source/learning-design-foundation.md`) where the rules fit. Where a rule does not fit, it says so.

| Rule | What it means here |
| --- | --- |
| 3. State the outcome as behaviour in own work | The overview states a modest outcome the page can deliver: find the part of the framework that bears on a step of your own work, and see what it asks. A behavioural outcome (choose, check, change your mind) needs practice and feedback the page does not offer, so it is not promised. |
| 1. Match support to experience, withdraw it as people gain skill | A newcomer gets the overview, the three question entries and "Next" suggestions. An expert goes straight to search or the list. Suggestions skip concepts already opened, which tracks clicks, not skill, so it only approximates withdrawing support. |
| 2, 7. Practise judgement in a domain you know, on your own work | The optional step field puts every concept's question in terms of the visitor's own task. |
| 9. Show where AI, or a way of working, does not fit | Each way of working has "Fits when" and "Does not fit when". No AI is one of them. |
| 4. Say what learning is for | The page is for orientation and understanding. It makes no claim that visiting changes how anyone works. |
| Reduce load | Three levels, one concept at a time, 3 to 9 items per part. Everything unrelated dims. |
| Label confidence | Each concept carries established, plausible, preprint, our judgement, or from the 4D framework. |

Not applied, on purpose: practice with errors (9 is only partly met), debriefs, outside feedback, first-use plans and evaluation over time (rules 8, 12, 14, 17, 19). Those need a learning journey around the page, not the page itself. The skill can design one.

## Rules for the content

- All wording comes from `source/manifest.md` and `source/knowledge-base.md`. `src/content.js` is hand-written for now. The plan is to generate it from the source, as the skill's reference files are.
- A connection exists only if the manifest states the relation. The author should review all 18.
- "Fits when" and "Does not fit when" come from the manifest's choosing table. They are condensed, so check each against it.
- Theory and study names stay out. Evidence ratings stay in. The overview says plainly that most of the framework is our judgement.
- The optional step field asks visitors not to type client names, although nothing is stored.

## Look and feel

- Light by default, with a dark theme that follows the system and can be switched. The choice is remembered where storage is allowed.
- Implement's palette used tone-in-tone, with one yellow accent for the current selection. Palatino Linotype for headings, never bold. Arial for the rest. Hairline borders and a quiet dotted ground.
- Eased camera moves. With reduced motion, the camera jumps and nothing moves by itself.

## Not on this map yet

- The learning design layers (a sequence, so a different shape).
- The 24 behaviours.
- Any exercise or evidence of change.

## Before publishing

- Check every sentence and every connection against the source.
- Resolve the license question in `CONTRIBUTING.md`.
- Test on a real phone, with a keyboard, with a screen reader and in dark mode.
