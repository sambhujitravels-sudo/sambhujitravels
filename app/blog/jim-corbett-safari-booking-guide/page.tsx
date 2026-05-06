import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft, Trees } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Jim Corbett Safari Booking Guide 2026 | Bareilly to Corbett Taxi',
  description: 'Complete Jim Corbett National Park safari guide from Bareilly. Safari zones, booking tips, best time to visit, and taxi service. Call +91 8077230221.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/jim-corbett-safari-booking-guide',
  },
}

const faqs = [
  {
    question: 'How far is Jim Corbett from Bareilly?',
    answer: 'Jim Corbett National Park (Ramnagar gate) is approximately 120 km from Bareilly. The journey takes around 3 hours by taxi.',
  },
  {
    question: 'Which is the best zone for tiger sighting in Corbett?',
    answer: 'Dhikala zone has the highest tiger sighting probability, followed by Bijrani and Jhirna. Dhikala requires advance booking due to limited permits.',
  },
  {
    question: 'Can I book same-day safari at Jim Corbett?',
    answer: 'Same-day booking is possible only for Jhirna, Sitabani, and sometimes Bijrani zones if permits are available. Dhikala requires booking 45 days in advance.',
  },
  {
    question: 'What is included in Corbett safari cost?',
    answer: 'Safari cost includes park entry fee, jeep charges, and guide fee. The total varies by zone — Dhikala is most expensive, Jhirna is most affordable.',
  },
]

export default function BlogPost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Jim Corbett Safari Guide', url: 'https://sambhujitravels.in/blog/jim-corbett-safari-booking-guide' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1615824996195-f780bba7cfab?w=1600&q=80"
            alt="Tiger in Jim Corbett National Park"
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
                Wildlife Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Jim Corbett Safari Booking Guide 2026: Zones, Timing & Tips
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center"><Calendar size={14} className="mr-1" />April 25, 2026</span>
                <span className="flex items-center"><Clock size={14} className="mr-1" />12 min read</span>
              </div>
            </div>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Jim Corbett National Park is India&apos;s oldest national park and a top destination for tiger spotting. This guide covers safari zones, booking process, best visiting time, and how to plan your trip from Bareilly.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Safari Zones Overview</h2>
                <p className="text-gray-600 mb-4">
                  Jim Corbett has 6 safari zones, each with different terrain and wildlife density:
                </p>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Dhikala Zone (Best for Tigers)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Largest zone with highest tiger population</li>
                  <li>Only zone with overnight stay option</li>
                  <li>Requires 45-day advance booking</li>
                  <li>Open: November 15 to June 15</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Bijrani Zone</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Good tiger sighting probability</li>
                  <li>Beautiful sal forest and grasslands</li>
                  <li>Day visits only, no overnight stay</li>
                  <li>Open: October 15 to June 30</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Jhirna Zone</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Open year-round (only zone open in monsoon)</li>
                  <li>Best for elephants and deer</li>
                  <li>Easier to get same-day permits</li>
                  <li>Good for first-time visitors</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Durga Devi Zone</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Hilly terrain along Ramganga river</li>
                  <li>Best for bird watching</li>
                  <li>Leopard sightings common</li>
                  <li>Open: November 15 to June 15</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Sitabani Zone</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Buffer zone (not core area)</li>
                  <li>No permit required, only entry fee</li>
                  <li>Good for nature walks and bird watching</li>
                  <li>Open year-round</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">6. Garjia Zone</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Named after Garjia Devi Temple</li>
                  <li>Elephant and deer sightings</li>
                  <li>Open: October 15 to June 30</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Best Time to Visit</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>November - February:</strong> Pleasant weather, good sightings</li>
                    <li><strong>March - May:</strong> Best tiger sightings (animals come to water)</li>
                    <li><strong>June:</strong> Hot but still open</li>
                    <li><strong>July - September:</strong> Monsoon closure (only Jhirna open)</li>
                    <li><strong>October:</strong> Park reopens, fresh greenery</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How to Book Safari</h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li>Visit official website: corbettonline.uk.gov.in</li>
                  <li>Create account with valid ID proof</li>
                  <li>Select zone, date, and safari timing (morning/evening)</li>
                  <li>Pay online via debit card/net banking</li>
                  <li>Download permit and carry original ID</li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Safari Timings</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Season</th>
                        <th className="text-left py-2">Morning</th>
                        <th className="text-left py-2">Evening</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Nov - Feb</td>
                        <td className="py-2">6:30 AM - 10:00 AM</td>
                        <td className="py-2">2:00 PM - 5:30 PM</td>
                      </tr>
                      <tr>
                        <td className="py-2">Mar - Jun</td>
                        <td className="py-2">5:30 AM - 9:30 AM</td>
                        <td className="py-2">3:00 PM - 6:30 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Getting There from Bareilly</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Distance:</strong> 120 km to Ramnagar</li>
                  <li><strong>Time:</strong> 3 hours by car</li>
                  <li><strong>Route:</strong> Bareilly → Kichha → Rudrapur → Ramnagar</li>
                  <li><strong>Tip:</strong> Start early for morning safari</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <div className="flex items-center mb-2">
                    <Trees size={24} className="text-accent mr-2" />
                    <h3 className="text-lg font-bold text-gray-800">Book Corbett Taxi</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Comfortable taxi from Bareilly to Jim Corbett. We can help plan your complete safari trip.
                  </p>
                  <a href="tel:+918077230221" className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                    <Phone size={18} className="mr-2" />
                    Call +91 8077230221
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Tips for First-Time Visitors</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Book Dhikala 45 days in advance for best experience</li>
                  <li>Wear neutral colors (green, brown, khaki)</li>
                  <li>Carry binoculars and camera with zoom lens</li>
                  <li>Maintain silence during safari</li>
                  <li>Don&apos;t stand up in the jeep</li>
                  <li>Listen to your guide&apos;s instructions</li>
                </ul>

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
                    <h3 className="font-bold mb-2">Plan Corbett Trip</h3>
                    <p className="text-blue-200 text-sm mb-4">Taxi + safari assistance</p>
                    <a href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20plan%20Jim%20Corbett%20trip%20from%20Bareilly" target="_blank" rel="noopener noreferrer" className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors">
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Quick Info</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center">
                        <MapPin size={16} className="mr-2 text-primary" />
                        120 km from Bareilly
                      </li>
                      <li className="flex items-center">
                        <Clock size={16} className="mr-2 text-primary" />
                        3 hours journey
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Related Routes</h3>
                    <ul className="space-y-3 text-sm">
                      <li><Link href="/bareilly-to-jimcorbett-cab" className="text-primary hover:text-accent">Bareilly to Jim Corbett →</Link></li>
                      <li><Link href="/bareilly-to-nainital-cab" className="text-primary hover:text-accent">Bareilly to Nainital →</Link></li>
                      <li><Link href="/bareilly-to-ramnagar-cab" className="text-primary hover:text-accent">Bareilly to Ramnagar →</Link></li>
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
