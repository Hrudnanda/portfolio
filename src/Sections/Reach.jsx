// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";

// Contact methods
const contactMethods = [
  {
    label: "Email",
    value: "hruda096@gmail.com",
    icon: <FaEnvelope />,
    href: "mailto:budhanbiswal3@gmail.com",

    bg: "from-purple-600 to-indigo-600",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hrudananda",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/hrudananda-biswal-336819290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    bg: "from-blue-600 to-blue-800",
  },
  {
    label: "GitHub",
    value: "github.com/hrudananda",
    icon: <FaGithub />,
    href: "https://github.com/Hrudnanda",
    bg: "from-gray-700 to-gray-900",
  },
  {
    label: "Instagram",
    value: "@hrudananda",
    icon: <FaInstagram />,
    href: "https://www.instagram.com/sketch.keeda?igsh=MWhrdnc2ZWZrNzc3ag==&utm_source=ig_contact_invite",
    bg: "from-pink-500 to-yellow-500",
  },
  {
    label: "WhatsApp",
    value: "+91 7847084654",
    icon: <FaWhatsapp />,
    href: "https://wa.me/917847084654",
    bg: "from-green-500 to-green-700",
  },
  {
    label: "Portfolio",
    value: "hrudananda.dev",
    icon: <FaGlobe />,
    href: "https://hrudananda.dev",
    bg: "from-indigo-500 to-purple-600",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80rem] h-[80rem] bg-purple-700 opacity-10 rounded-full blur-[150px] z-0" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400"
          variants={item}
        >
          🤝 Let's Connect, Through
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mb-16 max-w-3xl leading-relaxed"
          variants={item}
        >
          Want to build something together or just talk about tech, design, or coffee? Feel free to reach out on any platform below. I'm always open to new opportunities and cool conversations!
        </motion.p>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          variants={container}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${method.bg} p-6 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-[1.04] hover:shadow-lg flex flex-col justify-between h-full backdrop-blur-lg bg-opacity-40 border border-white/10`}
              variants={item}
              whileHover={{ y: -6 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <p className="text-sm uppercase text-white/70 tracking-widest">
                  {method.label}
                </p>
                <p className="text-lg font-semibold">{method.value}</p>
              </div>

              {/* Connect Prompt */}
              <div className="mt-4 text-sm text-white/60 group-hover:text-white transition-colors duration-300">
                → Connect
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;


