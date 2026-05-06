import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Car, Map, Plane, Clock, Users, Heart, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Services - One Way Cab, Round Trip, Airport Transfer',
  description: 'Shambhu ji Travels offers one-way cabs, round trips, airport transfers, local rentals, corporate car hire & wedding cars in Bareilly. Starting ₹11/km. Book now!',
  alternates: {
    canonical: 'https://sambhujitravels.in/services',
  },
  openGraph: {
    title: 'Taxi Services in Bareilly - Shambhu ji Travels',
    description: 'One-way cabs, round trips, airport transfers & more. Starting ₹11/km. 24/7 service in Bareilly.',
    url: 'https://sambhujitravels.in/services',
  },
}

const services = [
  {
    id: 'oneway',
    title: 'One-Way Cab Service',
    description: 'Why pay for return when traveling one way? Our one-way cab service lets you pay only for the distance you travel. Available for all major cities including Delhi, Lucknow, Nainital, Haridwar, and 500+ destinations.',
    features: ['Pay only for one-way distance', 'No return fare charges', 'Available for all major cities', 'Sedan, SUV & Innova options'],
    icon: Car,
    price: 'From ₹11/km',
  },
  {
    id: 'roundtrip',
    title: 'Round Trip Taxi',
    description: 'Planning a family vacation or business trip? Book a round trip and keep the car with you for the entire duration. Ideal for multi-day trips with multiple stops.',
    features: ['Keep car for entire trip', 'Flexible scheduling', 'Multiple stop options', 'Best rates for long trips'],
    icon: Map,
    price: 'From ₹10/km',
  },
  {
    id: 'airport',
    title: 'Airport Transfers',
    description: 'Reliable airport pickups and drops to Delhi (IGI), Lucknow, and Pantnagar airports. We track your flight to ensure we are there when you arrive. No waiting charges for flight delays.',
    features: ['Flight tracking', 'No waiting charges for delays', 'Meet & greet service', 'Fixed transparent pricing'],
    icon: Plane,
    price: 'Fixed Price',
  },
  {
    id: 'local',
    title: 'Local Car Rental',
    description: 'Need a car for local errands, shopping, or sightseeing within Bareilly? Rent a car for 8 hours/80 km or 12 hours/120 km packages.',
    features: ['8 hrs / 80 km package', '12 hrs / 120 km package', 'City sightseeing', 'Multiple stops included'],
    icon: Clock,
    price: 'From ₹1,500',
  },
  {
    id: 'corporate',
    title: 'Corporate Car Rental',
    description: 'Special rates and priority service for corporate clients. We offer monthly billing, dedicated account manager, and a fleet of well-maintained vehicles for your business needs.',
    features: ['Monthly billing', 'Dedicated account manager', 'Priority booking', 'Flexible contracts'],
    icon: Users,
    price: 'Custom Quote',
  },
  {
    id: 'wedding',
    title: 'Wedding Car Rental',
    description: 'Make your special day even more memorable with our luxury wedding car rental. We offer decorated cars for the bride, groom, and family with professional chauffeurs.',
    features: ['Decorated vehicles', 'Professional chauffeurs', 'Multiple car options', 'Photography friendly'],
    icon: Heart,
    price: 'Custom Quote',
  },
]

const serviceFAQs = [
  {
    question: 'What is the difference between one-way and round trip fare?',
    answer: 'One-way fare is charged only for the distance traveled in one direction. Round trip fare is charged for both ways but at a lower per-km rate (₹10/km vs ₹11/km for Sedan). Round trip is more economical for return journeys.',
  },
  {
    question: 'Do you provide tempo traveller for group travel?',
    answer: 'Yes, we provide Tempo Travellers (12-seater and 17-seater) for group travel, pilgrimages, and corporate outings. Contact us for availability and pricing.',
  },
  {
    question: 'What documents do I need to book a taxi?',
    answer: 'You just need a valid mobile number to book a taxi. For corporate bookings, we may require a company ID or authorization letter.',
  },
  {
    question: 'Can I book a taxi for multiple days?',
    answer: 'Yes, you can book our taxis for multi-day trips. We offer special packages for extended travel with driver accommodation included in the fare.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Services', url: 'https://sambhujitravels.in/services' },
        ]}
      />
      <FAQJsonLd faqs={serviceFAQs} />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Comprehensive travel solutions for all your needs. From one-way drops to wedding cars, we have the right service for you.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {services.map((service, index) => {
                const IconComponent = service.icon
                const isEven = index % 2 === 0
                return (
                  <div
                    key={service.id}
                    id={service.id}
                    className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                  >
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent size={28} className="text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-800">{service.title}</h2>
                          <span className="text-accent font-bold">{service.price}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <ul className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-700">
                            <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="tel:+918077230221"
                        className="inline-flex items-center bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                      >
                        <Phone size={18} className="mr-2" />
                        Book Now
                      </a>
                    </div>
                    <div className={`bg-gray-100 rounded-xl h-64 flex items-center justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <IconComponent size={80} className="text-gray-300" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Service FAQs</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {serviceFAQs.map((faq, index) => (
                <details key={index} className="bg-white rounded-lg border border-gray-200 group">
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800 hover:text-primary transition-colors">
                    {faq.question}
                    <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <PopularDestinations />
      </main>
      <Footer />
    </>
  )
}
