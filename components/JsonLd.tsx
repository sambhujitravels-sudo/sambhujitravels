export function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sambhujitravels.in/#business',
    name: 'Shambhu ji Travels',
    description: 'Reliable taxi and cab service in Bareilly offering one-way, round trip, and airport transfers across North India.',
    url: 'https://sambhujitravels.in',
    telephone: '+918077230221',
    email: 'sambhujitravels@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card',
    areaServed: [
      { '@type': 'City', name: 'Bareilly' },
      { '@type': 'State', name: 'Uttar Pradesh' },
      { '@type': 'State', name: 'Uttarakhand' },
      { '@type': 'City', name: 'Delhi' },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.3670',
      longitude: '79.4304',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [],
    image: 'https://sambhujitravels.in/og-image.jpg',
  }

  const taxiServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    name: 'Shambhu ji Travels - Taxi Service',
    description: 'Book outstation cabs, one-way taxis, and airport transfers from Bareilly at affordable rates starting ₹11/km.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Shambhu ji Travels',
      telephone: '+918077230221',
    },
    areaServed: {
      '@type': 'State',
      name: 'Uttar Pradesh',
    },
    serviceType: 'Taxi Service',
    offers: [
      {
        '@type': 'Offer',
        name: 'Sedan Cab',
        description: 'Swift Dzire or similar sedan for comfortable travel',
        price: '11',
        priceCurrency: 'INR',
        unitText: 'per kilometer',
      },
      {
        '@type': 'Offer',
        name: 'SUV Cab',
        description: 'Ertiga or similar SUV for family travel',
        price: '13',
        priceCurrency: 'INR',
        unitText: 'per kilometer',
      },
      {
        '@type': 'Offer',
        name: 'Innova Crysta',
        description: 'Premium Innova Crysta for luxury travel',
        price: '18',
        priceCurrency: 'INR',
        unitText: 'per kilometer',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
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
