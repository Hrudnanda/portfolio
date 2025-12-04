// About.jsx
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

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const num = 35;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const create = () => {
      particles = [];
      for (let i = 0; i < num; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          dx: (Math.random() - 0.5) * 1.2,
          dy: (Math.random() - 0.5) * 1.2,
        });
      }
    };
    create();

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
      ctx.strokeStyle = "rgba(232, 121, 249, 0.25)";

      particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < num; j++) {
          const q = particles[j];
          if (Math.hypot(p.x - q.x, p.y - q.y) < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      create();
    });
  }, []);

  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">

      {/* particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
      />

      {/* soft cyan + fuchsia glow */}
      <div className="absolute top-1/2 left-1/2 w-[70rem] h-[70rem] bg-[radial-gradient(circle,rgba(34,211,238,0.25),rgba(255,78,248,0.15),transparent)] blur-[250px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-12">
          Meet Hrudananda Biswal
        </h2>

        <p className="text-gray-300 max-w-4xl mb-20 leading-relaxed">
          A passionate Web Developer who creates futuristic & meaningful digital experiences.
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-24">
          {skills.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="bg-black/60 border border-cyan-400/20 rounded-2xl p-4 flex items-center gap-3 hover:border-fuchsia-400/30 hover:bg-black/80 transition-all"
            >
              <div className="text-cyan-300 text-xl">{s.icon}</div>
              <div className="text-sm text-gray-200">{s.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Experience */}
        <h3 className="text-3xl font-semibold text-cyan-300 mb-10">
          <FaBriefcase className="inline mr-2" /> Experience
        </h3>

        <div className="border-l border-cyan-500/30 pl-6 mb-32">
          {experiences.map((exp, i) => (
            <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative mb-10">
              <span className="absolute -left-2 top-2 w-3 h-3 bg-fuchsia-400 rounded-full shadow-lg"></span>
              <div className="bg-black/70 border border-cyan-400/20 rounded-xl p-6 hover:border-fuchsia-400/30 transition">
                <h4 className="text-xl font-semibold text-cyan-300">{exp.role}</h4>
                <p className="text-gray-400 mb-3">{exp.company} — {exp.duration}</p>
                <ul className="list-disc list-inside text-gray-300 text-sm">
                  {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projects */}
        <h3 className="text-3xl font-semibold text-cyan-300 mb-10">
          <FaProjectDiagram className="inline mr-2" /> Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="border border-cyan-400/20 rounded-3xl p-6 bg-black/70 hover:border-fuchsia-400/40 transition-all shadow-xl"
            >
              <h4 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 mb-3">
                {p.name}
              </h4>
              <p className="text-gray-300 text-sm mb-4">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs rounded-full border border-cyan-400/30 text-cyan-200">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-black font-semibold"
              >
                View Demo <FaExternalLinkAlt className="text-sm" />
              </a>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default About;




