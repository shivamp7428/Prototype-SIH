import React from 'react';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Patient Dashboard",
    desc: "View your appointments, health records and therapy schedules.",
    img: "https://ddi-dev.com/uploads/dashboard-patient.png", // replace with real image
  },
  {
    title: "Doctor Dashboard",
    desc: "Manage patient sessions, track treatments and therapy plans.",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/a5e6bc133609243.61c1b8414b12a.png",
  },
  {
    title: "Admin Dashboard",
    desc: "Manage patient, appointments, Product eligibilty and reports in one place.",
    img: "https://therichpost.com/wp-content/uploads/2025/05/Medical-Admin-Dashboard-Templates-%E2%80%93-Responsive-Bootstrap-5-UI-for-Healthcare-Hospitals-1024x484.png",
  },
  {
    title: "Appointments",
    desc: "Book or check upcoming therapy sessions easily.",
    img: "https://s3-alpha.figma.com/hub/file/5538184782/df67ed14-f52e-4036-9f85-cbeb4244b629-cover.png",
  },
  {
    title: "Map",
    desc: "Locate nearby Panchakarma centers and therapy.",
    img: "https://media.istockphoto.com/id/1282488617/photo/downtown-building-located-at-the-hospital-3d-rendering.jpg?s=612x612&w=0&k=20&c=JLF80tNkmiUMcmO8CjSWvGRGmzEaynRXX8l9JLIA2Gc=",
  },
  {
    title: "Search Therapy",
    desc: "Find therapies and specialists that suit your needs.",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1758477395/sea_cd7lg7.png",
  },
  {
    title: "Voice Assistance",
    desc: "Use voice commands for easy to understand ",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1758477234/voi_khiwuy.png",
  },
  {
    title: "Offline Mode",
    desc: "Access your data even in areas without internet.",
    img: "https://res.cloudinary.com/dznmoz8hw/image/upload/v1758476879/unnamed_dwf3o8.png",
  },
];

const Service = () => {
  return (
    <div className=" bg-gray-50 py-16 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl md:text-5xl font-bold text-indigo-600 mb-30 font-serif text-center"
      >
        Explore Our Services
      </motion.h1>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
      >
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center transition-transform duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-full mb-4  object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
