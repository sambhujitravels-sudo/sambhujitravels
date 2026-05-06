import Link from 'next/link'
import { MapPin, Clock, ArrowRight, Car } from 'lucide-react'
import { allRoutes, cityToSlug, getPopularRoutes } from '@/lib/routes'

export default function PopularDestinations() {
  const featuredRoutes = getPopularRoutes()

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Popular Routes from Bareilly
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            One-way taxi at ₹11/km. Book now and pay only for the distance you travel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRoutes.map((route, index) => (
            <Link
              key={index}
              href={`/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary group overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-blue-700 p-4 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm opacity-80">{route.from}</span>
                  <ArrowRight size={16} className="opacity-60" />
                  <span className="text-sm opacity-80">{route.to}</span>
                </div>
                <h3 className="font-bold text-lg">
                  {route.from} to {route.to}
                </h3>
              </div>

              {/* Body */}
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {route.distance} km
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {route.time}
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting from</span>
                    <span className="text-xl font-bold text-accent">₹11/km</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Car size={14} className="mr-1" />
                    Sedan
                  </div>
                </div>

                <button className="w-full mt-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* All Routes Link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center bg-primary hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View All {allRoutes.length}+ Routes
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>

        {/* Quick Booking Bar */}
        <div className="mt-12 bg-primary rounded-xl p-6 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold">Can&apos;t find your route?</h3>
              <p className="text-blue-200 text-sm">We cover 500+ destinations. Call us for a custom quote.</p>
            </div>
            <a
              href="tel:+918077230221"
              className="flex-shrink-0 bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-lg font-bold transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 8077230221
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
