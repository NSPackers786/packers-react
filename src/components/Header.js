import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu on click
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-blue-600 text-white  ">
      <div className="container mx-auto flex justify-between items-center pl-5 pr-5">
        {/* Logo */}
        <div className="logo "> 
        
        <img 
              src="/img/logo.png" // Replace with actual image path
              alt="Moving Services"
              className="h-12 object-cover rounded-md"
            />
 
         
           </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible when menuOpen is true) */}
      {menuOpen && (
        <nav className="md:hidden bg-blue-600 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#home" className="hover:text-gray-300" onClick={toggleMenu}>Home</a></li>
            <li><a href="#services" className="hover:text-gray-300" onClick={toggleMenu}>Services</a></li>
            <li><a href="#about" className="hover:text-gray-300" onClick={toggleMenu}>About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-300" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
