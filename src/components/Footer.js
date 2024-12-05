import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 <strong>NS Packers and Movers</strong>. All Rights Reserved.</p>
        
        {/* Social Media Links */}
        <div className="social-links mt-4">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;
