import BookingForm from './BookingForm'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-br from-primary via-blue-800 to-primary flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="bg-accent/90 px-3 py-1 text-xs font-bold uppercase rounded tracking-wider shadow-sm">
                Trusted Since 2015
              </span>
              <span className="bg-white/15 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase rounded tracking-wider">
                24/7 Cab Booking
              </span>
              <span className="bg-green-600/90 px-3 py-1 text-xs font-bold uppercase rounded tracking-wider shadow-sm flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse mr-1"></span>
                Govt. Registered Taxi
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Reliable Outstation Taxi Service from Bareilly — <span className="text-accent">24/7 Cab Booking</span> Across North India
            </h1>

            <p className="text-base md:text-lg text-blue-100 max-w-xl leading-relaxed">
              One-way cabs, airport transfers & round trips with verified drivers and instant WhatsApp booking. Choose Sedan at ₹11/km or SUV at ₹13/km.
            </p>

            {/* Price Tags */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">₹11/km</span>
                <span className="text-xs text-gray-300">AC Sedan (Dzire/Etios)</span>
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">₹13/km</span>
                <span className="text-xs text-gray-300">AC SUV (Ertiga/Triber)</span>
              </div>
              <div className="bg-white/10 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
                <span className="block text-2xl font-extrabold text-accent">₹18/km</span>
                <span className="text-xs text-gray-300">Innova Crysta</span>
              </div>
            </div>

            {/* Trust Badge with Avatar Stack */}
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 w-fit">
              <div className="flex -space-x-3 overflow-hidden">
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-600 object-cover"
                  src="/driver_uniform.png"
                  alt="Professional Driver in Uniform"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-600 object-cover"
                  src="/taxi_fleet.png"
                  alt="Our Taxi Fleet"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-blue-600 object-cover"
                  src="/tourist_trip.png"
                  alt="Happy Customers"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <div className="flex items-center text-accent text-sm font-bold">
                  <span>5.0/5 Rating</span>
                  <span className="ml-1.5 flex text-yellow-400">
                    {'★'.repeat(5)}
                  </span>
                </div>
                <p className="text-xs text-blue-200 font-medium">Based on 14+ Google Reviews</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-blue-100">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Zero Hidden Fees (Tolls on actuals)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>GPS Monitored & Verified Drivers</span>
              </div>
            </div>

            {/* Mobile Call CTA */}
            <div className="lg:hidden pt-2">
              <a
                href="tel:+918077230221"
                className="inline-flex items-center justify-center bg-accent hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg w-full sm:w-auto"
              >
                <svg className="w-6 h-6 mr-2 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: +91 8077230221
              </a>
            </div>
          </div>

          {/* Booking Form (Desktop) */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <BookingForm />
          </div>
        </div>

        {/* Mobile Booking Form */}
        <div className="lg:hidden mt-8">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
