import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu on click
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NS Packers and Movers - Trusted Packing and Moving Services</title>
        <meta name="description" content="NS Packers and Movers provides reliable and secure packing and moving services across India. Get in touch for seamless relocation services." />
        <meta name="keywords" content="packers and movers, relocation, moving services, packing, trusted movers, moving company" />
      </Helmet>

      <header className="bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center pl-5 pr-5">
          {/* Logo with accessible alt text */}
          <div className="logo">
            <a href="#home">
              <img 
                src="/img/logo.png" // Replace with actual image path
                alt="NS Packers and Movers Logo - Trusted Packing and Moving Services"
                className="h-12 object-cover rounded-md"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex" aria-label="Main Navigation">
            <ul className="flex space-x-6">
              <li><a href="#home" className="hover:text-gray-300" aria-label="Go to Home">Home</a></li>
              <li><a href="#services" className="hover:text-gray-300" aria-label="Learn more about our Services">Services</a></li>
              <li><a href="#about" className="hover:text-gray-300" aria-label="Learn more About Us">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-300" aria-label="Contact NS Packers and Movers">Contact</a></li>
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen ? "true" : "false"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when menuOpen is true) */}
        {menuOpen && (
          <nav className="md:hidden bg-blue-600 py-4" aria-label="Mobile Navigation" aria-hidden={!menuOpen}>
            <ul className="flex flex-col items-center space-y-4">
              <li><a href="#home" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Go to Home">Home</a></li>
              <li><a href="#services" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Learn more about our Services">Services</a></li>
              <li><a href="#about" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Learn more About Us">About Us</a></li>
              <li><a href="#contact" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Contact NS Packers and Movers">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
