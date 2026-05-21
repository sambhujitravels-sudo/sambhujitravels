import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly to Delhi Taxi Fare Guide 2026 | Rates & Tolls Breakdown',
  description: 'Detailed pricing guide for Bareilly to Delhi taxi fare. Learn one-way & round trip prices starting ₹2,750. Compare Sedan, SUV & Innova Crysta rates.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/bareilly-to-delhi-taxi-fare',
  },
}

const faqs = [
  {
    question: 'What is the minimum cab fare from Bareilly to Delhi?',
    answer: 'The minimum cab fare for a one-way Sedan from Bareilly to Delhi starts at ₹2,750 (covering approximately 250km at ₹11/km rate). Toll taxes are extra.',
  },
  {
    question: 'How much does an SUV Ertiga cost for Bareilly to Delhi?',
    answer: 'A one-way AC SUV (Ertiga) from Bareilly to Delhi starts at ₹3,250 (calculated at ₹13/km). Toll plaza fees are billed on actuals.',
  },
  {
    question: 'Are highway toll fees included in the taxi fare?',
    answer: 'No, we keep our fares transparent by not adding flat toll markups. Toll charges are paid on actual receipts (via Fastag) as you cross the plazas.',
  },
]

export default function BareillyToDelhiTaxiFare() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Bareilly to Delhi Taxi Fare', url: 'https://sambhujitravels.in/blog/bareilly-to-delhi-taxi-fare' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      
      <main>
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="Taxi pricing guide banner"
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
                Taxi Fare Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Bareilly to Delhi Taxi Fare: Ultimate Pricing & Toll Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 18, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  6 min read
                </span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  250 km · 5 hours
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
                  Planning a road journey from Bareilly to Delhi? Understanding the total travel cost, toll expectations, and vehicle choices can help you travel comfortably. Here is an honest breakdown of the taxi fares.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fare Matrix (One-Way)</h2>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border border-gray-150 rounded-xl">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 font-semibold text-gray-700">Vehicle Category</th>
                        <th className="p-3 font-semibold text-gray-700">Per KM Rate</th>
                        <th className="p-3 font-semibold text-gray-700">Base Estimate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">AC Sedan (Swift Dzire)</td>
                        <td className="p-3 text-accent font-bold">₹11 / km</td>
                        <td className="p-3">₹2,750 + tolls</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">AC SUV (Ertiga)</td>
                        <td className="p-3 text-accent font-bold">₹13 / km</td>
                        <td className="p-3">₹3,250 + tolls</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Innova Crysta</td>
                        <td className="p-3 text-accent font-bold">₹18 / km</td>
                        <td className="p-3">₹4,500 + tolls</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Highway Route & Toll Plazas</h2>
                <p className="text-gray-600 mb-4">
                  The primary highway from Bareilly to Delhi is NH-24 / NH-9. On this route, you will cross several toll plazas:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Mirganj Toll Plaza:</strong> ~₹85</li>
                  <li><strong>Brijghat Toll Plaza:</strong> ~₹100</li>
                  <li><strong>Chhajarsi Toll Plaza:</strong> ~₹120</li>
                </ul>
                <p className="text-gray-600 mt-2">
                  Expect a total highway toll of approximately ₹300-₹350 for a one-way trip to Delhi, paid instantly via the vehicle&apos;s FASTag scanner.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Why Book with Shambhu Ji Travels?</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>GPS Monitored Rides:</strong> For absolute safety on the highway.</li>
                  <li><strong>Transparent Billing:</strong> Tolls charged on actual receipts, not estimated flat rates.</li>
                  <li><strong>Professional Crew:</strong> Polite, non-smoking, background-checked chauffeurs.</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Your Cab Today</h3>
                  <p className="text-gray-600 mb-4">
                    Book a reliable sedan from Bareilly to Delhi starting at just <strong>₹2,750</strong>. Zero advance required.
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
                        <span className="font-medium">250 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Duration</span>
                        <span className="font-medium">5 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Highway</span>
                        <span className="font-medium">NH-24 / NH-9</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Book on WhatsApp</h3>
                    <p className="text-blue-200 text-sm mb-4">Get quotes and booking confirmation instantly.</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Bareilly%20to%20Delhi"
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
