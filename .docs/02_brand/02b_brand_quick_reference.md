# 02b — Brand Quick Reference (cheat sheet)

Pin this on the wall. Everything else is detail.

## The logo in one line

**White "Kaizen" + orange "ext" + orange X mark, on a dark surface.** That's it. That's the brand. The site is dark-first.

## Colors

```
Brand White   #FFFFFF   (the wordmark "Kaizen", headlines on dark)
Brand Orange  #E8593A   (the wordmark "ext" + X, CTAs, accents)
Dark surface  #0E1A16   (page bg — default)
Surface raised #14302A   (cards, raised panels on dark)
Border (dark) #234D3E   (hairlines on dark)
Muted (dark)  #9BAFA6   (secondary text on dark)
Body (dark)   #E8EFEB   (body copy on dark)

Hero gradient (dark)    #14302A → #0E2620
Orange CTA gradient     #F2694A → #DD4F30
Light section tint*     #FAFAF8 → #F4F2EE   (* sparingly, for breathing room only)
Highlight panel*        #FFF5F2              (* sparingly)
```

## Type

```
Inter — UI, body, headlines (400/500/600/700/800)
Instrument Serif italic — accent words inside headlines (orange)
JetBrains Mono — eyebrow labels, code
```

Eyebrow rule: `12px mono, weight 500, tracking 0.12em, uppercase, orange`.
Italic-serif rule: exactly **one** word per major headline, in brand orange.

## Logo

```
kaizenext-logo-white.png   →  the only logo file. Use everywhere.
                              White "Kaizen" + orange "ext" + orange X.
                              Place directly on dark surface — NEVER on a white card.
                              Never recolor any part of it.
```

If a light-background placement is unavoidable: wrap the unchanged white-and-orange wordmark in a small dark "chip" (rounded dark green-black rectangle with 16px padding). Don't recolor the wordmark.

## Voice

- Direct, technical, confident.
- Banned words: revolutionize, synergy, leverage, best-in-class, world-class, unleash, supercharge, harness.
- Show numbers, not adjectives.
- British/Australian English.
- One CTA per section.

## Motion

- Default ease: `cubic-bezier(0.22, 1, 0.36, 1)` (out-quint).
- Default duration: 250ms hovers, 600ms scroll-reveals, 1200ms hero entrance.
- Respect `prefers-reduced-motion`.

## The eight non-negotiables

1. Looks $5M+, not freelance (reference: Linear / Vercel / Anthropic).
2. Logo is white + orange, on a dark surface. Never recolored, never on a white card.
3. Real product UI in screenshots, not generic illustrations.
4. Football / computer-vision case study prominently featured.
5. Voice AI live demo embedded on the site.
6. Modern web practices (SSR, edge, optimized images, accessible).
7. Mobile-first.
8. Speed: LCP < 2.0s, Lighthouse 95+.
