import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export interface BookingQuery {
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

const DATA_FILE = path.join(process.cwd(), 'data', 'queries.json')

async function ensureDataFile() {
  const dir = path.join(process.cwd(), 'data')
  try {
    await fs.access(dir)
  } catch {
    await fs.mkdir(dir, { recursive: true })
  }
  try {
    await fs.access(DATA_FILE)
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([]), 'utf-8')
  }
}

async function readQueries(): Promise<BookingQuery[]> {
  await ensureDataFile()
  try {
    const content = await fs.readFile(DATA_FILE, 'utf-8')
    return JSON.parse(content)
  } catch {
    return []
  }
}

async function writeQueries(queries: BookingQuery[]) {
  await ensureDataFile()
  await fs.writeFile(DATA_FILE, JSON.stringify(queries, null, 2), 'utf-8')
}

// POST /api/submit-query — Save a new booking query
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, mobile, pickupCity, dropCity, pickupDate, pickupTime, vehicleType, tripType, page } = body

    if (!mobile || !pickupCity || !dropCity) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const queries = await readQueries()

    const newQuery: BookingQuery = {
      id: `Q${Date.now()}`,
      name: name || 'Unknown',
      mobile,
      pickupCity,
      dropCity,
      pickupDate: pickupDate || '',
      pickupTime: pickupTime || '',
      vehicleType: vehicleType || 'Sedan',
      tripType: tripType || 'oneway',
      status: 'new',
      submittedAt: new Date().toISOString(),
      page: page || 'website',
    }

    queries.unshift(newQuery) // newest first
    await writeQueries(queries)

    return NextResponse.json({ success: true, id: newQuery.id })
  } catch (error) {
    console.error('Failed to save query:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET /api/submit-query — Fetch all queries (used by admin dashboard)
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const pwd = searchParams.get('pwd')

  // Simple password gate
  const adminPwd = process.env.ADMIN_PASSWORD || 'shambhuji2025'
  if (pwd !== adminPwd) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const queries = await readQueries()
  return NextResponse.json({ queries, total: queries.length })
}

// PATCH /api/submit-query — Update query status
export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const pwd = searchParams.get('pwd')
  const adminPwd = process.env.ADMIN_PASSWORD || 'shambhuji2025'

  if (pwd !== adminPwd) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { id, status } = await req.json()
    const queries = await readQueries()
    const idx = queries.findIndex(q => q.id === id)
    if (idx === -1) {
      return NextResponse.json({ error: 'Query not found' }, { status: 404 })
    }
    queries[idx].status = status
    await writeQueries(queries)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
