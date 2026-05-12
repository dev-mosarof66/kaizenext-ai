# 01 — Project Overview

## Who Kaizenext is

Kaizenext is an **AI-first technology company** that builds and ships:

1. **AI workflow automation** — automating repetitive operations (sales ops, marketing ops, customer support, finance) for SMBs and mid-market companies. Includes our flagship AI Ad Automation product (WhatsApp-first ad monitoring + budget reallocation for Meta/Google ads) for SMBs spending $1K–$20K/mo on ads.
2. **Conversational & voice AI solutions** — voice agents, AI receptionists, multilingual support agents, WhatsApp-based assistants.
3. **Computer vision** — as **technical partner of a Saudi-based football analysis product**, we ship computer-vision player tracking, action detection, and post-match analytics. We also take on bespoke vision projects.
4. **Custom AI software development** — for clients who need an AI product built end-to-end (web app + ML + integrations) and don't have an in-house team.

We are **AI-native, full-stack, and global** — based in Bangladesh, serving clients in AU, UAE, KSA, US, UK.

## Goal of the website

The website's job is to **turn cold visitors into qualified discovery calls** — not to sell self-serve.

Conversion goal hierarchy:
1. **Primary:** Book a discovery call (calendar embed — Cal.com / Calendly).
2. **Secondary:** Download an asset (free Ad Audit, Voice AI ROI calculator, computer-vision capability deck).
3. **Tertiary:** Subscribe to the newsletter / follow on LinkedIn.

The website is also a **credibility anchor for outbound** — when Tahmid sends a LinkedIn DM or cold email and the prospect Googles "Kaizenext", what they see needs to look like a $5M-ARR company, not a freelancer.

## Audience

Primary visitors fall into three buckets:

| Persona | Came from | They want to know |
|---|---|---|
| **SMB founder / marketing lead** ($1K–$20K/mo ad spend) | Cold outbound, LinkedIn, ad audit lead magnet | Can Kaizenext fix our wasted ad spend? How fast? How much? |
| **Enterprise innovation lead** (Saudi football product, custom AI projects) | Referral, partner intro | Are these guys real? Do they have the engineering depth? Show me proof. |
| **Tech-savvy operator** (CTO, ops lead at a 50–500 person co.) | Google search "AI workflow automation agency" | What can they actually build? What's their stack? Who have they worked with? |

The site copy and structure must serve all three without dumbing down for any of them.

## What success looks like (KPIs)

- 3–5% homepage → "Book a call" click rate.
- < 2% bounce on case study pages.
- Lighthouse 95+ across the board.
- Indexed and ranking on long-tail queries within 90 days: *"AI ad automation for SMB"*, *"WhatsApp ad alerts"*, *"football computer vision partner"*, *"AI workflow automation Bangladesh"*.

## Non-negotiables (read this twice)

These are explicit instructions from the founder. Treat them as P0:

1. **Looks $5M+, not freelance.** Premium aesthetic — gradient mesh backgrounds, glass-morphism cards, refined typography (Inter + Instrument Serif italic accents), real product UI mocks (not generic stock illustrations). Reference points: **Linear, Vercel, Cresta, Anthropic, Glean, ElevenLabs, Tribe AI**. Avoid: generic SaaS templates, chunky pill badges, flat fills, AI-generated marketing imagery.
2. **Logo is white + orange, always.** Use `kaizenext-logo-white.png` directly on a dark surface. Never on a white card, never recolored. The site is therefore designed dark-first. This is a hard rule.
3. **Real product screenshots in feature sections**, not generic illustrations. Pull from existing Kaizenext demo assets (in `kaizenext/demo_mock.html` repo) — the WhatsApp alert UI, the dashboard, the iPhone Dynamic Island, real Gmail UI, real PDF viewer chrome.
4. **Showcase the football/computer-vision product prominently.** It's the most visually impressive thing we have. The case study deserves a dedicated page with video.
5. **Voice AI deserves a live demo on the site** — embed an "Try it live" widget where visitors can talk to a Kaizenext voice agent in the browser (ElevenLabs / Vapi / Retell).
6. **Modern web practices.** Server-side rendering, edge deployment, optimized images (AVIF/WebP), prefetched routes, accessible by default. No 2018-era WordPress builds.
7. **Mobile-first.** A serious chunk of inbound traffic from LinkedIn comes via phone. The mobile view is not an afterthought.
8. **Speed.** LCP < 2.0s. No janky animations, no FOUC.

## Pages in v1 scope

| # | Page | Purpose |
|---|---|---|
| 1 | **Home** | The whole story in one scroll. Hero → what we do → flagship product → case studies → voice demo → CTA. |
| 2 | **Solutions / What we do** | Hub page linking to the four solution pillars. |
| 2a | Solutions → AI Workflow Automation | Service-line page with use cases. |
| 2b | Solutions → AI Ad Automation (flagship product) | Product page — the SaaS+services SMB offer. |
| 2c | Solutions → Voice & Conversational AI | Service-line page with live demo embed. |
| 2d | Solutions → Computer Vision (football case study lives here) | Service-line + featured case study. |
| 2e | Solutions → Custom AI Development | "We'll build your AI product end-to-end" page. |
| 3 | **Case studies / Work** | Grid of all completed work. |
| 3a | Case study detail (Saudi football product) | Featured. Long-form. |
| 4 | **About** | Founder, team, why Kaizenext, where we are. |
| 5 | **Contact / Book a call** | Calendar embed + form fallback. |
| 6 | **Blog / Insights** | CMS-driven. SEO play. |
| 7 | **Legal** (Privacy, Terms, Cookie Policy) | Boilerplate, but must exist. |

Additional optional v1.5:
- **Careers** page (we're hiring).
- **Pricing** page for the Ad Automation product specifically.

## What this brief does NOT decide

The developer/agency can make the call on:
- Exact CMS choice (Sanity vs. Contentful vs. Payload — see §5 for tradeoffs).
- Animation library (Framer Motion vs. GSAP).
- Whether to ship dark mode in v1 or v1.1.
- Component library (shadcn/ui recommended but not required).

The developer/agency must NOT change without approval:
- Brand colors, typography, logo usage rules.
- Page sitemap or section structure.
- Conversion goals or CTAs.
- Any of the eight non-negotiables above.
