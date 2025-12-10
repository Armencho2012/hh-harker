DESIGN — High-level layout & visual tokens

Purpose
- Provide a compact, actionable design reference for the site.
- Keep it implementation-friendly for Tailwind and vanilla CSS.

Principles
- Mobile-first, readable, authoritative: prioritize typography and spacing.
- Low visual noise: single strong accent, neutral surface scale.
- Progressive enhancement: everything usable without JS.

Tokens (CSS variables)
- Primary accent: `--accent: #0f766e` (teal)
- Muted text: `--muted: #6b7280`
- Background: `--bg: #f8fafc` (or Tailwind `gray-50`)
- Card surface: `--card-bg: #ffffff`
- Card border: `--card-border: rgba(15,118,110,0.06)`

Typography
- Font stack: `Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial`.
- Base font: 16px; line-height: 1.5.
- Scale (suggest):
  - H1 / Hero: 2rem (32px) — `text-2xl md:text-4xl`
  - H2 / Section: 1.5rem (24px) — `text-xl md:text-2xl`
  - H3 / Subsection: 1.125rem (18px) — `text-lg`
  - Body: 1rem (16px) — `text-base`
  - Small/help: 0.875rem (14px) — `text-sm`
- Use `font-semibold` for headings; `font-normal` for body.

Reading measure
- Constrain long text to about 65–75 characters.
- Tailwind: `max-w-prose` or `max-w-[65ch]` for article content.

Layout & Grid
- Mobile-first single column.
- At `lg` (≥1024px): 3-column grid: `grid lg:grid-cols-4` with `lg:col-span-1` for TOC and `lg:col-span-3` for content.
- Horizontal paddings: `px-4` (mobile) → `px-6` (md) → `px-8` (lg).
- Max width container: `max-w-7xl mx-auto`.

Header & Navigation
- Compact sticky header with subtle shadow: `sticky top-0 z-50 shadow-sm`.
- Keep height small so header doesn't dominate on mobile.
- Hamburger toggles TOC drawer on small screens; `aria-expanded` must reflect state.

Sidebar / TOC
- Desktop: always visible on `lg`+. Mobile: hide behind drawer/overlay.
- Visual cues: active link accent color + subtle left border or background tint.
- Indentation for hierarchy, smaller font for 3rd-level.

Cards
- Surface: white card, subtle border and small radius.
- Padding: `1.25rem` (20px) inner; use `space-y` between content blocks.
- Shadow: minimal; border favored for document-style feel.

Buttons & Links
- Primary button (accent): background `--accent`, text white, rounded-md, `px-4 py-2`.
- Outline buttons: border `--card-border`, muted text.
- Links: accent color, underline on hover or color change.

Interaction & Motion
- Transition timing: 150–200ms ease-out for hover/opacity/transform.
- Drawer animation: slide from left (translateX) + overlay fade.
- Respect `prefers-reduced-motion`.

Accessibility
- Ensure color contrast >= WCAG AA for body text; WCAG AAA for large headings if possible.
- ARIA: `role="navigation"` for TOC, `aria-expanded` on toggles, `aria-controls` if hiding content.
- Keyboard: all interactive elements tabbable; visible focus ring.

Tailwind-friendly guidance
- Keep tokens in `:root` CSS, then combine with Tailwind utilities.
- Useful utility combinations:
  - `.card` → `bg-white border rounded-lg p-5 shadow-sm`
  - `.btn-primary` → `inline-flex items-center px-4 py-2 rounded-md text-white` + `bg-[var(--accent)]`
  - `.layout-container` → `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Consider adding Tailwind Typography plugin for article bodies: `prose` class.

Examples (conceptual)
- Mobile: header (brand + hamburger) → hero card → article cards stacked → footer.
- Desktop: left TOC column (sticky), center content (reading width constrained), right utility column optional.

Performance
- Limit external fonts to needed weights only; `font-display: swap`.
- Avoid heavy JS; keep toggles in small vanilla scripts.

Next steps (optional)
- Add a one-file style reference (`style.css`) with the variables and small utility classes.
- Implement a slide-out mobile drawer with overlay and focus trapping.

---
File created as `DESIGN.md`. Use it as the single-source-of-truth for visual decisions.
