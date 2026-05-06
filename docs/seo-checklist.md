# SEO Implementation Checklist

## Completed

### Technical SEO
- [x] Migrated from CSR (Vite) to SSG (Next.js App Router)
- [x] All pages pre-rendered as static HTML
- [x] Proper `<title>` tags on every page with keywords and pricing
- [x] Unique `<meta name="description">` on every page
- [x] Open Graph tags on every page
- [x] Twitter Card tags on every page
- [x] Canonical URLs on every page
- [x] `lang="en-IN"` attribute set
- [x] `sitemap.xml` auto-generated (16 pages indexed)
- [x] `robots.txt` configured
- [x] 404 page created

### Structured Data (JSON-LD)
- [x] LocalBusiness schema on all pages
- [x] TaxiService schema with pricing offers
- [x] FAQPage schema on homepage and route pages (8 questions each)
- [x] BreadcrumbList schema on inner pages

### Route Pages (16 pages)
- [x] Bareilly ↔ Delhi
- [x] Bareilly ↔ Lucknow
- [x] Bareilly ↔ Nainital
- [x] Bareilly ↔ Noida
- [x] Bareilly ↔ Haridwar
- [x] Bareilly ↔ Dehradun
- [x] Bareilly ↔ Agra
- [x] Bareilly ↔ Jaipur
- [x] Bareilly ↔ Rishikesh
- [x] Bareilly ↔ Jim Corbett
- [x] Bareilly ↔ Gurgaon
- [x] Bareilly ↔ Meerut

### Blog Section
- [x] Blog index page (`/blog`)
- [x] First blog post: Bareilly to Nainital Road Trip Guide
- [x] Blog navigation added to header and footer

### On-Page SEO
- [x] Proper heading hierarchy (single H1 per page)
- [x] Semantic HTML structure
- [x] Internal linking from footer to route pages
- [x] Pricing displayed prominently (₹11/km, ₹13/km, ₹18/km)
- [x] Phone number displayed 4+ times per page
- [x] WhatsApp sticky button on all pages

### Core Web Vitals Optimizations
- [x] No client-side routing delays (static pages)
- [x] Minimal JavaScript (only for interactive components)
- [x] Tailwind CSS (small bundle)

---

## Owner Actions Required

### Google Search Console
- [ ] Verify domain ownership at https://search.google.com/search-console
- [ ] Replace `{{GOOGLE_SITE_VERIFICATION}}` in `app/layout.tsx` with actual verification code
- [ ] Submit sitemap: `https://sambhujitravels.in/sitemap.xml`
- [ ] Request indexing for homepage and key route pages

### Google Business Profile
- [ ] Claim/create profile at https://business.google.com
- [ ] Add business name: "Shambhu ji Travels"
- [ ] Set category: "Taxi service"
- [ ] Add phone: +91 8077230221
- [ ] Add website: https://sambhujitravels.in
- [ ] Upload real photos of vehicles and team
- [ ] Request reviews from past customers

### Google Analytics
- [ ] Create GA4 property at https://analytics.google.com
- [ ] Add tracking code to `app/layout.tsx`

### Images
- [ ] Create `og-image.jpg` (1200x630px) for social sharing
- [ ] Create `favicon.ico` and `apple-touch-icon.png`
- [ ] Replace stock/placeholder images with real fleet photos

### Content
- [ ] Replace testimonial placeholders with real customer reviews (see `docs/owner-todo.md`)
- [ ] Verify all pricing is accurate
- [ ] Add more route pages as needed

### Backlinks (Off-Page SEO)
- [ ] Submit to local directories (JustDial, Sulekha, IndiaMART)
- [ ] List on travel aggregators
- [ ] Encourage customer reviews on Google
- [ ] Consider local news/blog features

---

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| Lighthouse SEO | 95+ | Chrome DevTools |
| Lighthouse Accessibility | 90+ | Chrome DevTools |
| First Contentful Paint | < 1.5s | PageSpeed Insights |
| Time to Interactive | < 3s | PageSpeed Insights |
| Cumulative Layout Shift | < 0.1 | PageSpeed Insights |

---

## Keyword Targets

### Primary (Homepage)
- "Bareilly taxi service"
- "cab service Bareilly"
- "Bareilly cab booking"
- "taxi in Bareilly"

### Route-Specific
- "Bareilly to Delhi cab"
- "Bareilly to Lucknow taxi"
- "Bareilly to Nainital cab fare"
- (etc. for all 16 route pages)

### Long-Tail (Future Blog)
- "Bareilly to Delhi cab fare 2026"
- "cheapest taxi from Bareilly"
- "outstation cab from Bareilly"
- "24 hour taxi service Bareilly"
