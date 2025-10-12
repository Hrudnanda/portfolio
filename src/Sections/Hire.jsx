// File: Hire.jsx

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hire = () => {
  return (
    <motion.div
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-br from-slate-900 via-gray-800 to-sky-900"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={containerVariants}
      style={{ fontFamily: "'Poppins', sans-serif" }} // Global font for body
    >
      <motion.div
        className="max-w-3xl w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.15)] p-10 border border-cyan-400/20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-cyan-300 text-center mb-8 drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] font-serif"
          variants={itemVariants}
          style={{ fontFamily: "'Playfair Display', serif" }} // Elegant serif for heading
        >
          🚀 Why Should You Choose Me?
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-base md:text-lg font-light text-slate-200 text-center mb-8 leading-relaxed tracking-wide"
          variants={itemVariants}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          I'm a detail-oriented developer focused on building fast, accessible, and
          visually striking websites. I specialize in front-end technologies and
          delivering scalable, user-friendly solutions.
        </motion.p>

        {/* Feature List */}
       <motion.ul className="space-y-8 mb-10">
  {[
    { icon: "⚡", text: "Blazing-fast interfaces with Tailwind CSS" },
    { icon: "🎯", text: "Precision animation using Framer Motion" },
    { icon: "📱", text: "Fully responsive, mobile-first layout" },
    { icon: "🔍", text: "SEO & accessibility focused code" },
    { icon: "🧼", text: "Clean, modular, maintainable structure" },
    { icon: "🤝", text: "Reliable communication & collaboration" },
  ].map(({ icon, text }, index) => (
    <motion.li
      key={index}
      className="flex items-center space-x-4 rounded-xl bg-white/10 backdrop-blur-md border-2 border-transparent hover:border-cyan-400 shadow-lg hover:shadow-cyan-500/50 cursor-default p-5"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.15 },
        },
      }}
      whileHover={{ y: -6, scale: 1.05, boxShadow: "0 10px 20px rgba(6, 182, 212, 0.6)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500 text-white text-2xl shadow-[0_0_15px_rgba(6,182,212,0.7)]">
        {icon}
      </div>
      <p className="text-white font-semibold text-lg">{text}</p>
    </motion.li>
  ))}
</motion.ul>

       

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="mailto:youremail@example.com"
            className="relative inline-block px-8 py-4 font-semibold text-cyan-100 tracking-widest rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all duration-300 uppercase"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Hire Me
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hire;


