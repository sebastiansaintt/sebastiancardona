# Design Review Checklist & Scoring Rubric

Use this checklist to audit interfaces, validate pull requests, or benchmark AI-generated UI implementations. It is organized into three strictly prioritized compliance tiers followed by an objective 0–3 scoring rubric.

---

## 1. Quick Measurable Gates (Binary Pass/Fail)

Before conducting an in-depth review, every screen must pass these 7 binary tests:

- [ ] **1. Dominant Task Action:** Does the view feature exactly one dominant primary action for its main objective?
- [ ] **2. Minimum Hitbox:** Are all touch and click targets at least 44×44px (`--touch-target-min`)?
- [ ] **3. WCAG AA Contrast:** Does every text element satisfy minimum contrast (4.5:1 normal, 3:1 large/controls)?
- [ ] **4. Color Independence:** Is the screen fully understandable and operable without relying on color alone?
- [ ] **5. Full Keyboard Operability:** Can a user navigate and trigger all controls using `Tab`, `Arrows`, `Enter`, and `Escape` with visible `:focus-visible` rings?
- [ ] **6. Reduced Motion Support:** Does the interface remain functional and stable under `prefers-reduced-motion: reduce`?
- [ ] **7. Dual-Viewport Ergonomics:** Does the interface adapt smoothly between mobile (<768px) and desktop (≥1024px) without breaking or awkward horizontal scroll?

---

## 2. Tiered Review Checklist

### Tier 1: Mandatory Before Delivery (Blockers — Must Have)

Failure in any Tier 1 item blocks shipping.

#### Accessibility & Ergonomics
- [ ] All inputs have explicit `<label>` tags or accessible `aria-label` attributes.
- [ ] Focus trap is enforced in modal dialogs; pressing `Escape` dismisses overlays and returns focus to the trigger.
- [ ] Icons lacking adjacent descriptive text contain `aria-label` or `<span class="sr-only">`.
- [ ] No `outline: none` without an explicit `:focus-visible` treatment.

#### Layout & Hierarchy
- [ ] Single primary workflow per screen; clear visual path from top to bottom.
- [ ] No nested cards (card inside a card with duplicate borders/shadows).
- [ ] Grouped inset lists are used as the default pattern for settings, profiles, and structured rows instead of dense tables.
- [ ] Tables are used solely for dense, desktop comparison tasks (financial/analytical).
- [ ] No Lorem Ipsum or placeholder dummy text when real product context is known.

#### Color & Material Disciplines
- [ ] Exactly one interactive accent color drives primary actions, links, and selection states.
- [ ] Status colors (`success`, `warning`, `error`) are used strictly for state feedback, never decorative accents.
- [ ] Translucent blur materials are applied ONLY to floating chrome (sticky nav bars, tab bars, sheets over content). Static surfaces remain opaque.

---

### Tier 2: Recommended for Polish (Quality Standard — Should Have)

Essential for achieving true platform-native quality.

#### Spatial & Visual Details
- [ ] Corner radii follow the unified scale: `--radius-sm` (8px), `--radius-md` (12px), `--radius-lg` (16px), `--radius-xl` (20px).
- [ ] Content containers respect max-widths (`--max-w-reading: 680px`, `--max-w-form: 560px`, `--max-w-container: 1120px`). No empty screen deserts.
- [ ] Hairline separators (`0.5px`–`1px`) are indented past leading icons in grouped lists.
- [ ] Destructive actions are highlighted in `--color-error` and require confirmation or offer instant Undo.

#### Interaction & Motion
- [ ] Immediate physical touch/hover feedback (<100ms) on all interactive controls (`scale(0.98)` on press).
- [ ] Animations animate ONLY GPU compositor properties (`transform`, `opacity`).
- [ ] No staggering or sequential animation of all components on initial page load.
- [ ] Skeletons reflect precise layout geometry and do not shimmer unnecessarily for brief loads.

---

### Tier 3: Contextual & Product-Specific (Nice to Have)

Apply where supported and appropriate for the product context.

- [ ] Support for browser `document.startViewTransition` with graceful instant fallback.
- [ ] Haptic feedback (`navigator.vibrate`) on touch devices for switch toggles.
- [ ] Native pull-to-refresh or edge-swipe sheet dismiss gestures on mobile touch devices.
- [ ] Adaptive keyboard avoidance via `interactive-widget=resizes-content` meta tag.

---

## 3. Objective Scoring Rubric (0 to 3)

Evaluate the final implementation against this four-point scale:

| Score | Rating Level | Diagnostic Characteristics | Action Required |
|---|---|---|---|
| **0** | **Unacceptable** | Violates basic accessibility (low contrast, no keyboard focus). Cluttered layout, multiple competing CTAs, gratuitous glassmorphism, or nested cards. | **Reject.** Redesign layout and fix foundational tokens. |
| **1** | **Functional but Generic** | Operable, but looks like a generic web template. Flat, sterile borders-only UI, arbitrary padding, inconsistent corner radii, tables used where grouped lists belong. | **Refactor.** Apply semantic design tokens, grouped lists, and native typography. |
| **2** | **System Compliant** | Fully compliant with design tokens, WCAG AA contrast, keyboard accessibility, and responsive patterns. One dominant action, clean grouped lists, proper max-widths. | **Approved for production.** Ready to ship. |
| **3** | **Polished & Native-Grade** | Exceptional craft. Fluid spring-feel transitions, continuous curvature squircle radii, subtle tactile press feedback, perfect deference to content. Feels like a first-party Apple application built for the web. | **Exemplary.** Use as reference implementation for future views. |
