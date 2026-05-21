import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BookingForm from '@/components/BookingForm'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Plane, Calendar, ShieldCheck, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bareilly Airport Taxi Service | Delhi Airport Drops starting ₹2,750',
  description: 'Affordable airport taxi service in Bareilly. Safe, direct drops to IGI Delhi Airport, Lucknow Airport, and Pantnagar. Punctual, verified drivers. Book now!',
  alternates: {
    canonical: 'https://sambhujitravels.in/bareilly-airport-taxi',
  },
}

const airportFAQs = [
  {
    question: 'Do you provide pick-ups from Delhi IGI Airport to Bareilly?',
    answer: 'Yes! We provide one-way outstation cabs from Delhi IGI Airport (Terminal 1, 2 & 3) to Bareilly. Our driver will coordinate with you outside the arrivals gate. Flight delay tracking is included.',
  },
  {
    question: 'What is the fare for a cab from Bareilly to Delhi Airport?',
    answer: 'For a Sedan (Swift Dzire), the one-way fare starts at ₹2,750 (based on ₹11/km rate for 250km). SUV rates start at ₹3,250. Toll taxes and airport entry charges are extra.',
  },
  {
    question: 'How early should I book my airport transfer?',
    answer: 'We recommend booking at least 12 hours in advance to guarantee vehicle assignment, though emergency bookings are often dispatched within 1 hour.',
  },
]

export default function BareillyAirportTaxi() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Bareilly Airport Taxi', url: 'https://sambhujitravels.in/bareilly-airport-taxi' },
        ]}
      />
      <FAQJsonLd faqs={airportFAQs} />
      <Header />
      
      <main className="bg-gray-50/50">
        <section className="bg-primary text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              Bareilly Airport Taxi & Transfers
            </h1>
            <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
              Punctual airport drop-off and pick-up services. Safe one-way cabs connecting Bareilly with Delhi IGI Airport, Lucknow Airport, and Pantnagar Airport.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2 space-y-8">
                
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Plane className="text-primary" />
                    Punctual Airport Taxi Transfers in Bareilly
                  </h2>
                  <p className="text-gray-650 text-sm md:text-base leading-relaxed mb-4">
                    Catching a flight or heading home? Shambhu Ji Travels offers specialized airport taxi transfers from Bareilly to Indira Gandhi International Airport (IGI) in Delhi, Chaudhary Charan Singh International Airport in Lucknow, and Pantnagar Airport. We track flight statuses to adjust pick-up times, ensuring you never wait or miss your check-in deadline.
                  </p>
                  <p className="text-gray-655 text-sm md:text-base leading-relaxed">
                    Our pricing is completely clear and direct. Airport transfers include safe GPS tracking, neat and air-conditioned cars, and accommodating drivers who are highly familiar with highway routes and airport entry gates.
                  </p>
                </div>

                {/* Popular Transfer Routes */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Popular Airport Routes & Rates</h3>
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl bg-gray-55/50 gap-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Bareilly to Delhi IGI Airport (DEL)</h4>
                        <p className="text-xs text-gray-500">Distance: ~255 km • Duration: 5 hours via NH-9 / NH-24</p>
                      </div>
                      <div className="text-right sm:text-right shrink-0">
                        <p className="text-accent font-extrabold text-base md:text-lg">Starts at ₹2,750</p>
                        <span className="text-[10px] text-gray-400">Sedan Rate (Toll Extra)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl bg-gray-55/50 gap-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Bareilly to Lucknow Amausi Airport (LKO)</h4>
                        <p className="text-xs text-gray-500">Distance: ~250 km • Duration: 4.5 hours via NH-30</p>
                      </div>
                      <div className="text-right sm:text-right shrink-0">
                        <p className="text-accent font-extrabold text-base md:text-lg">Starts at ₹2,750</p>
                        <span className="text-[10px] text-gray-400">Sedan Rate (Toll Extra)</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl bg-gray-55/50 gap-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm md:text-base">Bareilly to Pantnagar Airport (PGH)</h4>
                        <p className="text-xs text-gray-500">Distance: ~80 km • Duration: 2 hours via NH-309A</p>
                      </div>
                      <div className="text-right sm:text-right shrink-0">
                        <p className="text-accent font-extrabold text-base md:text-lg">Starts at ₹1,100</p>
                        <span className="text-[10px] text-gray-400">Sedan Rate (Toll Extra)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Airport features */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Airport Transfer Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-50 text-primary p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Plane size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Flight Delay Management</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">No extra charge for flight delays. We track your flight number for precise pick-up timing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-green-50 text-green-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Advance Booking Lock</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Reserve your taxi weeks in advance to ensure peace of mind before international flights.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-50 text-orange-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <ShieldCheck size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Safe Highway Chauffeurs</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Drivers trained specifically for long night journeys on high-speed expressway stretches.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-purple-50 text-purple-600 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">Luggage-Friendly Cars</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Wide-boot space Sedans and Ertiga SUVs to easily accommodate all your bags and suitcases.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-150">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">FAQs about Bareilly Airport Taxi</h3>
                  <div className="space-y-4">
                    {airportFAQs.map((faq, index) => (
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
