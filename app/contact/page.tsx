import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PopularDestinations from '@/components/PopularDestinations'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import ContactForm from './ContactForm'
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Book Taxi | Call +91 8077230221',
  description: 'Contact Shambhu ji Travels for taxi booking in Bareilly. Call +91 8077230221 or WhatsApp for instant booking. 24/7 customer support available.',
  alternates: {
    canonical: 'https://sambhujitravels.in/contact',
  },
  openGraph: {
    title: 'Contact Shambhu ji Travels - Bareilly Taxi Service',
    description: 'Book your taxi now! Call +91 8077230221 or WhatsApp. 24/7 service available.',
    url: 'https://sambhujitravels.in/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Contact Us', url: 'https://sambhujitravels.in/contact' },
        ]}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              We&apos;re here to help you 24/7. Call, WhatsApp, or send us a message for instant taxi booking.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="bg-blue-50 p-4 rounded-full mr-4">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Phone Number</h3>
                      <a
                        href="tel:+918077230221"
                        className="text-2xl font-bold text-primary hover:text-accent transition-colors block"
                      >
                        +91 8077230221
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Available 24/7 for bookings</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <div className="bg-green-50 p-4 rounded-full mr-4">
                      <MessageCircle className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/918077230221?text=Hello%2C%20I%20want%20to%20book%20a%20cab"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-accent hover:text-green-600 transition-colors block"
                      >
                        Chat on WhatsApp
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Instant response, quick booking</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="bg-orange-50 p-4 rounded-full mr-4">
                      <Mail className="text-orange-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Email Address</h3>
                      <a
                        href="mailto:sambhujitravels@gmail.com"
                        className="text-gray-700 hover:text-primary transition-colors block"
                      >
                        sambhujitravels@gmail.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1">For queries and corporate bookings</p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start">
                    <div className="bg-purple-50 p-4 rounded-full mr-4">
                      <Clock className="text-purple-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-1">Working Hours</h3>
                      <p className="text-gray-700">24 Hours, 7 Days a Week</p>
                      <p className="text-gray-500 text-sm mt-1">We never close!</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h3 className="font-bold text-gray-800 mb-4">Quick Booking</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="tel:+918077230221"
                      className="bg-primary hover:bg-blue-800 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                    >
                      <Phone size={18} className="mr-2" />
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918077230221?text=Hello%2C%20I%20want%20to%20book%20a%20cab"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent hover:bg-green-600 text-white py-3 px-4 rounded-lg font-semibold text-center transition-colors flex items-center justify-center"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                <ContactForm />
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
