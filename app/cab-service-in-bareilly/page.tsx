import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { ShieldCheck, Clock, Wallet, HeadphonesIcon, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cab Service in Bareilly | Affordable Outstation Cabs starting ₹11/km',
  description: 'Book outstation cabs in Bareilly for round trips and one-way drops. Clean AC Sedan at ₹11/km, SUV at ₹13/km. Verified drivers, 24/7 client support.',
  alternates: {
    canonical: 'https://sambhujitravels.in/cab-service-in-bareilly',
  },
}

const cabFAQs = [
  {
    question: 'How do you calculate outstation cab fares from Bareilly?',
    answer: 'Our outstation cab fares are based on a per-kilometer model. Sedan rate is ₹11/km and SUV is ₹13/km. A daily driver allowance is added. Tolls and state permits are billed at actual cost.',
  },
  {
    question: 'Can I book a cab for a round trip from Bareilly to Nainital?',
    answer: 'Yes! We provide round trip cabs from Bareilly to Nainital, Rishikesh, Dehradun, and other hill stations. Our drivers are trained in safe hill driving conditions.',
  },
  {
    question: 'Are there any cancellation fees for cab bookings?',
    answer: 'No, we do not charge any cancellation fee if you cancel your booking up to 24 hours before your trip departure time.',
  },
]

export default function CabServiceInBareilly() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Cab Service in Bareilly', url: 'https://sambhujitravels.in/cab-service-in-bareilly' },
        ]}
      />
      <FAQJsonLd faqs={cabFAQs} />
      <Header />
      
      <main className="bg-gray-50/50">
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Reliable Cab Service in Bareilly
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
              Plan your travel with our premium outstation cabs. Safe, comfortable, and fully air-conditioned vehicles for your round trips and one-way drops across North India.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8">
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Comfortable Outstation Cab Booking from Bareilly
                  </h2>
                  <p className="text-gray-650 text-sm md:text-base leading-relaxed mb-4">
                    Are you searching for a reliable outstation cab service in Bareilly? Shambhu Ji Travels provides premium Hatchbacks, Sedans, and luxury SUVs for safe travel to surrounding cities. Our cabs are driven by experienced local drivers who have extensive knowledge of highways and regional routes.
                  </p>
                  <p className="text-gray-655 text-sm md:text-base leading-relaxed">
                    We ensure transparent pricing by billing our services purely on per-kilometer rates. There are no hidden surcharges or night driving commissions. We guarantee safe, sanitised, and punctual rides.
                  </p>
                </div>

                {/* Fleet specifications */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Our Fleet Options & Pricing</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border border-gray-150 rounded-xl p-5 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
                      <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">AC Sedan</span>
                      <h4 className="font-bold text-gray-800 text-lg mt-2 mb-1">Swift Dzire / Etios</h4>
                      <p className="text-accent font-extrabold text-xl mb-3">₹11 / km</p>
                      <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-100 pt-3">
                        <li>• Capacity: 4 Passengers</li>
                        <li>• Clean interior & boot space</li>
                        <li>• Ideal for business & city drops</li>
                      </ul>
                    </div>

                    <div className="border border-gray-150 rounded-xl p-5 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
                      <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">AC SUV</span>
                      <h4 className="font-bold text-gray-800 text-lg mt-2 mb-1">Maruti Ertiga / Triber</h4>
                      <p className="text-accent font-extrabold text-xl mb-3">₹13 / km</p>
                      <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-100 pt-3">
                        <li>• Capacity: 6 Passengers</li>
                        <li>• Dual AC vents & spacious seating</li>
                        <li>• Ideal for family weekend getaways</li>
                      </ul>
                    </div>

                    <div className="border border-gray-150 rounded-xl p-5 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
                      <span className="bg-primary/10 text-primary text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Premium Luxury</span>
                      <h4 className="font-bold text-gray-800 text-lg mt-2 mb-1">Toyota Innova Crysta</h4>
                      <p className="text-accent font-extrabold text-xl mb-3">₹18 / km</p>
                      <ul className="text-xs text-gray-500 space-y-1.5 border-t border-gray-100 pt-3">
                        <li>• Capacity: 7 Passengers</li>
                        <li>• High-end passenger safety</li>
                        <li>• Ideal for luxury tour journeys</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Why Book Cabs with Us?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-50 text-primary p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Full Travel Insurance</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">All vehicles carry standard commercial passenger insurance under RTO regulations.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-50 text-green-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">24/7 Dispatch Control</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Our booking desks are online night and day to resolve travel emergencies instantly.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-50 text-orange-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Wallet size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">No Advance Deposits</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Pay only when you complete the trip. No prepayments or booking deposit required.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-50 text-purple-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <HeadphonesIcon size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Dedicated Customer Care</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Direct communication channel to business owners to ensure best customer satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <HelpCircle className="text-primary" />
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {cabFAQs.map((faq, index) => (
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
