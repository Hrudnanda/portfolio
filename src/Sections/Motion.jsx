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
  {
    src: me,
    caption: 'AI & Robotics Conference 2024',
  },
  {
    src: me3,
    caption: 'Hackathon Grand Finale',
  },
  {
    src: me5,
    caption: 'DevCon Bootcamp Workshop',
  },
  {
    src: me1,
    caption: 'Cybersecurity Panel Talk',
  },
  {
    src: me4,
    caption: 'Cybersecurity Panel Talk',
  },
  {
    src: me2,
    caption: 'Tech Expo and Demos',
  },
  {
    src: me6,
    caption: 'Tech Expo and Demos',
  },
  {
    src: me7,
    caption: 'Tech Expo and Demos',
  },
  {
    src: me8,
    caption: 'Tech Expo and Demos',
  },
];

const FramedGallery = () => {
  return (
    <div className="w-full px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-3xl p-1 bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transform transition duration-500 hover:scale-105"
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-72 object-cover rounded-2xl border border-white/10"
            />

            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-4 py-5 text-white text-center z-20">
              <h2 className="text-lg font-semibold tracking-wide drop-shadow-lg">
                {img.caption}
              </h2>
            </div>

            {/* Glow border on hover */}
            <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-white/40 transition duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FramedGallery;
