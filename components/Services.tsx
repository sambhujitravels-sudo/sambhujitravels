import { Car, Map, Plane, Clock, Users, Heart } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'oneway',
    title: 'One-Way Cab',
    description: 'Pay only for the distance you travel. No return fare charges. Available for all major cities from Bareilly.',
    icon: Car,
    price: 'From ₹11/km',
  },
  {
    id: 'roundtrip',
    title: 'Round Trip',
    description: 'Book a round trip for family vacations or business trips. Keep the car with you for the entire journey.',
    icon: Map,
    price: 'From ₹10/km',
  },
  {
    id: 'airport',
    title: 'Airport Transfer',
    description: 'Reliable airport pickups and drops. We track flights to ensure timely service. No waiting charges for delays.',
    icon: Plane,
    price: 'Fixed Price',
  },
  {
    id: 'local',
    title: 'Local Rental',
    description: 'Rent a car for 8 hours/80 km or 12 hours/120 km for local sightseeing and errands within the city.',
    icon: Clock,
    price: 'From ₹1,500',
  },
  {
    id: 'corporate',
    title: 'Corporate Rental',
    description: 'Special rates for corporate clients. Monthly billing, dedicated support, and priority service available.',
    icon: Users,
    price: 'Custom Quote',
  },
  {
    id: 'wedding',
    title: 'Wedding Car',
    description: 'Luxury decorated cars for your special day. Make a grand entrance with our premium fleet.',
    icon: Heart,
    price: 'Custom Quote',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From one-way drops to round trips, airport transfers to local rentals — we have the right solution for every travel need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <IconComponent size={28} className="text-primary group-hover:text-white" />
                  </div>
                  <span className="text-accent font-bold text-sm">{service.price}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  href="/contact"
                  className="text-primary font-semibold text-sm flex items-center hover:text-accent transition-colors"
                >
                  Book Now
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
