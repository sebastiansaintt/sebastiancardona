# Design System & Visual Tokens (Brittany Chiang Layout)

## 1. Concept & Philosophy
- **Minimalist, Simplistic, and Fluid**: Content-first presentation with zero clutter.
- **Two-Column Fixed/Scroll Dynamic**: Left column acts as a fixed anchor; right column provides a continuous editorial reading flow.
- **Micro-Interactions**: Subtle dimming of sibling cards on hover (`group/list`), smooth indicator line expansions on navigation, and soft cursor spotlight tracking.

## 2. Color Palette & Theming

### Dark Mode (Default / Reference Style)
- **Background (`--bg-primary`)**: `#0f172a` (Tailwind `slate-900`)
- **Card Background (`--bg-card`)**: `rgba(30, 41, 59, 0.4)` (`slate-800/40`) with backdrop blur
- **Text Primary (`--text-primary`)**: `#e2e8f0` (`slate-200`)
- **Text Secondary / Muted (`--text-muted`)**: `#94a3b8` (`slate-400`)
- **Headings & Active State (`--text-heading`)**: `#f8fafc` (`slate-100`)
- **Accent Teal / Highlights (`--accent-teal`)**: `#5eead4` (`teal-300`) / `#2dd4bf` (`teal-400`)
- **Accent Emerald / Status (`--accent-emerald`)**: `#10b981` (`emerald-500`)
- **Borders (`--border-subtle`)**: `rgba(148, 163, 184, 0.1)` (`slate-400/10`)
- **Spotlight Glow**: `radial-gradient(600px circle at X Y, rgba(29, 78, 216, 0.15), transparent 80%)`

### Light Mode
- **Background**: `#f8fafc` (`slate-50`)
- **Card Background**: `rgba(255, 255, 255, 0.8)`
- **Text Primary**: `#0f172a` (`slate-900`)
- **Text Secondary / Muted**: `#64748b` (`slate-500`)
- **Accent**: `#0d9488` (`teal-600`) / `#059669` (`emerald-600`)
- **Borders**: `rgba(15, 23, 42, 0.08)`

## 3. Typography
- **Primary Sans**: `Inter`, system-ui, -apple-system, sans-serif.
- **Monospace**: `Geist Mono`, monospace (used for dates, metadata, badges, and stats).
- **Hierarchy**:
  - Main Name: `text-4xl sm:text-5xl font-bold tracking-tight text-slate-100`
  - Role: `text-lg sm:text-xl font-medium tracking-tight text-slate-200`
  - Subtitle: `text-sm sm:text-base font-medium tracking-normal text-teal-400/90 dark:text-teal-300/90`
  - Nav Links: `text-xs font-bold uppercase tracking-widest`
  - Body Text: `text-sm sm:text-base leading-relaxed text-slate-400`
  - Tech Pills: `text-xs font-medium px-3 py-1 rounded-full`

## 4. Spacing & Grid System
- Max Container: `max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0`
- Desktop Split:
  - Left Panel: `lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24`
  - Right Column: `pt-24 lg:w-1/2 lg:py-24`
- Section Margins: `mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24`

## 5. Interactions & Motion
- **Nav Indicator**: `h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200` (w-16 when active).
- **Group List Focus Dimming**: Hover on one item keeps it at `opacity-100`, while `group-hover/list` sets siblings to `opacity-50`.
- **Arrow Shift**: `group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform`.
- **Accessibility**: Skip-to-content anchor, smooth scrolling, `prefers-reduced-motion` compliance.
