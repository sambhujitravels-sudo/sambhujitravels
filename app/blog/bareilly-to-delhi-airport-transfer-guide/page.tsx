import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft, Plane } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly to Delhi Airport Taxi | IGI Airport Transfer Guide 2026',
  description: 'Book Bareilly to Delhi Airport taxi at ₹11/km. Distance 260 km, 5-6 hours. Terminal 1, 2, 3 drop. Early morning & late night service. Call +91 8077230221.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/bareilly-to-delhi-airport-transfer-guide',
  },
}

const faqs = [
  {
    question: 'How far is Delhi Airport from Bareilly?',
    answer: 'Delhi Indira Gandhi International Airport (IGI) is approximately 260 km from Bareilly. The journey takes 5-6 hours depending on traffic conditions.',
  },
  {
    question: 'What is the taxi fare from Bareilly to Delhi Airport?',
    answer: 'The taxi fare depends on the vehicle type. Sedan (Swift Dzire) costs ₹11/km, SUV (Ertiga) costs ₹13/km, and Innova Crysta costs ₹18/km. Toll charges are extra.',
  },
  {
    question: 'Can I book a taxi for early morning flight from Bareilly?',
    answer: 'Yes, we provide 24/7 service including early morning and late night pickups. For a 6 AM flight, we recommend leaving Bareilly by midnight to account for traffic and check-in time.',
  },
  {
    question: 'Which terminal will the taxi drop me at Delhi Airport?',
    answer: 'Our drivers can drop you at Terminal 1, 2, or 3 based on your airline. Please share your flight details while booking so we can confirm the correct terminal.',
  },
]

export default function BlogPost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Delhi Airport Transfer Guide', url: 'https://sambhujitravels.in/blog/bareilly-to-delhi-airport-transfer-guide' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
            alt="Airplane at airport terminal"
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
                Airport Transfer
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Bareilly to Delhi Airport Taxi: Complete Transfer Guide 2026
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center"><Calendar size={14} className="mr-1" />April 15, 2026</span>
                <span className="flex items-center"><Clock size={14} className="mr-1" />8 min read</span>
              </div>
            </div>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Planning to catch a flight from Delhi? This guide covers everything you need to know about booking a taxi from Bareilly to Delhi IGI Airport — route options, timing, terminal information, and booking tips.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Route & Distance</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Distance:</strong> 260 km (via NH9)</li>
                    <li><strong>Travel Time:</strong> 5-6 hours</li>
                    <li><strong>Best Route:</strong> Bareilly → Moradabad → Ghaziabad → Delhi Airport</li>
                    <li><strong>Toll Plazas:</strong> 3-4 toll booths on the way</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Delhi Airport Terminals</h2>
                <p className="text-gray-600 mb-4">
                  Delhi IGI Airport has three terminals. Make sure you know which terminal your flight departs from:
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Terminal 1 (T1)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Domestic flights: IndiGo, SpiceJet, GoFirst</li>
                  <li>Located separately from T2 and T3</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Terminal 2 (T2)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Some domestic airlines during peak hours</li>
                  <li>Connected to T3 by walkway</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Terminal 3 (T3)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All international flights</li>
                  <li>Air India, Vistara domestic flights</li>
                  <li>Premium terminal with best facilities</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">When to Leave Bareilly</h2>
                <p className="text-gray-600 mb-4">
                  Plan your departure based on your flight time. We recommend:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Flight Time</th>
                        <th className="text-left py-2">Leave Bareilly By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">6:00 AM</td>
                        <td className="py-2">11:00 PM (previous night)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">9:00 AM</td>
                        <td className="py-2">2:00 AM</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">12:00 PM</td>
                        <td className="py-2">5:00 AM</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">6:00 PM</td>
                        <td className="py-2">10:00 AM</td>
                      </tr>
                      <tr>
                        <td className="py-2">10:00 PM</td>
                        <td className="py-2">2:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  * Add extra 1-2 hours buffer during monsoon or fog season (Dec-Jan)
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tips for Airport Transfer</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Share your flight details with the driver for terminal confirmation</li>
                  <li>Keep toll money ready (approximately ₹400-500)</li>
                  <li>Carry snacks and water for the journey</li>
                  <li>Check live traffic on Google Maps before leaving</li>
                  <li>Keep driver&apos;s number saved for coordination</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <div className="flex items-center mb-2">
                    <Plane size={24} className="text-accent mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">Book Airport Taxi</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Reliable Bareilly to Delhi Airport taxi service. 24/7 availability, experienced drivers.
                  </p>
                  <a href="tel:+918077230221" className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    <Phone size={18} className="mr-2" />
                    Call +91 8077230221
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="bg-gray-50 rounded-lg border border-gray-200 group">
                      <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800">
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

              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Book Airport Transfer</h3>
                    <p className="text-blue-200 text-sm mb-4">24/7 service to all terminals</p>
                    <a href="https://wa.me/918077230221?text=Hi%2C%20I%20need%20taxi%20from%20Bareilly%20to%20Delhi%20Airport" target="_blank" rel="noopener noreferrer" className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors">
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center">
                        <MapPin size={16} className="mr-2 text-primary" />
                        260 km distance
                      </li>
                      <li className="flex items-center">
                        <Clock size={16} className="mr-2 text-primary" />
                        5-6 hours journey
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Related Routes</h3>
                    <ul className="space-y-3 text-sm">
                      <li><Link href="/bareilly-to-delhi-cab" className="text-primary hover:text-accent">Bareilly to Delhi →</Link></li>
                      <li><Link href="/bareilly-to-noida-cab" className="text-primary hover:text-accent">Bareilly to Noida →</Link></li>
                      <li><Link href="/bareilly-to-gurgaon-cab" className="text-primary hover:text-accent">Bareilly to Gurgaon →</Link></li>
                    </ul>
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
