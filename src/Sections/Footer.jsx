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
        className="bg-gradient-to-bl from-red-700  to-black"

      >
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          {/* Name or Logo */}
          <div className="text-3xl font-bold tracking-wide">Hrudananda</div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-2xl">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative group transition-colors text-gray-300 hover:text-indigo-400"
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
            className="flex items-center space-x-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <FaArrowUp className="animate-bounce" />
            <span>Back to Top</span>
          </button>

          {/* Divider */}
          <div className="w-full border-t border-gray-700" />

          {/* Copyright */}
          <div className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Hrudananda. All rights reserved.
          </div>
        </div>
      </motion.footer>
    );
  };

  export default Footer;

