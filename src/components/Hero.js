// import { FaPhoneAlt, FaShareAlt, FaStar, FaEllipsisH } from 'react-icons/fa'; // Import icons from react-icons
// import { Helmet } from 'react-helmet'; // For SEO management

// const Hero = () => {
//   return (
//     <>
//       {/* SEO Meta Tags */}
//       <Helmet>
//         <title>NS Packers and Movers - Reliable Moving Services</title>
//         <meta name="description" content="NS Packers and Movers provides reliable packing and moving services across India. We ensure your belongings are safe during transport." />
//         <meta name="keywords" content="Packers and Movers, Moving Services, Packing Services, Household Moving, Relocation Services" />
//         <meta property="og:title" content="NS Packers and Movers - Reliable Moving Services" />
//         <meta property="og:description" content="NS Packers and Movers provides reliable packing and moving services across India with a focus on safety and efficiency." />
//         <meta property="og:image" content="/img/box.jpg" />
//         <meta name="robots" content="index, follow" />
//       </Helmet>

//       <section
//         className="hero bg-cover bg-center text-white py-32"
//         style={{ backgroundImage: 'url("/img/box.jpg")' }} // Replace with your image path
//         aria-label="Hero section showcasing NS Packers and Movers services"
//       >
//         <div className="container mx-auto text-center">
//           <h1 className="text-4xl sm:text-5xl font-bold font-extrabold leading-tight mb-6">
//             Welcome to <strong className="text-blue-400">NS Packers and Movers</strong>
//           </h1>
//           <p className="text-lg sm:text-xl mb-8">
//             We provide reliable packing and moving services across India with care and precision.
//           </p>
//           <a 
//             href="#services"
//             className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300"
//             aria-label="Explore our services"
//           >
//             Get Started
//           </a>

//           {/* Icon Row */}
//           <div className="flex justify-center gap-12 mt-8">
//             <div className="flex flex-col items-center">
//               <FaPhoneAlt 
//                 className="text-4xl text-blue-500 mb-2 hover:text-blue-600 transition duration-300" 
//                 aria-label="Call us for more details" 
//               />
//               <span className="text-sm text-white">Call</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaShareAlt 
//                 className="text-4xl text-green-500 mb-2 hover:text-green-600 transition duration-300" 
//                 aria-label="Share our services" 
//               />
//               <span className="text-sm text-white">Share</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaStar 
//                 className="text-4xl text-yellow-500 mb-2 hover:text-yellow-600 transition duration-300" 
//                 aria-label="Leave a review" 
//               />
//               <span className="text-sm text-white">Review</span>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaEllipsisH 
//                 className="text-4xl text-purple-500 mb-2 hover:text-purple-600 transition duration-300" 
//                 aria-label="More options"
//               />
//               <span className="text-sm text-white">More</span>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };import React, { useState, useRef } from 'react';
import { FaPhoneAlt, FaShareAlt, FaStar, FaWhatsapp, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState,useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';

const Hero = () => {
  const swiperRef = useRef(null); // Reference for Swiper instance
  const [isReviewModalOpen, setReviewModalOpen] = useState(false); // State for the Review Modal

  // Functionality for "Call"
  const handleCall = () => {
    window.location.href = 'tel:9324454064'; // Opens the phone dialer with a sample number
  };

  // Functionality for "Share"
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'NS Packers and Movers',
          text: 'Reliable packing and moving services.',
          url: window.location.href,
        })
        .then(() => console.log('Thanks for sharing!'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Share functionality is not supported on this device.');
    }
  };

  const slides = [
    {
      title: 'Welcome to NS Packers and Movers',
      description: 'We provide reliable packing and moving services across India with care and precision.',
      image: 'img/packer.jpg',
    },
    {
      title: 'Trusted Packers and Movers',
      description: 'Safe and efficient moving services tailored to your needs.',
      image: 'img/deliver.jpg',
    },
    {
      title: 'The Most Reliable Moving Service',
      description: 'Moving your life with care and efficiency.',
      image: 'img/paker_photo.png',
    },
  ];

  return (
    <div className="relative">
      {/* Swiper Slider with Autoplay */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="hero-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[500px] sm:h-[600px]">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="container px-4 sm:px-0">
                  <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                    Welcome to <strong className="text-yellow-400">NS Packers and Movers</strong>
                  </h2>
                  <p className="text-lg sm:text-xl mb-8">{slide.description}</p>
                  <a
                    href="#services"
                    className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-10 hover:bg-opacity-75 transition duration-300"
        onClick={() => swiperRef.current.slidePrev()}
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full z-10 hover:bg-opacity-75 transition duration-300"
        onClick={() => swiperRef.current.slideNext()}
      >
        <FaArrowRight size={24} />
      </button>

      {/* Icon Row */}
      <div className="flex justify-center gap-12 mt-8">
        {/* Call Icon */}
        <div className="flex flex-col items-center cursor-pointer" onClick={handleCall}>
          <FaPhoneAlt
            className="text-4xl text-blue-500 mb-2 hover:text-blue-600 transition duration-300"
            aria-label="Call us for more details"
          />
          <span className="text-sm text-white">Call</span>
        </div>

        {/* Share Icon */}
        <div className="flex flex-col items-center cursor-pointer" onClick={handleShare}>
          <FaShareAlt
            className="text-4xl text-green-500 mb-2 hover:text-green-600 transition duration-300"
            aria-label="Share our services"
          />
          <span className="text-sm text-white">Share</span>
        </div>

        {/* Review Icon */}
        <div className="flex flex-col items-center cursor-pointer" onClick={() => setReviewModalOpen(true)}>
          <FaStar
            className="text-4xl text-yellow-500 mb-2 hover:text-yellow-600 transition duration-300"
            aria-label="Leave a review"
          />
          <span className="text-sm text-white">Review</span>
        </div>

        {/* WhatsApp Icon */}
        <div className="flex flex-col items-center cursor-pointer">
          <a href="https://wa.me/9324454064" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              className="text-4xl text-green-500 mb-2 hover:text-green-600 transition duration-300"
              aria-label="Chat with us on WhatsApp"
            />
          </a>
        </div>
      </div>

      {/* Review Modal */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Leave a Review</h2>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg"
              rows="4"
              placeholder="Write your review here..."
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setReviewModalOpen(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setReviewModalOpen(false);
                  alert('Thank you for your review!');
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
