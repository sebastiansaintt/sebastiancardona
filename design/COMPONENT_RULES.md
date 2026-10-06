# Component Rules

This document establishes the interaction rules, visual anatomy, keyboard accessibility, and responsive adaptations for all interface components in the system.

---

## 1. Universal Component States

Every interactive component must explicitly handle and style the full state lifecycle:

| State | Visual Treatment & Behavior | CSS / Accessibility Requirement |
|---|---|---|
| **Default** | Resting visual presentation using base semantic tokens. | Standard baseline styles. |
| **Hover** | Subtle lightening/darkening (88% opacity or tint overlay). Pointers only. | `@media (hover: hover) { &:hover { ... } }` |
| **Focus-Visible** | 2px solid `--accent` ring with 2px offset. Never suppress without a replacement. | `&:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }` |
| **Pressed / Active** | Tactile physical feedback: `scale(0.98)` + 78% opacity. | `&:active { transform: scale(0.98); opacity: 0.78; }` |
| **Disabled** | 40% opacity, pointer events disabled, not focusable via Tab. | `opacity: 0.40; pointer-events: none; aria-disabled="true"` |
| **Loading** | Interactive lock, subtle inline spinner or skeleton pulse. | `aria-busy="true"; cursor: wait;` |
| **Selected** | Filled background with `--accent-subtle` and `--accent` foreground. | `aria-selected="true"` or `aria-current="page"` |
| **Error** | Red hairline border (`--color-error`), paired with an inline error message. | `aria-invalid="true"` and `aria-describedby="[error-id]"` |

> [!IMPORTANT]
> **Focus-Visible Rule:** Never apply `outline: none` without providing a distinct `:focus-visible` ring. Mouse and touch clicks should not show distracting rings, but keyboard `Tab` navigation MUST always display an unmistakable 2px focus ring using `--accent`.

---

## 2. Component Taxonomy: Overlay & Layer Primitives

To eliminate ambiguity, use the following distinct overlay primitives:

| Component | Trigger & Behavior | Placement & Layout | Primary Role |
|---|---|---|---|
| **Tooltip** | Hover or focus only; disappears on blur or mouseout. Never interactive. | Pinned adjacent to element (top/bottom). | Short label or shortcut hint (e.g. "Command + K"). |
| **Popover** | Click/tap to open; remains open while interacting with contents. | Anchored to trigger element with pointer arrow (`--shadow-md`). | Rich interactive controls (e.g., date picker, color swatches). |
| **Dropdown / Select** | Click/tap to open a list of selectable values for an input. | Anchored below trigger field. | Choosing one (or multiple) values to populate a form field. |
| **Menu** | Click or right-click to open a list of commands/actions. | Anchored to trigger button or cursor. | Contextual actions (Duplicate, Rename, Delete) with keyboard shortcuts. |
| **Dialog / Modal** | High-priority focused interaction. Traps focus; backdrop dim. | Centered in viewport on desktop (`max-w-modal: 520px`). | Irreversible decisions, destructive confirmations, or standalone tasks. |
| **Sheet** | Non-disruptive task container. Can be partial or full height. | Slides up from bottom on mobile; slide-over side panel on desktop. | Creation flows, inspector panels, filter panels. |

---

## 3. Surface & Material Discipline

- **Translucent Material (`backdrop-filter: blur(16px)`):** Reserved strictly for elements that float directly over scrolling content (sticky navigation bars, bottom tab bars, floating bottom sheets, context popovers).
- **Opaque Surfaces (`--surface-default`):** Mandatory for static grouped list rows, cards, readable articles, and form inputs.
- **Strict Prohibition:** NEVER apply background blur or glassmorphism as a flat decorative styling on static page containers.

---

## 4. Primary Actions & Buttons

### The Dominant Action Rule
- **Rule:** One dominant primary action **per task / view**, not rigidly one per screen.
- A view with multiple independent rows (such as an extension store or project list) may feature an action button on each row. However, if the screen has a single overarching completion goal (such as checkout, submit form, or save changes), exactly **one** prominent filled button (`--accent` background with white label) may exist as the dominant CTA.
- Secondary actions must use plain or tinted styles (`--accent-subtle` background or borderless text) to never compete with the dominant action.
- Destructive actions must use `--color-error` (red) and always request confirmation or offer instantaneous Undo.

### Mobile Button Fallbacks
- Minimum hitbox: **44×44px** on all touch targets (`--touch-target-min`).
- When multiple buttons cannot fit side-by-side on mobile (< 768px), stack them vertically with the primary action placed at the top (or pinned to the bottom safe area) and secondary actions beneath.

---

## 5. Grouped Lists (The Default Web Pattern)

Grouped lists are the core structural element for settings, feeds, and structured information.

```text
┌─────────────────────────────────────────────────────────────┐
│ SECTION HEADER (Caption 1, Uppercase or Semibold, Secondary) │
├─────────────────────────────────────────────────────────────┤
│  [Icon]  Row Title               Detail / Chevron [ > ]     │
├─────────────────────────────────────────────────────────────┤
│  [Icon]  Row Title with Subtitle            [ Toggle / Switch ]│
└─────────────────────────────────────────────────────────────┘
  Footnote / Explanatory caption text below group.
```

- **Separators:** 0.5px–1px hairline dividers (`--separator-default`) indented past the leading icon. Never place a border around the entire outer box.
- **Container:** Rounded with `--radius-lg` (16px), background `--surface-default`, resting on `--bg-grouped` or `--bg-secondary`.
- **Keyboard Navigation:** In interactive lists, rows should be focusable elements (`<a>` or `<button>`) accessible via `Tab` or arrow keys.

---

## 6. Cards & Anti-Pattern: Nested Cards

- **When to use Cards:** Only when the item contains rich visual media (photos, artwork, maps, interactive graph previews) or represents an autonomous draggable unit.
- **When NOT to use Cards:** Do not use cards for plain text settings, key-value rows, or configuration items. Use grouped lists instead.

> [!CAUTION]
> **Strict Prohibition: Never Nest Cards (Card-in-Card).**
> Do not place a card inside another card with stacked borders or nested shadows. If internal grouping is required within a card, use subtle background contrast, hairline dividers, or whitespace.

---

## 7. Forms, Validation & Error States

- **Layout:** Structure form controls as rows within a grouped list container (`--max-w-form: 560px`).
- **Constrained Inputs:** Use segmented controls, switches, steppers, and native select menus instead of open text fields whenever input values are predefined.
- **Validation Timing:**
  - Validate on blur (`onBlur`), NEVER on every keystroke while the user is actively typing for the first time.
  - Validate on form submission if fields are omitted.
- **Accessible Error Handling:**
  - Input border changes to `--color-error`.
  - Pair visually with a text message in `--color-error` directly beneath the control.
  - Link with ARIA: `aria-invalid="true"` and `aria-describedby="field-error-message-id"`.

---

## 8. Keyboard Navigation & ARIA Specifications

All custom interactive components must implement standard WAI-ARIA design patterns:

### Tabs & Segmented Controls
- Container: `role="tablist"` with `aria-label`.
- Tab items: `role="tab"`, `aria-selected="true|false"`, `aria-controls="panel-id"`.
- Panel: `role="tabpanel"`, `id="panel-id"`, `aria-labelledby="tab-id"`.
- **Keyboard:** `ArrowLeft` / `ArrowRight` (or `Up`/`Down`) cycle active tabs; `Home`/`End` jump to start/finish; `Enter`/`Space` activates tab.

### Modal Dialogs & Alert Sheets
- Container: `role="dialog"` or `role="alertdialog"`, `aria-modal="true"`, `aria-labelledby="dialog-title-id"`.
- **Focus Trap:** Focus is constrained within the dialog when open. Initial focus placed on the first interactive element (or primary cancel button for destructive alerts).
- **Keyboard:** `Escape` key closes the dialog and immediately returns focus to the trigger button that opened it.

### Menus & Action Sheets
- Trigger: `button` with `aria-haspopup="menu"` and `aria-expanded="true|false"`.
- Menu container: `role="menu"`.
- Items: `role="menuitem"`.
- **Keyboard:** `ArrowDown` / `ArrowUp` navigate items; `Enter` executes action; `Escape` closes menu and restores trigger focus.

### Disclosures & Accordions
- Header trigger: native `<button>` with `aria-expanded="true|false"` and `aria-controls="section-id"`.
- Content section: `<div id="section-id" role="region">`.

### Comboboxes & Auto-complete
- Input: `role="combobox"`, `aria-expanded="true|false"`, `aria-autocomplete="list"`, `aria-controls="listbox-id"`.
- Options container: `role="listbox"`, items `role="option"`.
- Active item communicated via `aria-activedescendant="option-id"`.

---

## 9. Iconography & Accessibility Rules

- **Scale:** Use standard sizes only: `16px` (`--icon-sm`), `20px` (`--icon-md`), `24px` (`--icon-lg`).
- **Stroke Uniformity:** Consistent stroke width across the entire application (1.5px to 2.0px). Never mix heavy solid icons with hairline outlines in the same view.
- **Vertical Alignment:** Center icons vertically with adjacent typography baselines.
- **Accessibility:**
  - Every icon-only button MUST include an accessible label via `aria-label="Action Name"` or an inner `<span class="sr-only">Action Name</span>`.
  - **No Ambiguous Icons:** Do not use unaccompanied icons for actions that lack a universally recognized meaning. Standard icons (Magnifying Glass = Search, Gear = Settings, Cross = Close, Chevron = Expand) are permitted; domain-specific actions must include accompanying text labels.

---

## 10. Responsive Overflow Behaviors

When controls exceed the mobile viewport (< 768px):

1. **Segmented Controls:** If more than 3 segments exist, convert to a horizontal scroll area without a visible scrollbar or collapse into a native select trigger.
2. **Tables:** Transform desktop data tables into vertically stacked grouped cards or disclosure rows on mobile. Never force horizontal body scrolling on full pages.
3. **Toolbars & Bar Actions:** Collapse overflow bar actions into a single "More" button (`...`) that opens an Action Sheet from the bottom.
