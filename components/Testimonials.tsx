'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { type Review, DEFAULT_REVIEWS } from '@/lib/reviews'

const GoogleIcon = ({ className = "w-3 h-3" }: { className?: string }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
)

export default function Testimonials({ initialReviews }: { initialReviews?: Review[] }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews || [])

  const loadReviews = () => {
    const savedCombined = localStorage.getItem('shambhuji_reviews_combined')
    if (savedCombined) {
      try {
        const parsed = JSON.parse(savedCombined)
        if (parsed && parsed.length > 0) {
          setReviews(parsed)
          return
        }
      } catch (e) {
        // Fall back
      }
    }

    if (initialReviews && initialReviews.length > 0) {
      setReviews(initialReviews)
      return
    }

    const saved = localStorage.getItem('shambhuji_reviews')
    if (saved) {
      try {
        setReviews(JSON.parse(saved))
      } catch (e) {
        setReviews(DEFAULT_REVIEWS)
      }
    } else {
      setReviews(DEFAULT_REVIEWS)
    }
  }

  useEffect(() => {
    if (!initialReviews || initialReviews.length === 0) {
      // Client-side fallback fetch
      fetch('/api/google-reviews')
        .then(res => res.json())
        .then(data => {
          if (data.reviews && data.reviews.length > 0) {
            let locals = DEFAULT_REVIEWS
            const saved = localStorage.getItem('shambhuji_reviews')
            if (saved) {
              try { locals = JSON.parse(saved) } catch (e) {}
            }
            const combined = [...locals, ...data.reviews].sort(
              (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
            )
            localStorage.setItem('shambhuji_reviews_combined', JSON.stringify(combined))
            setReviews(combined)
          } else {
            loadReviews()
          }
        })
        .catch(() => {
          loadReviews()
        })
    } else {
      localStorage.removeItem('shambhuji_reviews_combined')
      loadReviews()
    }

    // Listen to changes in localStorage (e.g. from the reviews page)
    window.addEventListener('reviewsUpdated', loadReviews)
    return () => {
      window.removeEventListener('reviewsUpdated', loadReviews)
    }
  }, [initialReviews])

  // Show top 3 reviews
  const displayedReviews = reviews.slice(0, 3)

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Read real stories from travelers who experienced the convenience and reliability of Shambhu ji Travels.
          </p>
        </div>

        {displayedReviews.length === 0 ? (
          <div className="text-center text-gray-400 text-sm py-8">
            Loading customer experiences...
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedReviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/80 relative flex flex-col justify-between hover:border-accent/40 hover:bg-gray-800/60 transition-all duration-300 group shadow-md"
              >
                <Quote className="absolute top-6 right-6 text-gray-700/50 group-hover:text-accent/20 transition-colors" size={36} />
                
                <div>
                  {/* Stars */}
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star 
                        key={s} 
                        size={16} 
                        className={`${
                          s <= review.rating 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm italic mb-6">
                    "{review.comment}"
                  </p>
                </div>

                <div className="border-t border-gray-850 pt-4 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <p className="font-bold text-white text-sm">{review.name}</p>
                        {review.source === 'google' && (
                          <span className="inline-flex items-center bg-blue-500/10 text-[9px] text-blue-400 px-1.5 py-0.5 rounded-full font-bold border border-blue-500/20 gap-0.5 select-none">
                            <GoogleIcon />
                            <span>Google Verified User</span>
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                    <span className="text-xs bg-primary/45 border border-primary/20 text-accent px-2.5 py-1 rounded-full font-semibold">
                      {review.trip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/reviews"
            className="inline-flex items-center bg-gray-800 hover:bg-gray-705 border border-gray-700 hover:border-gray-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md"
          >
            <MessageSquare size={16} className="mr-2 text-accent" />
            Read All Reviews ({reviews.length})
          </Link>
          
          <a
            href="tel:+918077230221"
            className="inline-flex items-center bg-accent hover:bg-green-600 text-white px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg hover:scale-105"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Book via Phone
          </a>
        </div>
      </div>
    </section>
  )
}
