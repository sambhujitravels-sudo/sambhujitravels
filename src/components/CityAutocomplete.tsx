import React, { useState, useRef, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const POPULAR_CITIES = [
    "Agra", "Aligarh", "Allahabad", "Amroha", "Ayodhya", "Azamgarh", "Bahraich", "Ballia", "Banda",
    "Bareilly", "Basti", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria",
    "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar",
    "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras",
    "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur", "Kasganj", "Kaushambi", "Kheri",
    "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau",
    "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Rae Bareli",
    "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti",
    "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi",
    "Delhi", "Gurgaon", "Noida", "Faridabad", "Dehradun", "Haridwar", "Rishikesh", "Nainital",
    "Pantnagar", "Haldwani", "Jim Corbett", "Jaipur", "Chandigarh"
];

interface CityAutocompleteProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
}

const CityAutocomplete: React.FC<CityAutocompleteProps> = ({ label, value, onChange, placeholder, required }) => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Close dropdown when clicking outside
        function handleClickOutside(event: MouseEvent) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        onChange(inputValue);

        if (inputValue.length > 0) {
            const filtered = POPULAR_CITIES.filter(city =>
                city.toLowerCase().includes(inputValue.toLowerCase())
            );
            setSuggestions(filtered);
            setIsOpen(true);
        } else {
            setSuggestions([]);
            setIsOpen(false);
        }
    };

    const handleSelectCity = (city: string) => {
        onChange(city);
        setSuggestions([]);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <label className="block text-xs font-medium text-gray-700 mb-1">{label}</label>
            <div className="relative">
                <input
                    required={required}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    onFocus={() => value && setSuggestions(POPULAR_CITIES.filter(c => c.toLowerCase().includes(value.toLowerCase()))) && setIsOpen(true)}
                    className="w-full p-2 pl-8 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm"
                />
                <MapPin className="absolute left-2 top-2.5 text-gray-400" size={14} />
            </div>

            {isOpen && suggestions.length > 0 && (
                <ul className="absolute z-50 w-full bg-white border border-gray-100 mt-1 max-h-48 overflow-y-auto rounded-md shadow-lg">
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
    );
};

export default CityAutocomplete;
