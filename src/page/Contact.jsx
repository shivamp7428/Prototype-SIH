import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center  py-16 px-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold text-blue-400 font-serif mb-12 text-center"
      >
        Contact Us
      </motion.h2>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="border border-gray-300 rounded p-8 w-full max-w-lg"
      >
        <div className="mb-4 font-serif">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4 font-serif">
          <label className="block text-gray-700 font-medium mb-2">Contact</label>
          <input
            type="text"
            required
            placeholder="Enter your Number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4 font-serif">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-4 font-serif">
          <label className="block text-gray-700 font-medium mb-2">Message</label>
          <textarea
            rows="5"
            required
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full font-serif bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
};

export default ContactUs;
