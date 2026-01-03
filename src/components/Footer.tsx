import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Shambhu ji Travels</h3>
                        <p className="mb-4">
                            Your trusted partner for safe, reliable, and affordable taxi services in Bareilly and across India.
                            We offer the best outstation and local cab services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-accent transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Twitter /></a>
                            <a href="#" className="hover:text-accent transition-colors"><Instagram /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="/about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="/services" className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="/contact" className="hover:text-accent transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-2 text-accent flex-shrink-0" />
                                <span>123, Main Market, Bareilly, Uttar Pradesh, India</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-2 text-accent flex-shrink-0" />
                                <a href="tel:+918077230221" className="hover:text-accent transition-colors">+91 8077230221</a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-2 text-accent flex-shrink-0" />
                                <a href="mailto:sambhujitravels@gmail.com" className="hover:text-accent transition-colors">sambhujitravels@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Shambhu ji Travels. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
