# Layout Guide

This guide defines how Apple Human Interface conventions translate to modern, responsive web experiences across mobile, tablet, and desktop viewports.

---

## 1. Responsive Breakpoints & Spatial Matrix

Web viewports vary fluidly. We structure layouts across three primary tiers:

| Breakpoint Tier | Viewport Range | Primary Navigation Paradigm | Composition Model |
|---|---|---|---|
| **Mobile** | `< 768px` | Bottom Tab Bar (3–5 destinations) + Navigation Stack | Single-column vertical scroll, sticky bottom actions, bottom sheets. |
| **Tablet** | `768px – 1023px` | Collapsible Sidebar or Top Segmented Navigation | Two-pane Master-Detail or adaptive 2-column grid. |
| **Desktop** | `≥ 1024px` | Pinned Sidebar Navigation + Header Toolbar | Two- or three-pane persistent layout, centered max-width content containers. |

### Safe Area Insets & Virtual Keyboards
On touch devices, respect device cutouts and virtual keyboard shifts:

```css
/* Mobile Safe Area Padding */
.screen-container {
  padding-top: env(safe-area-inset-top, 0px);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  padding-left: env(safe-area-inset-left, 0px);
  padding-right: env(safe-area-inset-right, 0px);
}
```

Include `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, interactive-widget=resizes-content">` to ensure bottom action bars adjust gracefully when software keyboards open.

---

## 2. Navigation Paradigms: When to Use What

Choose navigation patterns based on task structure and viewport:

### Bottom Tab Bar
- **When to use:** Mobile primary navigation (< 768px) across 3 to 5 distinct top-level app sections.
- **Rules:** Stable across views. Icons (24px) paired with Caption 1 labels (11–12px). Active item marked with `--accent`. Never scroll tabs horizontally.
- **Desktop translation:** Automatically transforms into a **Sidebar** or a centered top segmented control.

### Sidebar Navigation
- **When to use:** Desktop and tablet viewports (≥ 768px) for hierarchical workflows, document trees, or multi-section product tools.
- **Rules:** Width 240px–280px. Semi-translucent material or distinct neutral background (`--bg-secondary`). Clear visual selection highlight with `--accent-subtle` background and `--accent` icon. Collapsible into an icon rail or hamburger button on smaller tablet viewports.

### Master-Detail (Split View)
- **When to use:** Content browsing where inspecting an item is closely tied to scanning a list (e.g., Mail, Notes, Settings, Invoices).
- **Rules:**
  - `≥ 1024px`: Two persistent panes (Master: 320px–360px fixed width; Detail: fluid remaining width).
  - `768px – 1023px`: Detail pane overlays or master collapses to a slide-over drawer.
  - `< 768px`: Pushes the detail view as a full-screen stack screen with a distinct Back action.

### Top Navigation Bar
- **When to use:** Single-document tools, canvases, or flows that require maximum horizontal screen width and don't need a persistent sidebar.
- **Rules:** Height 44px–52px. Material blur over scrollable canvas. Center title or inline breadcrumb-less view name. Trailing actions grouped tightly.

---

## 3. Responsive Transformation of Overlays

| Component | Mobile (< 768px) | Desktop / Tablet (≥ 768px) |
|---|---|---|
| **Navigation Bar** | Collapsing Large Title (34px) into small inline title (17px) on scroll. | Fixed height inline header with action items and search field. |
| **Sheets** | Slide-up **Bottom Sheet** with drag grabber handle (`--radius-xl` top corners). | Centered **Modal Dialog** (`max-w-modal: 520px`, `--radius-xl`) or slide-over drawer panel. |
| **Popovers & Menus** | **Action Sheet** sliding from bottom or full-width sheet. | Anchored **Popover / Dropdown** aligned to trigger element with `--shadow-md`. |
| **Action Bars** | Sticky bottom floating bar within thumb reach. | Integrated into top navigation bar or pinned detail footer. |

---

## 4. Default Structure & Intentional Exceptions

### The Default Structure
Standard product screens follow this hierarchy by default:

```text
1. Navigation Bar (Back action, View Title / Status, Primary Bar Actions)
   ↓
2. Large Title (Top of scroll, 34px bold, used once per screen root)
   ↓
3. Primary Content Body (Grouped inset lists, content cards, or inspection detail)
   ↓
4. Dominant Primary Action (One clear focus per task)
   ↓
5. Supplementary / Contextual Actions (Inline disclosures or secondary sheets)
```

### Intentional Structural Exceptions
Not every screen requires a Large Title or standard grouped list. Use these documented alternatives:

1. **Authentication & Login:** Centered vertical container (`max-w-form: 560px`), minimal branding, no bottom tabs or sidebar, single primary submission CTA.
2. **Onboarding & Walkthroughs:** Step-based card or carousel layout with persistent bottom progress dots and fixed navigation footer.
3. **Canvas / Creative Workspace:** Full-viewport fluid canvas with floating translucent toolbars and floating inspector panels.
4. **Reading / Editorial:** Constrained single column (`max-w-reading: 680px`), generous typographic leading, no heavy chrome.
5. **Command Palette / Spotlight Search:** Modal overlay anchored in the upper-third of the desktop viewport (`max-w-modal: 580px`), keyboard-navigable list.
6. **Landing & Product Presentation Pages:** Sectional storytelling layout, rich media headers, scroll-linked nav bar compaction. Marketing patterns are permitted here, but prohibited inside the app tool.

---

## 5. Density, Whitespace & Content Limits

### Preventing Empty Deserts
> [!IMPORTANT]
> **Minimalism is not empty desert:** High-end calm design does NOT mean stretching a three-line form across a 1920px screen or leaving huge blank voids.
> - On widescreen viewports (≥ 1024px), clamp reading and form layouts to their semantic max-widths and center them comfortably.
> - Pair master lists with rich detail panels or contextual stats rather than leaving blank canvas.
> - Group related settings into inset rounded sections (`--radius-lg`) surrounded by subtle background contrast (`--bg-secondary` canvas with `--surface-default` rows).

### Content Max-Width Constraints

| Screen Type | Maximum Width | Alignment |
|---|---|---|
| Text articles & documentation | `680px` (`--max-w-reading`) | Centered with `margin: 0 auto;` |
| Settings forms & input screens | `560px` (`--max-w-form`) | Centered or left-aligned within workspace |
| Standard productivity dashboard | `1120px` (`--max-w-container`) | Centered with minimum 24px side gutters |
| Data sheets, canvases, galleries | `100%` (fluid) | Padded with 16px (mobile) to 32px (desktop) edge insets |

---

## 6. Grids, Galleries & Multi-Column Layouts

When displaying media, item grids, or cards:

- **Mobile (< 768px):** 1 column (vertical list) or 2 columns for compact square photo tiles.
- **Tablet (768px – 1023px):** 2 to 3 columns with 16px gutters.
- **Desktop (≥ 1024px):** 3 to 4 columns with 20px–24px gutters.
- **Row Heights:** Keep card heights predictable within the same grid. Never mix wildly variable aspect ratios in a single browsing row without masonry alignment.
- **Card Rule:** Cards must hold meaningful content (images, rich status previews). Never use cards for plain text key-value pairs; use **grouped inset lists** instead.
