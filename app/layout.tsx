import type { Metadata } from 'next'
import './globals.css'
import { JsonLd } from '@/components/JsonLd'
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  metadataBase: new URL('https://sambhujitravels.in'),
  title: {
    default: 'Bareilly Taxi Service | Cab Booking from ₹11/km | Shambhu ji Travels',
    template: '%s | Shambhu ji Travels'
  },
  description: 'Book reliable taxi service in Bareilly. One-way & round trip cabs to Delhi, Lucknow, Nainital at ₹11/km. 24/7 airport transfers, outstation cabs. Call +91 8077230221.',
  keywords: ['Bareilly taxi service', 'cab booking Bareilly', 'Bareilly to Delhi cab', 'outstation cab Bareilly', 'airport taxi Bareilly', 'one way cab Bareilly'],
  authors: [{ name: 'Shambhu ji Travels' }],
  creator: 'Shambhu ji Travels',
  publisher: 'Shambhu ji Travels',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sambhujitravels.in',
    siteName: 'Shambhu ji Travels',
    title: 'Bareilly Taxi Service | Cab Booking from ₹11/km | Shambhu ji Travels',
    description: 'Book reliable taxi service in Bareilly. One-way & round trip cabs to Delhi, Lucknow, Nainital at ₹11/km. 24/7 airport transfers. Call +91 8077230221.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Shambhu ji Travels - Bareilly Taxi Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bareilly Taxi Service | Cab Booking from ₹11/km | Shambhu ji Travels',
    description: 'Book reliable taxi service in Bareilly. One-way & round trip cabs at ₹11/km. 24/7 service. Call +91 8077230221.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tpuqYtuF--kSmOKfQmxDsDafhIid_vBM7K0_6Wtw6aI',
  },
  alternates: {
    canonical: 'https://sambhujitravels.in',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <JsonLd />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <MobileStickyCTA />
      </body>
      <GoogleAnalytics gaId="G-3L50DQF3H8" />
    </html>
  )
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918077230221?text=Hello%2C%20I%20want%20to%20book%20a%20cab"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}

function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-4 py-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between gap-3">
        {/* WhatsApp Book */}
        <a
          href="https://wa.me/918077230221?text=Hello%2C%20I%20want%20to%20book%20a%20cab"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-extrabold text-xs py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm relative transition-all active:scale-95"
        >
          {/* Pulsing dot */}
          <span className="absolute top-1 right-2 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          {/* WhatsApp icon */}
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp Book
        </a>

        {/* Call Now */}
        <a
          href="tel:+918077230221"
          className="flex-1 bg-primary hover:bg-blue-800 active:bg-blue-900 text-white font-extrabold text-xs py-3 px-2 rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-all active:scale-95"
        >
          <svg className="w-4 h-4 shrink-0 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call: +91 8077230221
        </a>
      </div>
      <div className="text-center text-[9px] text-gray-500 font-semibold mt-1">
        ⚡ Response in 2 mins • 24/7 Active
      </div>
    </div>
  )
}
