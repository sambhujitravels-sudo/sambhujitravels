import Link from 'next/link'
import { allRoutes, cityToSlug } from '@/lib/routes'

export default function AllRoutes() {
  // Sort routes alphabetically by "from to" combination
  const sortedRoutes = [...allRoutes].sort((a, b) => {
    const aKey = `${a.from} to ${a.to}`
    const bKey = `${b.from} to ${b.to}`
    return aKey.localeCompare(bKey)
  })

  // Split into columns (roughly equal)
  const columnCount = 4
  const itemsPerColumn = Math.ceil(sortedRoutes.length / columnCount)
  const columns: typeof sortedRoutes[] = []

  for (let i = 0; i < columnCount; i++) {
    columns.push(sortedRoutes.slice(i * itemsPerColumn, (i + 1) * itemsPerColumn))
  }

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-6">All Taxi Routes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-1">
          {columns.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-1">
              {column.map((route, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <Link
                    href={`/${cityToSlug(route.from)}-to-${cityToSlug(route.to)}-cab`}
                    className="text-yellow-500 hover:text-yellow-300 text-sm transition-colors"
                  >
                    {route.from} to {route.to} Cab
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
