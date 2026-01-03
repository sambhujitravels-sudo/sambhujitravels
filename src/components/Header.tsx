import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-gray-100 text-gray-600 text-sm py-2 border-b border-gray-200">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-2 md:mb-0">
                        <a href="tel:+918077230221" className="flex items-center hover:text-primary transition-colors">
                            <Phone size={14} className="mr-1" />
                            <span>+91 8077230221</span>
                        </a>
                        <a href="mailto:sambhujitravels@gmail.com" className="flex items-center hover:text-primary transition-colors">
                            <Mail size={14} className="mr-1" />
                            <span>sambhujitravels@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-3">
                        {/* Social Icons Placeholder */}
                        <a href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={16} /></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-primary text-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors">
                        Shambhu ji Travels
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center space-x-8 font-medium">
                        <Link to="/" className="hover:text-accent transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
                        <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
                        <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
                        <button className="bg-accent hover:bg-green-600 text-white px-5 py-2 rounded-full transition-colors font-semibold shadow-lg">
                            Book Your Ride!
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden bg-primary border-t border-blue-800">
                        <nav className="flex flex-col px-4 py-4 space-y-4">
                            <Link to="/" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Home</Link>
                            <Link to="/about" className="block hover:text-accent transition-colors" onClick={toggleMenu}>About Us</Link>
                            <Link to="/services" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Services</Link>
                            <Link to="/contact" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Contact Us</Link>
                            <button className="bg-accent hover:bg-green-600 text-white px-5 py-2 rounded-full w-full text-center font-semibold shadow-md">
                                Book Your Ride!
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
