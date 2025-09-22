import React from "react";
import { motion } from "framer-motion";
import { HiOutlineLightBulb, HiOutlineFlag, HiOutlineShieldCheck } from "react-icons/hi2";

const About = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Intro Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-center font-serif space-y-4"
        >
          <h1 className="md:text-4xl text-3xl font-bold text-blue-600">About Ayursutra</h1>
          <p className="md:text-lg text-sm text-gray-700 max-w-3xl mx-auto">
            Ayursutra is a platform for managing therapy and patient scheduling in Ayurveda centers. 
            We combine traditional therapy practices with modern digital tools to provide personalized, 
            seamless, and efficient healthcare solutions.
          </p>
        </motion.div>

        {/* Vision / Mission / Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div 
            variants={cardVariants} 
            className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition duration-300"
          >
            <HiOutlineLightBulb className="mx-auto h-12 w-12 text-yellow-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Vision</h2>
            <p className="md:text-lg text-sm">Redefine personalized therapy with technology and care, making wellness accessible to all.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants} 
            className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition duration-300"
          >
            <HiOutlineFlag className="mx-auto h-12 w-12 text-green-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Mission</h2>
            <p className="md:text-lg text-sm">Deliver seamless, high-quality therapy experiences that prioritize individual needs and progress.</p>
          </motion.div>

          <motion.div 
            variants={cardVariants} 
            className="bg-white rounded-xl shadow-lg p-8 text-center transform hover:scale-105 transition duration-300"
          >
            <HiOutlineShieldCheck className="mx-auto h-12 w-12 text-blue-400 mb-4" />
            <h2 className="text-2xl font-semibold mb-2 text-blue-500">Our Values</h2>
            <p className="md:text-lg text-sm">Innovation, Compassion, Integrity, and commitment to excellence in every session.</p>
          </motion.div>
        </motion.div>

        {/* Fun Fact / Illustration Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-blue-50 rounded-xl md:p-10 flex flex-col md:flex-row items-center gap-8"
        >
          <img 
            src="https://img.freepik.com/premium-vector/ayurveda-herbal-therapy-concept-flat-illustration_52683-81859.jpg?w=740" 
            alt="Ayurveda Illustration" 
            className="rounded w-full md:w-1/2 object-cover transform hover:scale-105 transition duration-300"
          />
          <div className="space-y-4 md:w-1/2">
            <h2 className="md:text-3xl text-2xl font-bold text-gray-800">Why Choose Ayursutra?</h2>
            <p className="text-gray-700 md:text-lg text-sm">
              Our platform ensures you can manage therapies, track progress, and schedule appointments seamlessly, 
              all while keeping the essence of Ayurveda intact. We make wellness simple, modern, and effective.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
