import React from "react";
import { motion } from "framer-motion";

// ======================= HELPER COMPONENTS =======================

// Counter component for dynamic number animation
const Counter = ({ targetValueStr, duration = 2500 }) => {
  const [count, setCount] = React.useState(0);
  // Extract the numerical target and check for '+'
  const target = parseInt(targetValueStr.replace('+', ''), 10);
  const hasPlus = targetValueStr.includes('+');
  const startTime = React.useRef(null);

  React.useEffect(() => {
    const step = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = timestamp - startTime.current;
      const percentage = Math.min(progress / duration, 1);
      
      // Use easing function (cubic out) for a smoother count-up effect
      const easedPercentage = 1 - Math.pow(1 - percentage, 3);
      const currentValue = Math.floor(easedPercentage * target);

      setCount(currentValue);

      if (percentage < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Ensure the final count is exactly the target
        setCount(target); 
      }
    };

    window.requestAnimationFrame(step);
    // Cleanup function for when the component unmounts
    return () => {
        if (startTime.current) startTime.current = null;
    }; 
  }, [target, duration]);

  return <>{count}{hasPlus ? '+' : ''}</>;
};


// Helper components for professional icons (replacing lucide-react for single-file environment compatibility)
const CheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
);
const ZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const StoreIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current">
    <path d="M22 7H2v3h20V7zm0 4H2v3h20v-3zm0 4H2v3h20v-3z"/>
  </svg>
);
const LayoutGrid = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
);
const Globe = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);
const TrendingUp = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
);
const Mail = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
);
const ShieldCheck = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-current"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>
);


// ======================= SERVICE DATA =======================

const serviceData = [
  {
    title: "Startup Launchpad (Basic)",
    price: "₹4,999",
    features: [
      { text: "1-3 Pages", icon: LayoutGrid },
      { text: "Responsive Design", icon: Globe },
      { text: "Basic SEO & Analytics", icon: TrendingUp },
      { text: "Contact Form Integration", icon: Mail },
    ],
    color: "from-indigo-600 to-pink-500",
    hover_glow: "shadow-indigo-500/40",
  },
  {
    title: "Professional Growth (Standard)",
    price: "₹9,999",
    features: [
      { text: "Up to 10 Pages & Custom UI", icon: LayoutGrid },
      { text: "CMS (Content Management)", icon: ShieldCheck },
      { text: "Advanced SEO & Speed Optimization", icon: ZapIcon }, 
      { text: "Dedicated Support (30 days)", icon: Mail },
    ],
    color: "from-teal-500 to-cyan-500",
    hover_glow: "shadow-teal-500/40",
  },
  {
    title: "E-Commerce Powerhouse (Premium)",
    price: "₹14,999",
    features: [
      { text: "Unlimited Products & Pages", icon: StoreIcon }, 
      { text: "Secure Payment Gateway Setup", icon: ShieldCheck },
      { text: "Full Admin Panel & Reporting", icon: TrendingUp },
      { text: "Order Tracking & Inventory Management", icon: Mail },
    ],
    color: "from-red-500 to-yellow-500",
    hover_glow: "shadow-red-500/40",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 0 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      type: "spring",
      stiffness: 80,
    },
  }),
  hover: {
    scale: 1.05,
    y: -10,
    rotateX: 2,
    rotateY: 2,
    transition: { duration: 0.3 }
  }
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans text-white overflow-hidden relative">
      
      {/* Hexagon Glowing Grid Background Element */}
      <div id="glow-grid-background" className="absolute inset-0 z-0"></div>

      {/* Load Inter Font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
      
      <section className="py-20 px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ================= FREELANCING CAREER SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto mb-24 text-center relative"
        >
          {/* Subtle Centralized Glow - Cyan */}
          <div className="absolute inset-x-1/4 top-0 h-48 w-1/2 bg-cyan-500/10 blur-3xl rounded-full opacity-50 z-0"></div>

          <motion.h1
            // Main text gradient: Blue, Cyan, Purple
            className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl relative z-10 tracking-tight"
          >
             Freelancing Carrier
          </motion.h1>

          <motion.p
            className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            I transform ideas into exceptional digital experiences, focusing on performance, modern design, and robust functionality for businesses worldwide.
          </motion.p>

          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-8 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              // Stat colors: Cyan, Purple, Red
              { label: "Projects Completed", value: "120+", color: "text-cyan-400" },
              { label: "Happy Clients", value: "85+", color: "text-purple-400" },
              { label: "Months of Experience", value: "36+", color: "text-red-400" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                // Removed redundant box-shadow from whileHover for cleaner look
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm px-6 py-4 sm:px-10 sm:py-6 rounded-xl border border-white/10 shadow-xl transition duration-300 transform hover:rotate-1"
              >
                <h3 className={`text-4xl font-extrabold ${stat.color}`}>
                  {/* DYNAMIC COUNTER INTEGRATION */}
                  <Counter targetValueStr={stat.value} duration={2500} />
                </h3>
                <p className="text-gray-300 mt-2 text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= WEB DEVELOPMENT SERVICES SECTION ================= */}
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">
            Elevate Your Business with Our Packages
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mt-4">
            Choose a plan designed for modern scaling, blending exceptional design with robust web technologies.
          </p>
        </div>

        {/* ================= SERVICE CARDS (360 DEGREE GLOW) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-1000">
          {serviceData.map((service, index) => {
            // Determine the primary glow color for the rotating border (Cyan for the middle card)
            const glowColor = index === 1 ? 'rgb(6, 182, 212)' : service.color.includes('teal') ? 'rgb(45, 212, 191)' : 'rgb(167, 139, 250)'; // Cyan / Teal / Purple contrast
            
            return (
              <motion.div
                key={index}
                className={`group relative bg-gray-900 ${index === 1 ? 'border-cyan-500/50' : 'border-gray-700/50'} p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-500 overflow-hidden transform-gpu`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
              >
                
                {/* 360 Degree Rotating Glow Element (Z-0) */}
                <div className={`absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0`}>
                    <div 
                        className="absolute"
                        style={{
                            // Make it twice as big to ensure rotation covers the corners
                            width: '200%',
                            height: '200%',
                            top: '-50%',
                            left: '-50%',
                            borderRadius: '9999px',
                            // Conic gradient for the sweeping effect
                            background: `conic-gradient(transparent 0deg, transparent 180deg, ${glowColor} 200deg, ${glowColor} 220deg, transparent 240deg)`,
                            filter: 'blur(30px) opacity(0.6)',
                            animation: 'rotate-border 6s linear infinite',
                            backgroundColor: 'transparent'
                        }}
                    />
                </div>

                {/* Subtle Gradient Background - Inner card focus (Z-10) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-all duration-500 z-10`}
                ></div>
                
                {/* Enhanced Shadow/Glow Effect (Z-10) */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${service.color} blur-3xl ${index === 1 ? 'opacity-30' : 'opacity-0'} group-hover:opacity-50 rounded-3xl transition-opacity duration-700 z-10`}
                ></div>

                <div className="relative z-20 text-left">
                  {/* Recommended Badge for the middle card */}
                  <div className="flex justify-between items-center mb-2">
                      <h3 className="text-3xl font-bold text-white">
                          {service.title}
                      </h3>
                      {index === 1 && (
                          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-cyan-500 text-gray-950 rounded-full shadow-lg shadow-cyan-500/50 transform rotate-1 transition duration-300">
                              Recommended
                          </span>
                      )}
                  </div>

                  <p className="text-2xl font-extrabold mb-8 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    {service.price} <span className="text-gray-400 text-sm font-normal">/ one-time fee</span>
                  </p>

                  <ul className="space-y-4 text-sm sm:text-base text-gray-300 mb-10">
                    {service.features.map((feature, i) => {
                      const IconComponent = feature.icon; 
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 mt-1 ${service.hover_glow.replace('shadow-', 'text-')}`}>
                            <IconComponent />
                          </span>
                          <span className="leading-tight">{feature.text}</span>
                        </li>
                      )
                    })}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 px-6 rounded-xl text-lg font-semibold tracking-wide transition duration-300 transform group-hover:scale-[1.01]
                      ${index === 1 
                          ? 'bg-cyan-500 text-gray-950 shadow-cyan-500/70 hover:bg-cyan-400' 
                          : `bg-gradient-to-r ${service.color} text-white shadow-lg ${service.hover_glow}`
                      }
                    `}
                    style={{
                      boxShadow: index === 1 
                          ? `0 10px 20px -5px #06b6d4` 
                          : `0 8px 15px -5px ${service.color.split(' ').pop().replace('to-', '').replace('from-', '')}`,
                    }}
                  >
                    {index === 1 ? 'Start Recommended Plan' : 'Start Project Now'}
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer / Call to Action Section */}
      <motion.div 
        className="max-w-6xl mx-auto py-16 px-4 text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-3xl font-bold text-gray-200">Have a custom requirement?</h3>
        <p className="text-gray-400 mt-2 mb-6">Let's discuss a tailored solution that fits your exact needs.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-semibold shadow-2xl hover:bg-white/10 transition duration-300"
        >
          Get a Custom Quote
        </motion.button>
      </motion.div>

      {/* Custom Styles for better visual effects */}
      <style>
        {`
          /* Custom utility for perspective on the grid container */
          .perspective-1000 {
            perspective: 1000px;
          }

          /* --- KEYFRAME ANIMATIONS --- */

          /* 360 Degree Card Border Rotation */
          @keyframes rotate-border {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
          }
          
          /* Stronger, faster pulse animation for the background */
          @keyframes pulseGlow {
              // Base glow for pulse is set to blue/cyan
              0% { opacity: 0.7; box-shadow: inset 0 0 100px rgba(46, 170, 255, 0.1); }
              100% { opacity: 1; box-shadow: inset 0 0 250px rgba(46, 170, 255, 0.2); }
          }
          
          /* Enhanced shimmer effect for depth */
          @keyframes shimmer {
              0% { transform: translate(-50vw, -50vh); opacity: 0.15; } 
              50% { opacity: 0.25; } 
              100% { transform: translate(50vw, 50vh); opacity: 0.15; }
          }


          /* --- BACKGROUND STYLES (Hexagon and Square Grid) --- */
          #glow-grid-background {
            /* * Layer 1: Square Grid (Horizontal lines) 
             * Layer 2: Square Grid (Vertical lines) 
             * Layer 3: Hexagon Grid (21deg)
             * Layer 4: Hexagon Grid (-21deg)
             * Layer 5: Hexagon Grid (90deg)
             */
            background-image: 
              repeating-linear-gradient(to right, #0c0c16, #0c0c16 39px, rgba(0, 150, 255, 0.05) 40px, rgba(0, 150, 255, 0.05) 41px),
              repeating-linear-gradient(to bottom, #0c0c16, #0c0c16 39px, rgba(0, 150, 255, 0.05) 40px, rgba(0, 150, 255, 0.05) 41px),
              linear-gradient(21deg, #0c0c16 12%, rgba(0, 200, 255, 0.1) 12.5%, rgba(0, 200, 255, 0.1) 87.5%, #0c0c16 88%), 
              linear-gradient(-21deg, #0c0c16 12%, rgba(0, 200, 255, 0.1) 12.5%, rgba(0, 200, 255, 0.1) 87.5%, #0c0c16 88%),
              linear-gradient(90deg, #0c0c16 20%, rgba(0, 200, 255, 0.05) 20%, rgba(0, 200, 255, 0.05) 80%, #0c0c16 80%);
              
            /* Size for Hexagon Grids (80px 140px) and a smaller size for the Square Grids (40px 40px) */
            background-size: 40px 40px, 40px 40px, 80px 140px, 80px 140px, 80px 140px; 
            background-color: #05050e; 
            
            opacity: 0.8; 
            box-shadow: inset 0 0 150px rgba(46, 170, 255, 0.1); 
            animation: pulseGlow 10s infinite alternate; 
          }

          #glow-grid-background::after {
              content: '';
              position: absolute;
              inset: -50px; 
              // Radial glow for shimmer effect uses bright cyan
              background: radial-gradient(circle at center, rgba(0, 220, 255, 0.25) 0%, transparent 40%); 
              opacity: 0;
              animation: shimmer 20s linear infinite; 
          }
        `}
      </style>
    </div>
  );
};

export default App;
  