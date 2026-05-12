# Sanity CMS Setup Guide

This project uses Sanity CMS for managing blog posts and case studies.

## Installation & Configuration

### 1. Create a Sanity Project

```bash
npx sanity@latest init --coupon nextjs2024
```

During setup:
- Choose "Create new dataset" with name `production`
- Select `Next.js` as your framework
- Configure the dataset to the `sanity/` folder structure

### 2. Environment Variables

Copy `.env.example` to `.env.local` and add your Sanity credentials:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 3. Run Sanity Studio

The studio is configured to run at `/studio`:

```bash
npm run dev
```

Visit `http://localhost:3000/studio` to access the CMS.

## Schema Overview

### Blog Posts (`sanity/schema/blog.ts`)
- Title, slug, excerpt, category, author, date
- Featured image with hotspot
- Rich text body with image support
- Related posts linking
- Supports categories: Insights, AI Trends, Case Studies, Engineering, Product

### Case Studies (`sanity/schema/caseStudy.ts`)
- Project title, slug, client name
- Category: Workflow Automation, Voice AI, Computer Vision, Custom AI, Ad Automation
- Challenge, Solution, Results sections (rich text with images)
- Key metrics and timeline
- Featured image
- Related projects linking

## Using Sanity Data

### Fetching Blog Posts

```typescript
import { getAllBlogPosts, getBlogPostBySlug } from "@/sanity/lib/client";

// Get all posts
const posts = await getAllBlogPosts();

// Get single post by slug
const post = await getBlogPostBySlug("ai-workflow-automation-roi");
```

### Fetching Case Studies

```typescript
import { getAllCaseStudies, getCaseStudyBySlug } from "@/sanity/lib/client";

// Get all case studies
const studies = await getAllCaseStudies();

// Get single case study by slug
const study = await getCaseStudyBySlug("saudi-football-player-tracking");
```

### Rendering Content

```typescript
import { PortableText } from "@/sanity/lib/portableText";

<PortableText content={post.body} />
```

## Migration from Mock Data

Mock data currently exists in:
- `/app/insights/[slug]/page.tsx` - Blog posts
- `/app/work/[slug]/page.tsx` - Case studies

To migrate:

1. Create content in Sanity Studio (/studio)
2. Update the page components to use `getAllBlogPosts()` and `getBlogPostBySlug()`
3. Sanity content will be fetched at build time (SSG) and revalidated with ISR

## Rich Text Formatting

The Portable Text editor in Sanity supports:
- Headings (H2, H3)
- Bold, italic, code
- Lists (bullet and numbered)
- Block quotes
- Images with captions and hotspots
- Links

## Roles & Permissions

Set up team members in Sanity with different roles:
- **Admin**: Full access to settings and content
- **Editor**: Create and publish content
- **Viewer**: View content only

## Next Steps

- [ ] Create Sanity project
- [ ] Configure environment variables
- [ ] Populate blog posts in Sanity Studio
- [ ] Populate case studies in Sanity Studio
- [ ] Update /insights page to use Sanity data
- [ ] Update /work page to use Sanity data
- [ ] Set up webhooks for revalidation on content updates
- [ ] Configure draft preview (optional, requires auth)
