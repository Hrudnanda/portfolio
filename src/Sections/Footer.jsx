// Footer.jsx
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/yourusername',
    label: 'Twitter',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:you@example.com',
    label: 'Email',
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 bg-black text-white overflow-hidden"
    >
      {/* Background Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      {/* Vibrant Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-red-700/60 via-indigo-700/50 to-black mix-blend-overlay" />

      <div className="relative max-w-7xl mx-auto py-12 px-6 flex flex-col items-center space-y-8 text-center">

        {/* Name or Logo */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-red-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
          Hrudananda
        </h1>

        {/* Social Icons */}
        <div className="grid grid-cols-2 sm:flex gap-6 text-2xl">
          {socialLinks.map((social) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group transition-colors text-gray-300 hover:text-white"
            >
              {social.icon}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-indigo-400 group-hover:w-full transition-all duration-300 transform -translate-x-1/2" />
            </motion.a>
          ))}
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-200 transition"
        >
          <FaArrowUp className="animate-bounce" />
          <span>Back to Top</span>
        </button>

        {/* Divider */}
        <div className="w-full border-t border-gray-600" />

        {/* Copyright */}
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Hrudananda. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

