// Service.jsx
import React from 'react';
import { motion } from 'framer-motion';

const serviceData = [
  {
    title: 'Basic Website',
    price: '₹1499',
    features: ['1-3 Pages', 'Responsive Design', 'Basic SEO', 'Contact Form'],
    color: 'from-indigo-500 via-purple-600 to-pink-500',
  },
  {
    title: 'Professional Website',
    price: '₹4999',
    features: ['Up to 10 Pages', 'Advanced SEO', 'CMS Integration', 'Performance Optimized'],
    color: 'from-green-400 via-emerald-500 to-cyan-500',
  },
  {
    title: 'E-Commerce Package',
    price: '₹9999',
    features: ['Unlimited Products', 'Payment Gateway', 'Admin Panel', 'Order Tracking'],
    color: 'from-pink-500 via-red-500 to-yellow-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
    },
  }),
};

const Service = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-12 text-white font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
          Web Development Services
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
          Modern, responsive, and beautifully built websites to take your business online with style.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {serviceData.map((service, index) => (
          <motion.div
            key={index}
            className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-white/30 shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-500 overflow-hidden"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2 }}
          >
            {/* Gradient Glow Border */}
            <div
              className={`absolute -inset-1 bg-gradient-to-br ${service.color} blur-2xl opacity-30 group-hover:opacity-70 rounded-3xl transition-all duration-500 z-0`}
            ></div>

            {/* Shine Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition-all duration-700 rounded-3xl z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-xl font-semibold text-cyan-300 mb-6">{service.price}</p>

              <ul className="space-y-3 text-sm sm:text-base text-gray-200 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 px-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold tracking-wide shadow-lg hover:shadow-blue-500/50 transition duration-300"
              >
                Choose Plan
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;


  