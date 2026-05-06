'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
          <div className="flex items-center space-x-2 text-xs">
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">24/7 Service</span>
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">Since 2015</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-primary text-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-gray-200 transition-colors">
            Shambhu ji Travels
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 font-medium">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
            <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
            <a
              href="tel:+918077230221"
              className="bg-accent hover:bg-green-600 text-white px-5 py-2 rounded-full transition-colors font-semibold shadow-lg flex items-center"
            >
              <Phone size={16} className="mr-2" />
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary border-t border-blue-800">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link href="/" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="block hover:text-accent transition-colors" onClick={toggleMenu}>About Us</Link>
              <Link href="/services" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Services</Link>
              <Link href="/blog" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Blog</Link>
              <Link href="/contact" className="block hover:text-accent transition-colors" onClick={toggleMenu}>Contact Us</Link>
              <a
                href="tel:+918077230221"
                className="bg-accent hover:bg-green-600 text-white px-5 py-3 rounded-full w-full text-center font-semibold shadow-md flex items-center justify-center"
              >
                <Phone size={16} className="mr-2" />
                Call Now: +91 8077230221
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
