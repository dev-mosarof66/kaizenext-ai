# 04 — Design System & Components

This is the tactical layer for the developer. Tokens, components, recipes.

## 1. Design tokens (CSS variables)

```css
:root {
  /* Brand — the wordmark colors */
  --kx-white: #FFFFFF;          /* "Kaizen" in the wordmark */
  --kx-orange: #E8593A;         /* "ext" + X mark in the wordmark, CTAs */
  --kx-orange-400: #F2694A;
  --kx-orange-600: #DD4F30;

  /* Supporting surface (dark-first website) */
  --kx-surface: #0E1A16;        /* default page bg */
  --kx-surface-raised: #14302A; /* cards, raised panels */
  --kx-surface-700: #1B3A2D;    /* greener accent surface */
  --kx-surface-600: #234D3E;    /* lighter dark surface, borders */
  --kx-surface-950: #0E2620;    /* deepest gradient stop */

  /* Legacy aliases (some component recipes below still reference these) */
  --kx-green: var(--kx-surface-700);
  --kx-green-700: var(--kx-surface-600);
  --kx-green-900: var(--kx-surface-raised);
  --kx-green-950: var(--kx-surface-950);

  /* Surfaces */
  --kx-bg: #FAFAF8;
  --kx-bg-tint-top: #FAFAF8;
  --kx-bg-tint-bottom: #F4F2EE;
  --kx-bg-warm: #FFF5F2;
  --kx-card: #F5F5F5;
  --kx-border: #ECECE8;

  /* Ink */
  --kx-ink: #0F1F1A;
  --kx-muted: #5A6B62;

  /* Dark surfaces */
  --kx-dark-surface: #0E1A16;
  --kx-dark-surface-raised: #14302A;
  --kx-dark-border: #234D3E;
  --kx-dark-ink: #E8EFEB;
  --kx-dark-muted: #9BAFA6;

  /* Radii */
  --kx-r-sm: 6px;
  --kx-r-md: 12px;
  --kx-r-lg: 20px;
  --kx-r-xl: 28px;

  /* Shadows */
  --kx-shadow-sm: 0 1px 2px rgba(15,31,26,.06);
  --kx-shadow-md: 0 4px 12px rgba(15,31,26,.08), 0 1px 2px rgba(15,31,26,.04);
  --kx-shadow-lg: 0 24px 60px rgba(15,31,26,.12), 0 4px 12px rgba(15,31,26,.06);
  --kx-glow-orange: 0 6px 24px rgba(232,89,58,.35);

  /* Motion */
  --kx-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --kx-dur-fast: 150ms;
  --kx-dur: 250ms;
  --kx-dur-slow: 600ms;
}
```

## 2. Layout grid

- **Desktop:** 12-column, 1280px max content width, 96px gutter on sides.
- **Tablet:** 8-column, 720px max, 32px gutters.
- **Mobile:** 4-column, 24px page padding.
- **Section vertical rhythm:** 120px top/bottom on desktop, 80px on tablet, 64px on mobile.
- **Section to section spacing** (no extra padding) — sections own their own padding; never margin between sections.

## 3. Components

### 3.1 Buttons

Three variants. All use spring-y micro-interaction on hover.

**Primary** (orange CTA):
```css
.btn-primary {
  background: linear-gradient(180deg, var(--kx-orange-400) 0%, var(--kx-orange-600) 100%);
  color: #fff;
  font-weight: 600;
  padding: 14px 24px;
  border-radius: var(--kx-r-md);
  box-shadow: var(--kx-shadow-md), inset 0 1px 0 rgba(255,255,255,.2), var(--kx-glow-orange);
  transition: transform var(--kx-dur-fast) var(--kx-ease), box-shadow var(--kx-dur) var(--kx-ease);
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: var(--kx-shadow-lg), var(--kx-glow-orange); }
```

**Secondary / Ghost** (glass on dark, hairline on light):
```css
.btn-ghost-dark {
  background: rgba(255,255,255,.06);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,.16);
  color: #fff;
  padding: 14px 24px;
  border-radius: var(--kx-r-md);
}
.btn-ghost-light {
  background: #fff;
  border: 1px solid var(--kx-border);
  color: var(--kx-green);
  padding: 14px 24px;
  border-radius: var(--kx-r-md);
}
```

**Tertiary** (text link with arrow):
```
[Read the case study →]
```
- Underline on hover; arrow translates 4px right on hover.

### 3.2 Cards

**Solution card** (used in homepage 4-pillar grid):
- 1px hairline border, 24px radius, 32px padding, white bg.
- Top: 48×48 icon (line-style, orange).
- Heading M, then 2-line description, then `[Learn more →]`.
- Hover: lift 4px, shadow grows, border tints orange.

**Case study card** (used in Work grid):
- 16:9 cover image at top, 28px radius mask.
- Below image: category eyebrow, title (Heading M), client + 1-line outcome.
- Hover: image scales 1.03 inside its mask, card lifts 4px.

**Testimonial card**:
- Warm cream bg `#FFF5F2`, hairline border, 20px radius, 32px padding.
- Top: oversized open-quote glyph (orange italic-serif, opacity 0.4).
- Body quote, Body L size, ink text.
- Bottom: 40×40 round headshot, name (semibold), title (muted).

### 3.3 KPI tile

- Used in hero strips and case studies.
- Massive number (Display L or M weight 800), unit smaller and orange.
- Below: 1-line label (mono eyebrow uppercase).

### 3.4 Eyebrow label

```
01 · DASHBOARD
```
- Mono, 12/16, weight 500, tracking 0.12em, uppercase.
- Always orange-on-light or orange-on-dark.
- Numbered prefix is optional but encouraged inside long pages (helps the reader's location).

### 3.5 Megamenu (desktop nav)

- Trigger: hover or focus on "Solutions" — 200ms delay.
- Panel: full-width-of-content dropdown, dark green bg with subtle gradient mesh, 28px radius, 24px padding.
- Inside: 2-column grid of solution links + featured product card on the right.
- Each link row: small line icon + title + 1-line description, hover bg tints lighter green.

### 3.6 Logo carousel

- Two rows of monochrome logos.
- Auto-scroll (CSS animation, 40s loop, infinite, paused on hover).
- Each logo: max height 40px, opacity 0.6, hover opacity 1.

### 3.7 Live voice widget

- Circular 96px button, orange gradient, white mic icon center.
- Pulsing ring animation when idle (2s loop, 1.0 → 1.15 scale, opacity 0.3 → 0).
- On click: mic permission, then inline transcript stream below the button as a chat-style log.

### 3.8 Animated workflow diagram

- For Workflow Automation hero / How-it-works.
- SVG nodes connected by orange lines.
- A small dot animates along each line (`offset-path` CSS) every 3s.

### 3.9 iPhone mock + WhatsApp thread

- Reuse the existing markup from `kaizenext/demo_mock.html` — Dynamic Island, status bar, WhatsApp green nav, message bubbles with check ticks.
- Messages animate in one at a time via Intersection Observer when section enters viewport.

### 3.10 Forms

- Input: 14px padding, 12px radius, 1px border `var(--kx-border)`, focus ring 2px orange offset.
- Label: small caps mono eyebrow above input.
- Error: 1px orange border, helper text orange below.
- Success: green check icon inline.
- Use HTML5 validation + a tiny JS layer (no heavy form lib).

### 3.11 Footer newsletter row

- Green gradient bg.
- Big italic-serif headline (white): *"Get the AI playbook in your inbox."*
- Inline form: email input + orange CTA.
- Submit → swap input area for a "✓ You're in. Check your inbox." confirmation.

## 4. Section recipes

### 4.1 Dark hero

- Bg: dark-green gradient + animated SVG/Canvas gradient mesh blob (orange + green).
- 50/50 column on desktop (copy left, mock right). 1-up on mobile, mock below copy.
- Padding: 160px top, 120px bottom (desktop).

### 4.2 Tinted feature section

- Bg: warm tint gradient `#FAFAF8 → #F4F2EE`.
- 60/40 copy/visual or 40/60 alternating.
- Eyebrow + headline + body + checklist + CTA on the copy side.
- 40px gap between columns.

### 4.3 Full-bleed video showcase (case study)

- 100vh on desktop, 60vh on mobile.
- Video: muted, autoplay, loop, `playsinline`. Fallback to looping AVIF if reduced motion.
- Overlay gradient (top transparent → bottom dark) to keep KPI tiles legible.
- KPI tiles bottom-aligned, 3-column on desktop, scroll-snap on mobile.

### 4.4 CTA strip (final section before footer)

- Dark green gradient.
- Centered: italic-serif Display headline, 2-line subhead, 2 CTAs.
- Padding: 120px top/bottom.

## 5. Iconography

- Line-style only, 1.5px stroke, square caps, 24×24 default.
- Use **Lucide icons** as the default set (open source, Tailwind-friendly).
- Render icons in `--kx-orange` for emphasis, `--kx-white` (or muted white) for default icons on dark surfaces. Light-tinted sections (rare) use ink for icons.

## 6. Imagery treatment

- All photos pass through a warm grade (slight orange/cream tint, soft contrast bump, fine grain). Provide a Lightroom preset or LUT to the team for consistency.
- Vision system screenshots (player tracking, heatmaps): keep pixel-perfect, do not stylize.
- Slack / Gmail / WhatsApp / iPhone mocks: pixel-accurate to the real platforms (chrome, shadows, status bar). Reference `kaizenext/demo_mock.html`.

## 7. Accessibility (component-level)

- Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large headlines.
- Focus rings visible on every interactive element (2px orange outline, 2px offset).
- All interactive components reachable via Tab.
- All images have meaningful `alt` text.
- All videos have captions (especially the case study video).
- Form labels are programmatic (`<label for>`).
- Live voice widget shows transcript text — it isn't audio-only.

## 8. Component naming

If using shadcn/ui + Tailwind:

```
components/
  ui/                       # shadcn primitives
  brand/
    Button.tsx
    EyebrowLabel.tsx
    SectionHeader.tsx
    KPI.tile.tsx
    SolutionCard.tsx
    CaseStudyCard.tsx
    TestimonialCard.tsx
    LogoCarousel.tsx
    PhoneMockWhatsApp.tsx
    VoiceWidget.tsx
    GradientMeshBg.tsx
    FooterNewsletterRow.tsx
  sections/
    Hero.tsx
    PillarsGrid.tsx
    FeaturedProduct.tsx
    FeaturedCaseStudy.tsx
    LiveVoiceDemo.tsx
    HowWeWork.tsx
    LogoStrip.tsx
    Testimonials.tsx
    InsightsTeaser.tsx
    FinalCTA.tsx
  layout/
    Nav.tsx
    Megamenu.tsx
    Footer.tsx
    Container.tsx
```
