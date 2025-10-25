// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaUsers,
  FaHandshake,
  FaBriefcase,
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

// Count-up animation
const CountUp = ({ target, duration }) => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        start = target;
      }
      setCount(Math.floor(start));
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [target, duration]);
  return <span>{count}</span>;
};

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
          Hi, I’m <span className="text-blue-500"><br />Hrudananda Biswal</span><br />
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

        {/* Glowing Stat Cards */}
        <div className="mt-10 flex flex-wrap gap-6">
          {[
            {
              icon: <FaHandshake />,
              color: "text-green-400",
              glowColor: "rgba(34,197,94,0.8)",
              value: 50,
              label: "Happy Clients",
            },
            {
              icon: <FaUsers />,
              color: "text-blue-400",
              glowColor: "rgba(59,130,246,0.8)",
              value: 50000,
              label: "Active Users",
            },
            {
              icon: <FaBriefcase />,
              color: "text-yellow-400",
              glowColor: "rgba(250,204,21,0.8)",
              value: 36,
              label: "Months of Experience",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="relative flex items-center gap-4 bg-gray-800/60 border border-gray-700 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-sm transition-transform duration-300"
              animate={{
                boxShadow: [
                  `0 0 10px ${card.glowColor}`,
                  `0 0 25px ${card.glowColor}`,
                  `0 0 10px ${card.glowColor}`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.08,
                boxShadow: [
                  `0 0 20px 4px ${card.glowColor}`,
                  `0 0 40px 10px ${card.glowColor}`,
                  `0 0 25px 5px ${card.glowColor}`,
                ],
              }}
            >
              <div className={`${card.color} text-4xl`}>{card.icon}</div>
              <div>
                <h3 className="text-3xl font-bold text-white">
                  <CountUp target={card.value} duration={2} />+
                </h3>
                <p className="text-gray-400 text-sm">{card.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
              background: "conic-gradient(from 0deg, #00f0ff, #6f00ff, #00ffd0, #0099ff, #00f0ff)",
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






