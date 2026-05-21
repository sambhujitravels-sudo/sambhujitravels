import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Train, Clock, ShieldCheck, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly Railway Station Cab Service | Junction Pickups ₹11/km',
  description: 'Book outstation cabs from Bareilly Junction Railway Station (BE). Punctual station pick-ups & drops starting ₹11/km. Verified drivers. Book online now.',
  alternates: {
    canonical: 'https://sambhujitravels.in/bareilly-railway-station-cab',
  },
}

const stationFAQs = [
  {
    question: 'Do you charge extra for railway station pick-ups?',
    answer: 'We do not charge any premium pickup fees at Bareilly Junction. The fare is calculated based on our standard rates (₹11/km for Sedan, ₹13/km for SUV). Any parking receipt fee is billed at actuals.',
  },
  {
    question: 'How does the driver coordinate at Bareilly Junction?',
    answer: 'Our driver will call you as soon as your train arrives at the station. They will coordinate to meet you near the main exit gate or the parking lot, helping you with your luggage.',
  },
  {
    question: 'Is it possible to book a cab at midnight from the station?',
    answer: 'Yes! We operate 24 hours a day. Even if your train arrives at 2:00 AM, our pre-booked cab and driver will be waiting for you in the parking bay.',
  },
]

export default function BareillyRailwayStationCab() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Bareilly Railway Station Cab', url: 'https://sambhujitravels.in/bareilly-railway-station-cab' },
        ]}
      />
      <FAQJsonLd faqs={stationFAQs} />
      <Header />
      
      <main className="bg-gray-50/50">
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Bareilly Junction Railway Station Cabs
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
              Fast and reliable cab bookings from Bareilly Junction (BE). Arrive safely and travel directly to any outstation destination with our 24/7 punctual chauffeurs.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8">
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Train className="text-primary" />
                    Junction Transfers with Door-to-Door Outstation Cabs
                  </h2>
                  <p className="text-gray-650 text-sm md:text-base leading-relaxed mb-4">
                    Arriving at Bareilly Junction (BE) and need a direct, comfortable cab to your home or an outstation destination? Shambhu Ji Travels provides professional railway station pickups and drop-off transfers. Skip local auto-rickshaw bargaining and secure a guaranteed, clean AC Sedan or SUV.
                  </p>
                  <p className="text-gray-655 text-sm md:text-base leading-relaxed">
                    Our drivers are highly punctual and coordinate directly via phone, ensuring a smooth pickup even at peak travel times or during midnight train arrivals.
                  </p>
                </div>

                {/* Popular station drops */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Travel Fares from Junction</h3>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex justify-between items-center">
                      <div>
                        <strong className="block text-gray-800 font-bold">Junction to Delhi NCR Outstation</strong>
                        <span className="text-xs text-gray-400">One-way drops from ₹2,750 onwards</span>
                      </div>
                      <span className="text-accent font-bold text-sm md:text-base">₹11 / km</span>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex justify-between items-center">
                      <div>
                        <strong className="block text-gray-800 font-bold">Junction to Nainital / Kathgodam</strong>
                        <span className="text-xs text-gray-400">Hilly outstation travel from ₹1,650 onwards</span>
                      </div>
                      <span className="text-accent font-bold text-sm md:text-base">₹11 / km</span>
                    </div>

                    <div className="p-4 border border-gray-100 rounded-xl bg-gray-50 flex justify-between items-center">
                      <div>
                        <strong className="block text-gray-800 font-bold">Junction to Lucknow Outstation</strong>
                        <span className="text-xs text-gray-400">Direct highway drops from ₹2,750 onwards</span>
                      </div>
                      <span className="text-accent font-bold text-sm md:text-base">₹11 / km</span>
                    </div>
                  </div>
                </div>

                {/* Station booking safety */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Railway Pickup Standards</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-50 text-primary p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Punctual Waiting Bay</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Our drivers arrive at the station parking bay 15 minutes before train arrival.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-50 text-green-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Luggage Loading Help</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Our driver will help carry your luggage from the arrivals area to the cab boot.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-50 text-orange-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">GPS Location Coordination</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Receive live tracking links of your driver so you can spot them in crowded station crowds.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-50 text-purple-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Train size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">All Train Delays Addressed</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">We coordinate directly and monitor active train running statuses for absolute convenience.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">FAQs about Bareilly Station Cabs</h3>
                  <div className="space-y-4">
                    {stationFAQs.map((faq, index) => (
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
