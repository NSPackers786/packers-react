// import React, { useState } from 'react';
// import { Helmet } from 'react-helmet';

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Toggle the mobile menu on click
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>NS Packers and Movers - Trusted Packing and Moving Services</title>
//         <meta name="description" content="NS Packers and Movers provides reliable and secure packing and moving services across India. Get in touch for seamless relocation services." />
//         <meta name="keywords" content="packers and movers, relocation, moving services, packing, trusted movers, moving company" />
//       </Helmet>

//       <header className="bg-blue-600 text-white">
//         <div className="container mx-auto flex justify-between items-center pl-5 pr-5">
//           {/* Logo with accessible alt text */}
//           {/* Logo with accessible alt text */}
//           <div className="logo flex items-center gap-4">
//   <a href="#home" className="flex items-center">
//     <img 
//       src="/img/nslogo.png" // Replace with the actual image path
//       alt="NS Packers and Movers Logo"
//       className="h-[80px] w-[80px] object-cover rounded-md"
//     />
//     <span className="text-xl font-roboto font-bold italic text-white">
//   NSpackers
// </span>

//   </a>
// </div>


//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex" aria-label="Main Navigation">
//             <ul className="flex space-x-6">
//               <li><a href="#home" className="hover:text-gray-300" aria-label="Go to Home">Home</a></li>
//               <li><a href="#services" className="hover:text-gray-300" aria-label="Learn more about our Services">Services</a></li>
//               <li><a href="#about" className="hover:text-gray-300" aria-label="Learn more About Us">About Us</a></li>
//               <li><a href="#contact" className="hover:text-gray-300" aria-label="Contact NS Packers and Movers">Contact</a></li>
//             </ul>
//           </nav>

//           {/* Mobile Hamburger Menu */}
//           <div className="md:hidden">
//             <button 
//               onClick={toggleMenu} 
//               className="text-white focus:outline-none"
//               aria-label="Toggle navigation menu"
//               aria-expanded={menuOpen ? "true" : "false"}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
//               </svg>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu (Visible when menuOpen is true) */}
//         {menuOpen && (
//           <nav className="md:hidden bg-blue-600 py-4" aria-label="Mobile Navigation" aria-hidden={!menuOpen}>
//             <ul className="flex flex-col items-center space-y-4">
//               <li><a href="#home" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Go to Home">Home</a></li>
//               <li><a href="#services" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Learn more about our Services">Services</a></li>
//               <li><a href="#about" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Learn more About Us">About Us</a></li>
//               <li><a href="#contact" className="hover:text-gray-300" onClick={toggleMenu} aria-label="Contact NS Packers and Movers">Contact</a></li>
//             </ul>
//           </nav>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the mobile menu on click
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Disable/enable body scroll when menu opens/closes
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NS Packers and Movers - Trusted Packing and Moving Services</title>
        <meta
          name="description"
          content="NS Packers and Movers provides reliable and secure packing and moving services across India. Get in touch for seamless relocation services."
        />
        <meta
          name="keywords"
          content="packers and movers, relocation, moving services, packing, trusted movers, moving company"
        />
      </Helmet>

      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center pl-5 pr-5 py-4">
          {/* Logo */}
          <div className="logo flex items-center gap-4">
            <a href="#home" className="flex items-center">
              <img
                src="/img/nslogo.png" // Replace with the actual image path
                alt="NS Packers and Movers Logo"
                className="h-[80px] w-[80px] object-cover rounded-md"
              />
              <span className="text-2xl font-semibold tracking-wider italic text-white">
                NSpackers
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#home"
                  className="transition-colors duration-200 hover:text-gray-300 text-lg font-medium"
                  aria-label="Go to Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors duration-200 hover:text-gray-300 text-lg font-medium"
                  aria-label="Learn more about our Services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="transition-colors duration-200 hover:text-gray-300 text-lg font-medium"
                  aria-label="Learn more About Us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors duration-200 hover:text-gray-300 text-lg font-medium"
                  aria-label="Contact NS Packers and Movers"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen ? 'true' : 'false'}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Slide-in from the right) */}
        <div
          className={`fixed top-0 right-0 h-full  bg-blue-700 text-white transform transition-transform duration-500 ease-in-out z-50 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="flex flex-col items-start p-6 space-y-6 text-lg font-medium">
            <a
              href="#home"
              className="transition-colors duration-200 hover:text-gray-300"
              onClick={toggleMenu}
              aria-label="Go to Home"
            >
              Home
            </a>
            <a
              href="#services"
              className="transition-colors duration-200 hover:text-gray-300"
              onClick={toggleMenu}
              aria-label="Learn more about our Services"
            >
              Services
            </a>
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-gray-300"
              onClick={toggleMenu}
              aria-label="Learn more About Us"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-gray-300"
              onClick={toggleMenu}
              aria-label="Contact NS Packers and Movers"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
