import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, Award, ShieldAlert, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Best Cab Service in Bareilly | Verified Local & Outstation Taxi',
  description: 'Looking for the best cab service in Bareilly? Check why travelers prefer Shambhu Ji Travels for outstation trips, airport transfers & safe local rides.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/best-cab-service-in-bareilly',
  },
}

const faqs = [
  {
    question: 'Why is Shambhu Ji Travels considered the best cab service in Bareilly?',
    answer: 'We provide RTO-registered commercial vehicles, police-verified professional chauffeurs, completely transparent per-kilometer pricing, and have a 4.9/5 star rating on Google based on 129+ reviews.',
  },
  {
    question: 'Is advance payment required to book a cab?',
    answer: 'No, we do not require any advance payment for outstation or airport bookings. You pay the driver directly at the end of your trip.',
  },
]

export default function BestCabServiceInBareilly() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'Best Cab Service in Bareilly', url: 'https://sambhujitravels.in/blog/best-cab-service-in-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      
      <main>
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="Best cab service banner"
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
                Business Excellence
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Best Cab Service in Bareilly: What Makes a Taxi Partner Reliable?
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 17, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  5 min read
                </span>
                <span className="flex items-center">
                  <Award size={14} className="mr-1" />
                  Top Rated
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
                  Finding a trusted transportation partner in Bareilly for airport transfers or long outstation trips can be challenging. Let&apos;s talk about the key safety features and professional standards you should always look for.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Yellow-Plate Commercial Vehicles Only</h2>
                <p className="text-gray-600 mb-4">
                  Never travel outstation in private white-plate cars. Commercial yellow-plate vehicles are legally registered with the RTO, undergo periodic fitness checks, carry speed governors, and protect passengers with commercial-grade auto insurance.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Background-Verified Chauffeurs</h2>
                <p className="text-gray-650 mb-4">
                  Long highway trips require experienced, professional drivers. Ensure your cab company hires drivers with verified records, polite behaviour, and expert knowledge of expressway traffic and hilly terrains.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Transparent Billing</h2>
                <p className="text-gray-600 mb-4">
                  Avoid companies that quote low base rates but add hidden charges like &quot;state taxes,&quot; &quot;night charges,&quot; or flat toll commissions later. Insist on getting detailed per-kilometer billing lists upfront.
                </p>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Shambhu Ji Travels</h3>
                  <p className="text-gray-600 mb-4">
                    Enjoy completely transparent outstation pricing starting at just <strong>₹11/km</strong>. Call or book via WhatsApp.
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
                    <h3 className="font-bold text-gray-800 mb-4">Shambhu Ji Highlights</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex justify-between">
                        <span className="text-gray-500">Google Rating</span>
                        <span className="font-bold text-yellow-500">4.9 / 5.0</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Reviews Count</span>
                        <span className="font-medium">129+ Verified</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-500">Since</span>
                        <span className="font-medium">2015</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Reserve on WhatsApp</h3>
                    <p className="text-blue-200 text-sm mb-4">Fast confirmation & zero advance payments.</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20book%20the%2520best%2520cab%2520service%2520in%2520Bareilly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp Us Now
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
