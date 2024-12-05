import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-20">
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
