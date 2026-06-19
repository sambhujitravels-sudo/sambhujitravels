import { MetadataRoute } from 'next'
import { allRoutes, cityToSlug } from '@/lib/routes'

// Blog posts (keep in sync with app/blog/page.tsx)
const blogPosts = [
  'how-much-does-bareilly-to-nainital-taxi-cost',
  'best-cab-service-in-bareilly',
  'bareilly-to-delhi-taxi-fare',
  'delhi-airport-taxi-from-bareilly',
  'one-way-cab-vs-round-trip-cost',
  'bareilly-to-nainital-road-trip-guide',
  'haridwar-rishikesh-trip-from-bareilly',
  'jim-corbett-safari-booking-guide',
  'best-time-char-dham-yatra-from-bareilly',
  'bareilly-to-delhi-airport-transfer-guide',
]

// High-intent commercial landing pages (each has its own app/<slug>/page.tsx)
const landingPages = [
  'taxi-service-in-bareilly',
  'cab-service-in-bareilly',
  'one-way-taxi-bareilly',
  'bareilly-airport-taxi',
  'bareilly-railway-station-cab',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sambhujitravels.in'
  const lastModified = new Date()

  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/reviews`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Commercial landing pages — highest priority (primary Bareilly money keywords)
  const landingPagesEntries = landingPages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }))

  // Blog pages
  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Route pages from database
  const routePages = allRoutes.map((route) => ({
    url: `${baseUrl}/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...landingPagesEntries, ...blogPages, ...routePages]
}
