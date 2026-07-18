---
name: interface-design
description: >-
  Craft-first interface design for dashboards, admin panels, SaaS apps, tools,
  settings pages, data interfaces, and interactive products. Use when designing,
  building, reviewing, auditing, or refining product UI where visual craft,
  layout hierarchy, tokens, states, visual direction, or design-system
  consistency matter. Not for marketing pages, landing pages, campaigns, or
  brand-only work.
license: MIT
compatibility: opencode
metadata:
  audience: developers
  focus: product-ui
---

# Interface Design

Build product interfaces with the craft of a top design team — Linear, Vercel, Stripe, Apple. The difference between those and generic output is not talent. It is that every decision was decided, the hierarchy is unmistakable, and a hundred small details are correct at once. This skill is how you get there.

## Scope

Use for: Dashboards, admin panels, SaaS apps, tools, settings pages, data interfaces.

Not for: Landing pages, marketing sites, campaigns, brand-only work. Use a marketing/frontend design skill for those.

## The Problem

You will generate generic output. Your training has seen thousands of dashboards, and the patterns are strong. The bar: If another AI, given a similar prompt, would produce substantially the same output, you have failed. Not different for its own sake — different because the interface emerged from this user, this task, this world.

### Where Defaults Hide

- **Typography** — type isn't holding your design, it *is* your design. Reaching for your usual font means you're not designing.
- **Navigation** — navigation is the product. A page floating in space is a component demo, not software.
- **Data** — a number on screen is not design. What does it mean to the person looking?
- **Token names** — `--ink` and `--parchment` evoke a world; `--gray-700` evokes a template.

There are no structural decisions. Everything is design. The moment you stop asking "why this?" is the moment defaults take over.

## Intent First

Before touching code, answer:

1. **Who is this human?** Not "users." The actual person. Where are they when they open this?
2. **What must they accomplish?** The verb. Determines what leads, what follows, what hides.
3. **What should this feel like?** Warm like a notebook? Cold like a terminal? Dense like a trading floor?

**Intent must be systemic.** Check every token against the stated intent. For every choice you must be able to say why. "It's common" or "it works" means you defaulted.

## Product Domain Exploration

Generic path: Task type → visual template → theme.
Crafted path: Task type → product domain → signature → structure + expression.

Produce all four before proposing any direction:

1. **Domain** — concepts, metaphors, vocabulary from this product's world. Minimum 5.
2. **Color world** — what colors exist naturally here? List 5+.
3. **Signature** — one element that could only exist for THIS product.
4. **Defaults** — 3 obvious choices for this interface type you're rejecting.

## Visual Hierarchy & Composition

- **One focal point per view.** Name it. Make it win: bigger, higher-contrast, ringed in whitespace.
- **Type scale is a ratio.** Pick one: ~1.2 (dense), ~1.25 (product), ~1.333 (expressive). Weight beats size — three tiers through weight + opacity alone.
- **Density is a decision.** 12–16px padding = tight; 24px = airy. Pick, hold it.
- **Proportions speak.** A 280px sidebar says "nav serves content." A 360px says "peers."
- **60/30/10 rule.** One dominant surface, one secondary, ~10% accent. Gray builds structure; color communicates.

## Craft Foundations

### Subtle Layering

- **Surface elevation.** Numbered system; each jump is only a few % lightness. Whisper-quiet shifts you feel rather than see.
- **Sidebars:** same background as canvas, not a different color.
- **Inputs:** slightly darker than surroundings (inset), not lighter.
- **Borders:** low-opacity rgba. Dark: `rgba(255,255,255,0.06–0.12)`. Light: slightly higher.

**The squint test:** blur your eyes. Hierarchy readable? Nothing jumping out? Good.

### Infinite Expression

Every pattern has infinite expressions. Before building ask: what's the ONE thing users do here, and what product solves a similar problem brilliantly?

### Color Lives Somewhere

Before reaching for a palette, walk into the physical version of this space — what materials, what light, what objects? Your palette should feel like it came FROM somewhere.

## Before Writing Each Component

Mandatory checkpoint:

```
Intent:     [who, what must they do, how should it feel]
Hierarchy:  [the focal element, and how it wins]
Palette:    [colors and WHY they fit this world]
Depth:      [borders / shadows / layered — WHY fits intent]
Surfaces:   [elevation scale — WHY this temperature]
Typography: [typeface + levers — WHY]
Spacing:    [base unit + density]
```

## Use What Exists

### Controls: native → primitive → hand-roll

1. **Native** HTML first. `<button>`, `<a>`, `<input>`, `<dialog>`, `<details>` exist.
2. **Headless primitive** for complex stateful controls. Radix UI, React Aria, Ark, etc.
3. **Hand-roll** only as last resort — then you owe complete keyboard nav, ARIA, focus trap.

### Styling: system → component → token → utility

1. Use the project's design system if it exists.
2. Extract a component on second reuse.
3. Bind to semantic tokens, not hardcoded literals.
4. Inline utilities for genuine one-offs only.

## Design System Essentials

- **Token architecture:** foreground, background, border, brand, semantic. No random hex.
- **Text hierarchy — four levels:** primary, secondary, tertiary, muted.
- **Spacing:** base unit (4 or 8px), multiples only.
- **Depth — choose ONE:** borders-only / subtle shadows / layered shadows / surface-color shifts.
- **Border radius — a scale:** small (inputs), medium (cards), large (modals).
- **Dark mode:** lean on borders, not shadows. Desaturate semantic colors. Same hierarchy, inverted values.

## Polish & Motion

### Static Polish

- **Concentric radius:** `outerRadius = innerRadius + padding`
- **Tabular numbers:** `font-variant-numeric: tabular-nums`
- **States are not optional:** default, hover, active, focus, disabled. Loading, empty, error.
- **Hit areas:** 44×44px (WCAG), 40 minimum.
- **Shadows over borders:** layered transparent box-shadow for elevation.
- **Text-wrap:** `balance` on headings, `pretty` on body.

### Motion

- **Duration < 300ms.** Button press 100–160ms; dropdowns 150–250ms; modals 200–500ms.
- **Custom ease-out:** `cubic-bezier(0.23, 1, 0.32, 1)` for entering.
- **Press feedback:** `transform: scale(0.97)` on `:active`.
- **Only animate transform and opacity** (GPU-composited).
- **Respect prefers-reduced-motion.**

## Avoid

- Harsh borders | Dramatic surface jumps | Flat hierarchy | Monotone layout
- Inconsistent spacing | Mixed depth strategies | Missing states
- Gradients for decoration | Multiple accent colors | Different hues per surface
- Structural hacks (negative margins, escape calc(), absolute positioning to dodge flow)

## Workflow

### Suggest + Ask

```
Domain:     [5+ concepts]
Color world:[5+ colors]
Signature:  [one unique element]
Rejecting:  [default 1] → [alt], [default 2] → [alt], [default 3] → [alt]
Direction:  [approach]
```

### The Checks (before showing)

1. **Swap test** — swap typeface/layout for defaults: anything feel different?
2. **Squint test** — hierarchy readable? Nothing harsh?
3. **Signature test** — point to 5 specific elements where signature appears.
4. **Token test** — read CSS variables aloud: do they belong to this product or any project?

### After Completing

Offer to save to `.interface-design/system.md`:
- Direction and feel
- Depth strategy and spacing base
- Hierarchy decisions
- Key component patterns with values
- Visual direction notes
