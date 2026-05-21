import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Travel Guide & Tips - Bareilly Taxi Blog',
  description: 'Travel guides, road trip tips, and destination guides for travelers from Bareilly. Plan your trip to Nainital, Delhi, Haridwar with Shambhu ji Travels.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog',
  },
}

const blogPosts = [
  {
    slug: 'how-much-does-bareilly-to-nainital-taxi-cost',
    title: 'How Much Does a Bareilly to Nainital Taxi Cost? (2026 Fare Guide)',
    excerpt: 'How much does a taxi from Bareilly to Nainital cost? Get detailed fare matrix for Sedan, SUV & Innova Crysta. Learn about tolls, route guide, and FAQ.',
    date: '2026-05-20',
    readTime: '5 min read',
    category: 'Pricing & Travel Guide',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  },
  {
    slug: 'best-cab-service-in-bareilly',
    title: 'Best Cab Service in Bareilly: How to Choose Wisely',
    excerpt: 'Compare local taxi operators, booking process, driver verification, and tariff structures to find the best cab service in Bareilly for outstation trips.',
    date: '2026-05-19',
    readTime: '7 min read',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1599733589046-10c005739ef9?w=800&q=80',
  },
  {
    slug: 'bareilly-to-delhi-taxi-fare',
    title: 'Bareilly to Delhi Taxi Fare: Ultimate Pricing & Toll Guide',
    excerpt: 'Detailed pricing guide for Bareilly to Delhi taxi fare. Learn one-way & round trip prices starting ₹2,750. Compare Sedan, SUV & Innova Crysta rates.',
    date: '2026-05-18',
    readTime: '6 min read',
    category: 'Taxi Fare Guide',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  },
  {
    slug: 'delhi-airport-taxi-from-bareilly',
    title: 'Delhi Airport Taxi from Bareilly: Timings, Tolls & Route',
    excerpt: 'Planning a ride to IGI Airport Delhi from Bareilly? Get complete route details, average travel time, toll rates, and night travel recommendations.',
    date: '2026-05-15',
    readTime: '8 min read',
    category: 'Airport Transfer',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    slug: 'one-way-cab-vs-round-trip-cost',
    title: 'One-Way Cab vs Round Trip: Which Saves More Money?',
    excerpt: 'Compare one-way taxi pricing versus traditional round-trip fare structures. Learn when to choose one-way cabs to save up to 40% on your outstation trip.',
    date: '2026-05-12',
    readTime: '6 min read',
    category: 'Money Saving Tips',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  },
  {
    slug: 'bareilly-to-nainital-road-trip-guide',
    title: 'Bareilly to Nainital Road Trip: Complete Travel Guide 2026',
    excerpt: 'Everything you need to know about traveling from Bareilly to Nainital by car — best route, travel time, pit stops, and what to pack for your hill station trip.',
    date: '2026-05-01',
    readTime: '8 min read',
    category: 'Road Trip Guide',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
  },
  {
    slug: 'haridwar-rishikesh-trip-from-bareilly',
    title: 'Haridwar & Rishikesh Trip from Bareilly: Complete 2-Day Guide',
    excerpt: 'Plan the perfect Haridwar-Rishikesh trip from Bareilly. 2-day itinerary, Ganga Aarti timings, places to visit, and taxi booking tips.',
    date: '2026-04-28',
    readTime: '10 min read',
    category: 'Pilgrimage & Adventure',
    image: 'https://images.unsplash.com/photo-1591018653367-eade21d3a007?w=800&q=80',
  },
  {
    slug: 'jim-corbett-safari-booking-guide',
    title: 'Jim Corbett Safari Booking Guide 2026: Zones, Timing & Tips',
    excerpt: 'Complete guide to Jim Corbett National Park safari from Bareilly. Safari zones, booking process, best time for tiger sighting, and travel tips.',
    date: '2026-04-25',
    readTime: '12 min read',
    category: 'Wildlife Guide',
    image: 'https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=800&q=80',
  },
  {
    slug: 'best-time-char-dham-yatra-from-bareilly',
    title: 'Best Time for Char Dham Yatra from Bareilly (2026 Season Guide)',
    excerpt: 'Planning Char Dham Yatra? Learn about the best months to visit, weather conditions, road status, and how to book reliable transportation from Bareilly.',
    date: '2026-04-20',
    readTime: '10 min read',
    category: 'Pilgrimage',
    image: 'https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=800&q=80',
  },
  {
    slug: 'bareilly-to-delhi-airport-transfer-guide',
    title: 'Bareilly to Delhi Airport: IGI Terminal Guide & Taxi Tips',
    excerpt: 'Complete guide to reaching Delhi Airport from Bareilly. Which terminal for your flight, travel time estimates, and tips for early morning departures.',
    date: '2026-04-15',
    readTime: '8 min read',
    category: 'Airport Transfer',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
]

export default function BlogPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Travel Guide & Tips</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Road trip guides, destination tips, and travel advice for your journey from Bareilly.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {post.category}
                    </span>

                    <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-4 inline-flex items-center text-primary font-semibold text-sm hover:text-accent transition-colors"
                    >
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon Note */}
            <div className="mt-12 text-center bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-2">More Articles Coming Soon</h3>
              <p className="text-gray-600 mb-4">
                We&apos;re working on more travel guides and tips for your journeys from Bareilly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                Have a topic suggestion? Let us know
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
