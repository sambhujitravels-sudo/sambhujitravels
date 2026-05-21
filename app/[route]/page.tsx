import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { allRoutes, findRoute, cityToSlug } from '@/lib/routes'
import { generateDynamicRouteDetails } from '@/lib/routeDetails'
import Link from 'next/link'
import { 
  MapPin, Clock, Car, Phone, ArrowRight, ShieldCheck, 
  Compass, AlertTriangle, Fuel, Info, CalendarCheck 
} from 'lucide-react'

// Allow dynamic routes not in generateStaticParams
export const dynamicParams = true

type Params = Promise<{ route: string }>

// Parse route like "bareilly-to-nainital-cab" into { from: "bareilly", to: "nainital" }
function parseRoute(route: string): { from: string; to: string } | null {
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
  const details = generateDynamicRouteDetails(from, to, routeData?.distance || 200, routeData?.time || '4-5 hours')

  return {
    title: `${fromCity} to ${toCity} Taxi | Cab Booking starting ₹11/km`,
    description: `${details.intro.slice(0, 150)}... Book outstation cab from ${fromCity} to ${toCity} at ₹11/km. 24/7 support. Call +91 8077230221.`,
    alternates: {
      canonical: `https://sambhujitravels.in/${from}-to-${to}-cab`,
    },
    openGraph: {
      title: `${fromCity} to ${toCity} Taxi | Shambhu ji Travels`,
      description: `Premium one-way & round trip taxi service from ${fromCity} to ${toCity}. Sedan, SUV & Innova Crysta.`,
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

  // Get dynamic unique details
  const distance = routeData?.distance || 200
  const time = routeData?.time || '4-5 hours'
  const details = generateDynamicRouteDetails(from, to, distance, time)

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
      <FAQJsonLd faqs={details.faqs} />

      <Header />
      <main className="bg-gray-50/50">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center text-sm text-blue-200 mb-4 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span>{fromCity} to {toCity} Taxi</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              {fromCity} to {toCity} Cab Service
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-3xl mb-8 leading-relaxed">
              {details.intro}
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl flex items-center shadow-sm">
                <MapPin size={20} className="mr-3 text-accent" />
                <div>
                  <span className="block text-xs text-blue-200">Distance</span>
                  <span className="font-bold text-sm md:text-base">{distance} km</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl flex items-center shadow-sm">
                <Clock size={20} className="mr-3 text-accent" />
                <div>
                  <span className="block text-xs text-blue-200">Duration</span>
                  <span className="font-bold text-sm md:text-base">{time}</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-xl flex items-center shadow-sm">
                <Car size={20} className="mr-3 text-accent" />
                <div>
                  <span className="block text-xs text-blue-200">Sedan Rate</span>
                  <span className="font-bold text-sm md:text-base">₹11/km</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
                
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                      {fromCity} to {toCity} Fare Details
                    </h2>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200">
                      Guaranteed Best Price
                    </span>
                  </div>
                  
                  {/* Table for Desktop */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-100">
                          <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Vehicle Class</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Capacity</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-600 text-sm">Rate per KM</th>
                          <th className="text-right py-3 px-4 font-semibold text-gray-600 text-sm">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-bold text-gray-800">AC Sedan</div>
                            <div className="text-xs text-gray-500">Swift Dzire, Etios or similar</div>
                          </td>
                          <td className="py-4 px-4 text-gray-600 text-sm">4 Passengers</td>
                          <td className="py-4 px-4 font-extrabold text-accent">₹11/km</td>
                          <td className="py-4 px-4 text-right">
                            <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20Sedan%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-accent transition-colors shadow-sm">
                              Book Dzire
                            </a>
                          </td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors bg-blue-50/20">
                          <td className="py-4 px-4">
                            <div className="font-bold text-gray-800">AC SUV</div>
                            <div className="text-xs text-gray-500">Ertiga, Triber or similar</div>
                          </td>
                          <td className="py-4 px-4 text-gray-600 text-sm">6 Passengers</td>
                          <td className="py-4 px-4 font-extrabold text-accent">₹13/km</td>
                          <td className="py-4 px-4 text-right">
                            <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20SUV%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-accent transition-colors shadow-sm">
                              Book Ertiga
                            </a>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50/50 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-bold text-gray-800">Innova Crysta</div>
                            <div className="text-xs text-gray-500">Premium Luxury SUV</div>
                          </td>
                          <td className="py-4 px-4 text-gray-600 text-sm">7 Passengers</td>
                          <td className="py-4 px-4 font-extrabold text-accent">₹18/km</td>
                          <td className="py-4 px-4 text-right">
                            <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20an%20Innova%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-accent transition-colors shadow-sm">
                              Book Innova
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Card List for Mobile */}
                  <div className="block sm:hidden space-y-4">
                    <div className="border border-gray-150 rounded-xl p-4 bg-gray-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-gray-800 text-sm">Sedan (Swift Dzire)</span>
                        <span className="text-accent font-extrabold text-sm">₹11/km</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Capacity: 4 Passengers (AC Cabs)</div>
                      <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20Sedan%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-accent transition-colors shadow">Book Dzire</a>
                    </div>
                    <div className="border border-gray-150 rounded-xl p-4 bg-blue-50/20">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-gray-800 text-sm">SUV (Ertiga)</span>
                        <span className="text-accent font-extrabold text-sm">₹13/km</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Capacity: 6 Passengers (Family Cab)</div>
                      <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20SUV%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-accent transition-colors shadow">Book Ertiga</a>
                    </div>
                    <div className="border border-gray-150 rounded-xl p-4 bg-gray-50/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-gray-800 text-sm">Innova Crysta</span>
                        <span className="text-accent font-extrabold text-sm">₹18/km</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">Capacity: 7 Passengers (Premium Seat)</div>
                      <a href={`https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20an%20Innova%20from%20${fromCity}%20to%20${toCity}`} target="_blank" rel="noopener noreferrer" className="w-full block text-center bg-primary text-white py-2 rounded-lg font-bold text-xs hover:bg-accent transition-colors shadow">Book Innova</a>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 leading-normal">
                    * Rates exclude state border permits, highway toll plazas, and parking fees, which are billed on actual receipts. We do not apply flat toll commissions.
                  </p>
                </div>

                {/* Travel Advisory Guide */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6 space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 flex items-center">
                      <Compass className="text-primary mr-2" size={22} />
                      Route Driving Advisory
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {details.travelGuide}
                    </p>
                  </div>

                  {/* Advisory Notice Box */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
                    <AlertTriangle className="text-amber-600 shrink-0 mt-0.5" size={18} />
                    <div className="text-xs md:text-sm text-amber-800">
                      <strong className="block font-semibold mb-0.5">Safety Precaution:</strong>
                      Always coordinate with your driver prior to departure regarding any customized route deviations. All our drivers are GPS monitored.
                    </div>
                  </div>
                </div>

                {/* Best Stopovers / Pitstops */}
                {details.bestStops && details.bestStops.length > 0 && (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center">
                      <MapPin className="text-primary mr-2" size={22} />
                      Recommended Food & Rest Stops
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {details.bestStops.map((stop, index) => (
                        <div key={index} className="border border-gray-100 rounded-xl p-4 bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs shrink-0">
                              {index + 1}
                            </span>
                            <span className="font-bold text-gray-800 text-sm md:text-base">{stop.name}</span>
                          </div>
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed pl-8">
                            {stop.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Highway Details (Road, Toll, Fuel) */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-5 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-primary mb-4">
                        <Car size={20} />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-2">Road Conditions</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {details.roadCondition}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-5 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mb-4">
                        <Info size={20} />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-2">Tolls & Permits</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {details.tollInfo}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-5 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
                        <Fuel size={20} />
                      </div>
                      <h4 className="font-bold text-gray-800 text-sm mb-2">Refueling & CNG</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {details.fuelPoints}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tourist Attractions & Seasons */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <Compass className="text-primary mr-2" size={18} />
                      Attractions in {toCity}
                    </h3>
                    <ul className="space-y-2">
                      {details.touristPlaces.map((place, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 shrink-0"></span>
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                    <h3 className="text-base md:text-lg font-bold text-gray-800 mb-4 flex items-center">
                      <CalendarCheck className="text-primary mr-2" size={18} />
                      Best Season & Weather
                    </h3>
                    <div className="space-y-3">
                      <div className="text-sm text-gray-700">
                        <strong className="block text-gray-800 font-semibold mb-0.5">Peak Travel Time:</strong>
                        {details.bestTravelTime}
                      </div>
                      <div className="text-sm text-gray-700">
                        <strong className="block text-gray-800 font-semibold mb-0.5">Seasonal Notes:</strong>
                        {details.seasonalNotes}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dynamic FAQ Accordion */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-150 p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                    {fromCity} to {toCity} Cab FAQs
                  </h2>
                  <div className="space-y-4">
                    {details.faqs.map((faq, index) => (
                      <details key={index} className="bg-gray-50 rounded-xl border border-gray-150 group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800 hover:text-primary transition-colors text-sm md:text-base select-none">
                          {faq.question}
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Sidebar */}
              <div className="space-y-6 order-1 lg:order-2">
                <div className="sticky top-24">
                  {/* Booking Widget Container */}
                  <div className="relative">
                    <BookingForm />
                  </div>

                  {/* Quick Booking Credential */}
                  <div className="mt-6 bg-primary text-white p-6 rounded-2xl text-center shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full transform translate-x-8 -translate-y-8"></div>
                    <ShieldCheck className="mx-auto text-accent mb-3" size={32} />
                    <h3 className="font-bold text-lg mb-1">Need Booking Support?</h3>
                    <p className="text-blue-200 text-xs mb-4">We are online 24/7. Response in 2 minutes.</p>
                    <a
                      href="tel:+918077230221"
                      className="flex items-center justify-center bg-accent hover:bg-green-600 text-white py-3 px-6 rounded-xl font-bold transition-all shadow-md text-sm"
                    >
                      <Phone size={18} className="mr-2" />
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
          <section className="py-16 bg-gray-100/50 border-t border-gray-200">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Travel Routes from {fromCity}</h2>
              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {relatedRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={`/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md hover:border-accent transition-all border border-gray-200 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2 text-[10px] uppercase font-bold tracking-wider text-gray-400">
                        <span>{route.from}</span>
                        <ArrowRight size={10} className="text-accent" />
                        <span>{route.to}</span>
                      </div>
                      <div className="font-bold text-gray-800 group-hover:text-primary transition-colors text-sm">
                        {route.from} to {route.to}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-50">
                      <span className="text-[11px] font-semibold text-gray-500">{route.distance} km</span>
                      <span className="text-accent font-extrabold text-[11px]">₹11/km</span>
                    </div>
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

