import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { ShieldCheck, Car, Clock, Star, MapPin, BadgeCheck } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Taxi Service in Bareilly | Book Outstation Cabs starting ₹11/km',
  description: 'Reliable taxi service in Bareilly for outstation one-way, round trips & airport drops. AC Sedan ₹11/km, SUV ₹13/km. No advance required. Verified drivers.',
  alternates: {
    canonical: 'https://sambhujitravels.in/taxi-service-in-bareilly',
  },
}

const bareillyFaqs = [
  {
    question: 'How can I book a taxi in Bareilly with Shambhu Ji Travels?',
    answer: 'Booking is simple. You can call +91 8077230221, send a message on WhatsApp, or fill out the booking form on this page. We provide instant quotes and confirmation with zero advance payment.',
  },
  {
    question: 'What is the per kilometer taxi rate from Bareilly?',
    answer: 'Our rates start at ₹11/km for AC Sedans (Swift Dzire/Etios), ₹13/km for AC SUVs (Ertiga/Triber), and ₹18/km for premium Innova Crysta cabs. Driver allowance is included, and tolls/state permits are charged at actuals.',
  },
  {
    question: 'Are one-way drop taxis available from Bareilly?',
    answer: 'Yes, we specialize in one-way drops from Bareilly to Delhi, Noida, Lucknow, Haridwar, Nainital, and other North Indian cities. You only pay for the one-way distance traveled.',
  },
]

export default function TaxiServiceInBareilly() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Taxi Service in Bareilly', url: 'https://sambhujitravels.in/taxi-service-in-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={bareillyFaqs} />
      <Header />
      
      <main className="bg-gray-50/50">
        {/* Banner */}
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Best Taxi Service in Bareilly
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
              Rent verified outstation cabs and local travel taxis from Bareilly. Book clean Sedans and spacious SUVs for family trips with professional, uniformed chauffeurs.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Intro block */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <BadgeCheck className="text-primary" />
                    Trusted Local & Outstation Cab Partner
                  </h2>
                  <p className="text-gray-650 text-sm md:text-base leading-relaxed mb-4">
                    Whether you are planning a family holiday to the hill stations of Uttarakhand, a business trip to Delhi NCR, or a pilgrimage to Haridwar, Shambhu Ji Travels is Bareilly&apos;s most reliable partner. With a legacy since 2015, we have earned the trust of over 10,000+ local residents and visitors.
                  </p>
                  <p className="text-gray-655 text-sm md:text-base leading-relaxed">
                    We offer hassle-free bookings with zero advance payments. Our fleet is registered with yellow commercial plates, speed governors, and GPS tracking to guarantee absolute safety and comfort throughout the trip.
                  </p>
                </div>

                {/* Rates Table */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Bareilly Taxi Rate Chart</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 text-sm font-semibold text-gray-600">Cab Category</th>
                          <th className="py-3 text-sm font-semibold text-gray-600">Models Offered</th>
                          <th className="py-3 text-sm font-semibold text-gray-600">Per KM Price</th>
                          <th className="py-3 text-sm font-semibold text-gray-600 text-right">Ideal For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                          <td className="py-4 font-bold text-gray-850">AC Sedan</td>
                          <td className="py-4 text-xs text-gray-500">Swift Dzire, Etios</td>
                          <td className="py-4 text-accent font-bold">₹11 / km</td>
                          <td className="py-4 text-xs text-gray-600 text-right">4 Passengers, Small Families</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                          <td className="py-4 font-bold text-gray-850">AC SUV</td>
                          <td className="py-4 text-xs text-gray-500">Ertiga, Triber</td>
                          <td className="py-4 text-accent font-bold">₹13 / km</td>
                          <td className="py-4 text-xs text-gray-600 text-right">6 Passengers, Family Trips</td>
                        </tr>
                        <tr className="hover:bg-gray-50/50">
                          <td className="py-4 font-bold text-gray-850">Innova Crysta</td>
                          <td className="py-4 text-xs text-gray-500">Premium Luxury MUV</td>
                          <td className="py-4 text-accent font-bold">₹18 / km</td>
                          <td className="py-4 text-xs text-gray-600 text-right">7 Passengers, Premium Comfort</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-4">
                    * Toll taxes, state border permits, and parking charges are collected based on actual receipts. There are no fixed toll markups or premium fees.
                  </p>
                </div>

                {/* Professional Standards */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150 space-y-6">
                  <h3 className="text-xl font-bold text-gray-800">Our Professional Standards</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-50 text-primary p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-850 text-sm mb-1">Police Verified Drivers</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">All drivers carry active commercial licenses and go through background checks to verify clean safety records.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-50 text-green-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Car size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-850 text-sm mb-1">Pristine Fleet Cars</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Cabs are fully detailed and sanitized before every trip. AC heating and cooling are strictly maintained.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-50 text-orange-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-850 text-sm mb-1">On-Time Pickup Guarantee</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Our driver reaches your doorstep 15 minutes before the scheduled time to ensure zero delays.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-50 text-purple-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-850 text-sm mb-1">Outstation Navigation Experts</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Drivers are highly familiar with major expressways and winding hill station routes of Nainital and Mussoorie.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQs */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">FAQs about Taxi Service in Bareilly</h3>
                  <div className="space-y-4">
                    {bareillyFaqs.map((faq, index) => (
                      <details key={index} className="bg-gray-50 rounded-xl border border-gray-150 group">
                        <summary className="flex items-center justify-between p-4 cursor-pointer font-bold text-gray-800 hover:text-primary transition-colors text-sm select-none">
                          {faq.question}
                          <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-4 pb-4 text-gray-650 text-xs leading-relaxed border-t border-gray-100 pt-3">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sidebar Booking */}
              <div className="space-y-6">
                <div className="sticky top-24">
                  <BookingForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <PopularDestinations />
      </main>

      <Footer />
    </>
  )
}
