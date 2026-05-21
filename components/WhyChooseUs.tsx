import { ShieldCheck, Clock, Wallet, HeadphonesIcon, Car, MapPin } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: 'Verified Drivers',
    description: 'All our drivers are background verified and professionally trained for your safety.',
    icon: ShieldCheck,
    color: 'blue',
  },
  {
    title: '24/7 Availability',
    description: 'Book anytime, travel anytime. Our service runs round the clock, 365 days.',
    icon: Clock,
    color: 'green',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. The price you see is the price you pay. GST and toll included.',
    icon: Wallet,
    color: 'orange',
  },
  {
    title: 'Instant Support',
    description: 'Dedicated support team available on call and WhatsApp for any assistance.',
    icon: HeadphonesIcon,
    color: 'purple',
  },
  {
    title: 'Clean & Sanitized',
    description: 'Well-maintained, air-conditioned vehicles sanitized before every trip.',
    icon: Car,
    color: 'teal',
  },
  {
    title: '500+ Destinations',
    description: 'Travel anywhere in North India. Delhi, Lucknow, Nainital, and beyond.',
    icon: MapPin,
    color: 'red',
  },
]

const colorClasses: Record<string, { bg: string; iconBg: string }> = {
  blue: { bg: 'bg-blue-50', iconBg: 'text-blue-600' },
  green: { bg: 'bg-green-50', iconBg: 'text-green-600' },
  orange: { bg: 'bg-orange-50', iconBg: 'text-orange-600' },
  purple: { bg: 'bg-purple-50', iconBg: 'text-purple-600' },
  teal: { bg: 'bg-teal-50', iconBg: 'text-teal-600' },
  red: { bg: 'bg-red-50', iconBg: 'text-red-600' },
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Shambhu ji Travels?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by 10,000+ customers since 2015. Here&apos;s what makes us Bareilly&apos;s preferred taxi service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const colors = colorClasses[feature.color]
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${colors.bg} w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <IconComponent size={28} className={colors.iconBg} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 bg-primary rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <span className="block text-4xl font-bold text-accent">10K+</span>
              <span className="text-blue-200 text-sm">Happy Customers</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-accent">500+</span>
              <span className="text-blue-200 text-sm">Destinations</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-accent">9+</span>
              <span className="text-blue-200 text-sm">Years Experience</span>
            </div>
            <div>
              <span className="block text-4xl font-bold text-accent">24/7</span>
              <span className="text-blue-200 text-sm">Customer Support</span>
            </div>
          </div>
        </div>

        {/* Verified Fleet & Professional Drivers Showcase */}
        <div className="mt-16 border-t border-gray-100 pt-16">
          <div className="text-center mb-10">
            <span className="bg-primary/5 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Our Professional Standards
            </span>
            <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-3">
              Verified Taxis & Uniformed Drivers
            </h3>
            <p className="text-gray-600 max-w-xl mx-auto text-sm">
              We operate a modern, clean, RTO-registered fleet driven by vetted and background-checked chauffeurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Fleet card */}
            <div className="bg-gray-50 border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src="/taxi_fleet.png"
                  alt="Shambhu Ji Travels Taxi Fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-800 text-lg mb-1.5">Government Registered Fleet</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  All cabs carry commercial yellow plates, valid tourist permits, speed governors, and standard commercial auto insurance (RTO UP registered).
                </p>
              </div>
            </div>

            {/* Driver card */}
            <div className="bg-gray-50 border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src="/driver_uniform.png"
                  alt="Our Uniformed Professional Driver"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-800 text-lg mb-1.5">Verified Uniformed Chauffeurs</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Our drivers wear smart uniforms, carry valid commercial driving licenses, and undergo strict background checks for safe outstation driving.
                </p>
              </div>
            </div>

            {/* Tourist card */}
            <div className="bg-gray-50 border border-gray-150 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src="/tourist_trip.png"
                  alt="Happy Tourists Outstation Trip"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-800 text-lg mb-1.5">Memorable Journeys</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  From hill station curves to high-speed expressways, we have completed over 15,000+ safe trips for tourists and business travelers alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
