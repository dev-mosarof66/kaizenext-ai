# 03 — Sitemap & Page Sections

This document defines, page by page, every section to build. The developer can adjust the order with founder approval; sections themselves are required.

---

## 0. Global elements (every page)

### 0.1 Top navigation

- Sticky on scroll (translucent dark green when scrolled past hero, transparent when over hero).
- Left: Kaizenext wordmark — always the white-and-orange `kaizenext-logo-white.png`. Since the site is dark-first, it sits directly on the dark surface. If a section happens to use a light tinted background under the nav (rare), keep the wordmark white-and-orange and tuck a small dark chip behind it instead of recoloring.
- Center / right: nav links — **Solutions ▾** (megamenu), **Work**, **About**, **Insights**, **Contact**.
- Far right: primary CTA — `Book a call` (orange gradient button).
- Mobile: hamburger → full-screen overlay nav, dark green bg, white text.

**Solutions megamenu** (desktop) shows all 5 solution pages in a 2-column grid with a one-line description and an icon, plus a featured "AI Ad Automation" promo card on the right edge.

### 0.2 Footer

Three rows:

1. **Newsletter signup row** — green gradient bg, white text, big italic-serif headline ("Get the AI playbook in your inbox.") + email input + orange CTA.
2. **Link grid** — 5 columns: Solutions / Work / Company / Resources / Legal. Below it, contact email and office locations (Dhaka, Bangladesh — and any partner office).
3. **Bottom bar** — left: small Kaizenext mark + tagline + copyright. Right: socials (LinkedIn, X, YouTube, GitHub).

### 0.3 Cookie banner

Lightweight, GDPR-compliant. Bottom-right, dismissible. Use Cookiebot / OneTrust or a hand-rolled solution.

---

## 1. Home

The single page that has to do all the work. Designed to be skim-able in 30 seconds and read in 3 minutes.

### 1.1 Hero

- **Bg:** dark green gradient (`#14302A` → `#0E2620`) with a subtle animated gradient mesh blob (orange + green).
- **Eyebrow:** mono label `KAIZENEXT · AI ENGINEERING STUDIO`.
- **Headline (Display XL, white):** *"AI workflows. Voice agents. Vision systems. Built to *ship.*"* (italic + orange on "ship.")
- **Subhead (Body L, muted white):** "We design, build and operate AI products end-to-end — for SMBs and enterprises across AU, UAE, KSA and beyond."
- **Primary CTA:** orange gradient button — `Book a discovery call →`.
- **Secondary CTA:** ghost/glass button — `See our work`.
- **Below the fold of the hero:** thin scroll indicator + a horizontal logo strip ("Trusted by:") with 8–12 client/partner logos in muted white grayscale.

### 1.2 What we do (4 pillars)

- 4-card grid (2×2 desktop, 1-up mobile).
- Each card: icon + bold heading (Heading M) + 2-line description + arrow link.
- Cards: **Workflow Automation**, **AI Ad Automation** (badge: "Flagship product"), **Voice & Conversational AI**, **Computer Vision**.
- A 5th smaller card / inline link: **Custom AI Development** (link to that page).
- Section bg: warm off-white tint (`#FAFAF8 → #F4F2EE`).

### 1.3 Featured product — AI Ad Automation

The flagship SMB product gets its own home-page section.

- Eyebrow: `01 · FLAGSHIP PRODUCT`.
- Headline: *"Every wasted ad dollar, *flagged* on WhatsApp."*
- Two-column: left is copy (3 bullet outcomes — "Cut wasted spend 23% in 8 weeks", "Auto-pause underperforming ads in 60s", "Weekly PDF report your CMO actually reads"). Right is an interactive iPhone mock with a WhatsApp alert thread ticking through messages (autoplay, looping). Pull this from the existing `kaizenext/demo_mock.html` mock.
- CTA: `See the product →` (links to `/solutions/ai-ad-automation`).

### 1.4 Featured case study — Saudi football computer vision

- Full-bleed dark section with broadcast video bg (looping, muted, autoplay) — actual football footage with player-tracking overlay.
- Eyebrow: `02 · CASE STUDY · COMPUTER VISION`.
- Headline (white, italic accent): *"Player analysis at *broadcast* speed."*
- Two-line subhead about being the **technical partner** of [partner co. — name TBD by founder].
- Three KPI tiles overlaid on the video at bottom: **22 events tracked / sec**, **96% detection accuracy**, **< 2s end-to-end latency**.
- CTA: `Read the case study →`.

### 1.5 Voice AI live demo

- Eyebrow: `03 · TRY IT LIVE`.
- Headline: *"Talk to a Kaizenext voice agent. *Right now.*"*
- Centered "Tap to talk" widget — a circular orange button with a pulsing ring. On click → mic permission prompt → live ElevenLabs / Vapi / Retell agent. Talk transcript appears in a chat-style log next to the widget.
- 3 example prompts shown as chips below the button: "Book me an appointment", "Quote me for car insurance", "Ask me a customer-service question".

### 1.6 How we work (process strip)

4-step timeline — Discover → Design → Build → Operate. Each step is a small card with a one-line description. Connect them with a thin orange line that animates in on scroll.

### 1.7 Customer logos / partners

- "Working with teams across AU, UAE, KSA and beyond."
- 2 rows of 6 logos, infinite-scrolling carousel (slow, 40s loop). Pause on hover.
- Below: 5–7 award/press logos ("Featured by:" — TechCrunch, Bloomberg, Forbes, etc., once we have them. Until then, hide this row).

### 1.8 Testimonials

- 3-card grid. Each card: large open-quote glyph (orange italic-serif), 2–3 sentence testimonial, headshot + name + title + company logo.
- Card style: light cream `#FFF5F2` bg, hairline border, generous padding.

### 1.9 Insights / blog teaser

- "Latest from the team."
- 3 most recent blog posts in a card grid. Each card: cover image, category eyebrow, title, date + read time.
- CTA: `Browse all insights →`.

### 1.10 Final CTA strip

- Dark green section.
- Big italic-serif centered headline: *"Let's build something that *ships.*"*
- Two CTAs: orange `Book a discovery call`, ghost `Email us hello@kaizenext.com`.

---

## 2. Solutions hub (`/solutions`)

A simple hub page that introduces all 5 service lines.

- Hero: "What we build." Short paragraph about AI engineering breadth.
- 5 stacked sections, alternating image-left/image-right, each linking to its dedicated solution page.
- Final CTA strip.

---

## 2a. Solutions → AI Workflow Automation (`/solutions/ai-workflow-automation`)

### Sections

1. **Hero** — Eyebrow + Display headline + subhead + 2 CTAs. Right side: animated diagram of a workflow (n8n / Zapier-style nodes) with data flowing through.
2. **Outcomes strip** — 3–4 KPI tiles (e.g., "60% time saved on lead routing", "5-day implementation", "Zero engineer hours from your side").
3. **Use cases** — Tabbed section: Sales ops · Marketing ops · Customer support · Finance ops · HR. Each tab shows a real workflow example with a screenshot.
4. **Stack we work with** — Logo grid: n8n, Zapier, Make, Airtable, Notion, Slack, HubSpot, Salesforce, Stripe, Google Workspace, OpenAI, Anthropic, etc.
5. **How we deliver** — 4-step timeline.
6. **Mini case study** — One featured automation success story.
7. **FAQ** — 5–7 common questions, accordion.
8. **CTA strip**.

---

## 2b. Solutions → AI Ad Automation (`/solutions/ai-ad-automation`)

This is the dedicated **product** page for the flagship SMB product. Most polished page on the site.

### Sections

1. **Hero** — *"Every wasted ad dollar, flagged on WhatsApp."* Subhead, 2 CTAs (`Book a demo`, `Get a free Ad Audit`).
2. **The problem** — 3-tile section: "23% of SMB ad spend is wasted", "Most agencies don't catch issues until weekly review", "Founders find out from the credit card statement".
3. **The product (live mock)** — embed a polished version of `demo_mock.html` (iPhone Dynamic Island + WhatsApp + Slack + Gmail + PDF report). Full interactive mock.
4. **Pricing tiers** — 3 cards: **Starter $149/mo**, **Growth $449/mo** (highlighted), **Scale $1,290/mo**. Per-tier features list. Geo-pricing footnote.
5. **What's included** — feature matrix table.
6. **The bundled human consultant** — call-out section explaining the consultant + SaaS hybrid (the wedge).
7. **Free Ad Audit lead magnet** — block with a form (email + ad-account link) → download PDF + Loom.
8. **Customer logos / testimonials** — specifically from SMB DTC / coaches / local services.
9. **FAQ** — pricing, refunds, onboarding time, security.
10. **CTA strip**.

---

## 2c. Solutions → Voice & Conversational AI (`/solutions/voice-ai`)

### Sections

1. **Hero** — *"Voice agents your customers won't *hate.*"* Right side: a phone illustration with a live waveform.
2. **Live demo widget** — same "Tap to talk" widget as homepage, but bigger and primary on this page.
3. **Use cases** — 4-card grid: AI receptionist · Outbound sales · Customer support · Multilingual support (EN/AR/BN/HI).
4. **How it works** — diagram: caller → telephony (Twilio) → STT → LLM brain (Claude/GPT) → TTS (ElevenLabs) → caller. Each node clickable for detail.
5. **Languages & accents** — visual grid of supported voices with sample audio play buttons.
6. **Integrations** — logo grid: Twilio, Vonage, ElevenLabs, Vapi, Retell, OpenAI, Anthropic, etc.
7. **Compliance** — call-out about HIPAA / PCI / GDPR readiness as relevant.
8. **Case study teaser** — one voice-AI win.
9. **FAQ**.
10. **CTA strip**.

---

## 2d. Solutions → Computer Vision (`/solutions/computer-vision`)

### Sections

1. **Hero** — *"Vision systems that work in the real world."* Right side: 4-up grid of vision outputs (player tracking box, heatmap, event tag, jersey-number OCR).
2. **Featured: Football analysis (Saudi partnership)** — full-width video showcase with overlay graphics. Two-column: left is the story (technical partner of [partner], shipped in production, X games processed/week), right is the looping broadcast video.
3. **Capabilities** — 6-card grid: Player tracking · Action / event detection · Heatmaps & analytics · Jersey-number OCR · Highlight reel auto-generation · Multi-camera fusion.
4. **Beyond football** — 3 example domains we've worked or can work in: retail (people counting), security (anomaly detection), industrial (defect detection).
5. **Tech stack** — logos: PyTorch, YOLO, OpenCV, NVIDIA, AWS, GCP.
6. **How we engage** — engagement models (technical partner / build-for-you / consultant).
7. **CTA strip**.

---

## 2e. Solutions → Custom AI Development (`/solutions/custom-ai`)

### Sections

1. **Hero** — *"Your AI engineering team. *Without* the headcount."* Subhead about end-to-end AI product development.
2. **What we build** — 4-card grid: AI SaaS products · RAG / knowledge agents · Internal tools & dashboards · Mobile AI apps.
3. **Engagement models** — 3-card grid: Fixed-scope project · Dedicated team · Fractional CTO / AI advisor.
4. **Stack we use** — logo grid (LLM providers, frameworks, infra).
5. **Case study cards** — 3 short cards.
6. **Process timeline** — discovery → MVP → production → operate.
7. **FAQ**.
8. **CTA strip**.

---

## 3. Work / Case studies (`/work`)

### Sections

1. **Hero** — "Selected work." One-line subhead.
2. **Filter bar** — chips: All · Workflow · Voice · Vision · Custom · Ad Automation.
3. **Case study grid** — 3-column desktop, 1-up mobile. Each card: cover image (16:9), category eyebrow, project title, client name, 1-line outcome.
4. **Hover state on cards:** lift 2px + shadow grow + cover image subtle zoom (1.03).
5. **CTA strip**.

---

## 3a. Case study detail — Saudi football computer vision (`/work/[slug]`)

Long-form. Treat as a magazine feature.

### Sections

1. **Hero** — Full-bleed broadcast video looping with overlay. Project title (Display L white). Client name + sector + year. Three KPI tiles.
2. **Brief** — 2-column: left is "The challenge" (3 paragraphs), right is meta info (client, role, timeline, stack, team).
3. **Approach** — 3–4 numbered subsections with screenshots/diagrams between each.
4. **Outcome** — KPI table with before/after numbers.
5. **Quote** — pull-quote from the partner exec, large italic-serif.
6. **Gallery** — 3–6 images / video clips.
7. **What's next** — 1 paragraph on roadmap.
8. **Up next** — links to 2 other case studies at the bottom.

---

## 4. About (`/about`)

### Sections

1. **Hero** — *"We're an AI engineering studio. *Built* to ship."* — short manifesto paragraph.
2. **Founder section** — photo of Tahmid + bio + LinkedIn link. Quote from him about why Kaizenext exists.
3. **Team grid** — engineer photos + names + roles. (Optional if team is small — substitute with "We're a tight team of N engineers across AU, UAE, BD." stat bar.)
4. **Values / Principles** — 4 cards: *Ship in weeks, not quarters · Real product UI, not slideware · Bundle the human · AI that's safe by default*.
5. **Where we are** — map / dot graphic showing offices/coverage (Dhaka primary, AU/UAE/KSA partners).
6. **Press / featured by** — once we have it.
7. **Careers teaser** — "We're hiring. Come build with us." → link to `/careers` or LinkedIn jobs.
8. **CTA strip**.

---

## 5. Contact / Book a call (`/contact`)

### Sections

1. **Hero** — *"Let's build something."* + 1-line subhead.
2. **Two-column body:**
   - Left: Cal.com / Calendly inline embed — 30-min discovery slot picker.
   - Right: contact form fallback (name, email, company, project type dropdown, message).
3. **Below:** Quick contact info — email, LinkedIn, response-time expectation ("We reply within 1 business day").
4. **Office locations** — Dhaka HQ, partner cities.

---

## 6. Insights / Blog (`/insights`)

### Sections

1. **Hero** — "Insights from the field." + subscribe-to-newsletter inline form.
2. **Featured post** — large card.
3. **Post grid** — 3-column. Card: cover image, category eyebrow, title, excerpt, author + date.
4. **Pagination** — 12 posts per page.

### 6a. Post detail (`/insights/[slug]`)

- Standard long-form layout: 720px reading column, large display title, author bio strip, table of contents (sticky desktop), share buttons, related posts at the bottom.

---

## 7. Legal pages (`/privacy`, `/terms`, `/cookies`)

Standard boilerplate. Use Termly / iubenda generator output. Single-column 720px layout.

---

## 8. 404 / Error pages

Don't ship the framework default. Brand it:
- Big italic-serif headline: *"Lost in the *signal noise.*"*
- Subhead: "That page doesn't exist. Try one of these:"
- 4 quick links: Home, Solutions, Work, Contact.
