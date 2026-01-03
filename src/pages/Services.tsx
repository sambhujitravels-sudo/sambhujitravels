import Header from '../components/Header';
import Footer from '../components/Footer';
import PopularDestinations from '../components/PopularDestinations';
import { Car, Map, Plane, Clock, ShieldCheck, UserCheck } from 'lucide-react';

const ServicesPage = () => {
    const services = [
        {
            title: "One-Way Cab Service",
            description: "Pay only for the distance you travel. Why pay for return when you are traveling one way? Available for all major cities.",
            icon: <Car size={40} className="text-primary" />
        },
        {
            title: "Round Trip Taxi",
            description: "Affordable round trip packages for weekend gateways and family vacations. Keep the car with you for the entire duration.",
            icon: <Map size={40} className="text-primary" />
        },
        {
            title: "Airport Transfers",
            description: "Reliable airport pickups and drops. We track flights to ensure we are there when you arrive. No waiting charges for flight delays.",
            icon: <Plane size={40} className="text-primary" />
        },
        {
            title: "Local Rental",
            description: "Rent a car for 8 hours/80 km or 12 hours/120 km for local sightseeing and shopping within the city.",
            icon: <Clock size={40} className="text-primary" />
        },
        {
            title: "Corporate Car Rental",
            description: "Special rates and priority service for corporate clients. Monthly billing and dedicated support available.",
            icon: <UserCheck size={40} className="text-primary" />
        },
        {
            title: "Wedding Car Rental",
            description: "Luxury cars for your special day. Make a grand entrance with our premium fleet of decorated cars.",
            icon: <ShieldCheck size={40} className="text-primary" />
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Title */}
                <div className="bg-primary text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                        <p className="text-blue-100">Comprehensive travel solutions for all your needs.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
                                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-gray-50 p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Need a Custom Package?</h2>
                        <p className="text-gray-600 mb-6">We can customize a travel package specifically for your requirements.</p>
                        <button className="bg-accent hover:bg-green-600 text-white px-8 py-3 rounded-full font-bold transition-colors">
                            Call Us Now
                        </button>
                    </div>
                </div>
            </main>
            <PopularDestinations />
            <Footer />
        </div>
    );
};

export default ServicesPage;
