# 02 — Brand Guidelines

This is the visual contract. Every screen on the site must look like it came from this guide.

## 1. Color palette

> **Quick read on the logo:** the Kaizenext wordmark is **white ("Kaizen") + brand orange ("ext" + the X mark)**. The canonical logo is white-on-dark — meaning the website should lean dark-surface-first. Use the supplied `kaizenext-logo-white.png` directly on any dark surface, with no card behind it.

### Primary brand colors

| Role | Hex | Tailwind name | Use for |
|---|---|---|---|
| **Brand White** (primary) | `#FFFFFF` | `kx-white` | "Kaizen" in the wordmark, headlines on dark bg, body on dark bg |
| **Brand Orange** (accent) | `#E8593A` | `kx-orange` | "ext" in the wordmark, the X mark, CTAs, italic-serif highlight words, link hovers |
| **Brand Dark Surface** (supporting) | `#0E1A16` → `#1B3A2D` | `kx-surface` | The dark surface the logo lives on — page bg, hero, footer, CTA strips |

### Supporting / system colors

| Role | Hex | Use for |
|---|---|---|
| Hero dark gradient top | `#14302A` | Top of dark hero / dark sections |
| Hero dark gradient bottom | `#0E2620` | Bottom of dark hero / dark sections |
| Green gradient top | `#234D3E` | Lighter end of green gradient |
| Green gradient bottom | `#1B3A2D` | Darker end of green gradient |
| Orange gradient top | `#F2694A` | Lighter end of orange CTA |
| Orange gradient bottom | `#DD4F30` | Darker end of orange CTA |
| Warm bg | `#FFF5F2` | Very subtle peach tint for highlight panels |
| Section tint top | `#FAFAF8` | Top of warm section |
| Section tint bottom | `#F4F2EE` | Bottom of warm section |
| Card bg | `#F5F5F5` | Neutral cards on light bg |
| Card border | `#ECECE8` | Card hairlines |
| Off-white | `#FAFAF8` | Default page bg (NOT pure white) |
| Ink (body text on light) | `#0F1F1A` | Body copy on light bg |
| Muted text | `#5A6B62` | Secondary copy, captions |

### Dark mode (recommended)

| Role | Hex |
|---|---|
| Surface | `#0E1A16` |
| Surface raised | `#14302A` |
| Border | `#234D3E` |
| Body text | `#E8EFEB` |
| Muted text | `#9BAFA6` |

### Color usage rules

- **The brand is white + orange on dark.** That's the logo, that's the canonical look. The website leans dark-first.
- **White + Orange is the wordmark.** "Kaizen" sits in pure white `#FFFFFF`, "ext" + the X mark sit in `#E8593A`. Never recolor either.
- **Orange is for emphasis, not for fields of color.** Use it for CTAs, link hovers, italic-serif accent words ("AI **that ships.**"), single-pixel underlines, and small glyphs. Do not use orange as a section background.
- **Dark surface is the default page bg.** Hero, footer, CTA strips, and most sections sit on dark green-black gradients. Light tinted sections are an exception used sparingly for breathing room (e.g., testimonials, blog grid).
- **Gradients beat flat fills** for primary surfaces. Hero, footer, primary CTA all use gradients listed above.
- **Avoid pure black `#000`.** Even on dark surfaces, use the warm off-blacks (`#0E1A16`, `#14302A`).

## 2. Typography

### Font stack

| Role | Family | Weight | Where |
|---|---|---|---|
| Display + Body | **Inter** | 400, 500, 600, 700, 800 | All UI, body, most headlines |
| Serif accent | **Instrument Serif** *italic* | 400 italic | One or two highlighted words inside a Display headline (e.g., "AI that *ships*.") |
| Mono | **JetBrains Mono** | 400, 500 | Code blocks, technical tags, eyebrow labels |

Self-host both fonts (Google Fonts → download, ship via `next/font` for zero-CLS). Do not link to Google Fonts CDN.

### Type scale

| Token | Size / line-height | Weight | Tracking |
|---|---|---|---|
| Display XL | 72/76 (clamp 48–72 on mobile) | 800 | -0.03em |
| Display L | 56/60 | 800 | -0.025em |
| Display M | 40/44 | 800 | -0.02em |
| Heading L | 32/38 | 700 | -0.015em |
| Heading M | 24/30 | 700 | -0.01em |
| Heading S | 20/28 | 600 | 0 |
| Body L | 18/28 | 400 | 0 |
| Body M | 16/26 | 400 | 0 |
| Body S | 14/22 | 400 | 0 |
| Eyebrow | 12/16 mono | 500 | 0.12em uppercase |
| Caption | 12/16 | 500 | 0 |

### Eyebrow labels

Above every section heading, use a mono eyebrow label like:

```
01 · WORKFLOW AUTOMATION
```

This is the Linear / Vercel / Stripe pattern. Do **not** use chunky pill badges with rounded backgrounds.

### Italic serif accent rule

In every major headline, exactly **one** key word is set in Instrument Serif italic, in the brand orange. Examples:

- "AI workflows that **actually** *ship.*" — italic *ship.*
- "Voice agents your customers won't *hate.*" — italic *hate.*
- "Every wasted ad dollar, *flagged* on WhatsApp." — italic *flagged*

## 3. Logo usage

### File (only one — this is intentional)

| File | When to use |
|---|---|
| `kaizenext-logo-white.png` | **Everywhere.** White "Kaizen" wordmark + orange "ext" + orange X mark. Place directly on dark surfaces with no card or box behind it. |

There is **only one logo file** in this bundle. The canonical Kaizenext logo is white-on-dark. The website should be designed dark-first to use it.

### If a logo absolutely must appear on a light surface

A small number of placements may need this (e.g., a printed invoice, a partner one-pager):

- Do **not** color-invert the wordmark to dark or recolor "Kaizen" to ink/green. The wordmark must stay white-and-orange.
- Wrap it in a **dark surface "chip"** — a small dark green-black rectangle (`#0E1A16` → `#1B3A2D` gradient) with 16px padding around the wordmark and an 8px radius. The wordmark itself stays untouched.
- For favicon / square avatar placements, repeat the same pattern: a dark rounded square with the white "K" character (or wordmark if the canvas allows) on top.

### Hard rules

1. **Never put a white card/box behind the logo.** If a dark surround is needed, use the dark-surface chip approach above — never white.
2. **Never recolor any part of the wordmark.** Not the white, not the orange. No drop-shadows, no outlines, no gradient overlays.
3. **Minimum size:** wordmark height 24px digital. Below that, just show the white "K" character (matching the wordmark stroke) on a dark chip.
4. **Clear space:** at least the height of the "K" on every side.
5. **Don't:** stretch, skew, animate (a subtle 1.02 scale on hover is the only allowed motion).

## 4. Imagery & illustration

- **Real product UI > generic illustrations.** Every screenshot must look like a real Slack message, real Gmail thread, real iPhone (with Dynamic Island), real PDF viewer (with toolbar/zoom). Reference the existing demo assets in `kaizenext/demo_mock.html`.
- **Photography:** if used, must be high-contrast, slight grain, warm color grade (no cold blue tech-bro stock). Faces are okay; smiling-people-pointing-at-laptops is not.
- **Computer vision / football product:** real broadcast footage with overlay (player tracking, heatmaps, event tags). Do not use CGI mockups.
- **Avoid:** AI-generated illustrations, chunky 3D blobs, "abstract gradient swooshes", emoji-heavy section dividers.

## 5. Voice & tone

- **Direct, technical, confident.** Like a senior engineer pitching to another senior engineer.
- **No hype words.** Banned words: "revolutionize", "synergy", "leverage", "best-in-class", "world-class", "unleash", "supercharge", "harness".
- **Show, don't tell.** Replace adjectives with numbers. "Fast" → "Cuts ad-account audit time from 6 hours to 18 minutes."
- **Sentence length: short.** Most paragraphs are 2 sentences. Headlines are 5–9 words.
- **One CTA per section.** Pick the highest-intent action and make it the only thing.
- **British/Australian English** (Kaizenext sells AU + UAE first). "Optimisation", "personalised", "colour", "centre".

## 6. Motion language

- **Restrained, not playful.** No bouncy springs.
- **Default easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (out-quint).
- **Default duration:** 250ms for hovers, 600ms for scroll-reveals, 1200ms for hero entrance.
- **Scroll reveals:** 16px slide-up + fade-in. Stagger 80ms between siblings.
- **Hero:** subtle parallax on background gradient mesh (translate Y on scroll, max 60px).
- **Buttons:** 150ms transform on hover (`translateY(-1px)`), 4px glow expansion on shadow.
- **Respect** `prefers-reduced-motion: reduce` — disable parallax and scroll reveals when set.

## 7. Brand tagline candidates

Pick one for the homepage hero. Founder's call.

1. *"AI that ships."*
2. *"From workflow to **production**, in weeks."*
3. *"Your AI engineering team. **Without the headcount.**"*
4. *"AI workflows. Voice agents. Vision systems. Built to ship."*

Recommendation: option 4 for the homepage hero, option 1 as a secondary tagline / page footer signature.
