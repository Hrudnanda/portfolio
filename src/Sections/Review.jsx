import React, { useState } from "react";
import { motion } from "framer-motion";
import me8 from "../assets/girl1.jpg";
import me9 from "../assets/girl3.jpg";

// Sample reviews
const sampleProfiles = [
  {
    id: 1,
    name: "Nikita Nayak",
    photo: me8,
    review: "The way u implemented that features was really good",
    rating: 5,
  },
  {
    id: 2,
    name: "Mark Stevens",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    review: "smooth and scalable.",
    rating: 4,
  },
  {
    id: 3,
    name: "Samridhi pandit",
    photo: me9,
    review: "Great user experience and user interface!",
    rating: 5,
  },
];

const Review = () => {
  const [reviewText, setReviewText] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewsList, setReviewsList] = useState(sampleProfiles);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim() || !userName.trim() || rating === 0) return;

    const newReview = {
      id: "user-review",
      name: userName.trim(),
      photo: "https://randomuser.me/api/portraits/lego/1.jpg",
      review: reviewText.trim(),
      rating,
    };

    setReviewsList((prev) => {
      const withoutUserReview = prev.filter((r) => r.id !== "user-review");
      return [newReview, ...withoutUserReview];
    });

    setReviewText("");
    setUserName("");
    setRating(0);
  };

  const renderStars = (value, setValue = null) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (setValue ? hoveredRating || value : value);
      stars.push(
        <span
          key={i}
          onClick={() => setValue && setValue(i)}
          onMouseEnter={() => setValue && setHoveredRating(i)}
          onMouseLeave={() => setValue && setHoveredRating(0)}
          className={`cursor-pointer text-2xl transition-colors ${
            isFilled ? "text-fuchsia-500" : "text-gray-600"
          }`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="min-h-screen bg-black text-cyan-400 px-6 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide drop-shadow-lg">
        GIVE A COMPLIMENT OR REVIEW
      </h1>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-[#111] backdrop-blur-lg rounded-3xl p-6 mb-16 shadow-lg space-y-4 border border-fuchsia-500/30"
      >
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="w-full p-3 rounded-lg text-cyan-400 bg-[#222] placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 text-lg"
          required
        />

        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your compliment or review..."
          className="w-full p-4 rounded-lg text-cyan-400 bg-[#222] placeholder-cyan-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-fuchsia-500 text-lg resize-none"
          rows={4}
          maxLength={300}
          required
        />

        {/* Star Rating Selector */}
        <div className="flex items-center space-x-2">
          <label className="text-lg font-semibold text-cyan-400">Rating:</label>
          <div>{renderStars(rating, setRating)}</div>
        </div>

        <button
          type="submit"
          className="mt-2 bg-fuchsia-500 hover:bg-fuchsia-600 transition-colors text-black font-semibold py-3 px-6 rounded-full w-full shadow-lg hover:scale-105"
        >
          Submit Review
        </button>
      </form>

      {/* Review Cards */}
      <div className="w-full max-w-5xl flex flex-col gap-10">
        {reviewsList.map(({ id, name, photo, review, rating }) => {
          const floatX = (Math.random() - 0.5) * 20;
          const floatY = (Math.random() - 0.5) * 20;
          const rotate = (Math.random() - 0.5) * 4;
          const delay = Math.random() * 2;
          const duration = 6 + Math.random() * 3;

          return (
            <motion.div
              key={id}
              className="flex items-center gap-8 bg-[#111] backdrop-blur-lg rounded-3xl p-6 shadow-lg border border-fuchsia-500/30"
              animate={{
                y: [0, floatY, 0],
                x: [0, floatX, 0],
                rotate: [0, rotate, 0],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <img
                src={photo}
                alt={name}
                className="w-24 h-24 rounded-full object-cover border-4 border-fuchsia-500 shadow-lg flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">{name}</h3>
                <p className="text-lg italic text-fuchsia-400 mb-2">"{review}"</p>
                <div className="text-fuchsia-500 text-xl">{renderStars(rating)}</div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Review;


