# UI Design Philosophy

This document articulates the design philosophy guiding every interface in the system. It translates Apple Human Interface sensibilities into concrete, observable criteria for modern web applications.

---

## 1. Core Principles & Priority Order

When balancing design decisions, resolve conflicts strictly according to this priority order:

$$\mathbf{Accessibility} \;\longrightarrow\; \mathbf{Clarity} \;\longrightarrow\; \mathbf{Content} \;\longrightarrow\; \mathbf{Deference} \;\longrightarrow\; \mathbf{Novelty}$$

1. **Clarity:** Every control and label is instantly legible and unambiguous. Hierarchy is established through typography and spacing, not decorative colors.
2. **Deference:** The interface chrome steps back to let content lead. Unobtrusive materials and typography elevate the work, never competing with it.
3. **Depth:** Real spatial layers and physically grounded motion convey hierarchy, giving users a tangible sense of place.
4. **Purposeful Novelty:** Innovate through novel workflow structure, superior ergonomics, or direct manipulation—**never** through superficial decoration, gratuitous borders, or neon visual effects.
5. **The Simplicity Rule:** Every screen must serve **one dominant task**. If a screen tries to achieve two primary workflows simultaneously, split it into sequential views, sheets, or distinct sub-tabs.

---

## 2. Observable Criteria for System Qualities

Rather than relying on abstract adjectives, every quality must satisfy concrete, testable criteria:

### Calm
- **Observable Criteria:**
  - Standard views contain at most **one prominent filled action** and **one accent color**.
  - No unsolicited modal interruptions, popups, or aggressive toast notifications for normal reversible operations.
  - Generous typographic whitespace separating content blocks; no wall-to-wall borders or visual clutter.
  - Zero decorative ambient loops or unsolicited animations.

### Alive
- **Observable Criteria:**
  - Interactive elements acknowledge pointer hover and active touch in under **100ms** (tactile scale feedback `scale(0.98)`).
  - List insertions and state transitions use spring physics with natural deceleration rather than sudden snapping.
  - Feedback occurs directly at the point of interaction (e.g. inline checkmark or morphing toggle thumb, not a generic alert).

### Warm
- **Observable Criteria:**
  - Rounded corners feature continuous squircle curvature (`--radius-sm` through `--radius-xl`), eliminating harsh 90-degree corners.
  - Shadows are diffuse, soft, and low-opacity (`rgba(0,0,0,0.06)` to `0.12`), simulating a natural overhead light source.
  - Writing tone is human, concise, and helpful (see Section 5 below).

### Native
- **Observable Criteria:**
  - Uses the native system font stack with fallback (`-apple-system`, `BlinkMacSystemFont`, `Inter`, `system-ui`).
  - Seamlessly respects OS appearance (`light` vs. `dark`) and `prefers-reduced-motion`.
  - Fully navigable via keyboard (`Tab`, `Escape`, `Enter`, arrow keys) with prominent `:focus-visible` rings.
  - Integrates browser-native scrolling, touch gestures, and safe area insets (`env(safe-area-inset-*)`).

---

## 3. Spatial Architecture: Layers & Surfaces

Interfaces are built from a four-tier spatial hierarchy:

```text
Layer 4: Critical Overlays & Alerts (z-toast / z-dialog: 400–500)
         ▲
Layer 3: Elevated Panels & Floating Sheets (z-sheet / z-dropdown: 200–300)
         ▲
Layer 2: Content Surfaces & Grouped Rows (z-raised / z-base: 0–10)
         ▲
Layer 1: Base Canvas / Grouped Background (--bg-base / --bg-grouped)
```

### The Translucency Discipline
- **Translucent Material (`backdrop-filter: blur(...)`):** Used **exclusively** for floating chrome that hovers directly over scrolling content (navigation bars, tab bars, floating bottom sheets, context popovers).
- **Opaque Surfaces:** Grouped list rows, content cards, reading containers, and form inputs must always use solid opaque backgrounds (`--surface-default`).
- **Forbidden:** Never apply blur or glassmorphism as a flat decorative styling on static page containers.

---

## 4. Correct vs. Incorrect UI Patterns

| Context | ❌ Incorrect Pattern | ✅ Correct Pattern |
|---|---|---|
| **Settings / Forms** | A dense table with 10 border lines, flat grey inputs, and multiple colored buttons. | An inset grouped list with clear section titles, hairline dividers, native toggle switches, and a single accent color. |
| **Product Dashboard** | 12 colorful stat cards with arbitrary gradients, sparklines, and cards inside cards. | A calm summary header, followed by grouped content rows or a clean list with scannable primary/secondary labels. |
| **Product Screens** | Giant marketing hero CTA banners, floating testimonials, and decorative badges inside a working tool. | A focused, utilitarian workspace that defers entirely to the document or task at hand. |
| **Card Usage** | A card holding two lines of plain text with a heavy 2px border and a drop shadow. | An inset grouped list row; cards are reserved exclusively for items holding rich visual media or preview canvas. |
| **Row Actions** | 4 icon buttons placed directly inside every table row, cluttering the view. | A clean row with a single secondary value/chevron; secondary actions revealed via context menu, swipe, or detail view. |

> [!NOTE]
> **Marketing vs. Product Separation:** Marketing patterns (hero headlines, social proof, visual storytelling) are valid on landing and product presentation pages, but must **never** bleed into functional tool screens or workflows.

---

## 5. Voice, Tone & Microcopy Rules

Interfaces speak with clarity, humility, and precision:

- **Concise:** Say it in four words rather than fourteen.
  - *Bad:* "Please be advised that your changes have been successfully committed to the database."
  - *Good:* "Changes saved."
- **Direct & Human:** Avoid corporate jargon, robotic errors, or marketing hype.
  - *Bad:* "Leverage your synergistic workflow seamlessly."
  - *Good:* "Organize your projects."
- **Constructive Errors:** State what happened and how to fix it immediately.
  - *Bad:* "Error 400: Invalid syntax."
  - *Good:* "Enter a valid email address."
- **No Dummy Text:** Do not generate Lorem Ipsum or abstract gibberish. Always use realistic, domain-specific names, dates, amounts, and statuses.
