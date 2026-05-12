# Kaizenext Website — Developer Brief

This bundle is the full requirement and design brief for building the Kaizenext.com marketing website. It is written for a developer/agency to read top-to-bottom and ship a production-ready site.

## How to use this brief

**First read (design & requirements):**

1. **`01_overview/01_project_overview.md`** — what Kaizenext is, who the website is for, what success looks like, page-by-page scope, and the explicit "must-haves".
2. **`02_brand/02_brand_guidelines.md`** — colors, type, logo usage, voice, do's and don'ts.
3. **`03_sitemap_and_sections/03_sitemap_and_page_sections.md`** — every page, every section on every page, with copy direction and component lists.
4. **`04_design_system/04_design_system_and_components.md`** — design tokens, components, motion language, button/card/section patterns.
5. **`05_tech_and_seo/05_tech_stack_seo_performance.md`** — recommended stack, performance budgets, accessibility, SEO, analytics, hosting, CMS.
6. **`06_inspiration/06_research_and_inspiration.md`** — benchmark websites we want to match (or beat), with what to copy from each.

**Then execute:**

7. **`07_implementation_plan.md`** — week-by-week execution roadmap, task breakdown, time estimates, risk mitigation, and handoff checklist.

## What's in `assets/`

`assets/logos/` — the official Kaizenext logo. There is **only one logo file** by design.

| File | Use on |
|---|---|
| `kaizenext-logo-white.png` | **Everywhere.** White "Kaizen" wordmark + orange "ext" + orange X mark. Place directly on dark surfaces with no card behind it. The brand is white + orange on dark — the website should be designed dark-first. |

If a light-bg placement is genuinely unavoidable (e.g., printed material), wrap the unchanged white-and-orange wordmark in a small dark green-black "chip" rather than recoloring the wordmark. See `02_brand/02_brand_guidelines.md` §3 for the exact treatment.

## Deliverable expectations from the developer

The developer should ship:

- A live, deployed marketing website on a fast modern stack (Next.js 14+ / App Router recommended).
- A CMS for the team to update copy, customer logos, case studies, and blog posts (Sanity, Contentful, or Payload — see §5).
- Fully responsive (mobile, tablet, desktop, 4K).
- Lighthouse score 95+ on Performance, Accessibility, Best Practices, SEO.
- WCAG 2.2 AA accessible.
- Dark mode (optional but preferred — most modern AI sites have it).
- All animations 60fps; no layout shift; LCP < 2.0s on 4G.
- Analytics, sitemap, robots.txt, OG images, structured data wired up.

## Out of scope (for v1)

- Customer login / dashboard (that lives at `app.kaizenext.com`, not this site).
- Pricing self-serve checkout (book-a-call CTA only for v1).
- E-commerce.

---

Questions on this brief should go to **Tahmid (founder)** before kicking off design.
