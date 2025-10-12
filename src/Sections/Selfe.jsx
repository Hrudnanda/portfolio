import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaCamera, FaUpload, FaSyncAlt } from "react-icons/fa";
import me8 from "../assets/girl2.jpg";
import me9 from "../assets/girl4.jpg";
import me10 from "../assets/girl5.jpg";
import ran from "../assets/me12.jpg";
import ran1 from "../assets/me13.jpg";
import ran2 from "../assets/me14.jpg";

const photos = [
  me8,
  ran2,
  me9,
  me10,
  ran1,
  ran,
];

const Selfe = () => {
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [imageSrc, setImageSrc] = useState(null);
  const [cameraOn, setCameraOn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cuteName, setCuteName] = useState("");
  const [careerTip, setCareerTip] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const cuteNames = [
    "Snuggle Muffin", "Bubble Bean", "Twinkle Toes", "Cuddle Bug", "Sunny Buns", "Sugar Plum",
    "Honey Drop", "Lil Star", "Choco Chip", "Giggle Bear", "Pudding Pop", "Peachy Pie"
  ];

  const careerTips = [
    "Your code is cleaner than a hospital floor. 🧼💻",
    "You have a designer’s touch — pure magic. ✨🎨",
    "You write like a poet with a purpose. ✍️📚",
    "Your marketing instincts are razor sharp. 📈🧠",
    "You manage chaos like a zen master. 🧘‍♀️📋",
    "You debug like Sherlock Holmes in dark mode. 🕵️‍♂️🔍",
    "You’re the kind of developer that makes the internet smile. 😊🌐",
    "You're not just creative — you're revolutionary. 🚀",
    "Your presentations should be in a museum. 🖼️📽️",
    "You make learning look easy. 🎓✨",
    "Your leadership could rally a nation. 🏛️👑"
  ];

  useEffect(() => {
    const storedSelfie = localStorage.getItem("selfieImage");
    if (storedSelfie) setImageSrc(storedSelfie);
  }, []);

  const generateCuteStuff = () => {
    const randomName = cuteNames[Math.floor(Math.random() * cuteNames.length)];
    const randomTip = careerTips[Math.floor(Math.random() * careerTips.length)];
    setCuteName(randomName);
    setCareerTip(randomTip);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLoading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        localStorage.setItem("selfieImage", reader.result);
        generateCuteStuff();
        setLoading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileUploadClick = () => fileInputRef.current.click();

  const handleOpenCamera = async () => {
    setCameraOn(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      console.error("Webcam error:", err);
    }
  };

  const handleTakeSelfie = () => {
    setLoading(true);
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const dataUrl = canvas.toDataURL("image/png");
    setImageSrc(dataUrl);
    localStorage.setItem("selfieImage", dataUrl);
    generateCuteStuff();

    setCameraOn(false);
    stopCamera();
    setTimeout(() => setLoading(false), 500);
  };

  const stopCamera = () => {
    const video = videoRef.current;
    if (video?.srcObject) {
      video.srcObject.getTracks().forEach((track) => track.stop());
    }
  };

  const handleRetake = () => {
    setImageSrc(null);
    setCuteName("");
    setCareerTip("");
    localStorage.removeItem("selfieImage");
    setCameraOn(false);
    setShowSuccess(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">

      {/* Decorative blurred background dots */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full opacity-20 blur-3xl top-10 left-10 pointer-events-none animate-pulse" />
      <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 blur-3xl bottom-10 right-10 pointer-events-none animate-pulse" />

      {/* Selfie Upload Section */}
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center space-y-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"
        >
          Upload or Snap Your Selfie
        </motion.h1>

        <p className="text-sm text-purple-300 italic">Celebrate your brilliance with a snap ✨📸</p>

        {/* Buttons */}
        {!cameraOn && !imageSrc && (
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <button
              onClick={handleFileUploadClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105"
            >
              <FaUpload /> Upload from Gallery
            </button>

            <button
              onClick={handleOpenCamera}
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500 text-white py-3 px-5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105"
            >
              <FaCamera /> Take a Selfie
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
          </motion.div>
        )}

        {/* Camera View */}
        {cameraOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full rounded-lg shadow-md border-4 border-purple-400"
            />
            <button
              onClick={handleTakeSelfie}
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded-full transition shadow-lg hover:scale-105"
            >
              📸 Capture
            </button>
          </motion.div>
        )}

        <canvas ref={canvasRef} className="hidden" />

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center mt-6">
            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Image Display */}
        {imageSrc && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden border-4 border-pink-500 shadow-lg"
          >
            <img src={imageSrc} alt="Your Selfie" className="w-full h-auto object-cover" />
          </motion.div>
        )}

        {/* Cute Output */}
        {cuteName && !loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-2 mt-4"
          >
            <p className="text-xl font-bold text-pink-300">
              Looking adorable, <span className="text-white">{cuteName}</span>! 💖
            </p>
            <p className="text-sm italic text-blue-300">💼 {careerTip}</p>
          </motion.div>
        )}

        {/* Buttons Row: Retake & Submit */}
        {imageSrc && !loading && (
          <div className="mt-6 flex justify-center gap-4">
            <motion.button
              onClick={handleRetake}
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              <FaSyncAlt /> Retake
            </motion.button>

            <motion.button
              onClick={() => {
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
              }}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-semibold transition-all hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-4 text-green-400 font-semibold text-center"
          >
            Image uploaded successfully!
          </motion.p>
        )}
      </div>

      {/* GET FRAMED HERE Section */}
      <section className="mt-20 w-full max-w-6xl px-4 text-center z-10 relative">
        <h2 className="text-5xl font-extrabold text-white mb-12 tracking-wide drop-shadow-lg">
          AND GET FRAMED HERE
        </h2>

        <div className="relative w-full flex flex-wrap justify-center gap-10">
          {photos.map((src, i) => {
            // Generate unique floating animation parameters per photo
            const floatY = 10 + Math.random() * 15; // vertical float distance (10-25 px)
            const rotateDeg = (Math.random() - 0.5) * 20; // rotate ±10 deg
            const duration = 3 + Math.random() * 2; // animation duration 3-5 sec
            const delay = Math.random() * 2; // delay 0-2 sec
            const xOffset = (Math.random() - 0.5) * 30; // horizontal offset ±15 px
            const yOffset = (Math.random() - 0.5) * 30; // vertical offset ±15 px

            return (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden shadow-lg border-4 border-white cursor-default"
                style={{
                  width: 150,
                  height: 150,
                  rotate: rotateDeg,
                  x: xOffset,
                  y: yOffset,
                }}
                animate={{
                  y: [0, -floatY, 0],
                  rotate: [rotateDeg, rotateDeg + 5, rotateDeg],
                }}
                transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <img
                  src={src}
                  alt={`Framed ${i + 1}`}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Selfe;

