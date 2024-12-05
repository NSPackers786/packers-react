// src/components/Contact.js

const Contact = () => {
  return (
    <section id="contact" className="contact py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <header>
          <h2 className="text-4xl font-semibold mb-6">Get in Touch with NS Packers and Movers</h2>
          <p className="text-lg mb-8">
            Have questions? We’re here to help! Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </header>
  
        {/* Form */}
        <form 
          action="/submit-contact-form"  // You can replace this with your actual form handler
          method="POST" 
          className="mx-auto w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg"
          aria-labelledby="contact-form-header"
        >
          {/* Name Input */}
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            required
            aria-required="true"
          />
            
          {/* Email Input */}
          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            required
            aria-required="true"
          />
  
          {/* Message Textarea */}
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-4 mb-6 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            required
            aria-required="true"
          />
  
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
            aria-label="Send your message"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
