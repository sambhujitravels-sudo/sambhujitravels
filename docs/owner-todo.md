# Owner Action Items

This document lists all placeholders and items requiring owner input before the site is production-ready.

---

## Critical (Block Launch)

### 1. Google Search Console Verification
**File:** `app/layout.tsx` (line ~45)
```
verification: {
  google: '{{GOOGLE_SITE_VERIFICATION}}',
}
```
**Action:** Get verification code from Google Search Console and replace placeholder.

### 2. Testimonials
**File:** `components/Testimonials.tsx`
```tsx
{
  name: '{{CUSTOMER_NAME_1}}',
  location: '{{CUSTOMER_CITY_1}}',
  text: '{{TESTIMONIAL_TEXT_1}}',
}
```
**Action:** Replace with 3 real customer testimonials. Include:
- Customer name (with permission)
- City/location
- Testimonial text (2-3 sentences)
- Optional: Customer photo

### 3. Social Media Links
**File:** `components/Header.tsx` (currently removed)
**File:** `components/Footer.tsx` (social links section removed)
**Action:** If social media accounts exist, add the actual profile URLs.

---

## Important (Before Marketing)

### 4. OG Image for Social Sharing
**Location:** `public/og-image.jpg`
**Specs:** 1200x630px, JPG format
**Content:** Brand logo, tagline "Bareilly's Most Reliable Taxi Service", phone number
**Action:** Create or commission this image.

### 5. Favicon
**Location:** `public/favicon.ico`, `public/apple-touch-icon.png`
**Action:** Create brand favicon (16x16, 32x32, 180x180 for Apple).

### 6. Fleet Photos
**Current:** Placeholder icons shown for services
**Action:** Upload real photos of:
- Sedan (Swift Dzire or similar)
- SUV (Ertiga or similar)
- Innova Crysta
- Driver in uniform (optional)

### 7. Verify Pricing
**Files:** Multiple (Hero, Footer, About, Route pages)
**Current rates:**
- Sedan: ₹11/km
- SUV: ₹13/km
- Innova Crysta: ₹18/km
**Action:** Confirm these rates are accurate or update throughout codebase.

---

## Nice to Have (Post-Launch)

### 8. About Page Content
**File:** `app/about/page.tsx`
**Current:** Generic "since 2015" and "10,000+ customers" claims
**Action:** Verify and update with accurate:
- Year started
- Actual customer count (or remove if unverifiable)
- Founder/owner story (optional)

### 9. Google Analytics
**File:** `app/layout.tsx`
**Action:** Add GA4 tracking script after creating property.

### 10. More Route Pages
**File:** `app/[from]-to-[to]-cab/page.tsx`
**Current:** 16 routes
**Action:** Add more routes by:
1. Adding entry to `routeDatabase` object
2. Adding entry to `generateStaticParams()` function
3. Adding entry to `app/sitemap.ts`

### 11. Blog Section
**Action:** Consider adding `/blog` route for SEO content like:
- "Best time to visit Nainital from Bareilly"
- "Bareilly to Delhi road trip guide"
- "Char Dham Yatra from Bareilly"

---

## Placeholder Reference

| Placeholder | File | Line (approx) |
|------------|------|---------------|
| `{{GOOGLE_SITE_VERIFICATION}}` | app/layout.tsx | 45 |
| `{{CUSTOMER_NAME_1}}` | components/Testimonials.tsx | 6 |
| `{{CUSTOMER_CITY_1}}` | components/Testimonials.tsx | 7 |
| `{{TESTIMONIAL_TEXT_1}}` | components/Testimonials.tsx | 8 |
| `{{CUSTOMER_NAME_2}}` | components/Testimonials.tsx | 12 |
| `{{CUSTOMER_CITY_2}}` | components/Testimonials.tsx | 13 |
| `{{TESTIMONIAL_TEXT_2}}` | components/Testimonials.tsx | 14 |
| `{{CUSTOMER_NAME_3}}` | components/Testimonials.tsx | 18 |
| `{{CUSTOMER_CITY_3}}` | components/Testimonials.tsx | 19 |
| `{{TESTIMONIAL_TEXT_3}}` | components/Testimonials.tsx | 20 |

---

## Quick Commands

After making changes:
```bash
npm run build   # Verify build succeeds
npm run dev     # Test locally at http://localhost:3000
```

Deploy to Vercel:
```bash
git add .
git commit -m "Update content"
git push
```
Vercel will auto-deploy on push to main branch.
