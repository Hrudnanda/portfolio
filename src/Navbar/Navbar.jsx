import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiUser, FiBriefcase, FiMail, FiStar } from 'react-icons/fi'; // Added icons

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/10 backdrop-blur-lg shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold">
            <Link to="/" className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:opacity-90 transition-all duration-300">
               Hruda.Syntax
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link
              to="/"
              className={`flex items-center gap-2 font-medium transition-all duration-200 ${
                isActive('/') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              <FiHome /> Home
            </Link>
            <Link
              to="/about"
              className={`flex items-center gap-2 font-medium transition-all duration-200 ${
                isActive('/about') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              <FiUser /> About
            </Link>
            <Link
              to="/service"
              className={`flex items-center gap-2 font-medium transition-all duration-200 ${
                isActive('/service') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              <FiBriefcase /> Service
            </Link>
            <Link
              to="/Reach"
              className={`flex items-center gap-2 font-medium transition-all duration-200 ${
                isActive('/reachMe') ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              <FiMail /> Reach Me
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/Book"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
            >
              <FiStar /> ✨ Hire Me
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-white">
            <button onClick={toggleMenu}>
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/90 backdrop-blur-md rounded-b-xl shadow-md`}
      >
        <div className="flex flex-col space-y-4 px-6 py-6 text-white font-medium">
          <Link to="/" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400 transition">
            <FiHome /> Home
          </Link>
          <Link to="/about" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400 transition">
            <FiUser /> About
          </Link>
          <Link to="/service" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400 transition">
            <FiBriefcase /> Service
          </Link>
          <Link to="/Reach" onClick={toggleMenu} className="flex items-center gap-2 hover:text-blue-400 transition">
            <FiMail /> Reach Me
          </Link>
          <Link
            to="/Book"
            onClick={toggleMenu}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full mt-2 text-center hover:shadow-lg transition"
          >
            <FiStar /> ✨ Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
