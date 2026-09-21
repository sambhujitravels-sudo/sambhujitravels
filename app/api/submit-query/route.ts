import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export type BookingQuery = {
  id: string
  name: string
  mobile: string
  pickupCity: string
  dropCity: string
  pickupDate: string
  pickupTime: string
  vehicleType: string
  tripType: string
  status: 'new' | 'contacted' | 'booked' | 'cancelled'
  submittedAt: string
  page?: string
}

function toRow(q: Omit<BookingQuery, 'id' | 'submittedAt'>) {
  return {
    name: q.name,
    mobile: q.mobile,
    pickup_city: q.pickupCity,
    drop_city: q.dropCity,
    pickup_date: q.pickupDate,
    pickup_time: q.pickupTime,
    vehicle_type: q.vehicleType,
    trip_type: q.tripType,
    status: 'new' as const,
    page: q.page || 'website',
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromRow(r: any): BookingQuery {
  return {
    id: r.id,
    name: r.name,
    mobile: r.mobile,
    pickupCity: r.pickup_city,
    dropCity: r.drop_city,
    pickupDate: r.pickup_date,
    pickupTime: r.pickup_time,
    vehicleType: r.vehicle_type,
    tripType: r.trip_type,
    status: r.status,
    submittedAt: r.submitted_at,
    page: r.page,
  }
}

function checkAdmin(req: NextRequest): boolean {
  const pwd = new URL(req.url).searchParams.get('pwd')
  const adminPwd = process.env.ADMIN_PASSWORD || 'shambhuji2025'
  return pwd === adminPwd
}

// ─── POST /api/submit-query ── Save a new booking enquiry ───────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.mobile || !body.pickupCity || !body.dropCity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const id = `Q${Date.now()}`

    const { error } = await supabaseAdmin.from('booking_queries').insert({
      id,
      ...toRow(body),
    })

    if (error) {
      console.error('Supabase insert error:', error)
      return NextResponse.json({ error: 'Failed to save query' }, { status: 500 })
    }

    return NextResponse.json({ success: true, id })
  } catch (err) {
    console.error('POST /api/submit-query error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// ─── GET /api/submit-query ── Admin: fetch all queries ──────────────────────
export async function GET(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const { data, error } = await supabaseAdmin
    .from('booking_queries')
    .select('*')
    .order('submitted_at', { ascending: false })

  if (error) {
    console.error('Supabase fetch error:', error)
    return NextResponse.json({ error: 'Failed to fetch queries' }, { status: 500 })
  }

  const queries = (data || []).map(fromRow)
  return NextResponse.json({ queries, total: queries.length })
}

// ─── PATCH /api/submit-query ── Admin: update query status ──────────────────
export async function PATCH(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  try {
    const { id, status } = await req.json()

    const { error } = await supabaseAdmin
      .from('booking_queries')
      .update({ status })
      .eq('id', id)

    if (error) {
      return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
