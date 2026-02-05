# ModBetter Site

> Last updated: 2026-02-05 01:30:00

Astro static site for modbetter.com. This README documents how to edit everything.

## Quick Start

```bash
source ~/.nvm/nvm.sh && nvm use 22
npm run dev      # localhost:4321
npm run build    # build to dist/
```

## Directory Structure

```
site/
├── src/
│   ├── components/
│   │   └── Nav.astro           # Site navigation (edit links here)
│   ├── data/
│   │   ├── blog/               # All blog posts (25 markdown files)
│   │   └── products.json       # Affiliate product database
│   ├── layouts/
│   │   └── BaseLayout.astro    # HTML head, meta tags, OG tags
│   └── pages/
│       ├── index.astro         # Homepage
│       ├── about.astro         # About page
│       ├── contact.astro       # Contact page (form)
│       └── blog/
│           ├── index.astro     # Blog listing page
│           └── [slug].astro    # Individual blog post template
├── public/
│   └── images/blog/            # All blog images (97 files)
├── vercel.json                 # Redirects + affiliate /go/ links
└── content.config.ts           # Blog post schema
```

## How to Edit Things

### Homepage Copy

Edit `src/pages/index.astro`:

- Hero headline: line 31
- Hero subtext: lines 32-35
- Featured posts: edit `topSlugs` array (lines 10-17)
- Topics list: lines 53-61

### About Page Copy

Edit `src/pages/about.astro`:

- All copy is in the `<main>` section (lines 12-31)

### Contact Page

Edit `src/pages/contact.astro`:

- Form action URL: line 24 (replace "placeholder" with Formspree ID)
- Email address: line 40

### Navigation Links

Edit `src/components/Nav.astro`:

- Links are on lines 7-11

### Blog Posts

Edit files in `src/data/blog/*.md`:

```yaml
---
title: "Post Title" # Page title + H1
description: "Meta desc..." # SEO description (keep under 160 chars)
pubDate: 2024-01-15 # Published date
updatedDate: 2024-02-01 # Optional: last modified
slug: "post-url-slug" # URL: /blog/post-url-slug/
tags: [] # Optional: for future filtering
---
Markdown content here...
```

### Affiliate Links

Two places to update:

**1. Product database** (`src/data/products.json`):

```json
{
  "slug": "your-product",
  "url": "https://affiliate-url.com",
  "description": "Internal note about this product"
}
```

**2. Redirect** (`vercel.json` - search for "/go/"):

```json
{
  "source": "/go/your-product/",
  "destination": "https://affiliate-url.com",
  "permanent": false
}
```

### Redirects

Edit `vercel.json`:

- Blog redirects: lines 4-125
- Service page redirects: lines 127-146
- Utility redirects: lines 153-159
- Affiliate links: search for "AFFILIATE LINKS" comment

### Meta Tags / SEO

Edit `src/layouts/BaseLayout.astro`:

- Site URL: line 24 (`siteUrl`)
- Default OG image: line 17

## Key Files Quick Reference

| What to Change        | File                           | Line(s)       |
| --------------------- | ------------------------------ | ------------- |
| Homepage headline     | `src/pages/index.astro`        | 31            |
| Featured posts        | `src/pages/index.astro`        | 10-17         |
| About page copy       | `src/pages/about.astro`        | 15-30         |
| Contact form endpoint | `src/pages/contact.astro`      | 24            |
| Nav links             | `src/components/Nav.astro`     | 7-11          |
| Affiliate URLs        | `vercel.json`                  | search "/go/" |
| Site name             | `src/layouts/BaseLayout.astro` | 24-25         |
| Blog post content     | `src/data/blog/*.md`           | entire file   |

## Deployment

Connected to Vercel. Push to main = auto-deploy.

## Parent Docs

- `~/modbetter/IMPLEMENTATION_LOG.md` - Master checklist
- `~/modbetter/README.md` - Project overview
- `~/modbetter/futurejoe.md` - Plain English guide
