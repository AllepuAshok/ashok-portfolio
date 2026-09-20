import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const typingTexts = [
  "Building Better Solutions",
  "Learning Java & DSA",
  "Exploring AI/ML",
  "Creating Modern Web Apps",
];

function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[index];
    let speed = deleting ? 40 : 80;

    if (!deleting && text === current) speed = 1500;

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.substring(0, text.length + 1);
        setText(next);

        if (next === current) setDeleting(true);
      } else {
        const next = current.substring(0, text.length - 1);
        setText(next);

        if (next === "") {
          setDeleting(false);
          setIndex((i) => (i + 1) % typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, index, deleting]);

  return (
    <div className="flex min-h-[42px] items-center font-mono text-xl font-bold md:text-2xl">
      <span className="text-[#00e5b0]">&gt; {text}</span>

      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="ml-1 h-6 w-[3px] bg-[#00e5b0]"
      />
    </div>
  );
}

/* =========================================
   CODE WINDOW
========================================= */

function CodeWindow({ className = "", children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`absolute hidden rounded-lg border border-[#00e5b0]/30 bg-[#020b09]/80 p-4 font-mono text-[11px] leading-5 text-[#00c896] shadow-[0_0_35px_rgba(0,200,150,0.08)] backdrop-blur-md lg:block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   DIGITAL GLOBE
========================================= */

function DigitalGlobe() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 35,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative h-64 w-64"
    >
      <div className="absolute inset-0 rounded-full border border-[#00e5b0]/35" />

      <div className="absolute inset-4 rounded-full border border-[#00e5b0]/20" />

      <div className="absolute inset-10 rounded-full border border-dashed border-[#00e5b0]/25" />

      <div className="absolute left-1/2 top-0 h-full w-24 -translate-x-1/2 rounded-full border border-[#00e5b0]/20" />

      <div className="absolute left-1/2 top-0 h-full w-40 -translate-x-1/2 rounded-full border border-[#00e5b0]/10" />

      <div className="absolute left-0 top-1/2 h-20 w-full -translate-y-1/2 rounded-[50%] border border-[#00e5b0]/20" />

      <div className="absolute left-0 top-[35%] h-24 w-full rounded-[50%] border border-[#00e5b0]/10" />

      <div className="absolute left-[24%] top-[27%] h-2 w-2 rounded-full bg-[#00e5b0] shadow-[0_0_15px_#00e5b0]" />

      <div className="absolute right-[25%] top-[52%] h-2 w-2 rounded-full bg-[#00e5ff] shadow-[0_0_15px_#00e5ff]" />

      <div className="absolute bottom-[25%] left-[42%] h-1.5 w-1.5 rounded-full bg-[#00e5b0]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-20 w-20 rounded-full bg-[#00c896]/10 blur-2xl" />
      </div>
    </motion.div>
  );
}

/* =========================================
   AI NEURAL HEAD
========================================= */

function NeuralHead() {
  return (
    <div className="relative h-[330px] w-[300px]">
      <svg
        viewBox="0 0 300 330"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Head */}
        <path
          d="M115 30
             C175 5 245 40 250 110
             C255 165 225 190 205 215
             C190 232 200 255 178 272
             L130 268
             C125 245 135 230 112 215
             C75 190 60 145 68 100
             C75 65 90 42 115 30Z"
          fill="rgba(0,200,150,0.035)"
          stroke="#00e5b0"
          strokeOpacity=".35"
          strokeWidth="1.5"
          filter="url(#neonGlow)"
        />

        {/* Face direction */}
        <path
          d="M198 90 L230 105 L205 120"
          fill="none"
          stroke="#00e5b0"
          strokeOpacity=".45"
        />

        {/* Neural network */}
        <g stroke="#00e5b0" strokeOpacity=".45" strokeWidth="1">
          <line x1="110" y1="65" x2="165" y2="90" />
          <line x1="165" y1="90" x2="210" y2="105" />
          <line x1="90" y1="115" x2="145" y2="125" />
          <line x1="145" y1="125" x2="205" y2="145" />
          <line x1="80" y1="165" x2="135" y2="170" />
          <line x1="135" y1="170" x2="205" y2="175" />
          <line x1="100" y1="215" x2="150" y2="205" />
          <line x1="150" y1="205" x2="195" y2="225" />
          <line x1="120" y1="250" x2="165" y2="245" />
        </g>

        {/* Nodes */}
        {[
          [110, 65],
          [165, 90],
          [210, 105],
          [90, 115],
          [145, 125],
          [205, 145],
          [80, 165],
          [135, 170],
          [205, 175],
          [100, 215],
          [150, 205],
          [195, 225],
          [120, 250],
          [165, 245],
        ].map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="3"
            fill={i % 3 === 0 ? "#00e5ff" : "#00e5b0"}
            filter="url(#neonGlow)"
          />
        ))}
      </svg>

      <div className="absolute right-0 top-20 font-mono text-[10px] leading-6 tracking-[0.18em] text-[#00e5b0]">
        ARTIFICIAL
        <br />
        INTELLIGENCE
        <br />
        <br />
        MACHINE
        <br />
        LEARNING
        <br />
        <br />
        DATA SCIENCE
        <br />
        <br />
        A BRIGHTER
        <br />
        TOMORROW
      </div>
    </div>
  );
}

/* =========================================
   LAPTOP DECORATION
========================================= */

function Laptop() {
  return (
    <div className="absolute bottom-[-35px] left-[-70px] hidden w-[310px] lg:block">
      <div className="relative h-[150px] rounded-t-xl border-4 border-[#183d36] bg-[#06100e] shadow-[0_0_40px_rgba(0,200,150,.1)]">
        <div className="absolute inset-3 overflow-hidden bg-[#020706] p-4 font-mono text-[10px] leading-5 text-[#00c896]">
          <div className="text-[#00e5ff]">
            import future
          </div>
          <br />
          <div>while (alive) {"{"}</div>
          <div className="pl-4">learn();</div>
          <div className="pl-4">build();</div>
          <div className="pl-4">improve();</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div className="mx-[-25px] h-5 rounded-b-[50%] bg-[#10231f] shadow-xl" />
    </div>
  );
}

/* =========================================
   BOOKS
========================================= */

function Books() {
  return (
    <div className="absolute bottom-[-10px] right-[-70px] hidden w-48 lg:block">
      {[
        "LEARN",
        "BUILD",
        "FAIL",
        "IMPROVE",
        "REPEAT",
      ].map((book, index) => (
        <div
          key={book}
          className="mb-1 rounded-sm border border-[#174238] bg-[#07120f] px-4 py-2 font-mono text-xs tracking-wider text-[#00c896]"
          style={{
            transform: `translateX(${index * 4}px)`,
          }}
        >
          {book}
        </div>
      ))}
    </div>
  );
}

/* =========================================
   MUG
========================================= */

function Mug() {
  return (
    <div className="absolute bottom-[-15px] right-[90px] hidden lg:block">
      <div className="relative h-32 w-28 rounded-b-3xl rounded-t-lg border-2 border-[#153d35] bg-[#07120f] shadow-[0_0_35px_rgba(0,200,150,.12)]">
        <div className="absolute inset-0 flex items-center justify-center text-center font-mono text-sm font-bold leading-5 text-[#00e5b0]">
          GOOD
          <br />
          CODE
          <br />
          BETTER
          <br />
          IDEAS
        </div>

        <div className="absolute -right-10 top-8 h-16 w-12 rounded-r-full border-4 border-l-0 border-[#153d35]" />
      </div>
    </div>
  );
}

/* =========================================
   MAIN HERO
========================================= */

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020706] px-6 pb-20 pt-28 md:px-10">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,200,150,.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,200,150,.035) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Green glow */}
        <div className="absolute left-[-200px] top-[25%] h-[600px] w-[600px] rounded-full bg-[#00c896]/10 blur-[170px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-200px] top-[5%] h-[650px] w-[650px] rounded-full bg-[#00e5ff]/5 blur-[180px]" />

        {/* Background lights */}
        <div className="absolute left-5 top-20 h-48 w-[2px] bg-[#00e5b0]/50 shadow-[0_0_25px_#00e5b0]" />

        <div className="absolute right-5 top-28 h-60 w-[3px] bg-[#00e5b0]/50 shadow-[0_0_30px_#00e5b0]" />

        {/* Scan lines */}
        <motion.div
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-[1px] bg-[#00e5b0]/10"
        />
      </div>

      {/* ================= DECORATIVE CODE ================= */}

     

      {/* System HUD */}
      <CodeWindow className="left-[36%] top-36 w-56">
        <div className="text-[#00e5ff]">
          SYSTEM: ONLINE
        </div>

        <div>
          MODE: <span className="text-white">DEVELOPER</span>
        </div>

        <div>
          FOCUS: <span className="text-[#00e5b0]">AI/ML</span>
        </div>

        <div>STATUS: LEARNING...</div>
      </CodeWindow>

      {/* ================= MAIN ================= */}

      <div className="relative z-20 mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">

        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-30 pt-8"
        >
          <div className="mb-5 font-mono text-lg text-gray-300">
            // Hello, I'm
          </div>

          <h1 className="text-6xl font-black leading-[0.88] tracking-[-0.055em] text-white sm:text-7xl md:text-8xl">
            Ashok
            <br />
            Allepu
            <span className="text-[#00e5b0]">.</span>
          </h1>

          <div className="mt-7 text-xl font-bold text-gray-300 md:text-2xl">
            B.Tech CSM Student
          </div>

          <div className="mt-3">
            <TypingText />
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-gray-400 md:text-lg">
            I build modern web applications, solve problems
            with Java and DSA, and explore AI/ML technologies
            to turn ideas into useful digital experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl px-7 py-4 text-sm font-bold text-[#02100c] transition duration-300 hover:-translate-y-1"
              style={{
                background: "#00e5b0",
                boxShadow: "0 0 35px rgba(0,229,176,.2)",
              }}
            >
              Explore My Work →
            </a>

            <a
              href="https://drive.google.com/file/d/1zKshx7VBiiMkKn1JFq2DL9p7DVeKwdn-/view"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-[#00c896]/40 bg-[#06110e]/80 px-7 py-4 text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#00e5b0]"
            >
              View Resume ↗
            </a>
          </div>

          {/* Stats */}
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#214039] bg-[#04100d]/80 p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-[#00e5b0]">
                10+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                Technologies
              </div>
            </div>

            <div className="rounded-xl border border-[#214039] bg-[#04100d]/80 p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-[#00e5b0]">
                4+
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                Experiences
              </div>
            </div>

            <div className="rounded-xl border border-[#214039] bg-[#04100d]/80 p-4 backdrop-blur-md">
              <div className="text-2xl font-black text-[#00e5b0]">
                ∞
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                Learning
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative min-h-[650px]"
        >

          {/* Globe */}
          <div className="absolute left-[-20px] top-[150px] hidden xl:block">
            <DigitalGlobe />
          </div>

          {/* AI Head */}
          <div className="absolute right-[-40px] top-[-20px] hidden lg:block">
            <NeuralHead />
          </div>

          {/* Main Photo */}
          <div className="absolute left-1/2 top-[40px] z-20 w-[330px] -translate-x-1/2 md:w-[380px]">

            {/* Outer rotating frame */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-12 rounded-[45px] border border-dashed border-[#00e5b0]/50"
            />

            {/* Neon frame */}
            <div className="absolute -inset-5 rounded-[35px] border border-[#00e5b0]/50 shadow-[0_0_45px_rgba(0,229,176,.12)]" />

            {/* Corner lights */}
            <div className="absolute -left-1 -top-1 z-30 h-16 w-16 border-l-2 border-t-2 border-[#00e5b0]" />

            <div className="absolute -right-1 -top-1 z-30 h-16 w-16 border-r-2 border-t-2 border-[#00e5b0]" />

            <div className="absolute -bottom-1 -left-1 z-30 h-16 w-16 border-b-2 border-l-2 border-[#00e5b0]" />

            <div className="absolute -bottom-1 -right-1 z-30 h-16 w-16 border-b-2 border-r-2 border-[#00e5b0]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative overflow-hidden rounded-[25px] border border-[#00e5b0] bg-[#020806] shadow-[0_0_70px_rgba(0,229,176,.2)]"
            >
              <img
                src="/profile.jpg.jpeg"
                alt="Ashok Allepu"
                className="h-[500px] w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#020806] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div className="font-mono text-[10px] tracking-[0.45em] text-[#00e5b0]">
                  DEVELOPER
                </div>

                <div className="mt-2 text-2xl font-black text-white">
                  Ashok Allepu
                </div>
              </div>
            </motion.div>

            {/* AI/ML card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -right-16 top-[80px] z-40 rounded-xl border border-[#00e5b0]/50 bg-[#03100d]/95 px-5 py-4 shadow-[0_0_30px_rgba(0,200,150,.12)] backdrop-blur-xl"
            >
              <div className="font-mono text-sm font-bold text-[#00e5b0]">
                AI / ML
              </div>

              <div className="mt-1 text-[10px] text-gray-500">
                Intelligent Systems
              </div>
            </motion.div>

            {/* React card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -left-20 bottom-[95px] z-40 rounded-xl border border-[#00c896]/40 bg-[#03100d]/95 px-5 py-4 shadow-[0_0_30px_rgba(0,200,150,.1)] backdrop-blur-xl"
            >
              <div className="text-sm font-bold text-white">
                ⚡ React + Web
              </div>

              <div className="mt-1 text-[10px] text-gray-500">
                Modern Development
              </div>
            </motion.div>

            {/* Tech stack */}
            <div className="absolute -right-20 bottom-[-20px] z-40 hidden w-52 rounded-xl border border-[#00c896]/40 bg-[#03100d]/95 p-5 backdrop-blur-xl md:block">

              <div className="mb-4 font-mono text-[10px] tracking-[0.2em] text-[#00e5b0]">
                // TECH STACK
              </div>

              <div className="grid grid-cols-2 gap-y-4 text-xs text-gray-400">
                <span className="text-[#ffdf00]">🐍 Python</span>
                <span className="text-[#ff8a00]">🔥 TensorFlow</span>
                <span>☕ Java</span>
                <span>🗄 SQL</span>
                <span>⚛ React</span>
                <span>🧠 AI/ML</span>
                <span>🟢 Node.js</span>
                <span>&lt;/&gt; DSA</span>
              </div>
            </div>
          </div>

          {/* Laptop */}
          <Laptop />

          {/* Books */}
          <Books />

          {/* Mug */}
          <Mug />

          {/* Quote */}
          <div className="absolute bottom-5 left-1/2 z-30 -translate-x-1/2 text-center font-mono text-xs text-gray-500">
            <div className="text-[#00e5b0]">
              “Turning ideas into
            </div>

            <div className="text-[#00e5b0]">
              intelligent solutions.”
            </div>

            <div className="mt-2 text-[10px] text-gray-600">
              — ASHOK ALLEPU
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div className="absolute bottom-7 left-6 hidden font-mono text-[9px] leading-5 text-[#00c896]/50 md:block">
        &lt; Ashok_Allepu /&gt;
        <br />
        # Developer Portfolio
      </div>

      <div className="absolute bottom-7 right-6 hidden font-mono text-[9px] text-[#00c896]/50 md:block">
        // Creating Impact with Technology
      </div>

      {/* Scroll */}
      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-5 left-1/2 z-40 -translate-x-1/2 text-center"
      >
        <div className="font-mono text-[9px] tracking-[0.4em] text-gray-500">
          SCROLL
        </div>

        <div className="mt-2 text-xl text-[#00e5b0]">
          ↓
        </div>
      </motion.a>

    </section>
  );
}

export default Hero;