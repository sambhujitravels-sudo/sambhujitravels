import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, MapPin, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Time for Char Dham Yatra 2026 from Bareilly | Season Guide',
  description: 'Plan your Char Dham Yatra from Bareilly. Best months to visit Kedarnath, Badrinath, Gangotri, Yamunotri. Season dates, weather, road conditions & taxi booking.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/best-time-char-dham-yatra-from-bareilly',
  },
}

const faqs = [
  {
    question: 'When does Char Dham Yatra season start in 2026?',
    answer: 'Char Dham Yatra typically starts in late April or early May. The exact dates are announced by the temple committees. Kedarnath usually opens on Akshaya Tritiya.',
  },
  {
    question: 'Which is the best month for Char Dham Yatra?',
    answer: 'May-June and September-October are the best months. May-June has good weather but crowds. September-October has fewer crowds and clear skies but colder nights.',
  },
  {
    question: 'Can I do Char Dham from Bareilly by taxi?',
    answer: 'Yes, Shambhu ji Travels provides Char Dham Yatra taxi packages from Bareilly. We offer experienced hill drivers and comfortable vehicles for the pilgrimage.',
  },
]

export default function BlogPost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Char Dham Yatra Guide', url: 'https://sambhujitravels.in/blog/best-time-char-dham-yatra-from-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=1600&q=80"
            alt="Kedarnath Temple in the Himalayas"
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
                Pilgrimage Guide
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Best Time for Char Dham Yatra from Bareilly (2026 Season Guide)
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center"><Calendar size={14} className="mr-1" />April 20, 2026</span>
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
                  Planning Char Dham Yatra from Bareilly? This guide covers the best time to visit all four dhams — Kedarnath, Badrinath, Gangotri, and Yamunotri — with season dates, weather conditions, and travel tips.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2026 Char Dham Season Dates (Expected)</h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>Yamunotri:</strong> Opens early May, closes Diwali</li>
                    <li><strong>Gangotri:</strong> Opens Akshaya Tritiya, closes Diwali</li>
                    <li><strong>Kedarnath:</strong> Opens Akshaya Tritiya, closes Bhai Dooj</li>
                    <li><strong>Badrinath:</strong> Opens early May, closes mid-November</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Best Months to Visit</h2>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">May - June (Peak Season)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Weather: Pleasant days, mild nights</li>
                  <li>Pros: Roads fully open, all facilities available</li>
                  <li>Cons: Heavy crowds, higher prices, advance booking needed</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3">September - October (Recommended)</h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Weather: Clear skies, colder nights</li>
                  <li>Pros: Fewer crowds, better views, easier darshan</li>
                  <li>Cons: Colder temperatures, need warm clothing</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Route from Bareilly</h2>
                <p className="text-gray-600 mb-4">
                  The typical Char Dham route from Bareilly:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                  <li><strong>Day 1:</strong> Bareilly → Haridwar (200 km, 5 hrs)</li>
                  <li><strong>Day 2:</strong> Haridwar → Barkot (Yamunotri base)</li>
                  <li><strong>Day 3:</strong> Yamunotri darshan</li>
                  <li><strong>Day 4:</strong> Barkot → Uttarkashi (Gangotri base)</li>
                  <li><strong>Day 5:</strong> Gangotri darshan</li>
                  <li><strong>Day 6-7:</strong> Uttarkashi → Guptkashi (Kedarnath base)</li>
                  <li><strong>Day 8:</strong> Kedarnath darshan (trek/helicopter)</li>
                  <li><strong>Day 9-10:</strong> Guptkashi → Badrinath</li>
                  <li><strong>Day 11:</strong> Badrinath darshan → Joshimath</li>
                  <li><strong>Day 12:</strong> Return to Bareilly</li>
                </ol>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Char Dham Taxi from Bareilly</h3>
                  <p className="text-gray-600 mb-4">
                    We provide complete Char Dham Yatra taxi service with experienced hill drivers.
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
                    <h3 className="font-bold mb-2">Plan Your Yatra</h3>
                    <p className="text-blue-200 text-sm mb-4">Get customized Char Dham package</p>
                    <a href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20plan%20Char%20Dham%20Yatra%20from%20Bareilly" target="_blank" rel="noopener noreferrer" className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors">
                      WhatsApp Us
                    </a>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Related Routes</h3>
                    <ul className="space-y-3 text-sm">
                      <li><Link href="/bareilly-to-haridwar-cab" className="text-primary hover:text-accent">Bareilly to Haridwar →</Link></li>
                      <li><Link href="/bareilly-to-kedarnath-cab" className="text-primary hover:text-accent">Bareilly to Kedarnath →</Link></li>
                      <li><Link href="/bareilly-to-badrinath-cab" className="text-primary hover:text-accent">Bareilly to Badrinath →</Link></li>
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
