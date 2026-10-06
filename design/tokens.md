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
