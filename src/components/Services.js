import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon

const Services = () => {
  return (
    <section id='services' className="services py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-8">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Packing Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/img/paker_photo.png" // Replace with actual image path
              alt="Packing Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Packing Services</h3>
             <p className="mt-4 text-gray-700">We handle all types of packing to ensure your items are safe during transit.</p>

            {/* Social Media Icons (React Icons) */}
             <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>
          
          {/* Moving Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/img/box.jpg" // Replace with actual image path
              alt="Moving Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Moving Services</h3>
            <p className="mt-4 text-gray-700">From small apartments to large homes, we move your belongings with care.</p>

            {/* Social Media Icons (React Icons) */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>

          {/* Storage Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
             src="/img/packer.jpg"  // Replace with actual image path
              alt="Storage Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Storage Services</h3>
            <p className="mt-4 text-gray-700">We provide secure storage for your belongings, available for short or long-term needs.</p>

            {/* Social Media Icons (React Icons) */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Packing Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/img/paker_photo.png" // Replace with actual image path
              alt="Packing Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Packing Services</h3>
            <p className="mt-4 text-gray-700">We handle all types of packing to ensure your items are safe during transit.</p>

            {/* Social Media Icons (React Icons) */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>
          
          {/* Moving Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
              src="/img/box.jpg" // Replace with actual image path
              alt="Moving Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Moving Services</h3>
            <p className="mt-4 text-gray-700">From small apartments to large homes, we move your belongings with care.</p>

            {/* Social Media Icons (React Icons) */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>

          {/* Storage Services Card */}
          <div className="service-card p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <img 
             src="/img/packer.jpg"  // Replace with actual image path
              alt="Storage Services"
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-blue-600 mt-4">Storage Services</h3>
            <p className="mt-4 text-gray-700">We provide secure storage for your belongings, available for short or long-term needs.</p>

            {/* Social Media Icons (React Icons) */}
            <div className="mt-4 flex justify-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
              {/* WhatsApp Icon */}
              <a href="https://wa.me/yourphone" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="text-2xl text-green-500 hover:text-green-700" />
              </a>
            </div>
          </div>
        </div>
        {/* Add more rows if necessary */}
      </div>
    </section>
  );
};

export default Services;
