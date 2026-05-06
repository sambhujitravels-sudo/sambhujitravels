import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { allRoutes, findRoute, cityToSlug } from '@/lib/routes'
import Link from 'next/link'
import { MapPin, Clock, Car, Phone, ArrowRight } from 'lucide-react'

// Allow dynamic routes not in generateStaticParams
export const dynamicParams = true

type Params = Promise<{ route: string }>

// Parse route like "bareilly-to-nainital-cab" into { from: "bareilly", to: "nainital" }
function parseRoute(route: string): { from: string; to: string } | null {
  // Match pattern: {from}-to-{to}-cab
  const match = route.match(/^(.+)-to-(.+)-cab$/)
  if (!match) return null
  return { from: match[1], to: match[2] }
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params
  const parsed = parseRoute(resolvedParams?.route || '')

  if (!parsed) {
    return { title: 'Route Not Found' }
  }

  const { from, to } = parsed
  const fromCity = from.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const toCity = to.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const routeData = findRoute(from, to)

  return {
    title: `${fromCity} to ${toCity} Taxi | Cab Booking from ₹11/km`,
    description: `Book ${fromCity} to ${toCity} cab at ₹11/km. ${routeData?.distance || 200} km distance, ${routeData?.time || '4-5 hours'}. 24/7 service, AC cabs, verified drivers. Call +91 8077230221.`,
    alternates: {
      canonical: `https://sambhujitravels.in/${from}-to-${to}-cab`,
    },
    openGraph: {
      title: `${fromCity} to ${toCity} Taxi | Shambhu ji Travels`,
      description: `Book ${fromCity} to ${toCity} cab starting ₹11/km. Sedan, SUV & Innova available. 24/7 booking.`,
      url: `https://sambhujitravels.in/${from}-to-${to}-cab`,
    },
  }
}

export async function generateStaticParams() {
  return allRoutes.map(r => ({
    route: `${cityToSlug(r.from)}-to-${cityToSlug(r.to)}-cab`
  }))
}

export default async function RoutePage({ params }: { params: Params }) {
  const resolvedParams = await params
  const parsed = parseRoute(resolvedParams?.route || '')

  if (!parsed) {
    notFound()
  }

  const { from, to } = parsed
  const fromCity = from.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const toCity = to.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

  const routeData = findRoute(from, to)

  // Default data if route not in database
  const distance = routeData?.distance || 200
  const time = routeData?.time || '4-5 hours'
  const description = routeData?.description || `Book a reliable taxi from ${fromCity} to ${toCity} with Shambhu ji Travels. We offer comfortable AC cabs with verified drivers for your journey.`
  const highlights = routeData?.highlights || ['24/7 Service', 'Verified Drivers', 'No Hidden Charges', 'AC Vehicles']

  const faqs = [
    {
      question: `What is the taxi fare from ${fromCity} to ${toCity}?`,
      answer: `The taxi fare from ${fromCity} to ${toCity} depends on the vehicle type. Sedan starts at ₹11/km, SUV at ₹13/km, and Innova Crysta at ₹18/km. The distance is approximately ${distance} km. Contact us at +91 8077230221 for exact fare.`,
    },
    {
      question: `How long does it take to travel from ${fromCity} to ${toCity} by taxi?`,
      answer: `The journey from ${fromCity} to ${toCity} takes approximately ${time} by car, covering a distance of ${distance} km. Travel time may vary based on traffic and weather conditions.`,
    },
    {
      question: `Do you provide one-way cab from ${fromCity} to ${toCity}?`,
      answer: `Yes, we provide one-way cab service from ${fromCity} to ${toCity}. You only pay for the one-way distance with no return charges. One-way service starts at ₹11/km for Sedan.`,
    },
    {
      question: `Is round trip available from ${fromCity} to ${toCity}?`,
      answer: `Yes, round trip is available from ${fromCity} to ${toCity}. For round trips, we offer competitive rates. Contact us for the best package deal.`,
    },
    {
      question: `What types of cars are available for ${fromCity} to ${toCity} trip?`,
      answer: `We offer Sedan (Swift Dzire) at ₹11/km, SUV (Ertiga) at ₹13/km, and Innova Crysta at ₹18/km. All vehicles are AC and well-maintained with verified drivers.`,
    },
    {
      question: `Can I book a taxi from ${fromCity} to ${toCity} for early morning?`,
      answer: `Yes, we provide 24/7 taxi service. You can book for any time including early morning, late night, or midnight. Call +91 8077230221 or WhatsApp for booking.`,
    },
    {
      question: `Are toll and parking charges included in the fare?`,
      answer: `The base fare is calculated per kilometer. Toll taxes, parking charges, and state permits are charged extra as per actuals. We provide all receipts for transparency.`,
    },
    {
      question: `How can I book a taxi from ${fromCity} to ${toCity}?`,
      answer: `You can book by calling +91 8077230221, sending a WhatsApp message, or using the booking form on this page. We provide instant confirmation.`,
    },
  ]

  // Get related routes (same origin, different destination)
  const relatedRoutes = allRoutes
    .filter(r => cityToSlug(r.from) === from && cityToSlug(r.to) !== to)
    .slice(0, 6)

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Services', url: 'https://sambhujitravels.in/services' },
          { name: `${fromCity} to ${toCity} Cab`, url: `https://sambhujitravels.in/${from}-to-${to}-cab` },
        ]}
      />
      <FAQJsonLd faqs={faqs} />

      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm text-blue-200 mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span>{fromCity} to {toCity} Cab</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {fromCity} to {toCity} Taxi Service
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mb-6">
              Book reliable cab service from {fromCity} to {toCity}. One-way & round trip available at best prices.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center">
                <MapPin size={18} className="mr-2 text-accent" />
                <span>{distance} km</span>
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center">
                <Clock size={18} className="mr-2 text-accent" />
                <span>{time}</span>
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-2 rounded-lg flex items-center">
                <Car size={18} className="mr-2 text-accent" />
                <span>From ₹11/km</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Pricing Table */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    {fromCity} to {toCity} Taxi Rates
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Vehicle</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Capacity</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Rate</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Book</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="font-medium">Sedan</div>
                            <div className="text-sm text-gray-500">Swift Dzire</div>
                          </td>
                          <td className="py-4 px-4">4 Passengers</td>
                          <td className="py-4 px-4 font-bold text-accent">₹11/km</td>
                          <td className="py-4 px-4">
                            <a href="tel:+918077230221" className="text-primary hover:text-accent font-medium">Call Now</a>
                          </td>
                        </tr>
                        <tr className="border-b hover:bg-gray-50 bg-blue-50">
                          <td className="py-4 px-4">
                            <div className="font-medium">SUV</div>
                            <div className="text-sm text-gray-500">Ertiga</div>
                          </td>
                          <td className="py-4 px-4">6 Passengers</td>
                          <td className="py-4 px-4 font-bold text-accent">₹13/km</td>
                          <td className="py-4 px-4">
                            <a href="tel:+918077230221" className="text-primary hover:text-accent font-medium">Call Now</a>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-4 px-4">
                            <div className="font-medium">Innova Crysta</div>
                            <div className="text-sm text-gray-500">Premium SUV</div>
                          </td>
                          <td className="py-4 px-4">7 Passengers</td>
                          <td className="py-4 px-4 font-bold text-accent">₹18/km</td>
                          <td className="py-4 px-4">
                            <a href="tel:+918077230221" className="text-primary hover:text-accent font-medium">Call Now</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    * Toll taxes, parking, and state permits charged extra as per actuals
                  </p>
                </div>

                {/* Description */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    About {fromCity} to {toCity} Route
                  </h2>
                  <p className="text-gray-600 mb-6">{description}</p>

                  <h3 className="text-lg font-bold text-gray-800 mb-3">Why Choose Us</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <svg className="w-5 h-5 text-accent mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="bg-gray-50 rounded-lg border border-gray-200 group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800 hover:text-primary transition-colors">
                          {faq.question}
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Booking Form */}
                <div className="sticky top-24">
                  <BookingForm />

                  {/* Quick Call */}
                  <div className="mt-6 bg-primary text-white p-6 rounded-xl text-center">
                    <h3 className="font-bold mb-2">Need Help Booking?</h3>
                    <p className="text-blue-200 text-sm mb-4">Call us for instant booking</p>
                    <a
                      href="tel:+918077230221"
                      className="flex items-center justify-center bg-accent hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold transition-colors"
                    >
                      <Phone size={20} className="mr-2" />
                      +91 8077230221
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Routes */}
        {relatedRoutes.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Other Routes from {fromCity}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {relatedRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={`/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`}
                    className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-accent group"
                  >
                    <div className="flex items-center justify-between mb-1 text-xs text-gray-500">
                      <span>{route.from}</span>
                      <ArrowRight size={12} />
                      <span>{route.to}</span>
                    </div>
                    <div className="font-medium text-gray-800 group-hover:text-primary transition-colors text-sm">
                      {route.from} to {route.to}
                    </div>
                    <div className="text-accent font-bold text-sm mt-1">{route.distance} km</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
