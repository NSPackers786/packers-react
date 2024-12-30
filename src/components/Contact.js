import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
  // State hooks to store form data
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [status, setStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formName,
      email: formEmail,
      message: formMessage,
    };

    try {
      const response = await fetch('http://localhost:5000/submit-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('Message sent successfully!');
      } else {
        setStatus('Failed to send message: ' + result.error);
      }
    } catch (error) {
      setStatus('Error: ' + error.message);
    }
  };

  return (
    <section id="contact" className="contact py-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact NS Packers and Movers - Get Reliable Moving Services</title>
        <meta name="description" content="Have questions about moving services? Contact NS Packers and Movers for a seamless, stress-free moving experience." />
        <meta name="keywords" content="contact NS Packers and Movers, relocation services, moving questions, professional movers contact" />
        <meta property="og:title" content="Contact NS Packers and Movers" />
        <meta property="og:description" content="Have questions about moving services? Contact NS Packers and Movers for a seamless, stress-free moving experience." />
        <meta property="og:url" content="YOUR_WEBSITE_URL/contact" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>

      <div className="container mx-auto text-center px-6">
        {/* Heading */}
        <header>
          <h2 className="text-4xl font-semibold mb-6" id="contact-form-header">Get in Touch with NS Packers and Movers</h2>
          <p className="text-lg mb-8">
            Have questions? We’re here to help! Reach out to us, and we'll get back to you as soon as possible.
          </p>
        </header>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit} // Attach the handleSubmit function here
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
            value={formName}
            onChange={(e) => setFormName(e.target.value)} // Update state
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
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)} // Update state
          />

          {/* Message Textarea */}
          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-4 mb-6 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300"
            required
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)} // Update state
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-300 transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && <p className="mt-4 text-lg">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
