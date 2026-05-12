# 01b — Delivery Contract Checklist

This is the developer's sign-off list. Tick every box before invoicing the final milestone.

## Phase 1 — Design (week 1–2)

- [ ] Moodboard approved by founder (uses inspiration brief in §6).
- [ ] Brand tokens applied in Figma/code (colors, type, spacing).
- [ ] Hero design exploration — 3 directions presented, 1 chosen.
- [ ] Homepage full design approved (desktop + mobile).
- [ ] Solution page template approved.
- [ ] Case study page template approved.
- [ ] Component library defined (buttons, cards, eyebrow, inputs, etc.).

## Phase 2 — Build (week 3–6)

- [ ] Repo set up with Next.js + TypeScript + Tailwind + shadcn.
- [ ] Design tokens encoded as CSS variables / Tailwind config.
- [ ] Layout (Nav, Footer, Megamenu) implemented and accessible.
- [ ] All home page sections built and animation-tuned.
- [ ] All 5 solution pages built.
- [ ] Work hub + 1 detailed case study (Saudi football product) built.
- [ ] About, Contact, Insights, 404, Legal pages built.
- [ ] CMS schemas set up (Sanity recommended) and migration of seed content done.
- [ ] Voice widget integrated and tested (ElevenLabs / Vapi / Retell).
- [ ] Cal.com booking embed integrated.
- [ ] Newsletter form integrated with Brevo (uses founder's existing account).
- [ ] Ad-Audit lead-magnet form + email delivery wired (Resend).

## Phase 3 — QA (week 7)

- [ ] Manual QA on Chrome, Safari, Firefox, Edge — desktop + mobile.
- [ ] iOS Safari and Android Chrome tested on real devices.
- [ ] Lighthouse 95+ on Performance / Accessibility / Best Practices / SEO on home + every solution page.
- [ ] axe-core: 0 violations.
- [ ] Keyboard navigation works on every interactive element.
- [ ] Reduced motion respected.
- [ ] No console errors or warnings.
- [ ] All images have alt text.
- [ ] All videos have captions or are decorative.
- [ ] OG images render correctly (test on LinkedIn / X / WhatsApp / Slack share previews).
- [ ] Forms reach destination inbox / sheet / Notion.
- [ ] Voice widget works on production domain (mic permission, STT, TTS).
- [ ] Calendar booking confirmed end-to-end (test booking → email arrives).

## Phase 4 — Launch (week 8)

- [ ] DNS pointed at Vercel.
- [ ] HTTPS + HSTS active.
- [ ] CSP header configured.
- [ ] `sitemap.xml` and `robots.txt` published.
- [ ] Submitted to Google Search Console + Bing Webmaster.
- [ ] Plausible Analytics + Sentry live.
- [ ] Conversion events firing (book_call_click, audit_click, voice_widget_started, newsletter_subscribed).
- [ ] CMS handed off to founder with editor docs.
- [ ] Repo handed over with README + deploy instructions.
- [ ] Backup / restore process documented.
- [ ] Founder approval sign-off email received.

## Hard rules (developer cannot deviate without founder approval)

- Brand colors, typography, logo treatments (especially: no white card behind logo on dark bg).
- Sitemap and section structure.
- Conversion goals and CTA placement.
- Performance budget (LCP < 2.0s, Lighthouse 95+).
- Tech stack core (Next.js + Tailwind + TypeScript + Vercel).

## What requires founder review before going live

- Final copy on all pages (founder writes / approves all customer-facing words).
- Final case-study content (especially the Saudi football one — partner approval likely needed).
- Pricing displayed on Ad Automation page (could be hidden if strategy changes).
- Voice widget transcript samples (don't ship with placeholder demo agents).
- All testimonials (must have explicit permission).
- All client logos (must have explicit permission).
