import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaDatabase,
  FaBriefcase,
  FaProjectDiagram,
  FaExternalLinkAlt,
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

const experiences = [
  {
    company: "Juvenile Technology",
    role: "Java Intern",
    duration: "6 Months",
    details: [
      "Implemented object-oriented concepts like classes, inheritance, and polymorphism.",
      "Enabled book search, issue/return, and fine calculation functionalities.",
      "Used file handling for data storage and retrieval.",
    ],
  },
  {
    company: "DROP Organization",
    role: "Cybersecurity Intern",
    duration: "3 Months",
    details: [
      "Performed vulnerability assessments and ethical hacking simulations.",
      "Improved system resilience through penetration testing tools.",
      "Documented findings to strengthen organizational security posture.",
    ],
  },
  {
    company: "Krishna Graphics",
    role: "Graphic Designer",
    duration: "6 Months",
    details: [
      "Designed digital marketing and branding assets with modern UI trends.",
      "Worked on Adobe and Figma for professional-grade client projects.",
      "Enhanced brand identity through creative design strategy.",
    ],
  },
];

const projects = [
  {
    name: "Sahoo Construction",
    description:
      "A developer social platform for portfolios, networking, and collaboration.",
    tech: ["Next.js", "Tailwind", "MongoDB"],
    demo: "https://devconnect-demo.com",
  },
  {
    name: "Taskly Pro",
    description:
      "A real-time collaboration tool for teams with live sync and task tracking.",
    tech: ["React", "Node.js", "Socket.io"],
    demo: "https://tasklypro-demo.com",
  },
  {
    name: "EcomHaven",
    description:
      "A full-stack eCommerce app with authentication, cart, and admin dashboard.",
    tech: ["React", "Express", "MongoDB"],
    demo: "https://ecomhaven-demo.com",
  },
  {
    name: "Portfolify",
    description:
      "An elegant portfolio generator for developers and designers.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    demo: "https://portfolify-demo.com",
  },
];

const About = () => {
  const canvasRef = useRef(null);

  // Aurora-style particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 35;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2,
        });
      }
    };
    createParticles();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(125, 249, 255, 0.7)";
      ctx.strokeStyle = "rgba(167, 139, 250, 0.4)";
      ctx.lineWidth = 1.2;

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < numParticles; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    };

    draw();
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createParticles();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative z-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a192f] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Aurora Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
      />

      {/* Soft Aurora Glow */}
      <div className="absolute top-1/3 left-1/2 w-[80rem] h-[80rem] bg-gradient-to-r from-[#00ffff] via-[#8b5cf6] to-[#4ade80] opacity-25 rounded-full blur-[280px] -translate-x-1/2 pointer-events-none" />

      {/* Floating Lights */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3,
            }}
            animate={{
              y: [Math.random() * 600, Math.random() * -600],
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-200 bg-clip-text text-transparent mb-12 tracking-wide">
          Meet Hrudananda Biswal
        </h2>

        <p className="text-lg text-gray-300 max-w-4xl mb-20 leading-relaxed">
          A passionate Web Developer who fuses design and logic into meaningful
          digital experiences. With expertise in modern frameworks like React
          and Next.js, I build interfaces that don’t just function — they
          captivate.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-24">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="group bg-[#0f172a]/60 border border-cyan-400/20 rounded-2xl p-4 flex items-center gap-3 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 backdrop-blur-lg shadow-lg hover:shadow-cyan-400/30"
              whileHover={{ scale: 1.07 }}
            >
              <div className="text-cyan-300 text-xl group-hover:rotate-6 transition-transform duration-300">
                {skill.icon}
              </div>
              <div className="text-sm font-medium text-cyan-100">
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <div className="mb-32">
          <h3 className="text-3xl font-semibold text-cyan-300 mb-10 flex items-center gap-2">
            <FaBriefcase /> Experience
          </h3>

          <div className="border-l border-cyan-400/30 pl-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative mb-10"
                whileHover={{ scale: 1.02 }}
              >
                <span className="absolute -left-[10px] top-2 w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50" />
                <div className="bg-[#0f172a]/70 border border-cyan-400/20 rounded-2xl p-6 backdrop-blur-lg hover:border-cyan-300/30 transition duration-300">
                  <h4 className="text-xl font-semibold text-cyan-300">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 mb-3">
                    {exp.company} — {exp.duration}
                  </p>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {exp.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <h3 className="text-3xl font-semibold text-cyan-300 mb-10 flex items-center gap-2">
          <FaProjectDiagram /> Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="relative border border-cyan-400/20 rounded-3xl p-6 shadow-2xl hover:shadow-[0_0_25px_#22d3ee80] transition-all duration-500 group backdrop-blur-lg bg-[#0f172a]/70"
              whileHover={{ scale: 1.05, rotateY: 2 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl" />
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-300 mb-3">
                  {project.name}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-cyan-400/20 to-purple-400/20 text-cyan-100 px-3 py-1 rounded-full text-xs border border-cyan-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)",
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-[#0f172a] bg-gradient-to-r from-cyan-400 via-purple-400 to-teal-300 hover:shadow-[0_0_25px_#22d3ee80] transition-all duration-300"
                >
                  View Demo <FaExternalLinkAlt className="text-sm" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;


