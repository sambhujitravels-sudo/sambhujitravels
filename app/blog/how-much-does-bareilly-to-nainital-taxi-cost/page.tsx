import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly to Nainital Taxi Fare Guide 2026 | Rates & Tolls',
  description: 'How much does a taxi from Bareilly to Nainital cost? Get detailed fare matrix for Sedan, SUV & Innova Crysta. Learn about tolls, route guide, and FAQ.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/how-much-does-bareilly-to-nainital-taxi-cost',
  },
}

const faqs = [
  {
    question: 'What is the starting fare for a taxi from Bareilly to Nainital?',
    answer: 'The starting taxi fare for a one-way AC Sedan from Bareilly to Nainital is ₹2,200. This is calculated based on the distance of approximately 140 km at ₹11/km. Tolls and parking are extra.',
  },
  {
    question: 'How much does an SUV Ertiga cost from Bareilly to Nainital?',
    answer: 'A one-way AC SUV (Ertiga) from Bareilly to Nainital starts at ₹2,800 (calculated at ₹13/km). This vehicle is ideal for families of up to 6 people traveling with luggage.',
  },
  {
    question: 'Are there hill driving charges or state taxes for Nainital?',
    answer: 'Our per-kilometer pricing includes driver allowance and hill driving charges. However, local parking fees and Nainital toll/barrier entry tax (approx. ₹100-₹200) are paid by the customer.',
  },
]

export default function BareillyToNainitalTaxiCost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Bareilly to Nainital Taxi Cost', url: 'https://sambhujitravels.in/blog/how-much-does-bareilly-to-nainital-taxi-cost' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      
      <main>
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="Bareilly to Nainital taxi ride banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/30" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-4 text-sm">
                <ArrowLeft size={16} className="mr-1" />
                Back to Blog
              </Link>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider block mb-2">
                Pricing & Travel Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                How Much Does a Bareilly to Nainital Taxi Cost? (2026 Fare Guide)
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 20, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  5 min read
                </span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  140 km · 4 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Nainital, the queen of lakes, is a classic hill getaway just 140 km away from Bareilly. If you are planning a trip, booking a private taxi offers the ultimate comfort and flexibility. Here is an honest guide to Bareilly to Nainital cab costs, route details, and tips for mountain driving.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Bareilly to Nainital Taxi Fares (One-Way)</h2>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border border-gray-150 rounded-xl">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 font-semibold text-gray-700">Vehicle Type</th>
                        <th className="p-3 font-semibold text-gray-700">Per KM Rate</th>
                        <th className="p-3 font-semibold text-gray-700">Estimated Fare</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">AC Sedan (Swift Dzire / Etios)</td>
                        <td className="p-3 text-accent font-bold">₹11 / km</td>
                        <td className="p-3">₹2,200 + tolls</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">AC SUV (Ertiga / Mobilio)</td>
                        <td className="p-3 text-accent font-bold">₹13 / km</td>
                        <td className="p-3">₹2,800 + tolls</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Innova Crysta (Premium SUV)</td>
                        <td className="p-3 text-accent font-bold">₹18 / km</td>
                        <td className="p-3">₹3,800 + tolls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Route Breakdown & Road Conditions</h2>
                <p className="text-gray-600 mb-4">
                  The most preferred route from Bareilly to Nainital is:
                </p>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                  <p className="font-semibold text-gray-800 mb-2">Bareilly → Baheri → Kichha → Haldwani → Kathgodam → Nainital</p>
                  <p className="text-gray-600 text-sm">
                    This route is approximately 140 km and takes about 3.5 to 4 hours. The highway is mostly in great condition. The uphill climb starts after Kathgodam and spans about 35 km of scenic, winding mountain roads.
                  </p>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Toll Plazas & Local Taxes</h2>
                <p className="text-gray-600 mb-4">
                  While traveling, there are a few minor toll plazas and entry points:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Lalkuan/Kathgodam Toll:</strong> Around ₹50.</li>
                  <li><strong>Nainital Mall Road Entry Toll:</strong> Around ₹100 for outstation private commercial vehicles.</li>
                  <li><strong>Kathgodam bypass barrier:</strong> Minor state forest tax.</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  All highway tolls are scanned seamlessly via FASTag. Mall road and parking charges must be paid in cash/UPI directly by the passenger.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Shambhu Ji Travels is Perfect for Hill Station Trips</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Experienced Mountain Drivers:</strong> Hill driving requires special skills. Our drivers are highly trained in handling steep climbs and winding hairpin bends safely.</li>
                  <li><strong>No Hidden Charges:</strong> Driver night allowance and hill charges are built into our per-kilometer rate. No surprises at the end of your trip.</li>
                  <li><strong>Fully Maintained AC Vehicles:</strong> Mountain travel can be tiring. Our vehicles have excellent suspension, cooling, and are cleaned thoroughly before every departure.</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Your Hill Trip Today</h3>
                  <p className="text-gray-600 mb-4">
                    Get an instant quote for your Nainital trip. Choose from our well-maintained fleet starting at <strong>₹2,200</strong> one-way.
                  </p>
                  <a
                    href="tel:+918077230221"
                    className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    Call +91 8077230221
                  </a>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Route Quick Facts</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-500">Distance</span>
                        <span className="font-medium">140 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Travel Time</span>
                        <span className="font-medium">3.5 - 4 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Terrain</span>
                        <span className="font-medium">Plains & Hill Road</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Major Cities Crossed</span>
                        <span className="font-medium">Baheri, Haldwani</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Quick Booking via WhatsApp</h3>
                    <p className="text-blue-200 text-sm mb-4">Send a message and book your ride to Nainital in less than 2 minutes.</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Bareilly%20to%20Nainital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp Booking
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  )
}
