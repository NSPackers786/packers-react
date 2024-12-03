import React from 'react';
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
      <Header />
      <Hero />
      <RelocationForm/>
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
 