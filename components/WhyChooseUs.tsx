import { ShieldCheck, Clock, Wallet, HeadphonesIcon, Car, MapPin } from 'lucide-react'

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
      </div>
    </section>
  )
}
