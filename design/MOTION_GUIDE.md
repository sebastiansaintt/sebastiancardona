# Motion Guide

This guide establishes the physics, tokens, performance standards, and accessibility requirements for interface motion on the web.

---

## 1. Principles of Motion

1. **Context & Continuity:** Motion explains where elements came from and where they return. It preserves spatial orientation during state changes.
2. **Tactile Physics:** Elements move with mass and damping, never with mechanical linear easing.
3. **Restraint Over Spectacle:** Motion should clarify interaction and provide quiet delight. If an animation calls attention to itself rather than the user's task, remove it.
4. **Instant Interruption:** Every running animation must be immediately interruptible by user touch, click, or key press without stutter or inconsistent UI state.

---

## 2. Technical Motion Tokens

### Web Duration & Easing Tokens

| Token | Duration | CSS Easing / Curve | Application |
|---|---|---|---|
| `--motion-instant` | `0ms` | `linear` | Reduced motion mode, instant zero-latency feedback. |
| `--motion-micro` | `100ms` | `cubic-bezier(0.2, 0.9, 0.3, 1.0)` | Button tap scale-down, toggle switch tick, focus rings. |
| `--motion-fast` | `160ms` | `cubic-bezier(0.25, 1.0, 0.5, 1.0)` | Tooltips, dropdown menus, context menus. |
| `--motion-normal` | `280ms` | `cubic-bezier(0.25, 1.0, 0.5, 1.0)` | Modal dialogs, bottom sheets, list item row insertions. |
| `--motion-slow` | `380ms` | `cubic-bezier(0.3, 1.0, 0.4, 1.0)` | View navigation transitions, expandable canvas drawers. |

### Physics Configurations (Framer Motion / Spring Engines)

When using JavaScript spring engines (such as Framer Motion):

```typescript
export const springTokens = {
  snappy: {
    type: "spring",
    stiffness: 420,
    damping: 32,
    mass: 0.8,
  }, // Toggles, scale press, badges
  smooth: {
    type: "spring",
    stiffness: 300,
    damping: 28,
    mass: 1.0,
  }, // Modals, sheets, page transitions
  gentle: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 1.0,
  }, // Large content containers, floating drawers
};
```

---

## 3. CSS vs. JavaScript: Architectural Split

| Use CSS Transitions / Animations | Use JavaScript Physics / Animation Libraries |
|---|---|
| Hover opacity & color changes (`120ms`) | Gesture-driven, interruptible drag-to-dismiss (sheets) |
| Active press scale-down (`scale(0.98)`) | FLIP list reordering and array diff animations |
| Tooltip & dropdown fade/scale (`160ms`) | Shared-element layout transitions (`layoutId` in Framer Motion) |
| Simple opacity cross-fades | Physics-based spring momentum and velocity inheritance |

---

## 4. Web Performance & GPU Compositor Rules

> [!CAUTION]
> **Strict Performance Rule:**
> Animate **ONLY** GPU-accelerated compositor properties: `transform` and `opacity`.

### Prohibited Animation Properties
- **NEVER animate:** `height`, `width`, `top`, `left`, `margin`, `padding`, or `border-width`. Animating these forces continuous layout reflow and paint, causing dropped frames on mobile web.
- If an element must expand (e.g. accordion or sheet), use CSS grid layout transitions (`grid-template-rows: 0fr` to `1fr`), FLIP techniques, or `transform: scaleY()`.
- Use `will-change: transform, opacity` sparingly and only during active transitions—never apply `will-change` permanently across all elements.

---

## 5. Page Load & Initial Render Rules

> [!IMPORTANT]
> **Do NOT Animate Everything on Page Load.**
> - Staggering cards, titles, headers, and buttons on initial page load slows perceived performance, frustrates users, and damages Largest Contentful Paint (LCP).
> - When a page loads, content must be immediately rendered and interactive.
> - Reserve motion exclusively for user-initiated interactions (clicks, taps, navigation, expands) or dynamically incoming data updates.

---

## 6. View Transitions & Fallback Navigation

### Progressive Enhancement with View Transitions API
Where available in modern browsers, wrap view changes in `document.startViewTransition`:

```javascript
function navigateToDetail(updateDOM) {
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    updateDOM(); // Graceful instant fallback
    return;
  }
  document.startViewTransition(() => {
    updateDOM();
  });
}
```

### Fallback Behavior
On browsers without View Transitions support, gracefully degrade to a clean opacity cross-fade (150ms). Never simulate complex view transitions with brittle position offsets that jump or flash.

---

## 7. Platform-Dependent Gestures (Progressive Enhancement)

Certain native behaviors are not universally supported or appropriate on desktop web:

- **Rubber-Banding (Overscroll Bounce):** Native to iOS Safari touch scrolling. Do not simulate synthetic rubber-band scroll effects with JavaScript on desktop pointer devices; it breaks mouse wheel expectations.
- **Haptic Feedback:** Call `navigator.vibrate?.(10)` only on mobile touch devices upon explicit toggle actions. Never rely on haptics for functional feedback.
- **Edge-Swipe Navigation:** Support edge-swipe gestures on touch screens as a convenience, but always provide an unmistakable, accessible on-screen Back button in the navigation header.

---

## 8. Loading States: Skeletons & Shimmer Discipline

- **Deterministic or Rapid Loads (< 400ms):** Do not flash skeleton states. Render nothing or a delayed spinner after 200ms to avoid visual flickering.
- **Indeterminate Loads (> 500ms):** Use skeleton placeholders that mirror the exact layout of the incoming content.
- **Shimmer Rule:** Do NOT apply continuous shimmering wave effects by default. Use a static neutral pulse (`opacity: 0.6` to `1.0` at 1.5s intervals). Reserve directional shimmer solely for prolonged network operations where layout geometry is strictly locked.

---

## 9. Accessibility: Mandatory Reduced Motion

Support for `prefers-reduced-motion: reduce` is a hard requirement, not an optional enhancement.

### Mandatory CSS Rule

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Semantic State Preservation
When motion is disabled:
- Dialogs, sheets, and menus appear instantly without sliding or scaling.
- Selection, focus, and error states must still be clearly communicated via color, opacity, borders, and icons.
