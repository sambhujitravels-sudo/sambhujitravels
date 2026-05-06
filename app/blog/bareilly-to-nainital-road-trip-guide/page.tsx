import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly to Nainital Road Trip Guide 2026 | Route, Time & Tips',
  description: 'Complete guide for Bareilly to Nainital road trip. Best route via Haldwani, travel time (4 hours), pit stops, what to pack, and taxi booking tips. Distance: 150 km.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/bareilly-to-nainital-road-trip-guide',
  },
  openGraph: {
    title: 'Bareilly to Nainital Road Trip Guide 2026',
    description: '150 km journey through Kumaon hills. Best route, travel time, and tips for your Nainital trip from Bareilly.',
    url: 'https://sambhujitravels.in/blog/bareilly-to-nainital-road-trip-guide',
  },
}

const faqs = [
  {
    question: 'How far is Nainital from Bareilly?',
    answer: 'Nainital is approximately 150 km from Bareilly. The journey takes about 4 hours by car via Haldwani.',
  },
  {
    question: 'What is the best route from Bareilly to Nainital?',
    answer: 'The best route is Bareilly → Rudrapur → Haldwani → Kathgodam → Nainital. This route is well-maintained and offers scenic views in the last stretch.',
  },
  {
    question: 'What is the taxi fare from Bareilly to Nainital?',
    answer: 'One-way taxi fare from Bareilly to Nainital starts at ₹1,650 for a Sedan (₹11/km). SUV costs ₹1,950 and Innova Crysta costs ₹2,700.',
  },
  {
    question: 'Is it safe to drive to Nainital at night?',
    answer: 'Driving to Nainital at night is not recommended, especially the ghat section after Kathgodam. The mountain roads have sharp turns and limited visibility. Plan to travel during daylight hours.',
  },
]

export default function BlogPost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Bareilly to Nainital Guide', url: 'https://sambhujitravels.in/blog/bareilly-to-nainital-road-trip-guide' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="Nainital Lake surrounded by mountains"
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
                Road Trip Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Bareilly to Nainital Road Trip: Complete Travel Guide 2026
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 1, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  8 min read
                </span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  150 km · 4 hours
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Planning a trip to Nainital from Bareilly? This comprehensive guide covers everything you need to know — the best route, travel time, pit stops, what to pack, and tips for a comfortable journey to the beautiful lake city of Uttarakhand.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Route Overview</h2>
                <p className="text-gray-600 mb-4">
                  The journey from Bareilly to Nainital covers approximately <strong>150 kilometers</strong> and takes around <strong>4 hours</strong> by car. The route passes through the plains of Uttar Pradesh before ascending into the Kumaon hills.
                </p>

                <div className="bg-blue-50 border-l-4 border-primary p-4 my-6">
                  <p className="font-semibold text-gray-800">Recommended Route:</p>
                  <p className="text-gray-600">Bareilly → Rudrapur (45 km) → Haldwani (30 km) → Kathgodam (5 km) → Nainital (35 km)</p>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Best Time to Travel</h2>
                <p className="text-gray-600 mb-4">
                  The best time to visit Nainital is from <strong>March to June</strong> for pleasant weather and <strong>September to November</strong> for clear skies and lake views. Avoid the monsoon season (July-August) due to landslide risks on mountain roads.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Summer (Mar-Jun):</strong> 10-27°C, ideal for boating and sightseeing</li>
                  <li><strong>Monsoon (Jul-Aug):</strong> Heavy rainfall, road closures possible</li>
                  <li><strong>Autumn (Sep-Nov):</strong> 10-20°C, clear views, fewer crowds</li>
                  <li><strong>Winter (Dec-Feb):</strong> 0-15°C, possible snowfall, cold nights</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Road Conditions</h2>
                <p className="text-gray-600 mb-4">
                  The route is well-maintained for most of the journey:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Bareilly to Haldwani:</strong> Excellent highway, flat terrain, 4-lane roads</li>
                  <li><strong>Haldwani to Kathgodam:</strong> Good condition, light traffic</li>
                  <li><strong>Kathgodam to Nainital:</strong> Mountain road with hairpin bends, well-maintained but requires careful driving</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Suggested Pit Stops</h2>
                <ol className="list-decimal pl-6 text-gray-600 space-y-3">
                  <li>
                    <strong>Rudrapur (45 km from Bareilly)</strong>
                    <p className="text-sm">Good for a tea break. Multiple dhabas and restaurants available.</p>
                  </li>
                  <li>
                    <strong>Haldwani (75 km from Bareilly)</strong>
                    <p className="text-sm">Last major town before hills. Stock up on snacks, use restrooms, fuel up.</p>
                  </li>
                  <li>
                    <strong>Kathgodam (80 km from Bareilly)</strong>
                    <p className="text-sm">Gateway to Kumaon. Railway station here if returning by train.</p>
                  </li>
                </ol>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What to Pack</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Light woolens (even in summer, evenings are cool)</li>
                  <li>Rain jacket or umbrella (weather changes quickly)</li>
                  <li>Comfortable walking shoes</li>
                  <li>Motion sickness medicine (for the ghat section)</li>
                  <li>Sunscreen and sunglasses</li>
                  <li>Camera for scenic views</li>
                  <li>Snacks and water bottles</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Taxi vs Self-Drive</h2>
                <p className="text-gray-600 mb-4">
                  While you can self-drive to Nainital, hiring a taxi has several advantages:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Experienced hill drivers:</strong> Our drivers know the mountain roads well</li>
                  <li><strong>No parking hassle:</strong> Parking in Nainital is limited and expensive</li>
                  <li><strong>Relaxed journey:</strong> Enjoy the scenic views without driving stress</li>
                  <li><strong>Local knowledge:</strong> Drivers can recommend good stops and restaurants</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Your Nainital Trip</h3>
                  <p className="text-gray-600 mb-4">
                    One-way taxi from Bareilly to Nainital starts at just <strong>₹1,650</strong> for Sedan.
                    SUV available for family trips.
                  </p>
                  <a
                    href="tel:+918077230221"
                    className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    <Phone size={18} className="mr-2" />
                    Call +91 8077230221
                  </a>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Frequently Asked Questions</h2>
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

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Quick Facts */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-500">Distance</span>
                        <span className="font-medium">150 km</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Travel Time</span>
                        <span className="font-medium">4 hours</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Sedan Fare</span>
                        <span className="font-medium text-accent">₹1,650</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">SUV Fare</span>
                        <span className="font-medium text-accent">₹1,950</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Best Time</span>
                        <span className="font-medium">Mar-Jun</span>
                      </li>
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Ready to Book?</h3>
                    <p className="text-blue-200 text-sm mb-4">Get instant quote on WhatsApp</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20from%20Bareilly%20to%20Nainital"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>

                  {/* Related */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Related Routes</h3>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <Link href="/bareilly-to-jimcorbett-cab" className="text-primary hover:text-accent">
                          Bareilly to Jim Corbett →
                        </Link>
                      </li>
                      <li>
                        <Link href="/bareilly-to-rishikesh-cab" className="text-primary hover:text-accent">
                          Bareilly to Rishikesh →
                        </Link>
                      </li>
                      <li>
                        <Link href="/bareilly-to-dehradun-cab" className="text-primary hover:text-accent">
                          Bareilly to Dehradun →
                        </Link>
                      </li>
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
