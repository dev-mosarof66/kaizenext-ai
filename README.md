# Kaizenext Website

Official website and marketing platform for Kaizenext — an AI engineering consultancy building custom AI solutions, voice agents, computer vision systems, and workflow automation.

## Tech Stack

- **Framework**: Next.js 16.2.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (motion/react)
- **Components**: shadcn/ui
- **CMS**: Sanity.io
- **Email**: Resend + Brevo
- **Booking**: Cal.com
- **Analytics**: Plausible.io
- **Error Tracking**: Sentry
- **Deployment**: Vercel

## Project Status

**60% Complete** (18/30 tasks)

### ✅ Completed (Weeks 1-7)
- [x] Design system & brand guidelines
- [x] All main pages (home, about, contact, insights, work)
- [x] 5 solution pages with consistent design pattern
- [x] Blog listing and detail pages
- [x] Case studies hub and detail templates
- [x] Legal pages (privacy, terms, cookies)
- [x] 404 error page
- [x] Sanity CMS setup with schemas
- [x] Cal.com booking embed
- [x] Newsletter signup (Brevo)
- [x] Contact & lead magnet forms (Resend)
- [x] SEO infrastructure (sitemap, robots.txt, RSS, metadata)

### ⏳ In Progress (Weeks 8-9)
- [ ] Browser & device testing
- [ ] Lighthouse optimization (target 95+)
- [ ] Accessibility audit
- [ ] Form validation & testing
- [ ] Analytics setup (Plausible)
- [ ] Error tracking (Sentry)
- [ ] Launch documentation

## Getting Started

### Prerequisites
- Node.js 18+ (using built-in node management)
- npm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/kaizenext/website.git
cd website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials
```

### Environment Variables

See `.env.example` for all required variables. Key ones:

```bash
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production

# Cal.com
NEXT_PUBLIC_CAL_USERNAME=kaizenext

# Email Services
BREVO_API_KEY=your_key
RESEND_API_KEY=your_key

# Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kaizenext.ai
```

### Development

```bash
# Run dev server
npm run dev

# Visit http://localhost:3000

# Access Sanity Studio at /studio
# http://localhost:3000/studio
```

### Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run start

# Deploy to Vercel
vercel
```

## Project Structure

```
app/
├── (pages)
│   ├── page.tsx              # Home page
│   ├── about/                # About page
│   ├── contact/              # Contact form + Cal.com
│   ├── insights/             # Blog listing & [slug] detail
│   ├── work/                 # Case studies hub & [slug] detail
│   ├── solutions/            # Solutions hub
│   │   ├── ai-workflow-automation/
│   │   ├── ai-ad-automation/    # Flagship product
│   │   ├── voice-ai/
│   │   ├── computer-vision/
│   │   └── custom-ai/
│   ├── privacy/              # Legal pages
│   ├── terms/
│   └── cookies/
├── api/
│   ├── newsletter/           # Brevo newsletter signup
│   ├── contact/              # Resend contact form
│   ├── lead-magnet/          # Lead magnet delivery
│   ├── revalidate/           # ISR revalidation
│   └── feed.xml/             # RSS feed
├── components/
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ...
├── layout.tsx                # Root layout with metadata
└── globals.css

lib/
├── metadata.ts               # SEO metadata config
├── structured-data.ts        # JSON-LD schemas
└── utils.ts

sanity/
├── schema/
│   ├── blog.ts               # Blog post schema
│   ├── caseStudy.ts          # Case study schema
│   └── index.ts
└── lib/
    ├── client.ts             # Sanity client & queries
    ├── image.ts              # Image URL builder
    └── portableText.tsx      # Content renderer

public/
├── robots.txt                # SEO robots directive
└── favicon.ico

docs/
├── .docs/
│   └── 07_implementation_plan.md  # 9-week roadmap
├── SANITY_SETUP.md           # CMS configuration
├── INTEGRATIONS.md           # Third-party services
└── CLAUDE.md                 # Project guidelines
```

## Design System

### Colors
- **Primary**: Orange (#E8593A) — Action CTAs, highlights
- **Surface**: Dark navy (#0a0e27) — Backgrounds
- **Text**: White, muted grays — Hierarchy
- **Borders**: Subtle dark borders — Visual separation

### Typography
- **Display**: Poppins Bold (headings)
- **Body**: Geist (body text)
- **Code**: Monospace (technical content)
- **Serif**: Instrument Serif italic (accents)

### Spacing
- Consistent 24px/32px section padding (py-24 md:py-32)
- 6px-16px gap system for components
- 2px-4px padding for small elements

### Animations
- Motion variants for stagger effects
- 0.5s duration with [0.22, 1, 0.36, 1] easing
- Hover/active scales for interactivity
- Gradient mesh backgrounds with blur

## Content Management

### Blog Posts
Create blog posts in Sanity Studio:
1. Navigate to `/studio`
2. Select "Blog Posts"
3. Fill in title, excerpt, category, body
4. Publish

Posts auto-appear on `/insights`

### Case Studies
Create case studies in Sanity Studio:
1. Navigate to `/studio`
2. Select "Case Studies"
3. Fill in client, category, challenge/solution/results
4. Publish

Case studies auto-appear on `/work`

## Performance Targets

- **Lighthouse**: 95+ (Core Web Vitals)
- **Accessibility**: WCAG 2.1 AA
- **Performance**: <2s FCP, <3s LCP
- **Bundle Size**: <100KB (main JS)

## Testing Checklist

- [ ] All pages load in Chrome, Safari, Firefox, Edge
- [ ] Mobile responsive (iOS, Android)
- [ ] Forms validate and submit correctly
- [ ] Links work (internal & external)
- [ ] Images load and display correctly
- [ ] Animations perform smoothly (60fps)
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Dark mode consistent

## Integrations

See [INTEGRATIONS.md](./INTEGRATIONS.md) for:
- Sanity CMS setup
- Cal.com configuration
- Brevo newsletter
- Resend email
- Plausible analytics
- Sentry error tracking

## Documentation

- **Design**: [.docs](./docs/.docs/) folder
- **Implementation**: [07_implementation_plan.md](./.docs/07_implementation_plan.md)
- **CMS**: [SANITY_SETUP.md](./SANITY_SETUP.md)
- **Integrations**: [INTEGRATIONS.md](./INTEGRATIONS.md)
- **Code Guidelines**: [CLAUDE.md](./CLAUDE.md)

## API Routes

### POST `/api/newsletter`
Subscribe email to newsletter

```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com"}'
```

### POST `/api/contact`
Send contact form message

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John",
    "email":"john@example.com",
    "company":"Acme",
    "projectType":"custom",
    "message":"Hello"
  }'
```

### POST `/api/lead-magnet`
Send lead magnet (ad audit, voice trial, vision demo)

```bash
curl -X POST http://localhost:3000/api/lead-magnet \
  -H "Content-Type: application/json" \
  -d '{
    "email":"lead@example.com",
    "type":"ad-audit",
    "platform":"Google Ads"
  }'
```

### GET `/feed.xml`
RSS feed for blog posts

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

**Environment variables**: Add in Vercel dashboard → Settings → Environment Variables

### Manual Deploy

1. Build: `npm run build`
2. Upload `out/` or `.next/` to hosting
3. Set Node.js runtime to 18+
4. Configure environment variables

## Contributing

See [CLAUDE.md](./CLAUDE.md) for contribution guidelines.

## License

© 2026 Kaizenext. All rights reserved.

## Contact

- **Website**: https://kaizenext.ai
- **Email**: hello@kaizenext.ai
- **LinkedIn**: [Kaizenext](https://linkedin.com/company/kaizenext)
- **Twitter**: [@kaizenext](https://twitter.com/kaizenext)
# kaizenext-ai
