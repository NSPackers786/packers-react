import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">About Us</h2>
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Raju Packers and Movers is a leader in providing packing and moving services. With decades of experience, we ensure a smooth and hassle-free experience for our customers across India. Our dedicated team and advanced equipment ensure the highest standards of safety and professionalism in every move.
        </p>
        <div className="mt-12 flex justify-center">
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-500 transition duration-300"
          > 
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
