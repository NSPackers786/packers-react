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
// };

// export default Hero;
import React, { useRef } from 'react';
import { FaPhoneAlt, FaShareAlt, FaStar, FaEllipsisH } from 'react-icons/fa'; // Import icons for the row
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles

const Hero = () => {
  const swiperRef = useRef(null); // Create a reference for the swiper instance

  const handleCall = () => {
    window.location.href = 'tel:93244 54064'; // Opens the phone dialer with a sample number
  };

  // Functionality for "Share"
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
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

  // Functionality for "Leave a Review"
  const handleReview = () => {
    alert('Leave a review functionality');
  };

  // Functionality for "More Options"
  const handleMore = () => {
    alert('More options');
  };

  return (
    <div className="relative">
      {/* Swiper Slider with Autoplay and Custom Navigation */}
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
        navigation={{
          prevEl: '.swiper-button-prev', // Assigning custom prev button
          nextEl: '.swiper-button-next', // Assigning custom next button
        }}
        className="hero-slider"
        ref={swiperRef} // Attach the swiper reference
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative bg-blue-500 h-[500px] sm:h-[600px]">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0">
              <img 
                src="img/packer.jpg" 
                alt="Background image of packing and moving services" 
                className="h-full w-full object-cover" 
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            {/* Centered Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="container px-4 sm:px-0">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  Welcome to <strong className="text-yellow-400">NS Packers and Movers</strong>
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                  We provide reliable packing and moving services across India with care and precision.
                </p>
                <a
                  href="#services"
                  className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300"
                  aria-label="Explore our services"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative bg-green-500 h-[500px] sm:h-[600px]">
            {/* Background Image */}
            <img 
              src="img/deliver.jpg" 
              alt="Packing services in action" 
              className="absolute inset-0 h-full w-full object-cover" 
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="container px-4 sm:px-0">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  Trusted <strong className="text-yellow-400">Packers and Movers</strong>
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                  Safe and efficient moving services tailored to your needs.
                </p>
                <a
                  href="#services"
                  className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300"
                  aria-label="Explore trusted services"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative bg-red-500 h-[500px] sm:h-[600px]">
            {/* Background Image */}
            <img 
              src="img/paker_photo.png" 
              alt="Reliable moving service" 
              className="absolute inset-0 h-full w-full object-cover" 
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="container px-4 sm:px-0">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                  The Most <strong className="text-yellow-400">Reliable Moving Service</strong>
                </h2>
                <p className="text-lg sm:text-xl mb-8">
                  Moving your life with care and efficiency.
                </p>
                <a
                  href="#services"
                  className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300"
                  aria-label="Explore reliable services"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev absolute top-1/2 left-4 text-white bg-opacity-50 p-3 rounded-full cursor-pointer">
        &lt;
      </div>
      <div className="swiper-button-next absolute top-1/2 right-4 text-white bg-opacity-50 p-3 rounded-full cursor-pointer">
        &gt;
      </div>

      {/* Icon Row */}
      <div className="flex justify-center gap-12 mt-8">
        {/* Call Icon */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleCall}
        >
          <FaPhoneAlt
            className="text-4xl text-blue-500 mb-2 hover:text-blue-600 transition duration-300"
            aria-label="Call us for more details"
          />
          <span className="text-sm text-white">Call</span>
        </div>

        {/* Share Icon */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleShare}
        >
          <FaShareAlt
            className="text-4xl text-green-500 mb-2 hover:text-green-600 transition duration-300"
            aria-label="Share our services"
          />
          <span className="text-sm text-white">Share</span>
        </div>

        {/* Review Icon */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleReview}
        >
          <FaStar
            className="text-4xl text-yellow-500 mb-2 hover:text-yellow-600 transition duration-300"
            aria-label="Leave a review"
          />
          <span className="text-sm text-white">Review</span>
        </div>

        {/* More Options Icon */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={handleMore}
        >
          <FaEllipsisH
            className="text-4xl text-purple-500 mb-2 hover:text-purple-600 transition duration-300"
            aria-label="More options"
          />
          <span className="text-sm text-white">More</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
