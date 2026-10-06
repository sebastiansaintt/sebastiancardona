# Design Tokens

This document is the normative technical reference for all UI/UX tokens in the system. All values are designed for responsive web implementations inspired by Apple Human Interface Guidelines, adhering to web standards and WCAG AA accessibility criteria.

---

## 1. Color System

The color model pairs light and dark modes semantically. It features adaptive neutrals, a single primary interactive accent, and strictly scoped status colors.

### Semantic Neutrals & Surfaces

| Token Name | Light Value | Dark Value | Purpose / Usage |
|---|---|---|---|
| `--bg-base` | `#FFFFFF` | `#000000` | Canvas and default screen background. |
| `--bg-secondary` | `#F2F2F7` | `#1C1C1E` | Inset grouped list backgrounds, canvas contrast. |
| `--bg-tertiary` | `#FFFFFF` | `#2C2C2E` | Secondary panels, grouped card containers in light mode. |
| `--bg-grouped` | `#F2F2F7` | `#000000` | Root background for settings and grouped list views. |
| `--surface-default` | `#FFFFFF` | `#1C1C1E` | Opaque cards, grouped rows, table headers. |
| `--surface-elevated` | `#FFFFFF` | `#2C2C2E` | Modals, dialogs, popovers, detached floating bars. |
| `--surface-translucent` | `rgba(255,255,255,0.78)` | `rgba(28,28,30,0.78)` | Floating navigation bars and tab bars over scrolling content. |
| `--separator-default` | `rgba(60,60,67,0.29)` | `rgba(84,84,88,0.60)` | Hairline row dividers (0.5px–1px). |
| `--separator-opaque` | `#E5E5EA` | `#38383A` | Opaque border fallback where translucency is unsupported. |

### Semantic Typography Colors (Labels) & WCAG AA

All label tokens are calibrated to satisfy WCAG AA contrast (minimum 4.5:1 for standard body text, 3:1 for large text ≥18pt / bold ≥14pt).

| Token Name | Light Value | Dark Value | Min Contrast Ratio | Purpose |
|---|---|---|---|---|
| `--label-primary` | `#000000` (or `#111827`) | `#FFFFFF` | > 15:1 | Primary headings, titles, body text. |
| `--label-secondary` | `rgba(60,60,67,0.72)` / `#48484A` | `rgba(235,235,245,0.70)` / `#EBEBF5` | ≥ 4.6:1 against `--bg-base` & `--bg-secondary` | Subtitles, metadata, secondary values. |
| `--label-tertiary` | `rgba(60,60,67,0.50)` / `#767680` | `rgba(235,235,245,0.48)` / `#8E8E93` | ≥ 3.2:1 (large text) / use only for non-critical hints | Placeholders, captions, disabled hints. |
| `--label-quaternary` | `rgba(60,60,67,0.24)` | `rgba(235,235,245,0.20)` | Decorative only | Inactive control borders, subtle fills. |

> [!CAUTION]
> Never use `--label-tertiary` for critical explanatory text or form validation messages. Use `--label-secondary` or `--label-primary` to guarantee WCAG compliance.

### Interactive Accent Color

A **single primary accent color** is used across an entire view to indicate interactivity and focus:

| Token Name | Light Mode | Dark Mode | Purpose |
|---|---|---|---|
| `--accent` | `#007AFF` | `#0A84FF` | Primary actions, links, active tab indicators, focus rings. |
| `--accent-hover` | `#0062CC` | `#409CFF` | Hover state on pointer platforms. |
| `--accent-active` | `#004FB8` | `#0071E3` | Pressed / clicked state. |
| `--accent-subtle` | `rgba(0,122,255,0.12)` | `rgba(10,132,255,0.16)` | Selected row backgrounds, tinted chips, badge backgrounds. |

### Semantic Status Colors (State Feedback Only)

Status colors are strictly reserved for communicating outcome and state, never for decorative branding.

| Status | Light Value | Dark Value | Allowed Usage |
|---|---|---|---|
| `--color-success` | `#34C759` | `#30D158` | Completed actions, positive metrics, valid input confirmation. |
| `--color-warning` | `#FF9500` | `#FF9F0A` | Non-blocking warnings, caution messages, pending states. |
| `--color-error` | `#FF3B30` | `#FF453A` | Form validation errors, destructive actions, critical alerts. |
| `--color-info` | `#007AFF` | `#0A84FF` | Informational callouts (shares value with `--accent`). |

---

## 2. Typography & System Fonts

### Web Font Stack
Do not declare SF Pro as an installed webfont or bundle proprietary Apple font files. Use the standard modern system font stack with fallback:

```css
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
```

- **Large & Display Titles (≥ 20px):** Browser prefers `"SF Pro Display"` / system display tracking. Use negative letter-spacing (`letter-spacing: -0.02em` to `-0.03em`).
- **Body & Controls (< 20px):** Browser prefers `"SF Pro Text"` / system body tracking. Use neutral or slightly positive letter-spacing (`letter-spacing: -0.005em` to `0.01em`).

### Semantic Typography Scale

| Style | Font Size | Line Height | Weight | Letter Spacing | Web Element / Role |
|---|---|---|---|---|---|
| `Large Title` | 34px (2.125rem) | 41px (1.2) | 700 (Bold) | -0.03em | Top-level view header (used once) |
| `Title 1` | 28px (1.75rem) | 34px (1.2) | 700 (Bold) | -0.025em | `h1`, modal header |
| `Title 2` | 22px (1.375rem) | 28px (1.27) | 700 (Bold) | -0.02em | `h2`, section grouping |
| `Title 3` | 20px (1.25rem) | 25px (1.25) | 600 (Semibold) | -0.015em | `h3`, card heading |
| `Headline` | 17px (1.0625rem) | 22px (1.3) | 600 (Semibold) | -0.01em | Emphasized body, list row title |
| `Body` | 17px (1.0625rem) | 22px (1.3) | 400 (Regular) | 0 | Standard body copy, inputs |
| `Callout` | 16px (1.0rem) | 21px (1.3) | 400 (Regular) | 0 | Secondary descriptions |
| `Subheadline` | 15px (0.9375rem) | 20px (1.33) | 400 (Regular) | 0.005em | Row subtitle, metadata |
| `Footnote` | 13px (0.8125rem) | 18px (1.38) | 400 (Regular) | 0.01em | Explanatory notes, timestamps |
| `Caption 1` | 12px (0.75rem) | 16px (1.33) | 400 (Regular) | 0.015em | Badges, tab bar labels |
| `Caption 2` | 11px (0.6875rem) | 13px (1.18) | 400 (Regular) | 0.02em | Fine print, legal |

---

## 3. Spatial & Sizing Tokens

### Unified Radius Scale (Continuous Curvature / Squircle)
Use proportional border radii. Rounded corners should approximate continuous curvature (`border-radius` with smooth transitions):

| Token | Value | Target Components |
|---|---|---|
| `--radius-sm` | `8px` (`0.5rem`) | Chips, tags, small badges, inline code pills. |
| `--radius-md` | `12px` (`0.75rem`) | Standard buttons, form inputs, segmented control container. |
| `--radius-lg` | `16px` (`1.0rem`) | Cards, grouped list containers, popover containers. |
| `--radius-xl` | `20px` (`1.25rem`) | Bottom sheets, dialog modals, large floating panels. |
| `--radius-full`| `9999px` | Circular avatars, segmented indicator pills, status dots. |

### Elevation & Shadows
Shadows reflect actual elevation from a light source above the viewport. They must be soft, diffuse, and warm:

| Token | Light Mode Value | Dark Mode Value | Usage |
|---|---|---|---|
| `--shadow-xs` | `0 1px 2px rgba(0,0,0,0.04)` | `0 1px 2px rgba(0,0,0,0.25)` | Inset rows, subtle controls. |
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.06)` | `0 2px 8px rgba(0,0,0,0.30)` | Cards in rest state, segmented control active thumb. |
| `--shadow-md` | `0 8px 24px rgba(0,0,0,0.09)` | `0 8px 24px rgba(0,0,0,0.45)` | Popovers, dropdown menus, hover lift. |
| `--shadow-lg` | `0 16px 36px rgba(0,0,0,0.12)` | `0 16px 36px rgba(0,0,0,0.60)` | Floating action bars, modal dialogs, bottom sheets. |
| `--shadow-float` | `0 24px 48px rgba(0,0,0,0.16)` | `0 24px 48px rgba(0,0,0,0.75)` | Draggable items during drag, alerts. |

### Materials & Blur: Translucent vs. Opaque Rule

> [!IMPORTANT]
> **Surface Material Rule:**
> - **Translucent Material (`backdrop-filter: blur(...)`):** Reserved EXCLUSIVELY for surfaces that float over scrolling content (sticky navigation bars, bottom tab bars, floating bottom sheets, context popovers).
> - **Opaque Surface:** Mandatory for static grouped list rows, cards, readable articles, and form inputs.
> - **Never use blur or glassmorphism as flat surface decoration.**

| Material Token | Blur Radius | Backdrop Tint (Light) | Backdrop Tint (Dark) | Usage |
|---|---|---|---|---|
| `--blur-thin` | `8px` | `rgba(255,255,255,0.65)` | `rgba(28,28,30,0.65)` | Sub-toolbars, search bars. |
| `--blur-regular` | `16px` | `rgba(255,255,255,0.78)` | `rgba(28,28,30,0.78)` | Sticky nav bars, bottom tab bars. |
| `--blur-thick` | `24px` | `rgba(255,255,255,0.85)` | `rgba(28,28,30,0.85)` | Sheets, popovers, full-screen overlays. |

### Z-Index Scale
A predictable layering stack avoids arbitrary values:

```css
--z-base: 0;         /* Default flow content */
--z-raised: 10;      /* Elevated cards, sticky headers inside sections */
--z-sticky: 100;     /* Sticky navigation bar, bottom tab bar */
--z-dropdown: 200;   /* Context menus, popovers, tooltips */
--z-sheet: 300;      /* Bottom sheets, side drawers */
--z-dialog: 400;     /* Modal dialogs, action sheets */
--z-toast: 500;      /* Notifications, alerts, urgent toasts */
```

### Control Heights & Minimum Touch Targets

| Token | Dimension | Applied To |
|---|---|---|
| `--touch-target-min` | `44px` (`2.75rem`) | Mandatory minimum interactive hitbox for all touch / click items. |
| `--control-h-sm` | `32px` (`2.0rem`) | Compact inline controls, chips (expand hitbox with padding to 44px). |
| `--control-h-md` | `40px` (`2.5rem`) | Secondary buttons, standard search inputs. |
| `--control-h-lg` | `44px`–`48px` | Primary form fields, prominent primary CTA buttons. |

### Icon Dimensions & Stroke

| Token | Size | Stroke Weight | Purpose |
|---|---|---|---|
| `--icon-sm` | `16px` | `1.5px` | Inline text badges, metadata counters. |
| `--icon-md` | `20px` | `1.75px` | List row accessory icons, form field adornments. |
| `--icon-lg` | `24px` | `2.0px` | Navigation bar actions, tab bar items. |
| `--icon-xl` | `32px` | `2.0px` | Feature callouts, empty state illustrations. |

### Content Max-Width Constraints

| Token | Value | Target Context |
|---|---|---|
| `--max-w-reading` | `680px` | Long-form reading, documentation, articles (65–75 characters per line). |
| `--max-w-form` | `560px` | Single-column settings forms, auth flows. |
| `--max-w-modal` | `520px` | Centered dialog popups on desktop. |
| `--max-w-container`| `1024px`–`1200px` | Standard dashboard and master-detail workspace views. |
| `--max-w-canvas` | `100%` | Spreadsheets, media galleries, creative canvases. |

### Responsive Breakpoints

| Breakpoint | Width | Paradigm Shift |
|---|---|---|
| `sm` | `640px` | Mobile landscape; sheets can expand width; compact grids become 2 columns. |
| `md` | `768px` | Tablet portrait; transition threshold from bottom tabs to sidebar / master-detail. |
| `lg` | `1024px` | Desktop; sidebar pinned, permanent multi-pane layout enabled. |
| `xl` | `1280px` | Widescreen desktop; constrained max-width containers centered. |
| `2xl`| `1536px` | Ultra-wide; increased column spacing and side margins. |

---

## 4. Interactive States & Motion Tokens

### Interactive States

| State | Visual Treatment | CSS Implementation |
|---|---|---|
| **Hover** | 85% opacity or subtle tint | `transition: opacity 120ms ease; &:hover { opacity: 0.88; }` |
| **Pressed / Active** | Scale reduction + light dim | `transition: transform 100ms ease; &:active { transform: scale(0.98); opacity: 0.78; }` |
| **Focus-Visible** | 2px solid accent with 2px offset | `&:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }` |
| **Disabled** | 40% opacity, disabled cursor | `opacity: 0.40; cursor: not-allowed; pointer-events: none;` |
| **Loading** | Dimmed content, wait cursor | `opacity: 0.65; cursor: wait; pointer-events: none;` |
| **Selected** | Subtle accent tint + solid accent icon | `background: var(--accent-subtle); color: var(--accent);` |

### Motion & Reduced Motion Tokens

```css
/* Standard Motion Tokens */
--duration-instant: 0ms;
--duration-fast: 120ms;
--duration-normal: 240ms;
--duration-slow: 360ms;

--ease-spring-snappy: cubic-bezier(0.2, 0.9, 0.3, 1.0);
--ease-spring-smooth: cubic-bezier(0.25, 1.0, 0.5, 1.0);
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1.0);

/* Reduced Motion Override (Mandatory) */
@media (prefers-reduced-motion: reduce) {
  :root {
    --duration-fast: 0ms;
    --duration-normal: 100ms;
    --duration-slow: 150ms;
    --ease-spring-snappy: ease;
    --ease-spring-smooth: ease;
  }
}
```

---

## 5. CSS Custom Properties Implementation

```css
:root {
  /* Colors - Light Mode */
  --bg-base: #FFFFFF;
  --bg-secondary: #F2F2F7;
  --bg-tertiary: #FFFFFF;
  --bg-grouped: #F2F2F7;

  --surface-default: #FFFFFF;
  --surface-elevated: #FFFFFF;
  --surface-translucent: rgba(255, 255, 255, 0.78);

  --separator-default: rgba(60, 60, 67, 0.29);
  --separator-opaque: #E5E5EA;

  --label-primary: #000000;
  --label-secondary: rgba(60, 60, 67, 0.72);
  --label-tertiary: rgba(60, 60, 67, 0.50);
  --label-quaternary: rgba(60, 60, 67, 0.24);

  --accent: #007AFF;
  --accent-hover: #0062CC;
  --accent-active: #004FB8;
  --accent-subtle: rgba(0, 122, 255, 0.12);

  --color-success: #34C759;
  --color-warning: #FF9500;
  --color-error: #FF3B30;
  --color-info: #007AFF;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", Inter, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;

  /* Sizing & Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;

  /* Elevation */
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.09);
  --shadow-lg: 0 16px 36px rgba(0, 0, 0, 0.12);
  --shadow-float: 0 24px 48px rgba(0, 0, 0, 0.16);

  /* Materials */
  --blur-thin: 8px;
  --blur-regular: 16px;
  --blur-thick: 24px;

  /* Z-Index */
  --z-base: 0;
  --z-raised: 10;
  --z-sticky: 100;
  --z-dropdown: 200;
  --z-sheet: 300;
  --z-dialog: 400;
  --z-toast: 500;

  /* Layout */
  --touch-target-min: 44px;
  --max-w-reading: 680px;
  --max-w-form: 560px;
  --max-w-container: 1120px;
}

[data-theme="dark"],
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-base: #000000;
    --bg-secondary: #1C1C1E;
    --bg-tertiary: #2C2C2E;
    --bg-grouped: #000000;

    --surface-default: #1C1C1E;
    --surface-elevated: #2C2C2E;
    --surface-translucent: rgba(28, 28, 30, 0.78);

    --separator-default: rgba(84, 84, 88, 0.60);
    --separator-opaque: #38383A;

    --label-primary: #FFFFFF;
    --label-secondary: rgba(235, 235, 245, 0.70);
    --label-tertiary: rgba(235, 235, 245, 0.48);
    --label-quaternary: rgba(235, 235, 245, 0.20);

    --accent: #0A84FF;
    --accent-hover: #409CFF;
    --accent-active: #0071E3;
    --accent-subtle: rgba(10, 132, 255, 0.16);

    --color-success: #30D158;
    --color-warning: #FF9F0A;
    --color-error: #FF453A;
    --color-info: #0A84FF;

    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.25);
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.30);
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 16px 36px rgba(0, 0, 0, 0.60);
    --shadow-float: 0 24px 48px rgba(0, 0, 0, 0.75);
  }
}
```

---

## 6. Tailwind CSS Configuration Mapping

To integrate these tokens into `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: {
          base: 'var(--bg-base)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
          grouped: 'var(--bg-grouped)',
        },
        surface: {
          DEFAULT: 'var(--surface-default)',
          elevated: 'var(--surface-elevated)',
          translucent: 'var(--surface-translucent)',
        },
        label: {
          primary: 'var(--label-primary)',
          secondary: 'var(--label-secondary)',
          tertiary: 'var(--label-tertiary)',
          quaternary: 'var(--label-quaternary)',
        },
        separator: {
          DEFAULT: 'var(--separator-default)',
          opaque: 'var(--separator-opaque)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          active: 'var(--accent-active)',
          subtle: 'var(--accent-subtle)',
        },
        status: {
          success: 'var(--color-success)',
          warning: 'var(--color-warning)',
          error: 'var(--color-error)',
          info: 'var(--color-info)',
        },
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        float: 'var(--shadow-float)',
      },
      zIndex: {
        base: 'var(--z-base)',
        raised: 'var(--z-raised)',
        sticky: 'var(--z-sticky)',
        dropdown: 'var(--z-dropdown)',
        sheet: 'var(--z-sheet)',
        dialog: 'var(--z-dialog)',
        toast: 'var(--z-toast)',
      },
    },
  },
};
```
