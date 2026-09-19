import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Developer",
  "Java & DSA Learner",
  "AI/ML Enthusiast",
  "Web Developer",
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] px-5 pb-20 pt-32 text-white md:px-10 md:pt-36 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#17231f 1px, transparent 1px), linear-gradient(90deg, #17231f 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Green glow */}
      <div className="pointer-events-none absolute left-[55%] top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c896]/10 blur-[140px]" />

      {/* Extra glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#00c896]/5 blur-[120px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-180px)] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#00c896]/40 bg-[#00c896]/5 px-4 py-2 text-xs font-semibold text-[#00c896]"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#00c896]" />
            Open to Internships & Opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-[4rem] font-black leading-[0.9] tracking-[-0.06em] sm:text-[5rem] md:text-[6rem] lg:text-[6.5rem]">
            Ashok
            <br />
            Allepu
            <span className="text-[#00c896]">.</span>
          </h1>

          {/* Animated role */}
          <div className="mt-8 flex min-h-[42px] flex-wrap items-center gap-2 text-xl font-bold md:text-2xl">
            <span className="text-gray-300">B.Tech CSM Student</span>

            <span className="text-gray-600">•</span>

            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="text-[#00c896]"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-400 md:text-base md:leading-8">
            I build modern web applications, solve problems with Java and DSA,
            and explore AI/ML technologies to turn ideas into useful digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl px-6 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#ffffff",
                color: "#050505",
              }}
            >
              Explore My Work&nbsp; →
            </a>

            <a
              href="https://drive.google.com/file/d/1zKshx7VBiiMkKn1JFq2DL9p7DVeKwdn-/view"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-4 text-sm font-bold transition duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#101512",
                color: "#ffffff",
                border: "1px solid #26352e",
              }}
            >
              View Resume ↗
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              ["10+", "Technologies"],
              ["4+", "Experiences"],
              ["∞", "Learning"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="min-w-[105px] rounded-2xl border border-[#202a28] bg-[#080d0c]/80 px-5 py-4 backdrop-blur-sm"
              >
                <p className="text-xl font-black text-[#00c896]">{number}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-gray-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PROFILE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-[560px] justify-center lg:justify-end"
        >
          {/* Main image glow */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c896]/10 blur-[100px]" />

          {/* Animated ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-[#00c896]/40 border-dashed sm:h-[450px] sm:w-[450px]"
          />

          {/* Profile card */}
          <div className="relative h-[470px] w-[330px] overflow-hidden rounded-[36px] border border-[#00c896]/50 bg-[#080d0c] shadow-[0_0_80px_rgba(0,200,150,0.12)] sm:h-[540px] sm:w-[380px]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]" />

            <img
              src="/profile.jpg.jpeg"
              alt="Ashok Allepu"
              className="h-full w-full object-cover object-top"
            />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent" />

            {/* Developer label */}
            <div className="absolute bottom-6 left-7">
              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#00c896]">
                Developer
              </p>

              <p className="mt-2 text-2xl font-black">
                Ashok Allepu
              </p>
            </div>
          </div>

          {/* Java + DSA card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-5 top-12 rounded-2xl border border-[#202a28] bg-[#0b100f]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-right-16"
          >
            <p className="text-sm font-bold text-white">
              ☕ Java + DSA
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Problem Solving
            </p>
          </motion.div>

          {/* React card */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -left-5 bottom-10 rounded-2xl border border-[#202a28] bg-[#0b100f]/95 px-5 py-4 shadow-2xl backdrop-blur-xl sm:-left-14"
          >
            <p className="text-sm font-bold text-white">
              ⚡ React + Web
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Modern Development
            </p>
          </motion.div>

          {/* AI/ML badge */}
          <motion.div
            animate={{ rotate: [0, 3, -3, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 right-5 rounded-2xl border border-[#00c896]/30 bg-[#0b100f]/95 px-5 py-3 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-xs font-bold text-[#00c896]">
              AI / ML
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-[#00c896] md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}

export default Hero;