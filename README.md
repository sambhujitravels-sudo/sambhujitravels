# Shambhu ji Travels

Bareilly's trusted taxi service website built with Next.js 16, React 19, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Site Generation)
- **UI:** React 19, Tailwind CSS 4
- **Icons:** Lucide React
- **Language:** TypeScript

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production Preview

```bash
npm run start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── contact/            # Contact page
│   ├── [from]-to-[to]-cab/ # Dynamic route pages
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt configuration
│   └── not-found.tsx       # 404 page
├── components/             # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── BookingForm.tsx
│   ├── Services.tsx
│   ├── WhyChooseUs.tsx
│   ├── Testimonials.tsx
│   ├── PopularDestinations.tsx
│   ├── CityAutocomplete.tsx
│   └── JsonLd.tsx          # Structured data components
├── docs/                   # Documentation
│   ├── audit-findings.md   # Initial codebase audit
│   ├── seo-checklist.md    # SEO implementation status
│   ├── positioning.md      # Brand strategy
│   └── owner-todo.md       # Placeholder items to complete
└── public/                 # Static assets
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Deploy (auto-detects Next.js)

### Other Platforms

Build the static export:
```bash
npm run build
```

The `.next` folder contains the production build.

## SEO Features

- Server-side rendered / statically generated pages
- Per-page `<title>` and `<meta description>`
- Open Graph and Twitter Card tags
- JSON-LD structured data (LocalBusiness, TaxiService, FAQPage)
- Auto-generated sitemap.xml
- robots.txt
- Canonical URLs
- BreadcrumbList schema on inner pages

## Before Launch

See `docs/owner-todo.md` for required actions:
- [ ] Add Google Search Console verification
- [ ] Replace testimonial placeholders
- [ ] Add real fleet photos
- [ ] Create og-image.jpg and favicon
- [ ] Set up Google Analytics (optional)

## License

Private - All rights reserved.
