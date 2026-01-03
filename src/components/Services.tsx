import { Car, Map, ArrowRight } from 'lucide-react';

const services = [
    {
        title: 'One-Way Cab',
        description: 'Travel to any city with our reliable one-way cab service. Pay only for the distance you travel.',
        icon: <Car size={40} className="text-accent" />,
    },
    {
        title: 'Round Trip',
        description: 'Book a round trip for your family vacations or business trips at affordable rates.',
        icon: <Map size={40} className="text-accent" />,
    },
    {
        title: 'Airport Transfer',
        description: 'On-time airport pickups and drops to ensure you never miss your flight.',
        icon: <div className="text-accent"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></svg></div>,
    },
];

const Services = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow text-center group">
                            <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <button className="text-primary font-semibold flex items-center justify-center mx-auto hover:text-blue-800">
                                Book Now <ArrowRight size={16} className="ml-1" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
