'use client'

import { Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AllRoutes from './AllRoutes'

const popularRoutes = [
  { from: 'Bareilly', to: 'Delhi' },
  { from: 'Bareilly', to: 'Lucknow' },
  { from: 'Bareilly', to: 'Nainital' },
  { from: 'Bareilly', to: 'Noida' },
  { from: 'Bareilly', to: 'Haridwar' },
  { from: 'Bareilly', to: 'Dehradun' },
  { from: 'Delhi', to: 'Bareilly' },
  { from: 'Lucknow', to: 'Bareilly' },
]

// High-intent landing pages — keep internally linked so they stay crawlable
const bareillyServices = [
  { href: '/taxi-service-in-bareilly', label: 'Taxi Service in Bareilly' },
  { href: '/cab-service-in-bareilly', label: 'Cab Service in Bareilly' },
  { href: '/one-way-taxi-bareilly', label: 'One-Way Taxi from Bareilly' },
  { href: '/bareilly-airport-taxi', label: 'Bareilly Airport Taxi' },
  { href: '/bareilly-railway-station-cab', label: 'Bareilly Railway Station Cab' },
]

export default function Footer() {
  const pathname = usePathname()

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* All Routes Section */}
      <AllRoutes />

      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Shambhu ji Travels</h3>
            <p className="mb-4 text-sm">
              Your trusted partner for safe, reliable, and affordable taxi services in Bareilly.
              Outstation cabs, airport transfers, and local rentals at best prices.
            </p>
            <div className="space-y-2">
              <a href="tel:+918077230221" className="flex items-center hover:text-accent transition-colors">
                <Phone size={16} className="mr-2 text-accent" />
                +91 8077230221
              </a>
              <a href="mailto:sambhujitravels@gmail.com" className="flex items-center hover:text-accent transition-colors">
                <Mail size={16} className="mr-2 text-accent" />
                sambhujitravels@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" onClick={(e) => handleScrollToTop(e, '/')} className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" onClick={(e) => handleScrollToTop(e, '/about')} className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/services" onClick={(e) => handleScrollToTop(e, '/services')} className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/reviews" onClick={(e) => handleScrollToTop(e, '/reviews')} className="hover:text-accent transition-colors">Reviews & Testimonials</Link></li>
              <li><Link href="/blog" onClick={(e) => handleScrollToTop(e, '/blog')} className="hover:text-accent transition-colors">Travel Guide</Link></li>
              <li><Link href="/contact" onClick={(e) => handleScrollToTop(e, '/contact')} className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#oneway" className="hover:text-accent transition-colors">One-Way Cab</Link></li>
              <li><Link href="/services#roundtrip" className="hover:text-accent transition-colors">Round Trip</Link></li>
              <li><Link href="/services#airport" className="hover:text-accent transition-colors">Airport Transfer</Link></li>
              <li><Link href="/services#local" className="hover:text-accent transition-colors">Local Rental</Link></li>
              <li><Link href="/services#corporate" className="hover:text-accent transition-colors">Corporate Rental</Link></li>
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Popular Routes</h3>
            <ul className="space-y-2 text-sm">
              {popularRoutes.map((route) => (
                <li key={`${route.from}-${route.to}`}>
                  <Link
                    href={`/${route.from.toLowerCase()}-to-${route.to.toLowerCase()}-cab`}
                    className="hover:text-accent transition-colors"
                  >
                    {route.from} to {route.to} Cab
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Popular Services in Bareilly */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <h4 className="text-white font-bold mb-4">Popular Taxi Services in Bareilly</h4>
          <div className="flex flex-wrap gap-2">
            {bareillyServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-sm bg-gray-800 hover:bg-gray-700 hover:text-accent text-gray-300 px-3 py-1.5 rounded-full transition-colors"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing Bar */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="bg-gray-800 rounded-lg p-4">
            <h4 className="text-white font-bold mb-3 text-center">Our Rates</h4>
            <div className="grid grid-cols-3 gap-4 text-center text-sm">
              <div>
                <span className="block text-accent text-xl font-bold">₹11/km</span>
                <span className="text-gray-400">Sedan</span>
              </div>
              <div>
                <span className="block text-accent text-xl font-bold">₹13/km</span>
                <span className="text-gray-400">SUV</span>
              </div>
              <div>
                <span className="block text-accent text-xl font-bold">₹18/km</span>
                <span className="text-gray-400">Innova</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shambhu ji Travels. All rights reserved.</p>
          <p className="mt-2 text-gray-500">Reliable Taxi Service in Bareilly since 2015</p>
        </div>
      </div>
    </footer>
    </>
  )
}
