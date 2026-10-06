# AI Design & Code Generation Prompt Template

Use this structured prompt template when instructing an AI agent or engineer to design and implement an interface according to this design system. It enforces systematic reasoning *before* code generation to prevent generic or bloated UI.

---

## Instructions for the AI

1. **Reason Before Coding:** Before writing any markup, styles, or logic, produce a concise **Design & Architecture Decision Log** addressing:
   - Screen identity & single dominant user task.
   - Spatial hierarchy, layers, and layout pattern (mobile & desktop).
   - Component choices vs. prohibited components.
2. **Strictly Grounded Content:** Never invent decorative metrics, cards, gradients, or lorem ipsum. Use realistic, domain-specific names, dates, amounts, and statuses.
3. **Handle Missing Information:** If critical product requirements are missing, do not assume complex enterprise features. Choose the simplest, most native-feeling path or ask for clarification.
4. **Enforce Hierarchy of Truth:** In any design conflict, strictly obey the order:
   $$\text{Accessibility} \longrightarrow \text{Clarity} \longrightarrow \text{Content} \longrightarrow \text{Deference} \longrightarrow \text{Novelty}$$
5. **Two-Stage Output:** Deliver:
   - **Phase 1: Architecture & Layout Rationale** (150–250 words).
   - **Phase 2: Complete Implementation Code** (accessible, semantic, responsive, styled with design tokens).

---

## Prompt Specification Template

Copy and fill out the following template to prompt the AI:

```markdown
### 1. Product & Context
- Product Type: [e.g., Personal Productivity Tool / iOS-like Web App / Focused Product Dashboard / Reader]
- Target User & Environment: [e.g., Freelancer managing client invoices on mobile and laptop]
- Voice & Tone: [Human, concise, direct, helpful; zero corporate jargon or marketing fluff]

### 2. Primary Objective & Task Hierarchy
- Dominant Primary Task: [The SINGLE action or decision the user must accomplish on this screen]
- Primary Action (CTA): [e.g., "Crear Factura" — filled prominent button in nav bar or bottom floating bar]
- Secondary Actions: [e.g., Filter by status, Export CSV — tinted/plain controls, strictly subordinate]

### 3. Data & Real Content
- Core Data Entity: [e.g., Invoice: id, client name, issue date, due date, amount, status]
- Realistic Sample Data:
  [Provide actual sample records. NO LOREM IPSUM. Realistic amounts, dates, customer names]
- Edge Case States:
  - Empty State: [Why it is empty + single prominent action to resolve it]
  - Loading State: [Targeted skeleton for expected layout; no full-screen spinners]
  - Error State: [Specific inline error message + actionable recovery]

### 4. Layout & Viewport Expectations
- Target Platforms: [Mobile (375px+), Tablet (768px+), Desktop (1024px+)]
- Navigation Pattern:
  - Mobile (<768px): [Bottom Tab Bar / Navigation Stack with collapsing Large Title / Bottom Sheet]
  - Desktop (≥1024px): [Collapsible Sidebar / Master-Detail / Pinned Top Header]
- Content Max Width: [e.g., 680px for reading/settings; 1120px for master-detail workspace]

### 5. Component Restrictions & Boundaries
- Allowed Components:
  - Grouped inset lists (settings/item presentation)
  - Content-bearing cards (only if holding rich visual media/previews)
  - Segmented controls, inline switches, steppers
  - Bottom sheets (mobile) / Modal dialogs (desktop) for secondary tasks
- Strictly Prohibited Anti-Patterns:
  - NO nested cards (cards inside cards)
  - NO dense data tables as default view (prefer grouped lists unless doing financial comparison)
  - NO breadcrumb trails (use navigation title + back button)
  - NO decorative gradients, saturated background fills, or glassmorphism on static content
  - NO oversized hero CTA banners that overpower content
  - NO icon-only buttons without accessible text or `aria-label`

### 6. Accessibility & Web Standards
- Color Contrast: WCAG AA compliant (minimum 4.5:1 for normal text, 3:1 for large text)
- Keyboard Navigation: Full Tab, Arrow keys, Enter, Escape support with visible `:focus-visible` rings
- Reduced Motion: Respect `prefers-reduced-motion` with instant/fade transitions
- Touch Targets: Minimum 44×44px hitboxes for all interactive elements
```

---

## System Prompt Directive (for Cursor / LLM Rules)

When pasting this design system directly into an AI system prompt, include this directive:

> **You are an expert product designer and UI engineer strictly following the Apple Human Interface Guidelines adapted for the responsive web.**
> - You never generate generic SaaS templates, bloated dashboards with gratuitous charts, or marketing-style splash elements for product screens.
> - You structure interfaces around calm, native-feeling primitives: grouped lists, tactile materials over scrollable viewports, continuous corner squircle radii (`--radius-sm` through `--radius-xl`), and a single interactive accent color.
> - Before writing code, you always output a brief plan stating: (1) the screen's single dominant task, (2) the layout pattern for mobile and desktop, and (3) key accessibility assurances.
> - All code must utilize the tokens in `DESIGN_TOKENS.md` and comply with the rules in `COMPONENT_RULES.md`, `LAYOUT_GUIDE.md`, and `MOTION_GUIDE.md`.
