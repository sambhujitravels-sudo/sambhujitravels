import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Public client — used on client side (anon access)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-only admin client — bypasses RLS, used in API routes only
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey)

export type BookingQueryRow = {
  id: string
  name: string
  mobile: string
  pickup_city: string
  drop_city: string
  pickup_date: string
  pickup_time: string
  vehicle_type: string
  trip_type: string
  status: 'new' | 'contacted' | 'booked' | 'cancelled'
  submitted_at: string
  page: string
}
