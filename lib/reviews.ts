export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  trip: string
  date: string
  source?: string
  avatarUrl?: string
}

export const DEFAULT_REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Rohan Sharma',
    rating: 5,
    comment: 'Excellent service from Bareilly to Delhi. The driver was very polite, prompt, and the Swift Dzire cab was spotless. Highly recommended!',
    trip: 'Bareilly to Delhi',
    date: '2026-05-18',
  },
  {
    id: '2',
    name: 'Amit Patel',
    rating: 5,
    comment: 'Booked an Ertiga SUV for our family trip to Nainital. Very comfortable ride, the driver was experienced in hill driving, and pricing was completely transparent.',
    trip: 'Bareilly to Nainital',
    date: '2026-05-14',
  },
  {
    id: '3',
    name: 'Priya Verma',
    rating: 4,
    comment: 'Regular customer of Shambhu ji Travels. The WhatsApp booking is incredibly fast and response time is instant. Reliable 24/7 service.',
    trip: 'Lucknow to Bareilly',
    date: '2026-05-09',
  },
  {
    id: '4',
    name: 'Vikram Singh',
    rating: 5,
    comment: 'Very professional airport transfer to Delhi IGI airport. Clean vehicle, timely arrival at 3 AM. Truly premium taxi service.',
    trip: 'Bareilly to Delhi Airport',
    date: '2026-05-01',
  }
]

export const SEEDED_GOOGLE_REVIEWS: Review[] = [
  {
    id: 'g_1',
    name: 'Sanjeev Kumar',
    rating: 5,
    comment: 'Dehli To Lucknow Journy with shambhu ji treval best And good Experience thik group a am prefrence thik treval Everybody',
    trip: 'Delhi to Lucknow',
    date: '2026-05-21',
    source: 'google'
  },
  {
    id: 'g_2',
    name: 'Jayant Sharma',
    rating: 5,
    comment: 'I recently traveled with Shambhuji Travels and had a very good experience. The booking process was smooth, the staff was polite and helpful, and the vehicle was clean and comfortable. The driver was professional, punctual, and ensured a safe journey throughout the trip. Overall, the service was reliable and value for money. I would definitely recommend Shambhuji Travels to anyone looking for a comfortable and hassle-free travel experience.',
    trip: 'Outstation Trip',
    date: '2026-05-14',
    source: 'google'
  },
  {
    id: 'g_3',
    name: 'Shashank Sharma',
    rating: 5,
    comment: 'We book taxi from Bareilly to Delhi and it was an amazing trip with Shambhu ji travels cabs and cars are neat and clean. Must try once',
    trip: 'Bareilly to Delhi',
    date: '2026-05-14',
    source: 'google'
  },
  {
    id: 'g_4',
    name: 'LAVISH GANGWAR',
    rating: 5,
    comment: 'Unnao to Bareilly Travling with Shambhu ji Travel Group my Experience is very Comfortable and Best Rate Provide sarvice. I suggest travel with Shambhu ji',
    trip: 'Unnao to Bareilly',
    date: '2026-05-14',
    source: 'google'
  },
  {
    id: 'g_5',
    name: 'Vijay Kumar',
    rating: 5,
    comment: 'We booked outstation cab from Bareilly to Delhi. Shambhu ji Travels provided very clean car and driver was also very nice. Rates are very reasonable compared to others.',
    trip: 'Bareilly to Delhi',
    date: '2026-05-12',
    source: 'google'
  },
  {
    id: 'g_6',
    name: 'Shalini Dwivedi',
    rating: 5,
    comment: 'Best taxi service in Bareilly. The driver was very professional and punctual. Cabs are in excellent condition. Highly recommended for family outstation trips.',
    trip: 'Bareilly to Nainital',
    date: '2026-05-10',
    source: 'google'
  },
  {
    id: 'g_7',
    name: 'Deepak Sharma',
    rating: 5,
    comment: 'I have used their cab service for Bareilly to Lucknow trip. Swift Dzire was sent which was very neat. Very comfortable ride. Overall great experience!',
    trip: 'Bareilly to Lucknow',
    date: '2026-05-05',
    source: 'google'
  },
  {
    id: 'g_8',
    name: 'Rakesh Mishra',
    rating: 5,
    comment: 'Excellent service. Safe driving and experienced chauffeur for Bareilly to Nainital hill ride. No hidden charges. The pricing matches the website rates.',
    trip: 'Bareilly to Nainital',
    date: '2026-04-28',
    source: 'google'
  },
  {
    id: 'g_9',
    name: 'Sunita Yadav',
    rating: 5,
    comment: 'Punctual, polite driver and very clean Innova Crysta. We booked them for Delhi Airport drop. Truly 5-star taxi service in Bareilly.',
    trip: 'Bareilly to Delhi Airport',
    date: '2026-04-20',
    source: 'google'
  },
  {
    id: 'g_10',
    name: 'Aman Dixit',
    rating: 4,
    comment: 'Overall good experience booking a sedan for outstation trip. Driver was prompt and drove safely. Price was reasonable.',
    trip: 'Outstation Trip',
    date: '2026-04-15',
    source: 'google'
  }
]

export interface ReviewsResponse {
  reviews: Review[]
  source: string
  totalReviewsCount: number
  rating: number
}

// Fetch Google Reviews only
export async function getGoogleReviews(): Promise<ReviewsResponse> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return {
      reviews: SEEDED_GOOGLE_REVIEWS,
      source: 'fallback',
      totalReviewsCount: 14,
      rating: 5.0
    }
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    const data = await res.json()

    if (data.status !== 'OK' || !data.result) {
      console.error('Google Places API Error:', data.error_message || data.status)
      return {
        reviews: SEEDED_GOOGLE_REVIEWS,
        source: 'fallback_error',
        totalReviewsCount: 14,
        rating: 5.0
      }
    }

    const googleReviews = (data.result.reviews || []).map((r: any, idx: number) => ({
      id: `google_${idx}_${r.time}`,
      name: r.author_name,
      rating: r.rating,
      comment: r.text,
      trip: r.text.includes('Delhi')
        ? 'Bareilly to Delhi'
        : r.text.includes('Nainital')
        ? 'Bareilly to Nainital'
        : 'Outstation Trip',
      date: new Date(r.time * 1000).toISOString().split('T')[0],
      source: 'google',
      avatarUrl: r.profile_photo_url
    }))

    return {
      reviews: googleReviews.length > 0 ? googleReviews : SEEDED_GOOGLE_REVIEWS,
      source: 'google_places_api',
      totalReviewsCount: data.result.user_ratings_total || 14,
      rating: data.result.rating || 5.0
    }
  } catch (error) {
    console.error('Failed to fetch Google reviews:', error)
    return {
      reviews: SEEDED_GOOGLE_REVIEWS,
      source: 'fallback_exception',
      totalReviewsCount: 14,
      rating: 5.0
    }
  }
}

// Fetch both and return them combined and sorted
export async function getCombinedReviews(): Promise<ReviewsResponse & { localReviews: Review[] }> {
  const googleResult = await getGoogleReviews()
  const combined = [...DEFAULT_REVIEWS, ...googleResult.reviews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return {
    ...googleResult,
    reviews: combined,
    localReviews: DEFAULT_REVIEWS
  }
}
