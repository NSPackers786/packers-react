// src/components/Hero.js

const Hero = () => {
    return (
      <section
        className="hero bg-cover bg-center text-white py-32"
        style={{ backgroundImage: 'url("/img/box.jpg")' }} // Replace with your image path
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Welcome to Raju Packers and Movers
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            We provide reliable packing and moving services across India with care and precision.
          </p>
          <a 
            href="#services"
            className="inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
          >
            Get Started
          </a>
        </div>
      </section>
    );
  };
  
  export default Hero;
  