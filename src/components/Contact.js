// src/components/Contact.js

const Contact = () => {
    return (
      <section id="contact" className="contact py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
        <div className="container mx-auto text-center px-6">
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg mb-8">Have questions? We’re here to help! Reach out to us, and we'll get back to you as soon as possible.</p>
  
          {/* Form */}
          <form className="mx-auto w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            />
            
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            />
  
            {/* Message Textarea */}
            <textarea
              placeholder="Your Message"
              className="w-full p-4 mb-6 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            />
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;
  