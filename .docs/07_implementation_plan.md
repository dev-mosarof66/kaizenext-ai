# 07 — Implementation Plan & Roadmap

This document provides the developer's execution roadmap for completing the Kaizenext website from current state (~32% complete) through launch.

---

## Project Status Summary

| Phase | Status | Completion |
|---|---|---|
| **Phase 1: Design** | ✅ Complete | 100% |
| **Phase 2: Build** | 🔨 In Progress | ~34% (homepage done, 4 of 9 page families incomplete) |
| **Phase 3: QA** | ⏳ Pending | 0% |
| **Phase 4: Launch** | ⏳ Pending | 0% |

### What's Built
- ✅ Design tokens, typography, component library defined
- ✅ Next.js + TypeScript + Tailwind + shadcn/ui scaffolding
- ✅ Homepage complete (all 10 sections)
- ✅ Navigation (Navbar + Footer) stubbed
- ✅ Brand components library (Hero, WhatWeDo, FeaturedProduct, VoiceDemo, HowWeWork, etc.)

### What's Missing
- ❌ 4 of 5 solution pages (AI Ad Automation, Voice AI, Computer Vision, Custom AI)
- ❌ Solutions hub (`/solutions`)
- ❌ Work / case studies hub and detail pages
- ❌ About page (content)
- ❌ Contact page (integrations)
- ❌ Blog / Insights (entire section)
- ❌ Legal pages
- ❌ All CMS, form, and booking integrations
- ❌ QA, accessibility, performance testing
- ❌ Launch checklist

---

## Phase 2B — Build (Weeks 3–6)

This phase completes all page builds and gets the site content-ready before QA.

### Week 3: Finish Page Stubs & Solutions Hub

**Goals:**
- Flesh out `/about`, `/contact`, `/solutions` hub pages with real content layout
- Begin Solutions → AI Workflow Automation (already scaffolded)
- Set up blog post list scaffold

#### Tasks

**`/solutions` hub** (3 hours)
- [ ] Intro hero section (5-line copy on the value prop)
- [ ] 5 stacked feature sections, alternating image-left/image-right
  - Each links to its dedicated solution page
  - Pull section names/icons from the 5 pillars
- [ ] Final CTA strip
- [ ] **File:** `app/solutions/page.tsx`

**`/about` page** (4 hours)
- [ ] Hero: *"We're an AI engineering studio. Built to ship."*
- [ ] Founder section: photo (Tahmid), bio, LinkedIn link, founder quote
- [ ] Team grid (or tight-team stat if small)
- [ ] Values/Principles: 4 cards (Ship in weeks · Real product UI · Bundle the human · Safe by default)
- [ ] Where we are: map/dot graphic (Dhaka primary, AU/UAE/KSA partners)
- [ ] Press/Featured (stub for now, unhide when logos arrive)
- [ ] Careers teaser: "We're hiring" → LinkedIn jobs link
- [ ] Final CTA strip
- [ ] **File:** `app/about/page.tsx` (extend from stub)
- [ ] **Assets:** Request Tahmid headshot + team photos

**`/contact` page** (3 hours)
- [ ] Hero: *"Let's build something."*
- [ ] Two-column body:
  - Left: placeholder for Cal.com embed (will wire in Phase 3)
  - Right: contact form fallback (name, email, company, project dropdown, message)
- [ ] Below: quick contact info (email, LinkedIn, response-time expectation)
- [ ] Office locations (Dhaka HQ + partner cities)
- [ ] **File:** `app/contact/page.tsx` (extend from stub)
- [ ] **Note:** Form won't submit until Phase 3 integrations

**Solutions → AI Workflow Automation** (4 hours — extend existing)
- [ ] Hero: eyebrow + headline + subhead + 2 CTAs
- [ ] Animated workflow diagram (n8n/Zapier-style nodes)
- [ ] Outcomes strip: 3–4 KPI tiles
- [ ] Use cases tabbed section (Sales ops, Marketing ops, Customer support, Finance ops, HR)
- [ ] Stack we work with: logo grid (n8n, Zapier, Make, Airtable, Notion, Slack, HubSpot, Salesforce, Stripe, Google Workspace, OpenAI, Anthropic)
- [ ] How we deliver: 4-step timeline
- [ ] Mini case study: one automation success story
- [ ] FAQ: 5–7 questions, accordion
- [ ] CTA strip
- [ ] **File:** `app/solutions/ai-workflow-automation/page.tsx` (extend existing)

**Blog scaffold** (2 hours)
- [ ] `/insights` page layout: hero + featured post + 3-column grid + pagination
- [ ] `/insights/[slug]` layout: 720px reading column + title + author bio + ToC (sticky) + share buttons + related posts
- [ ] **Files:** `app/insights/page.tsx`, `app/insights/[slug]/page.tsx`
- [ ] **Note:** Content will be seeded from CMS in Phase 3; ship with placeholder posts for now

---

### Week 4: Build the 4 Heavy Solution Pages

These are the revenue-driving pages. Heavy content, multiple integrations.

#### **Solutions → AI Ad Automation** (8 hours)
This is the **flagship product page** — most polished.

- [ ] Hero: *"Every wasted ad dollar, flagged on WhatsApp."*
  - Subhead + 2 CTAs (`Book a demo`, `Get a free Ad Audit`)
- [ ] The problem: 3-tile section (waste stat, detection lag stat, founder discovery stat)
- [ ] The product (live mock): embed polished `demo_mock.html` (iPhone + WhatsApp + Slack + Gmail + PDF report)
- [ ] Pricing tiers: 3 cards (Starter $149, Growth $449 highlighted, Scale $1,290)
  - Per-tier features list
  - Geo-pricing footnote
- [ ] What's included: feature matrix table
- [ ] Bundled human consultant: call-out explaining the consultant + SaaS hybrid
- [ ] Free Ad Audit lead magnet: form block (email + ad-account link)
  - Placeholder form; PDF download + Loom wired in Phase 3
- [ ] Customer logos + testimonials (SMB/DTC/coaches/local services)
- [ ] FAQ: pricing, refunds, onboarding, security
- [ ] CTA strip
- [ ] **File:** `app/solutions/ai-ad-automation/page.tsx`
- [ ] **Assets:** demo_mock.html (reuse existing), pricing tiers from Tahmid

#### **Solutions → Voice & Conversational AI** (6 hours)

- [ ] Hero: *"Voice agents your customers won't hate."* + phone illustration with waveform
- [ ] Live demo widget (larger/primary version of homepage widget)
- [ ] Use cases: 4-card grid (AI receptionist · Outbound sales · Customer support · Multilingual)
- [ ] How it works: diagram (caller → Twilio → STT → LLM → TTS → caller), nodes clickable for detail
- [ ] Languages & accents: visual grid of voices with sample audio play buttons
- [ ] Integrations: logo grid (Twilio, Vonage, ElevenLabs, Vapi, Retell, OpenAI, Anthropic, etc.)
- [ ] Compliance call-out: HIPAA / PCI / GDPR readiness
- [ ] Case study teaser: one voice-AI win
- [ ] FAQ
- [ ] CTA strip
- [ ] **File:** `app/solutions/voice-ai/page.tsx`
- [ ] **Note:** Voice widget needs ElevenLabs/Vapi API key; use placeholder for now

#### **Solutions → Computer Vision** (6 hours)

- [ ] Hero: *"Vision systems that work in the real world."* + 4-up grid of vision outputs
- [ ] Featured: Football analysis (Saudi partnership)
  - Full-width video showcase with overlay graphics
  - Two-column: left story (technical partner, production, X games/week), right looping broadcast video
- [ ] Capabilities: 6-card grid (Player tracking · Action/event detection · Heatmaps · Jersey OCR · Highlight reel · Multi-camera fusion)
- [ ] Beyond football: 3 example domains (retail, security, industrial)
- [ ] Tech stack: logo grid (PyTorch, YOLO, OpenCV, NVIDIA, AWS, GCP)
- [ ] How we engage: engagement models (technical partner / build-for-you / consultant)
- [ ] CTA strip
- [ ] **File:** `app/solutions/computer-vision/page.tsx`
- [ ] **Assets:** Football case study video, vision output screenshots/overlays

#### **Solutions → Custom AI Development** (4 hours)

- [ ] Hero: *"Your AI engineering team. Without the headcount."* + subhead on end-to-end AI product development
- [ ] What we build: 4-card grid (AI SaaS · RAG/knowledge agents · Internal tools · Mobile AI apps)
- [ ] Engagement models: 3-card grid (Fixed-scope · Dedicated team · Fractional CTO)
- [ ] Stack we use: logo grid (LLM providers, frameworks, infra)
- [ ] Case study cards: 3 short cards
- [ ] Process timeline: discovery → MVP → production → operate
- [ ] FAQ
- [ ] CTA strip
- [ ] **File:** `app/solutions/custom-ai/page.tsx`

**Week 4 subtotal: 24 hours** (roughly 3 days solid work)

---

### Week 5: Work Hub & Case Studies

#### **`/work` case studies hub** (4 hours)

- [ ] Hero: "Selected work." + one-line subhead
- [ ] Filter bar: chips (All · Workflow · Voice · Vision · Custom · Ad Automation)
- [ ] Case study grid: 3-column desktop, 1-up mobile
  - Each card: cover image (16:9), category eyebrow, project title, client name, 1-line outcome
  - Hover: lift 2px + shadow grow + cover image zoom (1.03)
- [ ] CTA strip
- [ ] **File:** `app/work/page.tsx`
- [ ] **Assets:** 6–12 case study cover images (from existing demo assets or stock)

#### **Case study detail: Saudi football** (6 hours)
The **hero piece** — showcase this prominently.

- [ ] Hero: full-bleed broadcast video looping with overlay
  - Project title (Display L white), client name + sector + year, three KPI tiles
- [ ] Brief: 2-column (left: "The challenge" 3 paras, right: meta info — client, role, timeline, stack, team)
- [ ] Approach: 3–4 numbered subsections with screenshots/diagrams
- [ ] Outcome: KPI table with before/after numbers
- [ ] Quote: pull-quote from partner exec, large italic-serif
- [ ] Gallery: 3–6 images / video clips
- [ ] What's next: 1 paragraph on roadmap
- [ ] Up next: links to 2 other case studies at bottom
- [ ] **File:** `app/work/[slug]/page.tsx` (dynamic route with slug=saudi-football)
- [ ] **Assets:** broadcast footage with overlays, player-tracking screenshots, heatmaps, event-tag examples

#### **Additional case study stubs** (2 hours)
- [ ] Create 2–3 placeholder case study cards for the `/work` grid
- [ ] Minimal content for MVP; can be fleshed out post-launch
- [ ] **Files:** `app/work/[slug]/page.tsx` (multi-slug support)

**Week 5 subtotal: 12 hours** (1.5 days)

---

### Week 6: Polish, Accessibility, & Minor Pages

#### **Legal pages** (3 hours)

- [ ] `/privacy` — boilerplate privacy policy
- [ ] `/terms` — terms of service
- [ ] `/cookies` — cookie policy
- [ ] **Approach:** Use Termly or iubenda generator, paste into a reusable `LegalLayout.tsx` component
- [ ] **Files:** `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/cookies/page.tsx`

#### **404 error page** (1 hour)

- [ ] Branded 404: *"Lost in the signal noise."*
- [ ] Subhead + 4 quick links (Home, Solutions, Work, Contact)
- [ ] **File:** `app/not-found.tsx` (Next.js convention)

#### **Global polish** (4 hours)

- [ ] Review all pages for brand consistency:
  - [ ] Typography: eyebrow labels, Display XL clamps, line-height
  - [ ] Spacing: section padding (120px desktop, 80px tablet, 64px mobile)
  - [ ] Colors: dark surfaces, gradients, orange accents
  - [ ] Icons: all line-style, 1.5px stroke, from Lucide
  - [ ] Buttons: primary gradient, secondary glass, tertiary text+arrow
- [ ] Ensure responsive breakpoints (mobile 320px, tablet 768px, desktop 1280px, 4K 1920px+)
- [ ] Check all image alt text
- [ ] Verify form labels are semantic (`<label for>`)
- [ ] Confirm no console errors/warnings

#### **Component polishing** (2 hours)

- [ ] Refine animations:
  - [ ] Button hovers: 150ms spring (translateY -1px)
  - [ ] Scroll reveals: 16px slide-up + fade-in, 80ms stagger
  - [ ] Hero parallax: max 60px on Y-axis
  - [ ] Respect `prefers-reduced-motion`
- [ ] Fine-tune shadows, borders, radii across all components

**Week 6 subtotal: 10 hours** (1.5 days)

---

## Phase 3 — QA & Integrations (Weeks 7–8)

### Week 7: Integrations

#### **CMS Setup (Sanity)** (6 hours)

- [ ] Initialize Sanity project
- [ ] Define schemas:
  - [ ] BlogPost (title, slug, author, date, cover image, body, category, tags)
  - [ ] CaseStudy (title, slug, client, category, cover image, brief, approach, outcomes, quote, gallery)
  - [ ] ClientLogo (name, logo, url, category — "customers" vs "partners" vs "press")
  - [ ] Testimonial (quote, author, title, company, headshot, company logo)
  - [ ] Pricing tier (product, tier name, price, features, billing period, geo)
- [ ] Create GROQ queries for each content type
- [ ] Migrate seed content from `.docs` and demo assets
- [ ] Wire Sanity fetch into blog grid + case study grid
- [ ] **Files:** `lib/sanity.client.ts`, `app/insights/page.tsx` (fetch blogs), `app/work/page.tsx` (fetch cases)

#### **Voice Widget (Vapi / ElevenLabs)** (3 hours)

- [ ] Choose provider: Vapi (recommended) or ElevenLabs Conversational AI
- [ ] Set up API credentials (get from Tahmid)
- [ ] Create wrapper component: `components/brand/VoiceWidgetLive.tsx`
- [ ] Test on production domain (mic permission, STT/TTS latency, transcript streaming)
- [ ] **File:** `components/brand/VoiceWidgetLive.tsx`

#### **Cal.com Booking Embed** (2 hours)

- [ ] Set up Cal.com account (Tahmid's existing account)
- [ ] Embed inline calendar picker on `/contact` page (left column)
- [ ] Style embed to match brand (dark surfaces, orange accents)
- [ ] **File:** `app/contact/page.tsx` (update)

#### **Newsletter (Brevo)** (2 hours)

- [ ] Connect to Tahmid's existing Brevo account
- [ ] Create email list for newsletter signups
- [ ] Wire footer newsletter form to Brevo API
- [ ] Test submission → email confirmation
- [ ] **File:** `components/footer.tsx` (update)

#### **Lead Magnet (Resend)** (2 hours)

- [ ] Set up Resend for transactional emails
- [ ] Create Ad Audit PDF (static for v1; can automate later)
- [ ] Wire form on `/solutions/ai-ad-automation` to trigger PDF email
- [ ] Test form submission → email arrives
- [ ] **File:** `app/solutions/ai-ad-automation/page.tsx` (form handler)

**Week 7 subtotal: 15 hours** (2 days solid)

---

### Week 8: QA & Performance

#### **Browser & Device Testing** (6 hours)

- [ ] Desktop browsers:
  - [ ] Chrome (latest)
  - [ ] Safari (latest)
  - [ ] Firefox (latest)
  - [ ] Edge (latest)
- [ ] Mobile:
  - [ ] iOS Safari (real device if possible; BrowserStack fallback)
  - [ ] Android Chrome (real device if possible)
- [ ] Tablet (iPad / Android tablet in landscape + portrait)
- [ ] Check: layout shifts, button functionality, form inputs, video playback, widget interaction

#### **Lighthouse & Core Web Vitals** (4 hours)

- [ ] Run Lighthouse on home + all 5 solution pages + `/work`, `/about`
- [ ] Target: **95+ on Performance, Accessibility, Best Practices, SEO**
- [ ] Optimize images:
  - [ ] Convert to AVIF + WebP with PNG fallback
  - [ ] Lazy-load below-the-fold images
  - [ ] Compress: Tinypng / Squoosh
- [ ] Monitor Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint): < 2.0s
  - [ ] FID / INP (Interaction to Next Paint): < 100ms
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] **Tools:** Lighthouse CLI, PageSpeed Insights, WebPageTest, Chrome DevTools

#### **Accessibility Audit** (4 hours)

- [ ] Run axe-core on all pages → **0 violations**
- [ ] Manual keyboard navigation:
  - [ ] Tab order makes sense (left-to-right, top-to-bottom)
  - [ ] All interactive elements reachable via Tab
  - [ ] Focus ring visible (2px orange outline, 2px offset)
- [ ] Color contrast check:
  - [ ] Body text ≥ 4.5:1
  - [ ] Large text (18px+) ≥ 3:1
- [ ] Reduced motion:
  - [ ] Test with `prefers-reduced-motion: reduce`
  - [ ] Parallax, scroll reveals, animations must be disabled
  - [ ] Page still functional + readable
- [ ] Screen reader spot-check (macOS VoiceOver or NVDA):
  - [ ] Page structure announced correctly
  - [ ] Images have alt text
  - [ ] Form labels associated with inputs
- [ ] **Tools:** axe DevTools, WAVE, Lighthouse Accessibility, manual testing

#### **Form & Integration Testing** (3 hours)

- [ ] Newsletter signup: form submits → email arrives
- [ ] Contact form: name, email, company, project dropdown → email notification to Tahmid
- [ ] Ad Audit form: email + account link → PDF delivered
- [ ] Cal.com booking: create test event → confirm notification received
- [ ] Voice widget: mic permission, STT transcription, TTS response playing back

#### **OG Image Testing** (2 hours)

- [ ] Generate OG image for each page (title + brand logo)
- [ ] Test share previews on:
  - [ ] LinkedIn (paste URL in post composer)
  - [ ] X / Twitter
  - [ ] WhatsApp
  - [ ] Slack
- [ ] Confirm image, title, description display correctly
- [ ] **Tools:** metatags.io, OG Debugger

#### **SEO Checklist** (2 hours)

- [ ] `sitemap.xml` generated (all pages listed)
- [ ] `robots.txt` configured (allow all, point to sitemap)
- [ ] Metadata on all pages (title, description, canonical URL)
- [ ] Structured data (Schema.org for Organization, LocalBusiness, BreadcrumbList)
- [ ] **Tools:** Next.js Metadata API, XML sitemap plugin

**Week 8 subtotal: 21 hours** (3 days)

---

## Phase 4 — Launch (Week 9)

### Deployment Checklist

- [ ] **DNS**: Point domain `kaizenext.com` to Vercel (change A/CNAME records)
- [ ] **HTTPS**: Auto-managed by Vercel; verify SSL active
- [ ] **Headers**: Set CSP, HSTS, X-Frame-Options in `next.config.ts`
- [ ] **Search Engines**:
  - [ ] Submit `sitemap.xml` to Google Search Console
  - [ ] Submit to Bing Webmaster Tools
  - [ ] Request initial crawl (may take 24–48 hours to index)
- [ ] **Analytics**:
  - [ ] Set up Plausible Analytics (privacy-first alternative to GA)
  - [ ] Install tracking script on all pages
  - [ ] Verify pageviews are logging
- [ ] **Error Tracking**:
  - [ ] Set up Sentry.io for production error reporting
  - [ ] Configure alerts (Tahmid email)
- [ ] **Conversion Tracking**:
  - [ ] `book_call_click`: fired when "Book a discovery call" button clicked
  - [ ] `audit_click`: fired when "Get a free Ad Audit" form submitted
  - [ ] `voice_widget_started`: fired when user taps voice widget
  - [ ] `newsletter_subscribed`: fired when newsletter signup submitted
  - [ ] Wire these events to Plausible goals + any downstream tools (Slack webhook, etc.)

### Handoff Documentation

- [ ] **CMS Editor Guide** (for Tahmid):
  - [ ] How to log into Sanity Studio
  - [ ] How to create/edit blog posts, case studies, testimonials
  - [ ] How to update pricing tiers, client logos
  - [ ] Recommended content workflow
- [ ] **Repo README**:
  - [ ] Quick start (`npm install`, `npm run dev`)
  - [ ] Environment variables (Sanity API key, Resend key, Vapi credentials, etc.)
  - [ ] Deployment to Vercel (auto-deploy on push to main)
  - [ ] How to run Lighthouse / accessibility checks locally
- [ ] **Backup & Restore**:
  - [ ] Sanity auto-backups (Sanity handles this)
  - [ ] Database snapshots (if using any external DB beyond Sanity)
  - [ ] Vercel deployment rollback (one-click in Vercel dashboard)

### Final Sign-Off

- [ ] Founder review on staging domain (Vercel preview)
- [ ] Confirm all copy is final (Tahmid provides final text for any stubs)
- [ ] Confirm all case study content is approved (especially Saudi football partnership details)
- [ ] Confirm all testimonials have explicit permission
- [ ] Confirm all client logos have explicit permission
- [ ] **Go / no-go decision** → DNS cutover

---

## Risk Mitigation & Contingencies

| Risk | Mitigation |
|---|---|
| **Voice widget latency issues** | Test early (Week 5–6); if Vapi has issues, fall back to ElevenLabs or Retell |
| **CMS schema misalignment** | Align Sanity schema with Tahmid in Week 7 kickoff; test with 3 sample blog posts before full seed |
| **Lighthouse <95** | Image optimization (AVIF conversion, lazy-load) typically solves 80% of performance issues; hydration issues fixable with `dynamic()` |
| **Accessibility violations** | Many auto-fixable (missing alt text, contrast, focus rings); test early to avoid late surprises |
| **Missing copy from founder** | v1 launch can include placeholder copy; CMS allows founder to update post-launch without re-deploy |
| **Case study video delivery** | Backup: static image + text description if video encoding is delayed |
| **DNS propagation delays** | Plan 24–48 hours after DNS change; use monitoring to confirm cutover |

---

## Time Budget Summary

| Phase | Week | Hours | Days | Status |
|---|---|---|---|---|
| **Design** | 1–2 | 40 | 5 | ✅ Done |
| **Build - Homepage** | 2–3 | 30 | 4 | ✅ Done |
| **Build - Pages/Stubs** | 3 | 12 | 1.5 | 🔨 In progress |
| **Build - Solutions** | 4 | 24 | 3 | ⏳ Pending |
| **Build - Work/Cases** | 5 | 12 | 1.5 | ⏳ Pending |
| **Build - Polish** | 6 | 10 | 1.5 | ⏳ Pending |
| **QA - Integrations** | 7 | 15 | 2 | ⏳ Pending |
| **QA - Testing** | 8 | 21 | 3 | ⏳ Pending |
| **Launch** | 9 | 8 | 1 | ⏳ Pending |
| **Total** | | **172** | **23** | |

**Expected delivery: 9 weeks from project start** (Week 3 = today; launch = Week 9 = end of development).

---

## File Structure Checklist

By end of Phase 2, the repo should have:

```
app/
  (layout)
    layout.tsx ✅
    page.tsx ✅
  solutions/
    page.tsx ⏳
    ai-workflow-automation/
      page.tsx 🔨
    ai-ad-automation/
      page.tsx ⏳
    voice-ai/
      page.tsx ⏳
    computer-vision/
      page.tsx ⏳
    custom-ai/
      page.tsx ⏳
  work/
    page.tsx ⏳
    [slug]/
      page.tsx ⏳
  about/
    page.tsx 🔨
  contact/
    page.tsx 🔨
  insights/
    page.tsx ⏳
    [slug]/
      page.tsx ⏳
  privacy/
    page.tsx ⏳
  terms/
    page.tsx ⏳
  cookies/
    page.tsx ⏳
  not-found.tsx ⏳
  
components/
  brand/
    Button.tsx ✅
    EyebrowLabel.tsx ✅
    SectionHeader.tsx ✅
    KPITile.tsx ✅
    SolutionCard.tsx ✅
    CaseStudyCard.tsx ✅
    TestimonialCard.tsx ✅
    LogoCarousel.tsx ✅
    PhoneMockWhatsApp.tsx ✅
    VoiceWidget.tsx ✅
    VoiceWidgetLive.tsx ⏳
    GradientMeshBg.tsx ✅
    FooterNewsletterRow.tsx ✅
  sections/
    Hero.tsx ✅
    PillarsGrid.tsx ✅
    FeaturedProduct.tsx ✅
    FeaturedCaseStudy.tsx ✅
    LiveVoiceDemo.tsx (= VoiceDemo.tsx) ✅
    HowWeWork.tsx ✅
    LogoStrip.tsx ✅
    Testimonials.tsx ✅
    InsightsTeaser.tsx ✅
    FinalCTA.tsx ✅
  layout/
    Nav.tsx (= Navbar.tsx) ✅
    Megamenu.tsx 🔨
    Footer.tsx ✅
    Container.tsx ✅
  ui/
    (shadcn primitives) ✅

lib/
  utils.ts ✅
  sanity.client.ts ⏳
  
public/
  logos/
    kaizenext-logo-white.png ✅
```

Legend: ✅ = Done · 🔨 = In progress · ⏳ = Pending

---

## Key Decision Points for Founder (Tahmid)

Before kicking off Phase 2B, confirm:

1. **CMS choice**: Sanity (recommended), Contentful, or Payload?
2. **Voice widget provider**: Vapi, ElevenLabs, or Retell?
3. **Analytics**: Plausible (privacy-first), GA4, or both?
4. **Case study content**: Saudi football partnership details + video ready?
5. **Copy**: Any placeholder text on home/solution pages need founder rewrites before launch?
6. **Integrations**: Cal.com account set up? Brevo account active? Resend API key ready?

---

## How to Use This Plan

1. **Week-by-week**: Follow the task lists in order. Each week has a clear scope and deliverable.
2. **Daily standup**: Check off tasks as completed. If blocked, escalate to founder for clarification.
3. **Milestone gates**: At end of Weeks 4, 6, and 8, run a quick QA pass before moving forward.
4. **Adjust scope**: If a week's work exceeds 25 hours, defer lower-priority tasks (e.g., polish) to next week.
5. **Risk register**: If a task is taking 50% longer than estimated, flag it + discuss mitigation with founder.

---

**Last Updated:** 2026-05-09  
**Owner:** Development Lead  
**Approval:** Pending Founder Review
