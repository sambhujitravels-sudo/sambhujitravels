'use client'

import { useState, useEffect, useCallback } from 'react'
import type { BookingQuery } from '@/app/api/submit-query/route'

const STATUS_CONFIG = {
  new: { label: 'New', color: 'bg-blue-100 text-blue-700 border-blue-200', dot: 'bg-blue-500' },
  contacted: { label: 'Contacted', color: 'bg-yellow-100 text-yellow-700 border-yellow-200', dot: 'bg-yellow-500' },
  booked: { label: 'Booked ✓', color: 'bg-green-100 text-green-700 border-green-200', dot: 'bg-green-500' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-700 border-red-200', dot: 'bg-red-500' },
}

function formatDate(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
    timeZone: 'Asia/Kolkata'
  })
}

export default function AdminDashboard() {
  const [password, setPassword] = useState('')
  const [inputPwd, setInputPwd] = useState('')
  const [error, setError] = useState('')
  const [queries, setQueries] = useState<BookingQuery[]>([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState<'all' | BookingQuery['status']>('all')
  const [updating, setUpdating] = useState<string | null>(null)

  const fetchQueries = useCallback(async (pwd: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/submit-query?pwd=${pwd}`)
      if (!res.ok) {
        setError('Wrong password')
        setPassword('')
        return
      }
      const data = await res.json()
      setQueries(data.queries)
      setError('')
    } catch {
      setError('Failed to load queries')
    } finally {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setPassword(inputPwd)
    fetchQueries(inputPwd)
  }

  const updateStatus = async (id: string, status: BookingQuery['status']) => {
    setUpdating(id)
    try {
      await fetch(`/api/submit-query?pwd=${password}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      setQueries(prev => prev.map(q => q.id === id ? { ...q, status } : q))
    } finally {
      setUpdating(null)
    }
  }

  const handleRefresh = () => fetchQueries(password)

  const filtered = filter === 'all' ? queries : queries.filter(q => q.status === filter)
  const counts = {
    all: queries.length,
    new: queries.filter(q => q.status === 'new').length,
    contacted: queries.filter(q => q.status === 'contacted').length,
    booked: queries.filter(q => q.status === 'booked').length,
    cancelled: queries.filter(q => q.status === 'cancelled').length,
  }

  if (!password) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="w-14 h-14 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-white font-bold text-xl">Admin Dashboard</h1>
            <p className="text-slate-400 text-sm mt-1">Shambhu ji Travels — Booking Queries</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={inputPwd}
              onChange={e => setInputPwd(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 text-sm"
              required
            />
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors text-sm"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-base">Booking Queries</h1>
              <p className="text-gray-500 text-xs">Shambhu ji Travels Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400 hidden sm:block">
              {counts.new > 0 && <span className="text-blue-600 font-bold">{counts.new} new</span>}
              {counts.new === 0 && 'All caught up'}
            </span>
            <button
              onClick={handleRefresh}
              className="flex items-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
            <button
              onClick={() => { setPassword(''); setInputPwd('') }}
              className="text-xs text-gray-500 hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { key: 'all', label: 'Total Queries', color: 'bg-slate-700', count: counts.all },
            { key: 'new', label: 'New', color: 'bg-blue-600', count: counts.new },
            { key: 'contacted', label: 'Contacted', color: 'bg-yellow-500', count: counts.contacted },
            { key: 'booked', label: 'Booked', color: 'bg-green-600', count: counts.booked },
            { key: 'cancelled', label: 'Cancelled', color: 'bg-red-500', count: counts.cancelled },
          ].map(s => (
            <button
              key={s.key}
              onClick={() => setFilter(s.key as 'all' | BookingQuery['status'])}
              className={`rounded-xl p-4 text-left transition-all border-2 ${
                filter === s.key ? 'border-blue-500 shadow-md scale-[1.02]' : 'border-transparent hover:border-gray-200'
              } bg-white shadow-sm`}
            >
              <div className={`text-2xl font-black ${filter === s.key ? 'text-blue-600' : 'text-gray-800'}`}>{s.count}</div>
              <div className="text-xs text-gray-500 font-medium mt-0.5">{s.label}</div>
            </button>
          ))}
        </div>

        {/* Queries List */}
        {loading ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-gray-500 text-sm">Loading queries...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm">
            <div className="text-4xl mb-3">📭</div>
            <p className="text-gray-600 font-semibold">No queries yet</p>
            <p className="text-gray-400 text-sm mt-1">Booking form submissions will appear here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(q => {
              const cfg = STATUS_CONFIG[q.status]
              return (
                <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    {/* Left Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-bold text-gray-800 text-sm">{q.name}</span>
                        <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border font-semibold ${cfg.color}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
                          {cfg.label}
                        </span>
                        <span className="text-xs text-gray-400 font-mono">{q.id}</span>
                      </div>

                      {/* Route */}
                      <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 mb-2 w-fit max-w-full">
                        <span className="font-bold text-blue-700 text-sm truncate">{q.pickupCity}</span>
                        <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        <span className="font-bold text-green-700 text-sm truncate">{q.dropCity}</span>
                        <span className="text-xs text-gray-500 bg-white border border-gray-200 px-1.5 py-0.5 rounded font-medium shrink-0">{q.vehicleType}</span>
                        <span className="text-xs text-gray-400 shrink-0">{q.tripType === 'oneway' ? '↗ One Way' : '↔ Round Trip'}</span>
                      </div>

                      {/* Details row */}
                      <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                        <a href={`tel:${q.mobile}`} className="flex items-center gap-1 hover:text-blue-600 font-semibold">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {q.mobile}
                        </a>
                        {q.pickupDate && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {q.pickupDate} {q.pickupTime && `at ${q.pickupTime}`}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-gray-400">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {formatDate(q.submittedAt)}
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 shrink-0">
                      <a
                        href={`https://wa.me/91${q.mobile}?text=Hello%20${encodeURIComponent(q.name)}%2C%20Thank%20you%20for%20booking%20with%20Shambhu%20Ji%20Travels!%20Your%20trip%20from%20${encodeURIComponent(q.pickupCity)}%20to%20${encodeURIComponent(q.dropCity)}%20has%20been%20noted.%20We%20will%20call%20you%20shortly%20to%20confirm%20the%20details.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                      <a
                        href={`tel:${q.mobile}`}
                        className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                      </a>
                    </div>
                  </div>

                  {/* Status update */}
                  <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-medium">Mark as:</span>
                    {(['new', 'contacted', 'booked', 'cancelled'] as const).map(s => (
                      <button
                        key={s}
                        disabled={q.status === s || updating === q.id}
                        onClick={() => updateStatus(q.id, s)}
                        className={`text-xs px-2.5 py-1 rounded-lg border font-medium transition-all ${
                          q.status === s
                            ? `${STATUS_CONFIG[s].color} cursor-default`
                            : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                        } disabled:opacity-50`}
                      >
                        {updating === q.id && q.status !== s ? '...' : STATUS_CONFIG[s].label}
                      </button>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
