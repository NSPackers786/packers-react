import React from 'react';
import { Helmet } from 'react-helmet';  // Import React Helmet for SEO management
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css'; // Import Tailwind CSS styles
import RelocationForm from './components/RelocationForm';

function App() {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>NS Packers and Movers - Professional Relocation Services</title>
        <meta name="description" content="NS Packers and Movers offers top-notch packing, moving, and relocation services across India. We ensure safety, reliability, and affordability." />
        <meta name="keywords" content="Packers and Movers, Moving Services, Relocation, Household Shifting, Moving Trucks, Packing Services" />
        <meta property="og:title" content="NS Packers and Movers - Professional Relocation Services" />
        <meta property="og:description" content="NS Packers and Movers offers top-notch packing, moving, and relocation services across India. Contact us today for a safe and hassle-free move." />
        <meta property="og:image" content="/img/box.jpg" />
        <meta name="robots" content="index, follow" />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "NS Packers and Movers",
              "url": "https://www.example.com",
              "logo": "/img/nslogo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-",
                "contactType": "Customer Service"
              },
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://twitter.com/yourpage"
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Main Page Layout */}
      <Header />
      <Hero />
      <RelocationForm />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
