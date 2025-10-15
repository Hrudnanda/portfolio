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
      className="bg-gradient-to-tr from-gray-900 via-black to-gray-800 text-white py-12 px-4 md:px-12 rounded-2xl shadow-2xl mx-4 md:mx-8 mt-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Block 1: Logo */}
        <div className="flex justify-start items-center">
          <div className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-pulse">
            Hrudananda
          </div>
        </div>

        {/* Block 2: Social Icons */}
        <div className="flex justify-end items-center">
          <div className="flex space-x-6 text-3xl">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="text-gray-300 hover:text-white transition duration-300 relative group"
              >
                {social.icon}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-pink-500 group-hover:w-full transition-all duration-300 transform -translate-x-1/2 rounded-full" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Block 3: Back to Top Button */}
        <div className="flex justify-start items-center">
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-500 transition-colors duration-300"
          >
            <FaArrowUp className="animate-bounce" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Block 4: Copyright */}
        <div className="flex justify-end items-center">
          <div className="text-sm text-gray-400 text-right md:text-left">
            © {new Date().getFullYear()} Hrudananda. All rights reserved.
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        Built with ❤️ using React & Tailwind CSS
      </div>
    </motion.footer>
  );
};

export default Footer;



