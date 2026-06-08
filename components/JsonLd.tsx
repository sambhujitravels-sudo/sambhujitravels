export function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sambhujitravels.in/#business',
    name: 'Shambhu ji Travels',
    description: 'Reliable taxi and cab service in Bareilly offering one-way, round trip, and airport transfers across North India.',
    url: 'https://sambhujitravels.in',
    logo: {
      '@type': 'ImageObject',
      url: 'https://sambhujitravels.in/logo.png',
    },
    telephone: '+918077230221',
    email: 'sambhujitravels@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123, Main Market, Civil Lines',
      addressLocality: 'Bareilly',
      addressRegion: 'Uttar Pradesh',
      postalCode: '243001',
      addressCountry: 'IN'
    },
    areaServed: [
      { '@type': 'City', name: 'Bareilly' },
      { '@type': 'AdministrativeArea', name: 'Uttar Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
      { '@type': 'City', name: 'Delhi' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.3670',
      longitude: '79.4304',
    },

    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      }
    ],
    sameAs: [],
    image: 'https://sambhujitravels.in/og-image.jpg',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  )
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
