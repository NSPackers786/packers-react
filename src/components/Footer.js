import React from 'react';
import { Helmet } from 'react-helmet';

const Footer = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <meta name="description" content="Contact NS Packers and Movers for professional packing and moving services. Follow us on social media for updates." />
        <meta name="keywords" content="packers and movers, relocation services, social media, movers company, contact NS Packers and Movers" />
        <meta property="og:title" content="NS Packers and Movers - Footer" />
        <meta property="og:description" content="Stay connected with NS Packers and Movers through our social media platforms." />
        <meta property="og:image" content="URL_TO_IMAGE" /> {/* Replace with your image URL */}
        <meta property="og:url" content="YOUR_WEBSITE_URL/footer" />
      </Helmet>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 <strong>NS Packers and Movers</strong>. All Rights Reserved.</p>
          
          {/* Social Media Links */}
          <nav className="social-links mt-4" aria-label="Follow us on social media">
            <p className="mb-2">Follow us on social media:</p>
            <a 
              href="https://www.facebook.com/NS.packers.and.movers" 
              className="text-white mx-2 hover:text-gray-300" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook - NS Packers and Movers"
            >
              Facebook
            </a>
            <span className="text-white mx-2">|</span>
            <a 
              href="https://twitter.com/NS_packers_movers" 
              className="text-white mx-2 hover:text-gray-300" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Twitter - NS Packers and Movers"
            >
              Twitter
            </a>
            <span className="text-white mx-2">|</span>
            <a 
              href="https://www.linkedin.com/company/NS-packers-and-movers" 
              className="text-white mx-2 hover:text-gray-300" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn - NS Packers and Movers"
            >
              LinkedIn
            </a>
          </nav>

          {/* Optional Back to Top Button */}
          <div className="mt-6">
            <a 
              href="#top" 
              className="text-white text-sm hover:text-gray-300"
              aria-label="Back to top"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
