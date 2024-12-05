import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "NS Packers and Movers",
    "description": "NS Packers and Movers offer professional packing and moving services across India, providing safe, timely, and stress-free relocation solutions.",
    "url": "YOUR_WEBSITE_URL",
    "logo": "URL_TO_LOGO_IMAGE",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX", // Add your contact number here
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "Hindi, English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Address",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/YourPage",
      "https://twitter.com/YourPage",
      "https://www.instagram.com/YourPage"
    ]
  };

  return (
    <section id="about" className="bg-gray-100 py-20">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="container mx-auto px-4">
        <header>
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
            About NS Packers and Movers
          </h2>
        </header>

        <article>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <strong>NS Packers and Movers</strong> is a trusted leader in packing and moving services across India. With decades of experience, we provide seamless and stress-free moving solutions to individuals and businesses. Our team is committed to delivering exceptional customer service, leveraging advanced equipment to ensure the highest safety standards during every relocation.
          </p>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-4">
            Whether you're moving locally or across long distances, <strong>NS Packers and Movers</strong> guarantees timely and secure services. From professional packing to reliable transportation, we make sure your belongings reach their destination safely and on time.
          </p>
        </article>

        <div className="mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
            aria-label="Contact us for packing and moving services"
          > 
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
