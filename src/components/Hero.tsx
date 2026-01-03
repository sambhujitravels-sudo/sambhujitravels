import BookingForm from './BookingForm';
import heroImage from '../assets/hero.png';

const Hero = () => {
    return (
        <div className="relative w-full h-[600px] bg-cover bg-center flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Text Content */}
                <div className="text-white space-y-4">
                    <span className="bg-accent px-3 py-1 text-xs font-bold uppercase rounded tracking-wider">Reliable Taxi Service</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Comfortable & <span className="text-accent">Affordable</span> Travels
                    </h2>
                    <p className="text-lg md:text-xl text-gray-200">
                        Book outstation cabs, one-way drops, and airport transfers at the lowest prices in Bereilly and beyond.
                    </p>
                    <div className="flex space-x-4 pt-4">
                        <button className="bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                            Our Services
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>

                {/* Booking Form (Right Side) */}
                <div className="flex justify-center md:justify-end">
                    <BookingForm />
                </div>
            </div>
        </div>
    );
};

export default Hero;
