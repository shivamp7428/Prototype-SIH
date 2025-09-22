import React from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded border border-gray-300 p-10 w-full max-w-md"
      >
        <h2 className="md:text-3xl  text-xl font-serif font-bold text-indigo-600 text-center mb-6">
          Login to Ayursutra
        </h2>

        <form className="space-y-4 font-serif">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>

        <p className="md:text-center text-sm font-serif text-gray-500 mt-4">
          Don't have an account?{' '}
          <a href="/SignUp" className="text-indigo-600 font-semibold hover:underline">
            Sign 
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
