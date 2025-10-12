import React, { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Book() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add your API submission logic here
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] overflow-hidden">

      {/* Background aurora light animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 via-pink-500 to-blue-500 rounded-full blur-[200px] opacity-30 animate-spin-slow" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-[180px] opacity-30 animate-pulse" />
      </div>

      {/* Glowing frosted form card */}
      <motion.div
        className="relative z-10 w-full max-w-md p-8 bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(168,85,247,0.5)]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8 tracking-wide drop-shadow-[0_0_8px_#8b5cf6]">
          🚀 Book Your Spot
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-white">

          {/* Name */}
          <motion.div variants={fieldVariants} className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="peer w-full px-4 pt-6 pb-2 bg-transparent text-white border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-[0_0_15px_#a855f7] placeholder-transparent transition"
            />
            <label className="absolute left-4 top-2 text-purple-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-purple-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-purple-300">
              Name
            </label>
          </motion.div>

          {/* Phone */}
          <motion.div variants={fieldVariants} className="relative">
            <input
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="peer w-full px-4 pt-6 pb-2 bg-transparent text-white border border-blue-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:shadow-[0_0_15px_#3b82f6] placeholder-transparent transition"
            />
            <label className="absolute left-4 top-2 text-blue-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-300">
              Phone Number
            </label>
          </motion.div>

          {/* Email */}
          <motion.div variants={fieldVariants} className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="peer w-full px-4 pt-6 pb-2 bg-transparent text-white border border-pink-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:shadow-[0_0_15px_#ec4899] placeholder-transparent transition"
            />
            <label className="absolute left-4 top-2 text-pink-300 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-pink-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-300">
              Email
            </label>
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 25px rgba(168, 85, 247, 0.9)',
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white font-bold rounded-xl shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_35px_#a855f7] transition-all duration-300"
          >
            ✨ Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Book;


