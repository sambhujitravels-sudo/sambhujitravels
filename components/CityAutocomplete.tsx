'use client'

import { useState, useRef, useEffect } from 'react'
import { MapPin } from 'lucide-react'

const POPULAR_CITIES = [
  'Bareilly', 'Delhi', 'Lucknow', 'Noida', 'Gurgaon', 'Ghaziabad', 'Nainital',
  'Haridwar', 'Rishikesh', 'Dehradun', 'Agra', 'Jaipur', 'Meerut', 'Moradabad',
  'Kanpur', 'Varanasi', 'Allahabad', 'Mathura', 'Vrindavan', 'Haldwani',
  'Jim Corbett', 'Pantnagar', 'Rampur', 'Shahjahanpur', 'Pilibhit', 'Faridabad',
  'Chandigarh', 'Mussoorie', 'Kausani', 'Ranikhet', 'Almora', 'Mukteshwar',
  'Bhimtal', 'Sattal', 'Corbett', 'Lansdowne', 'Auli', 'Badrinath', 'Kedarnath',
]

interface CityAutocompleteProps {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  required?: boolean
}

export default function CityAutocomplete({ label, value, onChange, placeholder, required }: CityAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    onChange(inputValue)

    if (inputValue.length > 0) {
      const filtered = POPULAR_CITIES.filter(city =>
        city.toLowerCase().includes(inputValue.toLowerCase())
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }

  const handleSelectCity = (city: string) => {
    onChange(city)
    setSuggestions([])
    setIsOpen(false)
  }

  const handleFocus = () => {
    if (value) {
      const filtered = POPULAR_CITIES.filter(c =>
        c.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions(POPULAR_CITIES.slice(0, 8))
      setIsOpen(true)
    }
  }

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          required={required}
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full p-2.5 pl-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
          autoComplete="off"
        />
        <MapPin className="absolute left-2.5 top-3 text-gray-400" size={14} />
      </div>

      {isOpen && suggestions.length > 0 && (
        <ul className="absolute z-50 w-full bg-white border border-gray-200 mt-1 max-h-48 overflow-y-auto rounded-lg shadow-lg">
          {suggestions.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelectCity(city)}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 flex items-center"
            >
              <MapPin size={12} className="mr-2 text-gray-400" />
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
