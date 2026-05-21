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
      <div className="bg-primary/95 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-[365px]:space-x-3 group hover:opacity-90 transition-opacity shrink-0">
            <div className="relative w-8 h-8 min-[365px]:w-10 min-[365px]:h-10 bg-white rounded-full p-1 flex items-center justify-center shadow-md border border-white/20 shrink-0">
              <img 
                src="/logo.png" 
                alt="Shambhu ji Travels Logo" 
                className="w-full h-full object-contain rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-base min-[365px]:text-lg min-[400px]:text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-accent bg-clip-text text-transparent whitespace-nowrap shrink-0">
              Shambhu ji Travels
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 font-medium">
            <Link href="/" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">Home</Link>
            <Link href="/about" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">About Us</Link>
            <Link href="/services" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">Services</Link>
            <Link href="/reviews" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">Reviews</Link>
            <Link href="/blog" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">Blog</Link>
            <Link href="/contact" className="hover:text-accent transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all">Contact Us</Link>
            <a
              href="tel:+918077230221"
              className="bg-accent hover:bg-green-600 text-white px-5 py-2.5 rounded-full transition-all font-semibold shadow-lg hover:shadow-xl flex items-center hover:scale-105 active:scale-95 duration-200"
            >
              <Phone size={16} className="mr-2" />
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none p-2 hover:bg-white/10 rounded-lg transition-colors shrink-0"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary/95 border-t border-blue-800 backdrop-blur-md">
            <nav className="flex flex-col px-4 py-4 space-y-4">
              <Link href="/" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>About Us</Link>
              <Link href="/services" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>Services</Link>
              <Link href="/reviews" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>Reviews</Link>
              <Link href="/blog" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>Blog</Link>
              <Link href="/contact" className="block hover:text-accent transition-colors py-1" onClick={toggleMenu}>Contact Us</Link>
              <a
                href="tel:+918077230221"
                className="bg-accent hover:bg-green-600 text-white px-5 py-3 rounded-full w-full text-center font-semibold shadow-md flex items-center justify-center hover:scale-[1.02] transition-transform"
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
