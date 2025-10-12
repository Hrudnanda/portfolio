// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaReact, FaNodeJs, FaFigma, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";
import meImage from "../assets/me1.jpg";
import { Link } from 'react-router-dom';

// Floating icon data with randomized but fixed-looking positions
const floatingIcons = [
  { icon: <FaReact />, className: "text-cyan-400", style: "top-[10%] left-[8%]" },
  { icon: <FaNodeJs />, className: "text-green-500", style: "top-[20%] right-[12%]" },
  { icon: <FaFigma />, className: "text-pink-500", style: "bottom-[15%] left-[6%]" },
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
          <div className={`${item.className} drop-shadow-lg`}>
            {item.icon}
          </div>
        </motion.div>
      ))}

      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 space-y-6 relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m <span className="text-blue-500"> <br />Hrudananda Biswal</span><br />
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

      {/* Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center relative z-10"
      >
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <img
            src={meImage}
            alt="Web Developer Avatar"
            className="w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl"
          />
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
