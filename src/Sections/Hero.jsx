// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import meImage from "../assets/me1.jpg";
import { Link } from "react-router-dom";

// Floating icon data
const floatingIcons = [
  { icon: <FaNodeJs />, className: "text-green-500", style: "top-[20%] right-[12%]" },
  { icon: <FaGithub />, className: "text-gray-400", style: "bottom-[18%] right-[10%]" },
  { icon: <FaHtml5 />, className: "text-orange-500", style: "top-[35%] left-[40%]" },
  { icon: <FaCss3Alt />, className: "text-blue-500", style: "bottom-[30%] right-[35%]" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 overflow-hidden">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.style} text-6xl opacity-40 pointer-events-none z-0`}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        >
          <div className={`${item.className} drop-shadow-lg`}>{item.icon}</div>
        </motion.div>
      ))}

      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-6 relative z-10 mt-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-6">
          Hi, I’m
          <br />
          <motion.span
            className="font-[cursive] italic text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-blue-400 drop-shadow-lg"
            animate={{
              scale: [1, 1.03, 1],
              opacity: [1, 0.8, 1],
              rotate: [0, 1.5, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {" "}Hrudananda Biswal
          </motion.span>
          <br />
          A Passionate Web Developer & UI/UX Designer
        </h1>
        <p className="text-lg text-gray-300">
          I build responsive, scalable, and accessible web applications with a focus on performance and clean code.
        </p>

        <Link to="/reach">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-lime-500 hover:from-blue-700 hover:to-blue-500 transition px-6 py-3 rounded-lg text-lg font-medium shadow-lg"
          >
            Connect with Me <FaArrowRight />
          </motion.button>
        </Link>
      </motion.div>

      {/* Image Section with Aurora Glow */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mb-0 md:mb-0 flex justify-center relative z-10"
      >
        <div className="relative mt-10 w-80 h-80 md:w-96 md:h-96">
          {/* Multi-color Aurora Gradient Halo */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                "conic-gradient(from 0deg, #00f0ff, #6f00ff, #00ffd0, #0099ff, #00f0ff)",
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>

          {/* Profile Image */}
          <img
            src={meImage}
            alt="Web Developer Avatar"
            className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />

          {/* Online Status Dot */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
              transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
            }}
            className="absolute top-4 right-4 w-6 h-6 bg-green-400 rounded-full border-2 border-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;










