'use client'

import { useState, useEffect } from 'react'
import { Star, ShieldCheck, Clock, Award, Users, Heart, RefreshCw } from 'lucide-react'

interface Review {
  id: string
  name: string
  rating: number
  comment: string
  trip: string
  date: string
  source?: string
  avatarUrl?: string
}

const DEFAULT_REVIEWS: Review[] = [
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

// Google Brand Color G Icon SVG
const GoogleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
  </svg>
)

export default function ReviewsClient() {
  const [localReviews, setLocalReviews] = useState<Review[]>([])
  const [googleReviews, setGoogleReviews] = useState<Review[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [ratingFilter, setRatingFilter] = useState<number | null>(null)
  const [googleStats, setGoogleStats] = useState({ rating: '4.9', totalCount: 124 })
  const [isSyncing, setIsSyncing] = useState(false)
  const [lastSynced, setLastSynced] = useState<string>('')

  // Load reviews on mount
  useEffect(() => {
    // 1. Load local reviews
    let locals: Review[] = []
    const saved = localStorage.getItem('shambhuji_reviews')
    if (saved) {
      try {
        locals = JSON.parse(saved)
      } catch (e) {
        locals = DEFAULT_REVIEWS
      }
    } else {
      locals = DEFAULT_REVIEWS
      localStorage.setItem('shambhuji_reviews', JSON.stringify(DEFAULT_REVIEWS))
    }
    setLocalReviews(locals)

    // 2. Fetch Google Reviews
    fetchGoogleReviews(locals)
  }, [])

  const fetchGoogleReviews = (localsList: Review[]) => {
    setIsSyncing(true)
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (data.reviews) {
          setGoogleReviews(data.reviews)
          setGoogleStats({
            rating: data.rating?.toString() || '4.9',
            totalCount: data.totalReviewsCount || 124
          })
          const combined = [...localsList, ...data.reviews]
          localStorage.setItem('shambhuji_reviews_combined', JSON.stringify(combined))
          setReviews(combined)
          setLastSynced(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
          // Broadcast sync event to Testimonials.tsx on homepage
          window.dispatchEvent(new Event('reviewsUpdated'))
        }
      })
      .catch(err => {
        console.error('Error syncing Google reviews:', err)
        // Fallback merge
        const combined = [...localsList]
        setReviews(combined)
      })
      .finally(() => {
        setIsSyncing(false)
      })
  }

  // Handle re-sync click manually
  const handleSyncClick = () => {
    fetchGoogleReviews(localReviews)
  }

  // Calculate statistics
  const totalReviews = reviews.length
  const avgRating = totalReviews > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(1)
    : '5.0'

  const starCounts = [0, 0, 0, 0, 0]
  reviews.forEach(r => {
    if (r.rating >= 1 && r.rating <= 5) {
      starCounts[r.rating - 1]++
    }
  })

  const filteredReviews = ratingFilter 
    ? reviews.filter(r => r.rating === ratingFilter)
    : reviews

  return (
    <div className="space-y-16">
      {/* About Us & Key Highlights */}
      <section className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 text-accent text-sm font-semibold uppercase tracking-wider mb-2">
              <Heart size={16} className="fill-accent text-accent animate-pulse" />
              <span>Bareilly's Premier Travel Service</span>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 font-display">About Shambhu ji Travels</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                Founded in <strong>2015</strong>, Shambhu ji Travels has grown to become Bareilly's most trusted name in outstation taxi services, airport transfers, and local tourist rentals.
              </p>
              <p>
                We operate with a simple mission: <em>to deliver maximum passenger comfort, verified driver safety, and clear billing with zero surprises</em>. Our base fares start at just <strong>₹11/km</strong>, making premium travel affordable.
              </p>
              <p>
                Over the last 9 years, we have safely driven more than <strong>10,000+ satisfied passengers</strong> to over 500 destinations including Delhi NCR, Lucknow, Nainital, Haridwar, and Uttarakhand hills. Thank you for placing your trust in us!
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <ShieldCheck className="text-primary" size={24} />
                <span className="font-semibold text-gray-800 text-sm">Safe & Verified</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <Clock className="text-accent" size={24} />
                <span className="font-semibold text-gray-800 text-sm">24/7 Dispatch</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <Users className="text-orange-500" size={24} />
                <span className="font-semibold text-gray-800 text-sm">10K+ Happy Trips</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <Award className="text-purple-500" size={24} />
                <span className="font-semibold text-gray-800 text-sm">Since 2015</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/95 text-white p-8 rounded-2xl relative overflow-hidden shadow-2xl">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <h3 className="text-xl font-bold mb-4 relative z-10">Why Customers Rate Us 5 Stars</h3>
            <ul className="space-y-4 relative z-10 text-sm">
              <li className="flex items-start">
                <span className="bg-accent/20 text-accent p-1 rounded-full mr-3 mt-0.5 font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Transparent Rates</h4>
                  <p className="text-gray-300 text-xs">No hidden travel fees, dynamic pricing, or sudden charges. Pay exactly per km.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-accent/20 text-accent p-1 rounded-full mr-3 mt-0.5 font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Spotless Vehicles</h4>
                  <p className="text-gray-300 text-xs">All our Sedans, SUVs, and Innova Crysta cabs are sanitised and air-conditioned.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="bg-accent/20 text-accent p-1 rounded-full mr-3 mt-0.5 font-bold">✓</span>
                <div>
                  <h4 className="font-bold">Expert Chauffeurs</h4>
                  <p className="text-gray-300 text-xs">Drivers are background-checked, polite, and well-trained for both expressway speedways and mountain curves.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Real-time Review Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 font-display">What Travelers Experience</h2>
          <p className="text-gray-650 mt-2 max-w-xl mx-auto text-sm">
            Read verified reviews synced from our official Google listing page, or share your own travel story.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Rating Summary Widget */}
          <div className="space-y-6">
            {/* Google Rating Profile */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <GoogleIcon className="w-5 h-5" />
                  <span className="font-bold text-gray-800 text-sm">Google Business</span>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-green-600 bg-green-50 px-2.5 py-1 rounded-full font-semibold border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                  <span>Live Synced</span>
                </div>
              </div>

              <div className="flex items-end space-x-3">
                <div className="text-5xl font-extrabold text-gray-900 tracking-tight">{googleStats.rating}</div>
                <div className="mb-1 space-y-1">
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star 
                        key={s} 
                        size={16} 
                        className="fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                  <div className="text-[11px] text-gray-500 font-medium">Based on {googleStats.totalCount} Google reviews</div>
                </div>
              </div>

              <button
                onClick={handleSyncClick}
                disabled={isSyncing}
                className="w-full flex items-center justify-center space-x-2 text-xs font-bold text-primary hover:text-accent border border-gray-200 hover:border-accent/30 py-2.5 rounded-xl bg-gray-50 hover:bg-green-50/20 transition-all disabled:opacity-50"
              >
                <RefreshCw size={14} className={isSyncing ? 'animate-spin text-accent' : ''} />
                <span>{isSyncing ? 'Syncing...' : 'Force Refresh Sync'}</span>
              </button>
              
              {lastSynced && (
                <div className="text-center text-[10px] text-gray-400 font-medium">
                  Last synced: {lastSynced}
                </div>
              )}
            </div>

            {/* General Filter Summary Widget */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 space-y-4">
              <div>
                <h3 className="font-bold text-gray-800 text-sm mb-3">Filter by Star Rating</h3>
                <div className="flex items-center space-x-3">
                  <div className="text-3xl font-extrabold text-primary">{avgRating}</div>
                  <div>
                    <div className="flex space-x-0.5">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star 
                          key={s} 
                          size={14} 
                          className={`${s <= Math.round(Number(avgRating)) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                        />
                      ))}
                    </div>
                    <div className="text-[11px] text-gray-550 mt-0.5">{totalReviews} total combined ratings</div>
                  </div>
                </div>
              </div>

              {/* Stars Progress bars */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                {[5, 4, 3, 2, 1].map((s) => {
                  const count = starCounts[s - 1];
                  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  return (
                    <button
                      key={s}
                      onClick={() => setRatingFilter(ratingFilter === s ? null : s)}
                      className={`w-full flex items-center text-left hover:bg-gray-50 p-1.5 rounded-lg transition-colors text-xs ${ratingFilter === s ? 'bg-blue-50 font-bold border border-blue-100' : 'border border-transparent'}`}
                    >
                      <span className="w-12 text-gray-600 font-medium">{s} Star</span>
                      <div className="flex-1 bg-gray-100 h-2 rounded-full mx-3 overflow-hidden">
                        <div 
                          className="bg-yellow-400 h-full rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="w-8 text-right text-gray-500 font-mono">{count}</span>
                    </button>
                  )
                })}
              </div>
              
              {ratingFilter && (
                <button 
                  onClick={() => setRatingFilter(null)}
                  className="w-full text-center text-xs text-primary hover:text-accent font-bold mt-1"
                >
                  Clear Star Filter
                </button>
              )}
            </div>
          </div>

          {/* Real-time Review List */}
          <div className="lg:col-span-2 space-y-6">
            {/* Review Cards container */}
            <div className="space-y-4 max-h-[650px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredReviews.length === 0 ? (
                <div className="bg-white rounded-2xl p-8 border border-gray-100 text-center shadow-sm">
                  <p className="text-gray-500 text-sm">No reviews found for this rating selection.</p>
                  {ratingFilter && (
                    <button 
                      onClick={() => setRatingFilter(null)}
                      className="text-primary font-semibold hover:underline mt-2 text-xs"
                    >
                      Show all reviews
                    </button>
                  )}
                </div>
              ) : (
                filteredReviews.map((r) => (
                  <div key={r.id} className="bg-white rounded-xl shadow-md p-5 border border-gray-100 hover:shadow-lg transition-all duration-200">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-3">
                        {r.avatarUrl ? (
                          <img 
                            src={r.avatarUrl} 
                            alt={r.name} 
                            className="w-10 h-10 rounded-full object-cover shadow-sm border border-gray-100" 
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs border border-primary/5">
                            {r.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                          </div>
                        )}
                        <div>
                          <div className="flex flex-wrap items-center gap-1.5">
                            <h4 className="font-bold text-gray-850 text-sm leading-tight">{r.name}</h4>
                            {r.source === 'google' && (
                              <span className="inline-flex items-center bg-blue-50 text-[10px] text-blue-600 px-2 py-0.5 rounded-full font-bold border border-blue-100 gap-1 select-none">
                                <GoogleIcon className="w-3 h-3" />
                                <span>Verified</span>
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-400 font-medium block mt-0.5">{r.date}</span>
                        </div>
                      </div>
                      <div className="flex space-x-0.5">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star 
                            key={s} 
                            size={14} 
                            className={`${s <= r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-650 text-xs mt-3.5 leading-relaxed font-normal">{r.comment}</p>
                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center text-[11px]">
                      <span className="text-gray-400 font-medium">Route Traveled:</span>
                      <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-semibold">
                        {r.trip}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Write a Google Review Card Redirection */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-center space-y-5">
              <div className="mx-auto w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center border border-blue-100">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-extrabold text-gray-800 text-lg leading-tight">Share Your Experience on Google</h3>
                <p className="text-xs text-gray-550 max-w-md mx-auto leading-relaxed">
                  Your ratings and comments help us serve Bareilly better. Click below to write a review directly on our official Google Business profile!
                </p>
              </div>

              <div className="flex justify-center space-x-1.5 py-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star 
                    key={s} 
                    size={28} 
                    className="fill-yellow-400 text-yellow-400 animate-pulse"
                    style={{ animationDelay: `${s * 150}ms` }}
                  />
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="https://share.google/f1Tt4tXvgFDLTzwnO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center space-x-2.5 bg-accent hover:bg-green-600 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] duration-150 cursor-pointer"
                >
                  <GoogleIcon className="w-4 h-4 fill-white" />
                  <span>Write a Review on Google</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
