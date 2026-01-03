import React, { useState } from 'react';
import CityAutocomplete from './CityAutocomplete';

const BookingForm = () => {
    const [tripType, setTripType] = useState('oneWay');
    const [vehicleType, setVehicleType] = useState('Sedan');

    // State for form fields
    const [formData, setFormData] = useState({
        pickupCity: '',
        dropCity: '',
        pickupDate: '',
        pickupTime: '',
        mobile: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCityChange = (field: 'pickupCity' | 'dropCity', value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSearch = () => {
        // Construct the message
        const message = `Hello, I want to book a cab.%0A%0A*Trip Type:* ${tripType === 'oneway' ? 'One Way' : 'Round Trip'}%0A*Vehicle Type:* ${vehicleType}%0A*Pickup City:* ${formData.pickupCity}%0A*Drop City:* ${formData.dropCity}%0A*Date:* ${formData.pickupDate}%0A*Time:* ${formData.pickupTime}%0A*Mobile:* ${formData.mobile}`;

        // WhatsApp URL
        const phoneNumber = "918077230221"; // Updated contact number
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

        // Open in new tab
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Book Your Cab</h3>

            {/* Tabs */}
            <div className="flex mb-4 bg-gray-100 p-1 rounded-lg">
                {['One Way', 'Round Trip'].map((type) => (
                    <button
                        key={type}
                        className={`flex-1 py-1 text-sm font-medium rounded-md transition-colors ${tripType === type.toLowerCase().replace(' ', '') ? 'bg-white shadow text-primary' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setTripType(type.toLowerCase().replace(' ', ''))}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                <div className="grid grid-cols-2 gap-4">
                    <CityAutocomplete
                        label="Pickup City"
                        value={formData.pickupCity}
                        onChange={(val) => handleCityChange('pickupCity', val)}
                        placeholder="Enter Pickup City"
                        required
                    />
                    <CityAutocomplete
                        label="Drop City"
                        value={formData.dropCity}
                        onChange={(val) => handleCityChange('dropCity', val)}
                        placeholder="Enter Drop City"
                        required
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Date</label>
                        <input required name="pickupDate" value={formData.pickupDate} onChange={handleChange} type="date" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700 mb-1">Pickup Time</label>
                        <input required name="pickupTime" value={formData.pickupTime} onChange={handleChange} type="time" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Vehicle Type</label>
                    <div className="grid grid-cols-3 gap-2">
                        {['Sedan', 'SUV', 'Ertiga'].map((vType) => (
                            <button
                                key={vType}
                                type="button"
                                onClick={() => setVehicleType(vType)}
                                className={`py-2 text-xs font-medium rounded border ${vehicleType === vType ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-200 hover:border-primary'}`}
                            >
                                {vType}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
                    <input required name="mobile" value={formData.mobile} onChange={handleChange} type="tel" placeholder="Enter Mobile Number" className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm" />
                </div>

                <button type="submit" className="w-full bg-accent hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors shadow-lg flex justify-center items-center">
                    Book on WhatsApp
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
