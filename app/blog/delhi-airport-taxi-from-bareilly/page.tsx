import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, Plane, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Delhi Airport Taxi from Bareilly | IGI Airport Transfers',
  description: 'Book a direct, reliable Delhi Airport (IGI) taxi from Bareilly. Save on one-way drop fares starting at ₹2,750. 24/7 service. Flight tracking included.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/delhi-airport-taxi-from-bareilly',
  },
}

const faqs = [
  {
    question: 'Which terminal at Delhi Airport do you drop passengers?',
    answer: 'We drop passengers at all active terminals of Indira Gandhi International Airport: Terminal 1, Terminal 2, and Terminal 3. Simply mention your airline and terminal to your driver.',
  },
  {
    question: 'How long does it take from Bareilly to Delhi Airport?',
    answer: 'The journey typically takes 5 to 5.5 hours, depending on Delhi-NCR entry traffic. We recommend leaving 7-8 hours before your flight departure time.',
  },
]

export default function DelhiAirportTaxiFromBareilly() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Delhi Airport Taxi from Bareilly', url: 'https://sambhujitravels.in/blog/delhi-airport-taxi-from-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      
      <main>
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="Delhi airport transfer banner"
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
                Airport Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Delhi Airport (IGI) Taxi from Bareilly: Timing & Booking Tips
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 16, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  6 min read
                </span>
                <span className="flex items-center">
                  <Plane size={14} className="mr-1" />
                  IGI Airport Drops
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
                  Traveling for an international flight can be stressful. Catching a punctual, comfortable taxi from Bareilly to Delhi Airport is the easiest way to travel. Let&apos;s talk about travel times and coordination.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Travel Time & Recommended Departures</h2>
                <p className="text-gray-650 mb-4">
                  The distance from Bareilly to Indira Gandhi International Airport (DEL) is approximately 255 kilometers. Under ordinary traffic conditions, this takes roughly 5 to 5.5 hours. However, Delhi-NCR entry routes and expressway traffic can cause delays during peak business hours.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Domestic Flights:</strong> Leave Bareilly at least 8 hours prior to flight departure.</li>
                  <li><strong>International Flights:</strong> Leave Bareilly at least 9-10 hours prior to flight departure to account for check-in lines and security.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">One-Way Drops vs Round Trips</h2>
                <p className="text-gray-600 mb-4">
                  We specialize in one-way airport drops. You pay only for the one-way distance traveled (starts at ₹2,750 for Sedan), which is 50% cheaper than traditional round-trip taxi services that charge for return mileage.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Terminal Directions</h2>
                <p className="text-gray-600 mb-4">
                  Our chauffeurs are familiar with the lanes and entry points of all three active terminals:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Terminal 1 (T1):</strong> Mostly domestic flights (IndiGo, SpiceJet).</li>
                  <li><strong>Terminal 2 (T2):</strong> Domestic low-cost airlines.</li>
                  <li><strong>Terminal 3 (T3):</strong> International flights and full-service domestic airlines (Air India, Vistara).</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Secure Your Airport Cab</h3>
                  <p className="text-gray-600 mb-4">
                    Book a dedicated sedan from Bareilly to IGI Airport starting at <strong>₹2,750</strong>. Free flight delay monitoring included.
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
                    <h3 className="font-bold text-gray-800 mb-4">Airport Cab Fares</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-500">AC Sedan Dzire</span>
                        <span className="font-extrabold text-accent">₹2,750</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">AC SUV Ertiga</span>
                        <span className="font-extrabold text-accent">₹3,250</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Innova Crysta</span>
                        <span className="font-extrabold text-accent">₹4,500</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Book on WhatsApp</h3>
                    <p className="text-blue-200 text-sm mb-4">Fast confirmation & zero advance payments.</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20delhi%20airport%20transfer"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp Us
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
