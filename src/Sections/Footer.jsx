import React from "react";
import { motion } from "framer-motion";

// --- Custom Icon Components (Inline SVG) ---
const Icon = ({ path, viewBox = "0 0 24 24", className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

const PhoneIcon = (props) => (
  <Icon
    {...props}
    path={
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-7.5-7.5 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.76 17.6 17.6 0 0 0 .86 3.76 2 2 0 0 1-1.15 2.15l-1.39.81a17.6 17.6 0 0 0 7.5 7.5l.81-1.39a2 2 0 0 1 2.15-1.15 17.6 17.6 0 0 0 3.76.86 2 2 0 0 1 1.76 2Z" />
    }
  />
);

const MailIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
      </>
    }
  />
);

const MapPinIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </>
    }
  />
);

const FacebookIcon = (props) => (
  <Icon {...props} path={<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />} />
);

const InstagramIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </>
    }
  />
);

const TwitterIcon = (props) => (
  <Icon
    {...props}
    path={
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2.1l-1.4-1.4c-1.3-1.3-2.1-3.3-2.1-5.4V8.5C7.8 7.2 9 6.7 10.5 7c-2.3-1.4-4-3-4-5s1.7-2 4-2c2 0 3.5 1.7 4 4v1a.5.5 0 0 1-.5.5c-2 0-3.5 1.5-4 4 0 0-2 0-4-2" />
    }
  />
);

const YoutubeIcon = (props) => (
  <Icon
    {...props}
    viewBox="0 0 24 24"
    path={
      <>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2A50.29 50.29 0 0 0 12 4.17a50.29 50.29 0 0 0-8.6.25 2.78 2.78 0 0 0-1.94 2C1.69 7.6 1.5 9.8 1.5 12c0 2.2.2 4.4.5 5.58a2.78 2.78 0 0 0 1.94 2 50.29 50.29 0 0 0 8.6.25 50.29 50.29 0 0 0 8.6-.25 2.78 2.78 0 0 0 1.94-2c.3-.18.5-2.38.5-5.58s-.2-4.4-.5-5.58z" />
        <path d="m10 15 5-3-5-3v6z" />
      </>
    }
  />
);

// ------------------ Contact Content ------------------
// NOTE: Removed the "Ignite Your Impulse" heading and the 3 info cards as requested.
// Kept the contact form and everything else intact.
const ContactContent = () => {
  return (
    <div id="contact-content" className="relative py-20 px-6 overflow-hidden text-white">
      {/* Contact Form & Social Media Wrapper */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl mx-auto relative z-20">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-[#181818] p-10 flex-1 rounded-3xl shadow-2xl border border-gray-700/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
            Start Your Project
          </h2>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            />
            <select
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300 appearance-none"
            >
              <option disabled defaultValue>
                Select Service
              </option>
              <option>Brand Identity & Logo</option>
              <option>Web Design & Development</option>
              <option>Digital Marketing Strategy</option>
              <option>Other</option>
            </select>
            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="p-4 rounded-xl border-2 border-transparent outline-none bg-[#282828] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-300"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0px 8px 20px rgba(255,0,255,0.8)" }}
              className="mt-4 p-4 bg-gradient-to-r from-fuchsia-600 to-cyan-600 rounded-xl font-bold text-white uppercase tracking-wider shadow-lg transition transform duration-300"
            >
              Send Impulse
            </motion.button>
          </form>
        </motion.div>

        {/* OPTIONAL: You had no separate social box here — if you want one, say so and I’ll add it */}
      </div>
    </div>
  );
};

// ------------------ Footer ------------------
const Footer = () => {
  const Logo = () => (
    <div className="flex items-center space-x-2">
      <Icon
        path={<path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5" />}
        className="w-8 h-8 text-fuchsia-400"
      />
      <span className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
        Hruda.synatx
      </span>
    </div>
  );

  const footerSocials = [
    { href: "#", icon: <FacebookIcon className="w-6 h-6" /> },
    { href: "#", icon: <InstagramIcon className="w-6 h-6" /> },
    { href: "#", icon: <YoutubeIcon className="w-6 h-6" /> },
    { href: "#", icon: <TwitterIcon className="w-6 h-6" /> },
  ];

  return (
    <footer className="bg-black text-white py-12 mt-20 w-full rounded-t-[4rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border-t-8 border-fuchsia-500/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Logo />
          <p className="text-gray-400 text-sm leading-relaxed mt-4">
            Igniting brands with bold strategy, vibrant design, and digital innovation. We transform ideas into visual reality.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#home" className="hover:text-fuchsia-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-fuchsia-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-fuchsia-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-fuchsia-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-fuchsia-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Reach Us</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-2 text-fuchsia-400" /> +91 9040475287
            </li>
            <li className="flex items-center">
              <MailIcon className="w-4 h-4 mr-2 text-fuchsia-400" /> hello@creativeimpulse.in
            </li>
            <li className="flex items-center">
              <MapPinIcon className="w-4 h-4 mr-2 text-fuchsia-400" /> Tech Park, City, India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">Connect</h3>
          <div className="flex space-x-5 text-2xl">
            {footerSocials.map((s, i) => (
              <a key={i} href={s.href} className="text-gray-400 hover:text-white">
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-6 text-sm">
        © {new Date().getFullYear()} Creative Impulse. All rights reserved.
      </div>
    </footer>
  );
};

// ------------------ App (keeps background & effects) ------------------
const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-black to-gray-900 min-h-screen font-sans">
      {/* Background Grid Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Background Lighting/Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-30 z-10">
        <div className="absolute top-[5%] right-[5%] w-96 h-96 bg-fuchsia-800/20 blur-[200px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-cyan-600/20 blur-[200px] rounded-full"></div>
      </div>

      <div className="relative z-20">
        <ContactContent />
      </div>

      <Footer />
    </div>
  );
};

export default App;


