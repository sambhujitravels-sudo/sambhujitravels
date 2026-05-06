import { MetadataRoute } from 'next'
import { allRoutes, cityToSlug } from '@/lib/routes'

const blogPosts = [
  'bareilly-to-nainital-road-trip-guide',
  'best-time-char-dham-yatra-from-bareilly',
  'bareilly-to-delhi-airport-transfer-guide',
  'jim-corbett-safari-booking-guide',
  'haridwar-rishikesh-trip-from-bareilly',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sambhujitravels.in'

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ]

  // Blog pages
  const blogPages = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Route pages from database
  const routePages = allRoutes.map((route) => ({
    url: `${baseUrl}/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticPages, ...blogPages, ...routePages]
}
