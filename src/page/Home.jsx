import { useState } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { LiaHandPointRightSolid } from "react-icons/lia";
import { motion } from "framer-motion";
export default function Home() { 
    const [speaking, setSpeaking] = useState(false);
    const text = "Supports local languages with voice search options.";
    const handleSpeak = () => {
        if (!window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(text);
        setSpeaking(true);
        utterance.onend = () => setSpeaking(false);
        window.speechSynthesis.speak(utterance);
      };
 return (
    <div className="min-h-screen flex flex-col">
 <div className="relative w-full h-[600px]">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/premium-photo/table-with-candle-ayurvedic-spices-background_1342618-5057.jpg?semt=ais_incoming&w=740&q=80"
        alt="AI-Powered Therapy Platform"
        className="w-full h-full object-cover"
      />

      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-3xl md:text-5xl font-bold mb-4 font-serif"
        >
          Welcome To
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="text-blue-200 text-2xl md:text-4xl font-serif"
        >
          Ayursutra Panchakarma
        </motion.p>
      </div>
    </div>
 <section className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-left font-serif"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Smarter Scheduling with <br /> 
            <span className="text-yellow-300">AI-Powered Therapy</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Experience <span className="font-semibold">personalized Ayurvedic care</span>,  
            hassle-free scheduling, and <span className="font-semibold">vernacular support</span> —  
            all in one intelligent platform designed for your wellness journey.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/signup"
              className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
            >
              Get Started
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/about"
              className="bg-transparent border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://media.istockphoto.com/id/1356810087/photo/event-planners-use-timetables-and-agendas-to-arrange-and-schedule-events-on-the-office-table.jpg?s=612x612&w=0&k=20&c=51skwC7R-OzzpIGjqdFX4bG-b6tywqJ2gDp5YOqUfbM="
            alt="AI Therapy Scheduling"
            className="rounded w-full max-w-md shadow-lg"
          />
        </motion.div>

      </div>
    </section>
<hr />
<section className="py-16 px-6 font-serif bg-gray-50">
      <div className="container mx-auto">

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="p-10 grid md:grid-cols-2 gap-40 items-center"
        >
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-left"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Find Ayurvedic therapy
            </h2>
            <p className="text-gray-600 mb-6">
              Quickly search and connect with therapy around your location.  
              Get instant access to the right therapy support when you need it.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-700 border border-blue-400 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-blue-50 transition"
            >
              Explore
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dznmoz8hw/image/upload/v1758477395/sea_cd7lg7.png"
              alt="Therapy Search"
              className="rounded shadow w-full max-w-md"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
<hr />

  <section className="px-6 py-16 mb-12 bg-gray-50 font-serif">
      <div className="container mx-auto">

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="p-10 grid md:grid-cols-2 gap-40 items-center"
        >

          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-left"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Nearby therapy
            </h2>
            <p className="text-gray-600 mb-6">
              Discover therapy and healthcare centers close to your location.  
              Get quick access to trusted Ayurveda facilities for your health and wellness needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-700 border border-blue-400 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              Explore
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex justify-center"
          >
            <img
              src="https://media.istockphoto.com/id/1282488617/photo/downtown-building-located-at-the-hospital-3d-rendering.jpg?s=612x612&w=0&k=20&c=JLF80tNkmiUMcmO8CjSWvGRGmzEaynRXX8l9JLIA2Gc="
              alt="Nearby therapy"
              className="rounded-xl shadow-lg w-full max-w-md"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
<hr />

 <section className="px-6 py-16 mb-12 font-serif">
      <div className="container mx-auto">

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.3 } }
          }}
          className="p-10 grid md:grid-cols-2 gap-40 items-center"
        >

          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-left"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Offline-first Access
            </h2>
            <p className="text-gray-600 mb-6">
              Works even in remote areas with auto-sync when online.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white text-blue-700 border border-blue-400 font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition"
            >
              Explore
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex justify-center"
          >
            <img
              src="https://res.cloudinary.com/dznmoz8hw/image/upload/v1758476879/unnamed_dwf3o8.png"
              alt="Offline Access Illustration"
              className="rounded-xl w-full max-w-md"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
<hr />


 <section className="px-6 py-16 font-serif bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } }
        }}
        className="grid md:grid-cols-2 md:ml-10 items-center gap-10"
      >

        {/* Left Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="flex flex-col gap-4"
        >
          <h3 className="text-2xl font-bold text-gray-800">Voice Support For Patient</h3>
          <p className="text-gray-600">
            Supports local languages with voice search options.
          </p>

          <div className="flex items-center gap-2">
            <LiaHandPointRightSolid className="h-10 w-10 text-blue-500" />
            <button
              onClick={handleSpeak}
              className={`w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 transition ${
                speaking ? "animate-pulse" : ""
              }`}
            >
              <HiMiniSpeakerWave className="h-6 w-6 text-blue-600" />
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="flex justify-center"
        >
          <img
            src="https://res.cloudinary.com/dznmoz8hw/image/upload/v1758477234/voi_khiwuy.png"
            alt="Voice & Vernacular Illustration"
            className="rounded w-full max-w-md object-cover shadow-lg"
          />
        </motion.div>

      </motion.div>
    </section>

<hr />
    
    </div>
  );
}
