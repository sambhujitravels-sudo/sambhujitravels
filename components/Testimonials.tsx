'use client'

import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: '{{CUSTOMER_NAME_1}}',
    location: 'Bareilly',
    text: '{{TESTIMONIAL_TEXT_1 — e.g., "Booked a cab to Delhi for an early morning flight. Driver arrived 10 minutes early and the car was spotless. Will definitely use again."}}',
    rating: 5,
    trip: 'Bareilly to Delhi',
  },
  {
    name: '{{CUSTOMER_NAME_2}}',
    location: 'Delhi',
    text: '{{TESTIMONIAL_TEXT_2 — e.g., "Used Shambhu ji Travels for our family trip to Nainital. The SUV was comfortable and driver knew all the good stops. Fair pricing too."}}',
    rating: 5,
    trip: 'Delhi to Nainital',
  },
  {
    name: '{{CUSTOMER_NAME_3}}',
    location: 'Lucknow',
    text: '{{TESTIMONIAL_TEXT_3 — e.g., "Regular customer for 2 years now. Always reliable, always on time. The WhatsApp booking is so convenient."}}',
    rating: 5,
    trip: 'Lucknow to Bareilly',
  },
]

export default function Testimonials() {
  const hasRealTestimonials = !reviews[0].name.includes('{{')

  if (!hasRealTestimonials) {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by 10,000+ Travelers</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join thousands of satisfied customers who travel with Shambhu ji Travels.
            </p>
          </div>

          {/* Stats instead of fake testimonials */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <div className="text-gray-400 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-gray-400 text-sm">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">9+</div>
              <div className="text-gray-400 text-sm">Years of Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-gray-400 text-sm">Always Available</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Ready to experience our service?</p>
            <a
              href="tel:+918077230221"
              className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now: +91 8077230221
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real reviews from real travelers who chose Shambhu ji Travels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 relative"
            >
              <Quote className="absolute top-4 right-4 text-gray-700" size={32} />
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-4 text-gray-300 leading-relaxed">{review.text}</p>
              <div className="border-t border-gray-700 pt-4 mt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-300">
                    {review.trip}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="tel:+918077230221"
            className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: +91 8077230221
          </a>
        </div>
      </div>
    </section>
  )
}
