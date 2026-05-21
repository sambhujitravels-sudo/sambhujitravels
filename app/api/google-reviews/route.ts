import { NextResponse } from 'next/server'
import { getGoogleReviews } from '@/lib/reviews'

export async function GET() {
  try {
    const result = await getGoogleReviews()
    return NextResponse.json(result)
  } catch (error) {
    console.error('API endpoint failed:', error)
    return NextResponse.json({
      reviews: [],
      source: 'error',
      totalReviewsCount: 0,
      rating: 5.0
    }, { status: 500 })
  }
}
