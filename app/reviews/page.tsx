import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReviewsClient from '@/components/ReviewsClient'
import { BreadcrumbJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Customer Reviews & About Us | Shambhu ji Travels',
  description: 'Read reviews and travel stories from verified customers of Shambhu ji Travels. Learn about our fleet, rates starting at ₹11/km, and our journey since 2015.',
  alternates: {
    canonical: 'https://sambhujitravels.in/reviews',
  },
  openGraph: {
    title: 'Customer Reviews & About Shambhu ji Travels',
    description: 'Real customer ratings and stories. Offering safe, reliable, and professional outstation cabs from Bareilly since 2015.',
    url: 'https://sambhujitravels.in/reviews',
  },
}

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://sambhujitravels.in' },
          { name: 'Reviews & About', url: 'https://sambhujitravels.in/reviews' },
        ]}
      />
      <Header />
      <main className="bg-gray-50/50 min-h-screen py-12">
        <div className="container mx-auto px-4">
          <ReviewsClient />
        </div>
      </main>
      <Footer />
    </>
  )
}
