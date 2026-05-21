import { RouteInfo, findRoute, cityToSlug } from './routes'

export interface ExtendedRouteDetails {
  from: string
  to: string
  distance: number
  time: string
  intro: string
  travelGuide: string
  bestStops: { name: string; description: string }[]
  tollInfo: string
  roadCondition: string
  bestTravelTime: string
  touristPlaces: string[]
  fuelPoints: string
  seasonalNotes: string
  faqs: { question: string; answer: string }[]
}

// Destination category types
export type DestinationCategory = 'hill-station' | 'metro-city' | 'religious-site' | 'regional-town'

// Function to classify destinations
export function getDestinationCategory(city: string): DestinationCategory {
  const c = city.toLowerCase().trim()
  
  const hills = [
    'nainital', 'mussoorie', 'dehradun', 'almora', 'ranikhet', 'bhimtal', 'jim corbett', 
    'ramnagar', 'shimla', 'manali', 'dharamshala', 'auli', 'chopta', 'badrinath', 
    'kedarnath', 'gangotri', 'yamunotri', 'mukteshwar', 'sattal', 'naukuchiatal', 
    'binsar', 'chaukori', 'pithoragarh', 'munsiyari'
  ]
  
  const metro = [
    'delhi', 'noida', 'gurgaon', 'ghaziabad', 'faridabad', 'lucknow', 'kanpur', 
    'jaipur', 'agra', 'chandigarh', 'patna', 'firozabad', 'etawah'
  ]
  
  const religious = [
    'haridwar', 'rishikesh', 'varanasi', 'prayagraj', 'ayodhya', 'mathura', 'vrindavan', 'aligarh'
  ]
  
  if (hills.some(h => c.includes(h))) return 'hill-station'
  if (metro.some(m => c.includes(m))) return 'metro-city'
  if (religious.some(r => c.includes(r))) return 'religious-site'
  return 'regional-town'
}

// Custom priority route content database
const customRoutesDatabase: Record<string, Partial<ExtendedRouteDetails>> = {
  'bareilly-nainital': {
    intro: 'Embark on a scenic journey from the plains of Bareilly to the serene lake city of Nainital, the jewel of Uttarakhand. This route transitions beautifully into winding mountain roads offering gorgeous views of the Kumaon hills.',
    travelGuide: 'Hill driving requires high precision and experience. Our chauffeurs are specially trained for hairpin bends and steep slopes. Ensure you carry light woolens even in summer as Nainital weather can change quickly.',
    bestStops: [
      { name: 'Kathgodam', description: 'The gateway to Kumaon. Perfect for hot tea, snacks, and capturing the first views of the mountains.' },
      { name: 'Haldwani Bypass Dhabas', description: 'Famous for local Kumaoni cuisine, fresh parathas, and clean restroom facilities.' },
      { name: 'Bhimtal Junction', description: 'A scenic spot just off the route, ideal for a short break by the lakeside.' }
    ],
    tollInfo: 'Toll plazas at Haldwani and regional municipal entry taxes for Nainital district. Estimated total: ₹120 - ₹180.',
    roadCondition: 'Excellent 4-lane highway from Bareilly to Haldwani. The remaining 40 km consists of double-lane mountain ghat roads that are well-carpeted but require careful navigation.',
    bestTravelTime: 'March to June for pleasant summer weather; December to January to witness beautiful snowfall.',
    touristPlaces: ['Naini Lake', 'Naina Devi Temple', 'Mall Road shopping', 'Tiffin Top (Dorothy\'s Seat)', 'Snow View Point via Ropeway'],
    fuelPoints: 'Abundant petrol & diesel pumps in Bareilly, Rudrapur, and Haldwani. Limited fuel stations on the hill section, so refueling at Kathgodam is recommended.',
    seasonalNotes: 'Monsoon season (July to September) brings beautiful waterfalls but requires slow driving due to mist and landslide alerts. Winters get foggy in the morning near Bareilly.'
  },
  'bareilly-delhi': {
    intro: 'Connect from Rohilkhand\'s hub, Bareilly, to India\'s national capital, Delhi. This is our most frequented route, highly popular among business travelers, families, and airport flyers.',
    travelGuide: 'A straightforward expressway drive. Perfect for early morning or late evening departures to avoid Delhi\'s peak hour traffic. Safe, reliable, and smooth.',
    bestStops: [
      { name: 'Moradabad Bypass Dhabas', description: 'Legendary highway spots like Shiva Dhaba and Mannat Dhaba offering delicious North Indian meals and quick service.' },
      { name: 'Garhmukteshwar', description: 'A holy town near the Ganges river, ideal for a peaceful stopover and tea.' },
      { name: 'Hapur Bypass Food Courts', description: 'Modern food plazas featuring popular chains like Burger King, Subway, and local sweet shops.' }
    ],
    tollInfo: 'Fastag tolls at Joya, Garhmukteshwar, and Hapur. Estimated total one-way toll: ₹320 - ₹380.',
    roadCondition: 'Outstanding 4-lane and 6-lane national highways (NH9). Extremely smooth surface, well-marked lanes, and high-speed feasibility.',
    bestTravelTime: 'Throughout the year. Late autumn and spring (October to March) offer the most pleasant weather.',
    touristPlaces: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple', 'Connaught Place & Akshardham'],
    fuelPoints: 'Ample CNG, Petrol, and Diesel stations every 10 km. Multiple EV charging stations are also functional along NH9.',
    seasonalNotes: 'Expect heavy fog from mid-December to late January. Our drivers use specialized fog-lights and maintain safe speeds during this period.'
  },
  'delhi-yamunotri': {
    intro: 'Begin your sacred Char Dham pilgrimage from New Delhi to Yamunotri, the holy source of the Yamuna River nestled in the high Himalayas. This is a journey of spiritual awakening and majestic landscapes.',
    travelGuide: 'This is a long, arduous mountain route. It involves driving through ghats and a trek to the main shrine. We deploy only our most experienced senior mountain drivers for this route.',
    bestStops: [
      { name: 'Rishikesh / Dehradun', description: 'Perfect overnight stopovers to acclimatize and stock up on essential travel supplies.' },
      { name: 'Barkot', description: 'A beautiful riverside town with scenic views, great for local Garhwali meals.' }
    ],
    tollInfo: 'Toll taxes on Delhi-Meerut Expressway and state entry tax at Uttarakhand border. Estimated total: ₹400 - ₹550.',
    roadCondition: 'Expressway up to Meerut, followed by national highways to Dehradun, transitioning into narrow mountain roads with sharp curves beyond Mussoorie.',
    bestTravelTime: 'May to June (Summer opening) and September to October (Post-monsoon clearance).',
    touristPlaces: ['Yamunotri Temple', 'Surya Kund Hot Springs', 'Divya Shila', 'Barkot Scenic Valley'],
    fuelPoints: 'Refuel completely at Dehradun or Vikas Nagar. Mountain fuel stations are sparse and can have queues.',
    seasonalNotes: 'Strictly avoided during peak monsoon (July-August) due to high landslide risk. Winters are extremely cold, and the temple remains closed.'
  },
  'gurgaon-haridwar': {
    intro: 'Travel from the corporate hub Gurgaon to the ancient holy city of Haridwar, where the Ganges enters the plains. A perfect weekend getaway for family rituals or spiritual rejuvenation.',
    travelGuide: 'Takes the Delhi-Meerut Expressway bypass to avoid city gridlocks. Prompt transit ensures you reach in time for the evening Ganga Aarti at Har Ki Pauri.',
    bestStops: [
      { name: 'Modinagar Food plazas', description: 'Famous for local street food, sugarcane juice, and sweets.' },
      { name: 'Muzaffarnagar Bypass', description: 'Features multi-cuisine family restaurants with clean amenities and play areas.' }
    ],
    tollInfo: 'Tolls along KMP, Eastern Peripheral, and Meerut Expressway. Estimated total: ₹350 - ₹420.',
    roadCondition: 'Superb expressway and 4-lane highway (NH58). Fast, smooth, and highly comfortable.',
    bestTravelTime: 'September to March when the climate is cool and comfortable for temple walks.',
    touristPlaces: ['Har Ki Pauri Ghat', 'Mansa Devi Temple', 'Chandi Devi Temple', 'Shanti Kunj Ashram'],
    fuelPoints: 'Continuous fuel and CNG stations throughout the NH58 highway corridor.',
    seasonalNotes: 'Extremely crowded during the Kanwar Yatra (July-August). Special route diversions are managed by our experienced team during festivals.'
  },
  'noida-gurgaon': {
    intro: 'Commute seamlessly between the two key NCR giants: Noida and Gurgaon. Avoid public transport hassles and travel in absolute comfort for business meetings or airport transfers.',
    travelGuide: 'We utilize the DND Flyway, Kalindi Kunj route, or the new Expressway links depending on live traffic feeds to ensure you beat the bottleneck hours.',
    bestStops: [
      { name: 'Okhla Bird Sanctuary area', description: 'A green patch along the border, great for a quick coffee drive-through.' }
    ],
    tollInfo: 'DND flyway or peripheral toll if applicable. Estimated total: ₹50 - ₹100.',
    roadCondition: 'Urban multi-lane expressways. Excellent roads but subject to heavy traffic during morning and evening rush hours.',
    bestTravelTime: 'Throughout the year. Prefer non-peak hours (11 AM to 4 PM) for fastest transit.',
    touristPlaces: ['Cyber Hub Gurgaon', 'Kingdom of Dreams', 'Worlds of Wonder Noida', 'Okhla Bird Sanctuary'],
    fuelPoints: 'CNG and petrol pumps available at every intersection.',
    seasonalNotes: 'Monsoon showers can cause brief waterlogging at underpasses. Our local drivers are well-aware of alternative routes.'
  },
  'bareilly-lucknow': {
    intro: 'Journey from Bareilly to the city of Nawabs, Lucknow. This route links Rohilkhand to Avadh, offering a rich cultural transition and a very comfortable highway experience.',
    travelGuide: 'Travels via the Shahjahanpur-Sitapur highway. A smooth outstation route ideal for family trips, medical visits, or shopping in Hazratganj.',
    bestStops: [
      { name: 'Shahjahanpur Bypass', description: 'Excellent local dhabas serving authentic UP highway food.' },
      { name: 'Sitapur Food Courts', description: 'Spacious food courts with kids play zones and clean restrooms.' }
    ],
    tollInfo: 'Fastag tolls at Faridpur, Shahjahanpur, and Sitapur. Estimated total: ₹280 - ₹340.',
    roadCondition: 'Well-maintained 4-lane national highway (NH30). The ride is highly comfortable with minimal bumpy patches.',
    bestTravelTime: 'October to March is ideal for exploring Lucknow\'s historic monuments.',
    touristPlaces: ['Bara Imambara', 'Rumi Darwaza', 'Hazratganj market', 'Ambedkar Park', 'Chowk street food'],
    fuelPoints: 'Frequent petrol, diesel, and CNG pumps on NH30.',
    seasonalNotes: 'Mornings in winter can see moderate fog. Our drivers are trained in low-visibility highway safety.'
  }
}

// Generate dynamic, readable content based on city category
export function generateDynamicRouteDetails(from: string, to: string, distance: number, time: string): ExtendedRouteDetails {
  const fromSlug = cityToSlug(from)
  const toSlug = cityToSlug(to)
  const key = `${fromSlug}-${toSlug}`
  
  const fromCity = from.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  const toCity = to.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
  
  const customData = customRoutesDatabase[key] || {}
  const category = getDestinationCategory(to)
  
  // Default dynamic templates if custom data is missing
  let intro = `Travel comfortably from ${fromCity} to ${toCity} with Shambhu ji Travels. We offer premium, well-maintained cabs for one-way journeys, round trips, and holiday tours.`
  let travelGuide = `Enjoy a stress-free trip with our professional driver. We suggest scheduling your departure based on local traffic conditions. Our drivers are well-versed with the routes and ensure a safe trip.`
  let bestStops = [
    { name: 'Highway Dhabas', description: 'Popular family restaurants serving hot meals, tea, and quick refreshments.' },
    { name: 'Fuel & Rest Stations', description: 'Clean facilities along the highway for a relaxing break.' }
  ]
  let tollInfo = `Toll fees and state tax entries are calculated extra and paid at actuals during the journey.`
  let roadCondition = `The route consists of well-paved national highways and state highways, ensuring a smooth travel experience.`
  let bestTravelTime = `This destination is accessible throughout the year. Winter and spring months (October to April) are usually the most comfortable.`
  let touristPlaces = [`Local Markets`, `Historical landmarks`, `Popular viewpoint hubs`, `Prominent temples`]
  let fuelPoints = `Adequate petrol pumps and highway CNG stations are situated at regular intervals along this route.`
  let seasonalNotes = `Maintain safe speeds during the rainy season. Winter mornings may have light mist or fog near highway zones.`

  // Adjust templates based on category
  if (category === 'hill-station') {
    intro = `Plan an exciting getaway from ${fromCity} to the beautiful hills of ${toCity}. Escape the heat of the plains and enjoy the scenic elevation, winding roads, and panoramic mountain vistas.`
    travelGuide = `Mountain roads contain sharp bends and ghat sections. Our chauffeurs have extensive experience in hill driving, ensuring a secure and nausea-free climb. Keep warm clothing handy as temperatures drop rapidly.`
    bestStops = [
      { name: 'Foothill Junctions', description: 'Perfect spot to stop for hot ginger tea and take in the cool mountain breeze before starting the climb.' },
      { name: 'Scenic Viewpoints', description: 'Ideal spots to park safely, stretch your legs, and capture beautiful valley photographs.' }
    ]
    tollInfo = `Includes state border green taxes, hill entry fees, and highway tolls. Estimated total: ₹150 - ₹250.`
    roadCondition = `Smooth highways in the plains, transforming into double-lane hill roads (ghat sections). Roads are generally good but require lower speeds and careful driving.`
    bestTravelTime = `March to June for cool summers; late December to January to catch snowfall and winter beauty.`
    touristPlaces = [`Scenic Viewpoints`, `Mall Road walking`, `Nature trails & treks`, `Local lakes & waterfalls`]
    fuelPoints = `Ensure refueling at the foothills (like Haldwani or Dehradun) as mountain fuel stations are limited and can experience power outages.`
    seasonalNotes = `Drive slowly and stay alert during heavy rains (July-August) due to fog and mudslides. Check local weather reports prior to heading out.`
  } else if (category === 'metro-city') {
    intro = `Book a seamless and punctual cab from ${fromCity} to the bustling metropolis of ${toCity}. Ideal for corporate meetings, shopping excursions, airport drop-offs, and family gatherings.`
    travelGuide = `Travel via major national expressways. We plan your trip using live GPS routing to bypass major traffic bottlenecks near city borders and toll entry points.`
    bestStops = [
      { name: 'Expressway Food Plazas', description: 'Modern food hubs with clean toilets, coffee shops, and popular dining brands.' },
      { name: 'Transit Resting Bays', description: 'Safe parking spaces along the expressway to rest and refresh.' }
    ]
    tollInfo = `Calculated based on toll gates along the expressways. Fastags are active on all our cabs. Estimated: ₹200 - ₹400.`
    roadCondition = `Excellent 4-lane or 6-lane expressways and national highways. Fast, flat, and extremely comfortable for long-distance cruising.`
    bestTravelTime = `October to March when the weather is cool and perfect for city sightseeing or shopping.`
    touristPlaces = [`Shopping Malls`, `Historical Monuments`, `Urban Parks & Museums`, `Famous Food Streets`]
    fuelPoints = `Abundant fuel stations, including 24/7 CNG pumps and electric vehicle charging bays, are available throughout the route.`
    seasonalNotes = `Dense winter fog during December/January can affect speed. Heavy monsoon rains may cause temporary city traffic logs.`
  } else if (category === 'religious-site') {
    intro = `Embark on a peaceful spiritual journey from ${fromCity} to the sacred city of ${toCity}. Experience the divine temples, holy riverbanks, and calm spiritual energy of this historic destination.`
    travelGuide = `Dress modestly when visiting holy shrines. Plan your arrival times to align with main morning/evening prayers or the beautiful evening Aarti on the riverbanks.`
    bestStops = [
      { name: 'Pilgrim Rest Houses', description: 'Vegetarian dhabas offering pure satvik food, herbal tea, and clean restrooms.' },
      { name: 'Holy River Crossings', description: 'Peaceful locations to take photos, wash hands, and enjoy the divine atmosphere.' }
    ]
    tollInfo = `National highway tolls and regional temple parking fees. Estimated: ₹150 - ₹300.`
    roadCondition = `High-quality national highways connecting major pilgrim corridors. Some narrow lanes may be encountered inside old city zones.`
    bestTravelTime = `September to April. Festivals like Shivratri, Holi, and Diwali are grand but draw very high crowds.`
    touristPlaces = [`Ancient Holy Temples`, `River Ghats & Aarti points`, `Spiritual Ashrams`, `Traditional bazaars & sweet shops`]
    fuelPoints = `Multiple CNG and petrol stations are easily accessible along all major holy route corridors.`
    seasonalNotes = `Massive crowds accumulate during major religious events (like Kumbh Mela or Kanwar Yatra). Our team coordinates alternative routes to avoid delays.`
  } else if (category === 'regional-town') {
    intro = `Travel comfortably from ${fromCity} to the historic town of ${toCity}. Perfect for business visits, wedding events, or returning home to see family.`
    travelGuide = `A relaxed regional road trip. We offer door-to-door pickup and drop-off, saving you from carrying heavy luggage through train stations or bus stands.`
    bestStops = [
      { name: 'Local Sweet Shops', description: 'Famous regional bakeries and tea stalls offering authentic local snacks.' }
    ]
    tollInfo = `State highway tolls or regional checkposts. Estimated total: ₹50 - ₹150.`
    roadCondition = `Standard 2-lane or 4-lane state and national highways. Moderate traffic with occasional busy market crossings.`
    bestTravelTime = `Throughout the year. Autumn, winter, and spring seasons are highly recommended.`
    touristPlaces = [`Regional Landmarks`, `Traditional local markets`, `Scenic farms & orchards`, `Local historic structures`]
    fuelPoints = `Adequate petrol pumps and fuel stations exist near town boundaries and major intersections.`
    seasonalNotes = `Light morning mist in winters and moderate rains in summer. Roads are generally accessible year-round.`
  }

  // Combine default dynamic data with any specific custom route fields defined
  return {
    from,
    to,
    distance,
    time,
    intro: customData.intro || intro,
    travelGuide: customData.travelGuide || travelGuide,
    bestStops: customData.bestStops || bestStops,
    tollInfo: customData.tollInfo || tollInfo,
    roadCondition: customData.roadCondition || roadCondition,
    bestTravelTime: customData.bestTravelTime || bestTravelTime,
    touristPlaces: customData.touristPlaces || touristPlaces,
    fuelPoints: customData.fuelPoints || fuelPoints,
    seasonalNotes: customData.seasonalNotes || seasonalNotes,
    faqs: [
      {
        question: `What is the taxi fare from ${fromCity} to ${toCity}?`,
        answer: `The taxi fare from ${fromCity} to ${toCity} starts at ₹11/km for a Sedan (Dzire), ₹13/km for a family SUV (Ertiga), and ₹18/km for a premium Innova Crysta. For a distance of ${distance} km, your base fare will be calculated accordingly. Toll and state permits are extra.`
      },
      {
        question: `How long does it take to travel from ${fromCity} to ${toCity}?`,
        answer: `The drive from ${fromCity} to ${toCity} covers approximately ${distance} km and takes about ${time} in our AC cabs. Actual travel time may vary depending on traffic and seasonal road conditions.`
      },
      {
        question: `Do you offer one-way taxi drops to ${toCity}?`,
        answer: `Yes! Shambhu ji Travels specialize in one-way drops. You pay only for the distance you travel from ${fromCity} to ${toCity} with zero return charges. It is highly cost-effective.`
      },
      {
        question: `What vehicle models do you offer for ${toCity}?`,
        answer: `We provide standard Sedans (Swift Dzire) suitable for 4 passengers, Ertiga SUVs for up to 6 passengers, and premium Innova Crysta vehicles for 7 passengers. All our cars are fully air-conditioned and cleaned before dispatch.`
      },
      {
        question: `Is it safe to travel to ${toCity} at night?`,
        answer: `Absolutely. We operate 24/7 outstation services. All our vehicles are equipped with GPS tracking, and our drivers are background-verified professionals who are highly experienced in night-driving safety.`
      }
    ]
  }
}
