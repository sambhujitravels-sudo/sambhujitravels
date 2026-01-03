import Header from '../components/Header';
import Footer from '../components/Footer';
import PopularDestinations from '../components/PopularDestinations';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                {/* Hero Title */}
                <div className="bg-primary text-white py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                        <p className="text-blue-100">We are here to help you 24/7.</p>
                    </div>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-4 rounded-full mr-4">
                                        <Phone className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Phone Number</h3>
                                        <a href="tel:+918077230221" className="text-gray-600 hover:text-accent hover:underline block">+91 8077230221</a>
                                        <p className="text-gray-600 text-sm">Mon-Sun 24/7</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-4 rounded-full mr-4">
                                        <Mail className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Email Address</h3>
                                        <a href="mailto:sambhujitravels@gmail.com" className="text-gray-600 hover:text-accent hover:underline block">sambhujitravels@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-50 p-4 rounded-full mr-4">
                                        <MapPin className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800 mb-1">Office Address</h3>
                                        <p className="text-gray-600">123, Main Market, Civil Lines,<br />Bareilly, Uttar Pradesh, 243001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                            <form className="space-y-4" onSubmit={(e) => {
                                e.preventDefault();
                                const form = e.target as HTMLFormElement;
                                const formData = new FormData(form);
                                const message = `Name: ${formData.get('name')}%0AMobile: ${formData.get('phone')}%0AEmail: ${formData.get('email')}%0AMessage: ${formData.get('message')}`;
                                window.open(`https://wa.me/918077230221?text=${message}`, '_blank');
                            }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input required name="name" type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                        <input required name="phone" type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="+91 9876543210" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input name="email" type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea required name="message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors">
                                    Send Message on WhatsApp
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
            <PopularDestinations />
            <Footer />
        </div >
    );
};

export default Contact;
