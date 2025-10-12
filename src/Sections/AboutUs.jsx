// About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaDatabase,
} from "react-icons/fa";

const skills = [
  { name: "JavaScript", icon: <FaCode /> },
  { name: "TypeScript", icon: <FaCode /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Next.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <FaLaptopCode /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Framer Motion", icon: <FaLaptopCode /> },
  { name: "Git & GitHub", icon: <FaCode /> },
  { name: "REST APIs", icon: <FaCode /> },
  { name: "Figma", icon: <FaCode /> },
];

const projects = [
  {
    name: "DevConnect",
    description:
      "A social platform for developers to share portfolios and connect with each other.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
  },
  {
    name: "Taskly Pro",
    description:
      "A real-time task manager and collaboration tool for remote teams.",
    tech: ["React", "Node.js", "Socket.io"],
  },
  {
    name: "EcomHaven",
    description:
      "A fully responsive e-commerce website with user authentication and cart system.",
    tech: ["React", "Express", "MongoDB"],
  },
  {
    name: "Portfolify",
    description:
      "A beautiful portfolio builder for developers and designers.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white py-24 px-6 md:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[60rem] h-[60rem] bg-blue-500 opacity-20 rounded-full blur-[200px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold inline-block text-blue-400 relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who is Hrudananda Biswal?
            <span className="block h-1 w-24 bg-blue-500 mt-2 rounded-lg" />
          </motion.h2>
        </div>

        {/* Bio */}
        <motion.p
          className="text-lg text-gray-300 mb-14 leading-relaxed max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hrudananda Biswal is a forward-thinking web developer with over 3 years of hands-on experience
          in building high-performance web applications. He blends aesthetic UI design with robust backend logic to create impactful digital products.
          Constantly evolving, he embraces modern frameworks and tools to deliver clean, scalable, and user-centric solutions.
        </motion.p>

        {/* Skills */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md text-white p-4 rounded-xl shadow-md flex items-center gap-3 hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="text-blue-400 text-xl">{skill.icon}</div>
              <div className="text-sm font-medium">{skill.name}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">🧠 Experience</h3>
          <p className="text-gray-300 text-lg">
            3+ years of experience building scalable web apps using modern technologies.
            Hrudananda has collaborated with startups, worked on freelance projects,
            and contributed to open-source tools in the JavaScript ecosystem.
          </p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-10">🚀 Projects</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                {/* Animated Glow Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl z-0" />

                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    🚀 {project.name}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-100 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
