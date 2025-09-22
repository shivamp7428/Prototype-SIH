import React from 'react';
import { motion } from 'framer-motion';

const Sign = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  md:px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=" rounded border border-gray-300 p-10 w-full max-w-md"
      >
        <h2 className="md:text-3xl text-xl font-bold  text-indigo-600 text-center mb-6">
          Create an Account
        </h2>

        <form className="space-y-4 font-serif">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              required
              placeholder="Enter you Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              required
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="md:text-center font-serif text-gray-500 mt-4">
          Already have an account?{' '}
          <a href="/Login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Sign;
