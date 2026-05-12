# 05 — Tech, SEO, Performance, Accessibility, Hosting

## 1. Recommended stack

### Frontend

| Layer | Recommendation | Why |
|---|---|---|
| **Framework** | **Next.js 15+ (App Router)** | SSR/SSG/ISR, edge runtime, built-in image + font optimization, route prefetching. Industry standard for marketing sites. |
| **Language** | **TypeScript (strict)** | Fewer bugs, better DX. |
| **Styling** | **Tailwind CSS v4** | Speed of iteration, consistent design tokens. |
| **Component primitives** | **shadcn/ui** | Accessible, copy-pasteable, Radix-based. |
| **Animation** | **Framer Motion** + small CSS where possible | Best React API for the kind of restrained motion we want. |
| **Icons** | **Lucide React** | Matches the line-style brand. |
| **Forms** | `react-hook-form` + `zod` | Schema validation, no overkill. |
| **3D / shaders** (optional) | `three.js` via `@react-three/fiber` if a hero needs WebGL | Only if a section explicitly calls for it. |

### Content / CMS

| Option | When to pick |
|---|---|
| **Sanity** | If team wants a polished editor, fast iteration, real-time previews. **Default recommendation.** |
| **Payload CMS** | If team prefers self-hosted + Postgres + open source. |
| **Contentful** | If team is already on it; otherwise overkill. |
| Markdown in repo (MDX) | Only for blog if team is technical and small. Not flexible enough for case studies. |

**Default: Sanity.** Free starter tier, fastest to get to a working CMS for the case-studies and blog. Schemas:

- `Page` (legal, about — flexible body blocks)
- `Solution` (service-line page content)
- `CaseStudy` (cover, brief, approach, outcome, gallery, quote, kpis)
- `BlogPost` (title, cover, body, author ref, category, publishedAt)
- `Author`, `Category`, `Testimonial`, `ClientLogo`, `Setting` (global site config)

### Forms / contact submissions

- **Calendar:** Cal.com (open-source, embeddable) — preferred over Calendly for branding control.
- **Email submission:** Resend or Postmark for transactional.
- **Lead capture / Ad Audit form:** post to a Google Sheet via Apps Script *or* a Notion DB via API for v1; upgrade to a CRM later.

### Hosting / deploy

- **Vercel** (default — built for Next.js, edge network, free SSL, preview deploys per PR).
- Custom domain `kaizenext.com` with `www` redirect → apex.
- Set up `app.kaizenext.com` subdomain reservation for the future product app.

### Repo / CI

- GitHub repo, branch protection on `main`.
- Vercel preview deploy on every PR.
- ESLint + Prettier + TypeScript strict in CI.
- Pre-commit hook with `lefthook` or `husky`.

## 2. Performance budget

| Metric | Target | Hard ceiling |
|---|---|---|
| Lighthouse Performance | ≥ 95 | 90 |
| Lighthouse Accessibility | 100 | 95 |
| Lighthouse Best Practices | 100 | 95 |
| Lighthouse SEO | 100 | 95 |
| LCP (4G) | < 2.0s | 2.5s |
| INP | < 200ms | 300ms |
| CLS | < 0.05 | 0.1 |
| Total JS shipped homepage | < 180KB gzipped | 250KB |
| Total page weight | < 1.5MB | 2.5MB |

### How to hit it

- **Images:** AVIF first, WebP fallback. `next/image` for everything. No raw `<img>`.
- **Video:** muted, autoplay, looped hero videos must be < 1.5MB MP4 (VP9 or H.265 encoded), or use `<video>` with `playsinline` + `preload="metadata"`. Provide a poster image. Use Mux or Bunny CDN for case-study video.
- **Fonts:** self-host, `next/font` with `display: swap`, subset to Latin + Latin-Ext. No Google Fonts CDN.
- **Third-party JS:** budget ≤ 30KB. Cal.com inline embed, analytics, that's it. **No tag manager.**
- **Animations:** prefer CSS transforms over JS where possible. Lazy-load Framer Motion for non-hero sections.
- **Code splitting:** dynamic-import every below-the-fold heavy section.
- **No layout shift:** every image and embed has explicit width/height or aspect-ratio.

## 3. Accessibility (WCAG 2.2 AA)

- Color contrast ratios verified for every fg/bg combination.
- Keyboard navigation: tab through every interactive element including the megamenu (Esc closes, arrow keys navigate).
- Focus ring always visible (2px solid `--kx-orange`, 2px offset).
- All animations honor `prefers-reduced-motion: reduce`.
- Voice-widget transcript exposed as live region (`aria-live="polite"`).
- Video has captions track.
- Form errors associated with inputs via `aria-describedby`.
- `<html lang="en-AU">` (or per-locale).
- Run **axe-core** in CI on every PR.

## 4. SEO

### On-page

- Unique `<title>` and `meta description` per page (CMS-driven).
- Semantic HTML — one `<h1>` per page, structured `<h2>`/`<h3>`, `<main>`, `<nav>`, `<article>`, `<section>` used correctly.
- Schema.org JSON-LD:
  - `Organization` on every page.
  - `WebSite` + `SearchAction` on home.
  - `Article` on blog posts.
  - `Service` on solution pages.
  - `BreadcrumbList` on case studies and blog posts.
  - `FAQPage` on solution pages with FAQs.
- Sitemap at `/sitemap.xml`, generated at build time.
- `robots.txt` allowing all (disallow `app.kaizenext.com` if needed).
- Canonical URLs on every page.
- OpenGraph + Twitter Card per page (auto-generated OG images via `@vercel/og` — branded with Kaizenext logo + page title).

### Target keywords

Solution-page level:
- "AI workflow automation agency"
- "AI ad automation for SMB"
- "WhatsApp ad alerts Meta Google"
- "AI voice agent for receptionist"
- "computer vision for football analysis"
- "computer vision technical partner"
- "custom AI development Bangladesh / AU / UAE"

Long-tail blog plays:
- "how to monitor Meta ad spend on WhatsApp"
- "AI voice agent vs IVR comparison"
- "build vs buy: AI workflow automation for SMB"
- "computer vision player tracking — accuracy benchmarks"

### Off-page

- LinkedIn page setup with consistent OG.
- GitHub org with public showcase repos (open-source things we ship).
- Substack / company newsletter (or self-hosted at `/insights`).

## 5. Analytics & observability

- **Plausible Analytics** (privacy-friendly, no cookie banner needed for it) — primary.
- **Vercel Web Analytics** — secondary.
- **Hotjar / PostHog session recording** on a sample (10%) of visitors — feature flag in CMS.
- **Sentry** for error tracking.
- **Server logs** at the edge — Vercel built-in.

Conversion events to wire:
- `cta_book_call_click` (with location: hero / mid / footer / page name)
- `cta_get_audit_click`
- `voice_widget_started`
- `newsletter_subscribed`
- `case_study_viewed` (with case-study slug)
- `solution_page_scroll_75` (engagement)

## 6. Internationalization

v1 ships **English (en-AU)** only. Architect for future locales — Next.js `app/[locale]` segment, content keyed by locale in CMS. Prepared locales for v2: `en-GB`, `ar-SA`, `bn-BD`.

## 7. Security & legal

- HTTPS enforced (HSTS).
- CSP header (script-src self + analytics, style-src self + inline for next/font, img-src self + cms domain).
- No server-side secrets in client bundles.
- Form submissions rate-limited (Upstash Redis or Vercel Edge Config).
- Privacy policy + Terms + Cookie policy linked in footer.
- DPO email if EU traffic is significant: `privacy@kaizenext.com`.

## 8. Domain & email

- Buy `kaizenext.com` (and reserve `kaizenext.ai`, `kaizenext.io` defensively).
- DNS at Cloudflare; Vercel as origin.
- Google Workspace for email — `hello@`, `tahmid@`, `careers@`, `privacy@`.
- SPF / DKIM / DMARC properly configured (DMARC in `quarantine` minimum).

## 9. Launch checklist

Before going live, every box ticked:

- [ ] All pages render at desktop / tablet / mobile / 4K.
- [ ] All copy proofread (founder approval).
- [ ] All logos placed correctly (white logo on dark bg, no white card).
- [ ] All images have alt text.
- [ ] All videos have captions.
- [ ] Lighthouse 95+ across all metrics, on all main pages.
- [ ] axe-core 0 violations.
- [ ] Cal.com booking flow tested end-to-end.
- [ ] Form submissions confirmed reaching destination (inbox / sheet / Notion).
- [ ] OG image renders correctly when shared on LinkedIn / X / WhatsApp.
- [ ] Sitemap submitted to Google Search Console + Bing Webmaster.
- [ ] Analytics events firing.
- [ ] 404 page in place.
- [ ] Cookie banner working.
- [ ] All social links correct.
- [ ] Backup of CMS taken.
- [ ] Founder reviewed final once more.
