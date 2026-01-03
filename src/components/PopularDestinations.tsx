import { MapPin } from 'lucide-react';

const destinations = [
    "Bareilly to Delhi", "Bareilly to Lucknow", "Bareilly to Noida", "Bareilly to Gurgaon",
    "Bareilly to Jaipur", "Bareilly to Agra", "Bareilly to Nainital", "Bareilly to Pantnagar",
    "Bareilly to Moradabad", "Bareilly to Haldwani", "Bareilly to Dehradun", "Bareilly to Haridwar",
    "Bareilly to Rishikesh", "Bareilly to Meerut", "Bareilly to Ghaziabad", "Bareilly to Faridabad",
    "Bareilly to Mathura", "Bareilly to Vrindavan", "Bareilly to Aligarh", "Bareilly to Kanpur",
    "Delhi to Bareilly", "Lucknow to Bareilly", "Noida to Bareilly", "Gurgaon to Bareilly",
    "Jaipur to Bareilly", "Agra to Bareilly", "Nainital to Bareilly", "Pantnagar to Bareilly",
    "Moradabad to Bareilly", "Haldwani to Bareilly", "Dehradun to Bareilly", "Haridwar to Bareilly",
    "Rishikesh to Bareilly", "Meerut to Bareilly", "Ghaziabad to Bareilly", "Faridabad to Bareilly",
    "Mathura to Bareilly", "Vrindavan to Bareilly", "Aligarh to Bareilly", "Kanpur to Bareilly",
    "Bareilly to Ramnagar", "Bareilly to Jim Corbett", "Bareilly to Kausani", "Bareilly to Ranikhet",
    "Bareilly to Almora", "Bareilly to Mukteshwar", "Bareilly to Bhimtal", "Bareilly to Sattal"
];

const PopularDestinations = () => {
    return (
        <section className="py-12 bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                    <MapPin className="mr-2 text-accent" /> Popular Destinations
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {destinations.map((destination, index) => (
                        <a
                            key={index}
                            href="#"
                            className="bg-white border border-gray-200 rounded-lg p-4 text-center text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-accent hover:text-accent transition-all duration-300 transform hover:-translate-y-1 block"
                        >
                            {destination} Cab
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;
