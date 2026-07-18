---
name: frontend-design
description: >-
  Design and build marketing pages, landing pages, campaigns, and brand-facing
  frontend where visual identity, typography, narrative, and distinctiveness
  matter most. Use for hero sections, feature pages, product marketing sites,
  about pages, and brand storytelling. Not for dashboards, admin panels, or
  interactive tools.
license: MIT
compatibility: opencode
metadata:
  audience: developers
  focus: marketing-frontend
---

# Frontend Design

Approach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.

## Ground it in the subject

If the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. The subject's own world, its materials, instruments, artifacts, and vernacular, is where distinctive choices come from. Build with the brief's real content and subject matter throughout.

## Design principles

- **The hero is a thesis.** Open with the most characteristic thing in the subject's world. A big number with a small label, supporting stats, and a gradient accent is the template answer — only use if that's truly the best option.

- **Typography carries the personality of the page.** Pair the display and body faces deliberately. Make the type treatment itself a memorable part of the design.

- **Structure is information.** Structural devices should encode something true about the content. Numbered markers (01 / 02 / 03) only if content is actually a sequence.

- **Leverage motion deliberately.** An orchestrated moment lands harder than scattered effects. Sometimes less is more — extra animation contributes to the feeling that the design is AI-generated.

- **Match complexity to the vision.** Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail.

## Process: brainstorm, explore, plan, critique, build, critique again

AI-generated design clusters around three default looks:
1. Warm cream (#F4F1EA) + serif display + terracotta accent
2. Near-black + single bright acid-green or vermilion accent
3. Broadsheet layout with hairline rules, zero radius, dense columns

Where the brief leaves an axis free, don't spend that freedom on one of these defaults.

### Pass 1: Design Plan

Create a compact token system:

- **Color:** 4–6 named hex values.
- **Type:** Display face + body face + utility face for captions/data.
- **Layout:** One-sentence prose + ASCII wireframes.
- **Signature:** The single unique element the page will be remembered by.

### Pass 2: Review & Revise

Review against the brief. If any part reads like a default for any similar page, revise it. Say what you changed and why. Only after confirming uniqueness, write code.

### CSS Discipline

Structure selector specificities carefully. Avoid classes that cancel each other out. Do planning and iteration in thinking — only show ideas when you have high confidence.

## Restraint and Self-Critique

- **Spend your boldness in one place.** Let the signature be the one memorable thing. Cut decoration that doesn't serve the brief.
- **Build to a quality floor:** responsive to mobile, visible keyboard focus, reduced motion respected.
- **Critique your own work.** Consider Chanel's advice: before leaving the house, remove one accessory.
- Jot down notes about what you've tried to avoid repeating patterns.

## Writing for Design

Words are design material, not decoration. Bring the same intentionality to copy that you bring to spacing and color.

- **Write from the end user's side.** Name things by what people control and recognize.
- **Use active voice.** "Save changes," not "Submit." Keep action names consistent through flows.
- **Treat failure and emptiness as direction, not mood.** Errors don't apologize. Empty screens invite action.
- **Keep register conversational:** plain verbs, sentence case, no filler. Each element does one job.
