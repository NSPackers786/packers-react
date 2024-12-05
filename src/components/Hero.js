import { FaPhoneAlt, FaShareAlt, FaStar, FaEllipsisH } from 'react-icons/fa'; // Import icons from react-icons
import { Helmet } from 'react-helmet'; // For SEO management

const Hero = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NS Packers and Movers - Reliable Moving Services</title>
        <meta name="description" content="NS Packers and Movers provides reliable packing and moving services across India. We ensure your belongings are safe during transport." />
        <meta name="keywords" content="Packers and Movers, Moving Services, Packing Services, Household Moving, Relocation Services" />
        <meta property="og:title" content="NS Packers and Movers - Reliable Moving Services" />
        <meta property="og:description" content="NS Packers and Movers provides reliable packing and moving services across India with a focus on safety and efficiency." />
        <meta property="og:image" content="/img/box.jpg" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <section
        className="hero bg-cover bg-center text-white py-32"
        style={{ backgroundImage: 'url("/img/box.jpg")' }} // Replace with your image path
        aria-label="Hero section showcasing NS Packers and Movers services"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-extrabold leading-tight mb-6">
            Welcome to <strong className="text-blue-400">NS Packers and Movers</strong>
          </h1>
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

          {/* Icon Row */}
          <div className="flex justify-center gap-12 mt-8">
            <div className="flex flex-col items-center">
              <FaPhoneAlt 
                className="text-4xl text-blue-500 mb-2 hover:text-blue-600 transition duration-300" 
                aria-label="Call us for more details" 
              />
              <span className="text-sm text-white">Call</span>
            </div>
            <div className="flex flex-col items-center">
              <FaShareAlt 
                className="text-4xl text-green-500 mb-2 hover:text-green-600 transition duration-300" 
                aria-label="Share our services" 
              />
              <span className="text-sm text-white">Share</span>
            </div>
            <div className="flex flex-col items-center">
              <FaStar 
                className="text-4xl text-yellow-500 mb-2 hover:text-yellow-600 transition duration-300" 
                aria-label="Leave a review" 
              />
              <span className="text-sm text-white">Review</span>
            </div>
            <div className="flex flex-col items-center">
              <FaEllipsisH 
                className="text-4xl text-purple-500 mb-2 hover:text-purple-600 transition duration-300" 
                aria-label="More options"
              />
              <span className="text-sm text-white">More</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
