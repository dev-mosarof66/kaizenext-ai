# Kaizenext Integrations Guide

This document covers all third-party integrations used in the Kaizenext website.

## Overview

| Service | Purpose | Status | Setup Time |
|---------|---------|--------|-----------|
| Sanity CMS | Blog & case study management | ✅ Ready | 30 min |
| Cal.com | Booking & calendar | ✅ Embedded | 15 min |
| Brevo | Newsletter signup | ✅ API Ready | 15 min |
| Resend | Transactional email | ✅ API Ready | 15 min |
| Plausible | Analytics | ⏳ Pending | 10 min |
| Sentry | Error tracking | ⏳ Pending | 20 min |

## 1. Sanity CMS

### Setup

```bash
npx sanity@latest init --coupon nextjs2024
```

**Credentials needed:**
- `NEXT_PUBLIC_SANITY_PROJECT_ID` — Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET` — Dataset name (default: "production")

### Content Models

- **Blog Posts** — Articles, insights, thought leadership
- **Case Studies** — Client work, results, methodologies

### Usage

Access studio at `/studio` (auto-generated after init)

```typescript
import { getBlogPostBySlug, getCaseStudyBySlug } from "@/sanity/lib/client";

const post = await getBlogPostBySlug("ai-workflow-automation-roi");
```

## 2. Cal.com

### Setup

1. Create free account at [cal.com](https://cal.com)
2. Set username to match `NEXT_PUBLIC_CAL_USERNAME`
3. Configure availability and event types
4. Copy booking link

**Credentials needed:**
- `NEXT_PUBLIC_CAL_USERNAME` — Your Cal.com username (default: "kaizenext")

### Implementation

The embed is already integrated in `/app/contact/page.tsx`:

```html
<iframe
  src="https://cal.com/{username}?embed=true"
  width="100%"
  height="500"
/>
```

## 3. Brevo (Newsletter)

### Setup

1. Create account at [brevo.com](https://brevo.com)
2. Create a contact list for newsletter subscribers
3. Get API key from Settings → API
4. Copy list ID

**Credentials needed:**
- `NEXT_PUBLIC_BREVO_LIST_ID` — Contact list ID
- `BREVO_API_KEY` — API key (keep secret)

### Implementation

Newsletter signup form calls `/api/newsletter`:

```typescript
const response = await fetch("/api/newsletter", {
  method: "POST",
  body: JSON.stringify({ email }),
});
```

### API Endpoint

- **POST** `/api/newsletter` — Add email to list
  - Body: `{ email: string }`
  - Returns: `{ message: string }`

## 4. Resend (Email)

### Setup

1. Create account at [resend.com](https://resend.com)
2. Verify sender domain or use @resend.com
3. Get API key from Dashboard → API Keys

**Credentials needed:**
- `RESEND_API_KEY` — API key (keep secret)

### Implementation

Two API endpoints:

#### Contact Form
- **POST** `/api/contact` — Send contact form message
  - Body: `{ name, email, company, projectType, message }`
  - Sends confirmation email to user
  - Notifies team at `hello@kaizenext.ai`

#### Lead Magnet
- **POST** `/api/lead-magnet` — Send lead magnet (ad audit, voice trial, vision demo)
  - Body: `{ email, platform?, accountLink?, type }`
  - Sends lead magnet content
  - Adds to Brevo for nurturing

## 5. Plausible Analytics

### Setup

1. Create account at [plausible.io](https://plausible.io)
2. Add your domain
3. Get tracking code snippet

**Credentials needed:**
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` — Your domain (e.g., "kaizenext.ai")

### Implementation

Add to root layout:

```tsx
<Script
  defer
  data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
  src="https://plausible.io/js/script.js"
/>
```

## 6. Sentry (Error Tracking)

### Setup

1. Create account at [sentry.io](https://sentry.io)
2. Create project for Next.js
3. Copy DSN

**Credentials needed:**
- `NEXT_PUBLIC_SENTRY_DSN` — Your DSN
- `SENTRY_ORG` — Organization slug
- `SENTRY_PROJECT` — Project slug
- `SENTRY_AUTH_TOKEN` — Auth token

### Implementation

Already configured in `instrumentation.ts` and `next.config.js`

## Environment Variables Checklist

Create `.env.local` with:

```bash
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_id
NEXT_PUBLIC_SANITY_DATASET=production

# Cal.com
NEXT_PUBLIC_CAL_USERNAME=kaizenext

# Brevo
NEXT_PUBLIC_BREVO_LIST_ID=your_list_id
BREVO_API_KEY=your_key

# Resend
RESEND_API_KEY=your_key

# Plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kaizenext.ai

# Sentry
NEXT_PUBLIC_SENTRY_DSN=your_dsn
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
SENTRY_AUTH_TOKEN=your_token
```

## Testing

### Newsletter
```bash
curl -X POST http://localhost:3000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

### Contact Form
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "company":"Acme",
    "projectType":"custom",
    "message":"Test message"
  }'
```

### Lead Magnet
```bash
curl -X POST http://localhost:3000/api/lead-magnet \
  -H "Content-Type: application/json" \
  -d '{
    "email":"lead@example.com",
    "type":"ad-audit",
    "platform":"Google Ads"
  }'
```

## Webhook Configuration

For automatic content revalidation when you update blog posts or case studies in Sanity, configure webhooks:

1. In Sanity Studio → Settings → Webhooks
2. Create webhook pointing to: `https://kaizenext.ai/api/revalidate`
3. Trigger on: Blog and Case Study document updates
4. Include auth header: `Authorization: Bearer {REVALIDATE_SECRET}`

## Troubleshooting

### Emails not sending
- Verify API key is correct
- Check sender domain is verified (Resend)
- Check email is not in spam/suppression list

### Newsletter signup failing
- Verify Brevo API key and list ID
- Check list is active and not full
- Ensure email format is valid

### Sanity not loading
- Verify project ID is correct
- Check dataset name matches
- Ensure public/private keys are set in Sanity

### Cal.com embed not showing
- Verify username is correct
- Check CORS is enabled
- Ensure iframe is not blocked by browser

## Support

- **Sanity**: https://sanity.io/help
- **Cal.com**: https://cal.com/support
- **Brevo**: https://www.brevo.com/support/
- **Resend**: https://resend.com/docs
- **Plausible**: https://plausible.io/docs
- **Sentry**: https://docs.sentry.io
