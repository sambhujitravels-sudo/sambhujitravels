import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import PopularDestinations from '@/components/PopularDestinations'
import Footer from '@/components/Footer'
import { FAQJsonLd } from '@/components/JsonLd'
import { getCombinedReviews } from '@/lib/reviews'

const homeFAQs = [
  {
    question: 'What is the taxi fare from Bareilly to Delhi?',
    answer: 'The one-way taxi fare from Bareilly to Delhi starts at ₹2,750 for a Sedan (₹11/km). SUV fare is ₹3,250 (₹13/km) and Innova Crysta is ₹4,500 (₹18/km). The distance is approximately 250 km and takes about 5 hours.',
  },
  {
    question: 'Do you provide 24/7 taxi service in Bareilly?',
    answer: 'Yes, Shambhu ji Travels provides 24/7 taxi service in Bareilly. You can book a cab anytime for outstation trips, airport transfers, or local travel. Call us at +91 8077230221 or book via WhatsApp.',
  },
  {
    question: 'What types of vehicles are available for booking?',
    answer: 'We offer Sedan (Swift Dzire) at ₹11/km, SUV (Ertiga) at ₹13/km, and Innova Crysta at ₹18/km. All vehicles are well-maintained, air-conditioned, and driven by verified professional drivers.',
  },
  {
    question: 'Is there a one-way cab service from Bareilly?',
    answer: 'Yes, we offer one-way cab service from Bareilly to all major cities including Delhi, Lucknow, Nainital, Haridwar, Dehradun, and more. You only pay for the one-way distance with no return charges.',
  },
  {
    question: 'How can I book a taxi with Shambhu ji Travels?',
    answer: 'You can book a taxi by calling +91 8077230221, sending a WhatsApp message, or using the booking form on our website. We provide instant confirmation and transparent pricing.',
  },
  {
    question: 'Are there any hidden charges in your taxi fare?',
    answer: 'No, we believe in transparent pricing. The fare you see includes driver allowance, fuel, and vehicle charges. Toll taxes and state permits are charged extra as per actuals.',
  },
  {
    question: 'Do you provide airport pickup and drop service?',
    answer: 'Yes, we provide airport transfer services to and from Delhi Airport (IGI), Lucknow Airport, Pantnagar Airport, and other nearby airports. We track flights to ensure timely pickup.',
  },
  {
    question: 'What is the cancellation policy?',
    answer: 'We offer free cancellation up to 24 hours before the trip. For cancellations within 24 hours, a nominal fee may apply. Contact us for specific details about your booking.',
  },
]

export default async function Home() {
  const reviewsData = await getCombinedReviews()
  const reviews = reviewsData.reviews

  return (
    <>
      <FAQJsonLd faqs={homeFAQs} />
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <PopularDestinations />
        <Testimonials initialReviews={reviews} />

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about booking a taxi with Shambhu ji Travels.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {homeFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="bg-gray-50 rounded-lg border border-gray-200 group"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-800 hover:text-primary transition-colors">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
