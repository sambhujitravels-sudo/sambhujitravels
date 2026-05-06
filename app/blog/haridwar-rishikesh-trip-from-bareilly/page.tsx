import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Haridwar Rishikesh Trip from Bareilly | 2-Day Itinerary & Taxi Guide',
  description: 'Plan Haridwar Rishikesh trip from Bareilly. 2-day itinerary, Ganga Aarti timings, places to visit, and taxi booking at ₹11/km. Call +91 8077230221.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/haridwar-rishikesh-trip-from-bareilly',
  },
}

const faqs = [
  {
    question: 'How far is Haridwar from Bareilly?',
    answer: 'Haridwar is approximately 200 km from Bareilly. The journey takes 4-5 hours by taxi via Moradabad and Najibabad.',
  },
  {
    question: 'Can I visit Haridwar and Rishikesh in one day from Bareilly?',
    answer: 'While possible, we recommend 2 days for a comfortable trip. One day is rushed and you may miss key experiences like evening Ganga Aarti.',
  },
  {
    question: 'What is the taxi fare from Bareilly to Haridwar?',
    answer: 'Taxi fare depends on vehicle type. Sedan costs ₹11/km, SUV ₹13/km, and Innova ₹18/km. For a round trip covering Haridwar and Rishikesh, contact us for a package quote.',
  },
  {
    question: 'What is the best time to visit Haridwar and Rishikesh?',
    answer: 'October to March offers pleasant weather. February-March has Maha Shivaratri celebrations. Avoid monsoon (July-September) due to heavy rains and landslide risk.',
  },
]

export default function BlogPost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Haridwar Rishikesh Trip', url: 'https://sambhujitravels.in/blog/haridwar-rishikesh-trip-from-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1591018653367-eade21d3a007?w=1600&q=80"
            alt="Ganga Aarti at Haridwar"
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
                Pilgrimage & Adventure
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Haridwar & Rishikesh Trip from Bareilly: Complete 2-Day Guide
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center"><Calendar size={14} className="mr-1" />April 28, 2026</span>
                <span className="flex items-center"><Clock size={14} className="mr-1" />10 min read</span>
              </div>
            </div>
          </div>
        </div>

        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600 mb-8">
                  Haridwar and Rishikesh are among the most visited spiritual destinations from Bareilly. This guide covers a perfect 2-day itinerary, must-visit places, Ganga Aarti timings, and practical travel tips.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Route & Distance</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Bareilly to Haridwar:</strong> 200 km, 4-5 hours</li>
                    <li><strong>Haridwar to Rishikesh:</strong> 25 km, 45 minutes</li>
                    <li><strong>Route:</strong> Bareilly → Moradabad → Najibabad → Haridwar</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2-Day Itinerary</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Day 1: Haridwar</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>5:00 AM:</strong> Leave Bareilly</li>
                    <li><strong>10:00 AM:</strong> Reach Haridwar, check into hotel</li>
                    <li><strong>11:00 AM:</strong> Visit Mansa Devi Temple (ropeway available)</li>
                    <li><strong>1:00 PM:</strong> Lunch at local restaurant</li>
                    <li><strong>2:30 PM:</strong> Visit Chandi Devi Temple</li>
                    <li><strong>4:30 PM:</strong> Rest at hotel</li>
                    <li><strong>6:00 PM:</strong> Ganga Aarti at Har Ki Pauri</li>
                    <li><strong>8:00 PM:</strong> Dinner, explore local market</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">Day 2: Rishikesh</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <ul className="space-y-3 text-gray-700">
                    <li><strong>7:00 AM:</strong> Breakfast, check out</li>
                    <li><strong>8:00 AM:</strong> Drive to Rishikesh</li>
                    <li><strong>9:00 AM:</strong> Ram Jhula & Lakshman Jhula</li>
                    <li><strong>11:00 AM:</strong> Visit Triveni Ghat, Parmarth Niketan</li>
                    <li><strong>1:00 PM:</strong> Lunch at cafes near Lakshman Jhula</li>
                    <li><strong>2:30 PM:</strong> Beatles Ashram (optional)</li>
                    <li><strong>4:00 PM:</strong> Start return journey to Bareilly</li>
                    <li><strong>9:00 PM:</strong> Reach Bareilly</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Places to Visit in Haridwar</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Har Ki Pauri:</strong> Main ghat for Ganga Aarti, most sacred spot</li>
                  <li><strong>Mansa Devi Temple:</strong> Hilltop temple, ropeway available</li>
                  <li><strong>Chandi Devi Temple:</strong> Another hilltop temple with city views</li>
                  <li><strong>Maya Devi Temple:</strong> One of the Shakti Peeths</li>
                  <li><strong>Daksh Mahadev Temple:</strong> Ancient Shiva temple</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Places to Visit in Rishikesh</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>Lakshman Jhula:</strong> Iconic suspension bridge</li>
                  <li><strong>Ram Jhula:</strong> Another famous bridge with temples</li>
                  <li><strong>Triveni Ghat:</strong> Confluence of three rivers</li>
                  <li><strong>Parmarth Niketan:</strong> Famous ashram with evening aarti</li>
                  <li><strong>Beatles Ashram:</strong> Where the band stayed in 1968</li>
                  <li><strong>Neelkanth Mahadev:</strong> Shiva temple (additional 30 km)</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Ganga Aarti Timings</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Haridwar (Har Ki Pauri)</h4>
                  <ul className="space-y-1 text-gray-700 mb-4">
                    <li>Summer: 7:00 PM</li>
                    <li>Winter: 6:00 PM</li>
                    <li>Arrive 30 minutes early for good spot</li>
                  </ul>
                  <h4 className="font-bold text-gray-800 mb-2">Rishikesh (Parmarth Niketan)</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>Summer: 6:30 PM</li>
                    <li>Winter: 5:30 PM</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Adventure Activities in Rishikesh</h2>
                <p className="text-gray-600 mb-4">For adventure seekers, Rishikesh offers:</p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><strong>River Rafting:</strong> 16 km, 26 km, or 36 km stretches</li>
                  <li><strong>Bungee Jumping:</strong> At Jumpin Heights</li>
                  <li><strong>Camping:</strong> Beach camps along Ganga</li>
                  <li><strong>Cliff Jumping:</strong> For experienced adventurers</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Travel Tips</h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Carry light, comfortable clothes and walking shoes</li>
                  <li>Keep separate bag for temple visits (no leather items)</li>
                  <li>Haridwar is vegetarian — no non-veg or alcohol</li>
                  <li>Carry cash as many places don&apos;t accept cards</li>
                  <li>Book hotels in advance during peak season</li>
                  <li>Hire taxi for entire trip — easier than multiple bookings</li>
                </ul>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Haridwar-Rishikesh Taxi</h3>
                  <p className="text-gray-600 mb-4">
                    Complete round trip taxi from Bareilly. Experienced drivers, comfortable AC vehicles.
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
                    <h3 className="font-bold mb-2">Book Complete Trip</h3>
                    <p className="text-blue-200 text-sm mb-4">Bareilly → Haridwar → Rishikesh</p>
                    <a href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20taxi%20for%20Haridwar%20Rishikesh%20trip%20from%20Bareilly" target="_blank" rel="noopener noreferrer" className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors">
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Trip Overview</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center">
                        <MapPin size={16} className="mr-2 text-primary" />
                        200 km to Haridwar
                      </li>
                      <li className="flex items-center">
                        <Clock size={16} className="mr-2 text-primary" />
                        2 days recommended
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Related Routes</h3>
                    <ul className="space-y-3 text-sm">
                      <li><Link href="/bareilly-to-haridwar-cab" className="text-primary hover:text-accent">Bareilly to Haridwar →</Link></li>
                      <li><Link href="/bareilly-to-rishikesh-cab" className="text-primary hover:text-accent">Bareilly to Rishikesh →</Link></li>
                      <li><Link href="/bareilly-to-dehradun-cab" className="text-primary hover:text-accent">Bareilly to Dehradun →</Link></li>
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
