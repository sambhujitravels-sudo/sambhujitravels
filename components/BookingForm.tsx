'use client'

import { useState } from 'react'
import CityAutocomplete from './CityAutocomplete'

export default function BookingForm() {
  const [tripType, setTripType] = useState('oneway')
  const [vehicleType, setVehicleType] = useState('Sedan')
  const [formData, setFormData] = useState({
    pickupCity: '',
    dropCity: '',
    pickupDate: '',
    pickupTime: '',
    mobile: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleCityChange = (field: 'pickupCity' | 'dropCity', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const message = `Hello, I want to book a cab.%0A%0A*Trip Type:* ${tripType === 'oneway' ? 'One Way' : 'Round Trip'}%0A*Vehicle Type:* ${vehicleType}%0A*Pickup City:* ${formData.pickupCity}%0A*Drop City:* ${formData.dropCity}%0A*Date:* ${formData.pickupDate}%0A*Time:* ${formData.pickupTime}%0A*Mobile:* ${formData.mobile}`

    const whatsappUrl = `https://wa.me/918077230221?text=${message}`
    window.open(whatsappUrl, '_blank')

    setTimeout(() => setIsSubmitting(false), 1000)
  }

  return (
    <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md">
      <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">Book Your Cab</h2>
      <p className="text-sm text-gray-500 mb-4 text-center">Get instant quote on WhatsApp</p>

      {/* Trip Type Tabs */}
      <div className="flex mb-4 bg-gray-100 p-1 rounded-lg">
        {[
          { id: 'oneway', label: 'One Way' },
          { id: 'roundtrip', label: 'Round Trip' }
        ].map((type) => (
          <button
            key={type.id}
            type="button"
            className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
              tripType === type.id
                ? 'bg-white shadow text-primary'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTripType(type.id)}
          >
            {type.label}
          </button>
        ))}
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <CityAutocomplete
            label="Pickup City"
            value={formData.pickupCity}
            onChange={(val) => handleCityChange('pickupCity', val)}
            placeholder="From"
            required
          />
          <CityAutocomplete
            label="Drop City"
            value={formData.dropCity}
            onChange={(val) => handleCityChange('dropCity', val)}
            placeholder="To"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Date</label>
            <input
              required
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              type="date"
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Time</label>
            <input
              required
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              type="time"
              className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Vehicle Type</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Sedan', price: '₹11/km' },
              { id: 'SUV', price: '₹13/km' },
              { id: 'Innova', price: '₹18/km' }
            ].map((vehicle) => (
              <button
                key={vehicle.id}
                type="button"
                onClick={() => setVehicleType(vehicle.id)}
                className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                  vehicleType === vehicle.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary'
                }`}
              >
                <span className="block">{vehicle.id}</span>
                <span className={`text-xs ${vehicleType === vehicle.id ? 'text-green-300' : 'text-accent'}`}>
                  {vehicle.price}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
          <input
            required
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            type="tel"
            pattern="[0-9]{10}"
            placeholder="10-digit mobile number"
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-accent hover:bg-green-600 disabled:bg-green-400 text-white font-bold py-3 rounded-lg transition-colors shadow-lg flex justify-center items-center"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Opening WhatsApp...
            </span>
          ) : (
            <>
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Get Quote on WhatsApp
            </>
          )}
        </button>
      </form>

      <p className="text-xs text-gray-400 text-center mt-3">
        Free cancellation · Instant confirmation
      </p>
    </div>
  )
}
