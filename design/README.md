# Design System & UI/UX Guidelines

Welcome to the design system source of truth. This folder defines the architectural principles, tokens, layout standards, component interactions, and evaluation rubrics for building native-grade, human-centered web interfaces inspired by Apple's Human Interface Guidelines.

---

## 1. System Scope & Interface Coverage

This system governs the following web experiences:

1. **Responsive Web Applications:** Products designed to perform seamlessly across mobile viewports, tablets, laptops, and ultra-wide desktop monitors.
2. **Productivity & Utility Web Apps:** Native-grade web software (notes, task managers, document editors, finance tools, settings panels) prioritizing direct manipulation, tactile feedback, and calm focus.
3. **Product Dashboards & Workspaces:** High-clarity internal and customer-facing management consoles that favor scannable grouped lists and focused inspection over bloated metric grids.
4. **Marketing-Adjacent Product Pages:** Dedicated product overview and onboarding surfaces that present features elegantly without compromising product tools with marketing fluff.

---

## 2. What "Apple-Inspired" Means on the Web

Being "Apple-inspired" does **not** mean creating a superficial, rigid clone of iOS or SwiftUI in the browser. It means adopting Apple's foundational design disciplines translated to the open web:

- **Deference to Content:** Chrome steps back so the user's data, media, and work remain the star.
- **Web-Native Ergonomics:** Full support for cursor hover states, mouse clicks, fluid layouts, standard URLs, browser history, and responsive typography.
- **Accessible System Fonts:** Leveraging modern system font stacks (`-apple-system`, `BlinkMacSystemFont`, `Inter`, `system-ui`) rather than illegally bundling proprietary Apple font binaries.
- **True Tactile Response:** Immediate, spring-grounded micro-feedback (<100ms) on clicks and touches, paired with continuous squircle corner curvatures.

---

## 3. Hierarchy of Truth & Conflict Resolution

When design requirements or platform constraints conflict, decisions must strictly follow this order of priority:

$$\mathbf{Accessibility} \;\longrightarrow\; \mathbf{Clarity} \;\longrightarrow\; \mathbf{Content} \;\longrightarrow\; \mathbf{Deference} \;\longrightarrow\; \mathbf{Novelty}$$

1. **Accessibility (Must):** WCAG AA contrast (4.5:1), keyboard operability (`:focus-visible`), touch targets (≥44px), and `prefers-reduced-motion` are non-negotiable blockers.
2. **Clarity (Must):** Purpose and hierarchy must be immediately recognizable at a glance.
3. **Content (Must):** The user's information and tasks take precedence over decorative UI elements.
4. **Deference (Should):** Keep controls understated and materials purposeful.
5. **Novelty (May):** Innovative interactions are welcomed only if they enhance ergonomics and never compromise clarity or accessibility.

---

## 4. Rule Levels: Requirements vs. Recommendations

- **Normative Rules (MUST):** Mandatory requirements. Violating any of these blocks deployment (e.g. WCAG AA contrast, keyboard focus traps, one dominant task action, no nested cards, GPU-only animations).
- **Quality Recommendations (SHOULD):** Best-practice refinements for platform polish (e.g. spring physics tokens, squircle radius progression, semantic max-widths).
- **Contextual Features (MAY):** Progressive enhancements activated when supported (e.g. View Transitions API, device haptics, edge-swipe gestures).

---

## 5. Key Anti-Patterns ("What NOT to Do")

To maintain interface integrity, avoid these common pitfalls:

- ❌ **NO Fake iOS Clones:** Never recreate rigid native iOS controls that break web usability (e.g. simulated 3D wheel pickers or non-standard scroll hijackers).
- ❌ **NO Gratuitous Glassmorphism:** Never apply background blur or transparency as a flat decorative styling on static content. Translucency is strictly reserved for floating chrome.
- ❌ **NO Metric Bloat Dashboards:** Never generate grids of 12 colorful cards packed with gratuitous charts unless explicitly required for analytical comparison.
- ❌ **NO Nested Cards:** Never place a card inside another card with stacked borders or duplicate shadows.
- ❌ **NO Hero CTA Banners in Working Tools:** Reserve marketing-style hero banners for product landing pages; keep functional product screens calm and utilitarian.
- ❌ **NO Unlabeled Icons:** Never place an icon without an accessible label (`aria-label`) or text context.
- ❌ **NO Tables for Settings or Feeds:** Use grouped inset lists by default. Reserve tables strictly for dense data comparison.
- ❌ **NO Dummy Text or Lorem Ipsum:** Always use realistic, domain-specific names, dates, amounts, and statuses.

---

## 6. Directory Index & Reading Order

Consult the documents in this order:

| Document | Primary Focus | Role in System |
|---|---|---|
| [**UI_DESIGN_PHILOSOPHY.md**](file:///C:/Users/Sebastian/Desktop/design/UI_DESIGN_PHILOSOPHY.md) | Core values, observable criteria, correct vs. incorrect examples, copywriting tone. | Philosophical North Star |
| [**DESIGN_TOKENS.md**](file:///C:/Users/Sebastian/Desktop/design/DESIGN_TOKENS.md) | Semantic colors, typography scale, radii, z-index, shadows, CSS custom properties, Tailwind. | Technical Specification |
| [**LAYOUT_GUIDE.md**](file:///C:/Users/Sebastian/Desktop/design/LAYOUT_GUIDE.md) | Responsive breakpoints, navigation paradigms, master-detail, max-widths, exceptions. | Spatial & Structural Rules |
| [**COMPONENT_RULES.md**](file:///C:/Users/Sebastian/Desktop/design/COMPONENT_RULES.md) | Component states, ARIA keyboard navigation, component taxonomy, form validation, iconography. | Component Implementations |
| [**MOTION_GUIDE.md**](file:///C:/Users/Sebastian/Desktop/design/MOTION_GUIDE.md) | Animation tokens, spring physics, CSS vs. JS split, GPU performance, reduced-motion overrides. | Motion & Interactivity |
| [**DESIGN_REVIEW_CHECKLIST.md**](file:///C:/Users/Sebastian/Desktop/design/DESIGN_REVIEW_CHECKLIST.md) | 7 binary gates, 3-tier review checklist, objective 0–3 evaluation rubric. | Quality Audit & Review |
| [**PROMPT_TEMPLATE.md**](file:///C:/Users/Sebastian/Desktop/design/PROMPT_TEMPLATE.md) | Structured prompt specification enforcing reasoning before coding for AI agents. | Generation Instruction |
