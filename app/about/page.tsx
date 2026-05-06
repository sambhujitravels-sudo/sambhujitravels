import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { ShieldCheck, Clock, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Trusted Taxi Service Since 2015',
  description: 'Learn about Shambhu ji Travels, Bareilly\'s trusted taxi service since 2015. 10,000+ happy customers, verified drivers, and 24/7 service. Book your cab today.',
  alternates: {
    canonical: 'https://sambhujitravels.in/about',
  },
  openGraph: {
    title: 'About Shambhu ji Travels - Bareilly Taxi Service',
    description: 'Trusted taxi service in Bareilly since 2015. 10,000+ customers served with safe, reliable, and affordable cab services.',
    url: 'https://sambhujitravels.in/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'About Us', url: 'https://sambhujitravels.in/about' },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Shambhu ji Travels</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              Your trusted travel partner since 2015. Providing safe, reliable, and affordable taxi services across North India.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong className="text-gray-800">Shambhu ji Travels</strong> is a leading taxi service provider based in Bareilly, Uttar Pradesh. Since 2015, we have been dedicated to providing safe, reliable, and affordable taxi services to thousands of travelers.
                  </p>
                  <p>
                    With a fleet of well-maintained vehicles and a team of professional, verified drivers, we ensure that your journey is comfortable and hassle-free. Whether you need a local cab for shopping, an outstation taxi for a weekend getaway, or an airport transfer, we have you covered.
                  </p>
                  <p>
                    Our transparent pricing policy, 24/7 customer support, and commitment to safety have made us the preferred choice for over 10,000 customers across Bareilly, Delhi NCR, and Uttarakhand.
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <span className="font-medium text-gray-800">Verified Drivers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-50 p-2 rounded-lg">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <span className="font-medium text-gray-800">24/7 Service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-50 p-2 rounded-lg">
                      <Users className="text-orange-500" size={24} />
                    </div>
                    <span className="font-medium text-gray-800">10K+ Customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-50 p-2 rounded-lg">
                      <Award className="text-purple-500" size={24} />
                    </div>
                    <span className="font-medium text-gray-800">Since 2015</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary text-white p-6 rounded-xl text-center">
                    <span className="block text-4xl font-bold text-accent">10K+</span>
                    <span className="text-blue-200">Happy Customers</span>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl text-center">
                    <span className="block text-4xl font-bold text-primary">500+</span>
                    <span className="text-gray-600">Destinations</span>
                  </div>
                  <div className="bg-gray-100 p-6 rounded-xl text-center">
                    <span className="block text-4xl font-bold text-primary">9+</span>
                    <span className="text-gray-600">Years Experience</span>
                  </div>
                  <div className="bg-accent text-white p-6 rounded-xl text-center">
                    <span className="block text-4xl font-bold">24/7</span>
                    <span className="text-green-100">Availability</span>
                  </div>
                </div>

                {/* Mission */}
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                  <h3 className="font-bold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600 text-sm">
                    To provide every traveler with a safe, comfortable, and affordable journey experience. We believe in transparent pricing, professional service, and building long-term relationships with our customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Rates</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-gray-100 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sedan</h3>
                <p className="text-gray-500 text-sm mb-4">Swift Dzire or Similar</p>
                <div className="text-4xl font-bold text-primary mb-2">₹11<span className="text-lg text-gray-500">/km</span></div>
                <ul className="text-sm text-gray-600 space-y-2 mt-6 text-left">
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 4 Passengers</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Air Conditioned</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 2 Bags Luggage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-primary relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs px-3 py-1 rounded-full font-bold">POPULAR</span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">SUV</h3>
                <p className="text-gray-500 text-sm mb-4">Ertiga or Similar</p>
                <div className="text-4xl font-bold text-primary mb-2">₹13<span className="text-lg text-gray-500">/km</span></div>
                <ul className="text-sm text-gray-600 space-y-2 mt-6 text-left">
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 6 Passengers</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Air Conditioned</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 3 Bags Luggage</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center border-2 border-gray-100 hover:border-primary transition-colors">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Innova Crysta</h3>
                <p className="text-gray-500 text-sm mb-4">Premium SUV</p>
                <div className="text-4xl font-bold text-primary mb-2">₹18<span className="text-lg text-gray-500">/km</span></div>
                <ul className="text-sm text-gray-600 space-y-2 mt-6 text-left">
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 7 Passengers</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> Premium AC</li>
                  <li className="flex items-center"><span className="text-accent mr-2">✓</span> 4 Bags Luggage</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-8">
              * Toll taxes and state permits charged extra as per actuals
            </p>
          </div>
        </section>

        <PopularDestinations />
      </main>
      <Footer />
    </>
  )
}
