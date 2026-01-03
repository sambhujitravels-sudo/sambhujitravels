import Header from '../components/Header';
import Footer from '../components/Footer';
import PopularDestinations from '../components/PopularDestinations';

const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Title */}
                <div className="bg-primary text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">About Us</h1>
                        <p className="text-blue-100">Your trusted travel partner since 2015.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Safe Driving"
                            className="rounded-xl shadow-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Welcome to <strong>Shambhu ji Travels</strong>, leading taxi service provider in Bareilly.
                            We are dedicated to providing safe, reliable, and affordable taxi services to our customers.
                            With a fleet of well-maintained cars and professional drivers, we ensure that your journey is comfortable and hassle-free.
                        </p>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                            Whether you need a local cab for shopping, an outstation taxi for a weekend getaway, or an airport transfer,
                            we have got you covered. Our transparent pricing policy and 24/7 customer support make us the preferred choice for thousands of travelers.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                <span className="block text-2xl font-bold text-primary">10k+</span>
                                <span className="text-sm text-gray-600">Happy Customers</span>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                <span className="block text-2xl font-bold text-accent">500+</span>
                                <span className="text-sm text-gray-600">Destinations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <PopularDestinations />
            <Footer />
        </div>
    );
};

export default About;
