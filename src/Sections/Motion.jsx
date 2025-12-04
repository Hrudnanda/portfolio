// Updated FramedGallery.jsx with black background, cyan text, and fuchsia accent objects

import React from 'react';
import me from "../assets/me3.jpg";
import me1 from "../assets/me4.jpg";
import me2 from "../assets/me5.jpg";
import me3 from "../assets/m26.jpg";
import me4 from "../assets/me7.jpg";
import me5 from "../assets/me8.jpg";
import me6 from "../assets/me9.jpg";
import me7 from "../assets/me10.jpg";
import me8 from "../assets/me11.jpg";

const images = [
  { src: me, caption: 'AI & Robotics Conference 2024' },
  { src: me3, caption: 'Hackathon Grand Finale' },
  { src: me5, caption: 'DevCon Bootcamp Workshop' },
  { src: me1, caption: 'Cybersecurity Panel Talk' },
  { src: me4, caption: 'Cybersecurity Panel Talk' },
  { src: me2, caption: 'Tech Expo and Demos' },
  { src: me6, caption: 'Tech Expo and Demos' },
  { src: me7, caption: 'Tech Expo and Demos' },
  { src: me8, caption: 'Tech Expo and Demos' },
];

const FramedGallery = () => {
  return (
    <div className="w-full px-6 py-16 min-h-screen bg-black text-cyan-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl p-1
            bg-black border border-fuchsia-600 shadow-[0_0_20px_rgba(255,0,150,0.3)]
            transition duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,0,150,0.6)]"
          >
            {/* Fuchsia accent glow */}
            <div className="absolute inset-0 rounded-3xl bg-fuchsia-600/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 pointer-events-none" />

            {/* Image */}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-72 object-cover rounded-2xl border border-cyan-400 group-hover:border-fuchsia-400 transition duration-500"
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 
              bg-gradient-to-t from-black via-black/40 to-transparent px-4 py-5 text-center">
              <h2 className="text-lg font-semibold tracking-wide text-white drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">
                {img.caption}
              </h2>
            </div>

            {/* Outer neon border */}
            <div className="absolute inset-0 rounded-3xl border border-fuchsia-500/40 group-hover:border-fuchsia-300 transition duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FramedGallery;
