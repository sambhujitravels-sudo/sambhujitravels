import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'
import { Calendar, Clock, Scale, Phone, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'One-Way Cab vs Round Trip Cost | Price Calculation Guide',
  description: 'Understand the cost difference between booking a one-way cab vs a round trip taxi. Learn how to save up to 50% on outstation travel from Bareilly.',
  alternates: {
    canonical: 'https://sambhujitravels.in/blog/one-way-cab-vs-round-trip-cost',
  },
}

const faqs = [
  {
    question: 'When should I choose a one-way outstation cab?',
    answer: 'Choose a one-way cab if you plan to stay at your destination for more than 2-3 days, or if you do not have a set return date. This saves you from paying daily holding charges and return mileage.',
  },
  {
    question: 'When is a round trip booking cheaper?',
    answer: 'A round trip booking is cheaper if you plan to return within 24-48 hours. Since the car is already there, you get a discounted per-kilometer rate for the return leg.',
  },
]

export default function OneWayCabVsRoundTripCost() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Blog', url: 'https://sambhujitravels.in/blog' },
          { name: 'One-Way Cab vs Round Trip Cost', url: 'https://sambhujitravels.in/blog/one-way-cab-vs-round-trip-cost' },
        ]}
      />
      <FAQJsonLd faqs={faqs} />
      <Header />
      
      <main>
        {/* Banner */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1600&q=80"
            alt="One-way vs round trip pricing banner"
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
                Travel Smart
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                One-Way Cab vs Round-Trip Cost: Which Option Saves You Money?
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-blue-200 text-sm">
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  May 15, 2026
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1" />
                  5 min read
                </span>
                <span className="flex items-center">
                  <Scale size={14} className="mr-1" />
                  Cost Comparison
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
                  Deciding how to book your outstation taxi can make a huge impact on your wallet. Let&apos;s break down exactly how one-way and round-trip taxi fares are calculated so you can pick the best package.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">The One-Way Cab Concept</h2>
                <p className="text-gray-655 mb-4">
                  Traditionally, if you wanted to travel from Bareilly to Delhi, local operators charged you for the return journey too, meaning you paid double the actual distance. Under one-way booking structures, you pay strictly for the distance traveled (e.g. 250km from Bareilly to Delhi starts at ₹2,750). The taxi company manages the return fare by matching the driver with a passenger coming back.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Round Trip Calculations</h2>
                <p className="text-gray-600 mb-4">
                  Round trip bookings are billed based on a minimum daily distance (typically 250km per day) plus driver allowance. You keep the car and driver with you for sightseeing and multiple stops, returning in the same vehicle.
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Direct Comparison</h2>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-left border border-gray-150 rounded-xl">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="p-3 font-semibold text-gray-700">Trip Criteria</th>
                        <th className="p-3 font-semibold text-gray-700">One-Way Cab Drop</th>
                        <th className="p-3 font-semibold text-gray-700">Round-Trip Booking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Billing Model</td>
                        <td className="p-3 text-green-600 font-semibold">Strictly actual distance</td>
                        <td className="p-3">Minimum 250 km / day</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-3 font-medium">Driver Allowance</td>
                        <td className="p-3 text-green-600 font-semibold">Included in base price</td>
                        <td className="p-3">₹300 - ₹400 per day</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Best Suited For</td>
                        <td className="p-3 text-green-600 font-semibold">Long stays & relocation</td>
                        <td className="p-3">Short weekend getaways</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 my-8">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Book Your Outstation Drop</h3>
                  <p className="text-gray-655 mb-4">
                    Planning a trip? Ask our dispatch desk for an instant quote for both one-way and round-trip packages.
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
                  <div className="bg-primary rounded-xl p-6 text-white text-center">
                    <h3 className="font-bold mb-2">Need a Quote?</h3>
                    <p className="text-blue-200 text-sm mb-4">Get custom packages with zero hidden fees.</p>
                    <a
                      href="https://wa.me/918077230221?text=Hi%2C%20I%20want%20to%20compare%20oneway%20vs%20roundtrip%20cab%20fares"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-accent hover:bg-green-600 text-white py-3 rounded-lg font-bold transition-colors"
                    >
                      WhatsApp Us
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
