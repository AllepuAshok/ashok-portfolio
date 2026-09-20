import { motion } from "framer-motion";

const education = [
  {
    year: "2025 — 2028",
    degree: "B.Tech — Computer Science & Machine Learning",
    college: "Malla Reddy College of Engineering and Technology",
    icon: "🎓",
  },
  {
    year: "2022 — 2025",
    degree: "Diploma — Computer Science & Engineering",
    college: "St. Mary’s Group of Institutions, Hyderabad",
    icon: "💻",
  },
  {
    year: "2022",
    degree: "CBSE — School Education",
    college: "Sri Chaitanya High School",
    icon: "📚",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Java + DSA",
    description:
      "Building strong programming fundamentals and improving problem-solving through Java and Data Structures & Algorithms.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Creating responsive and interactive web applications using modern frontend and backend technologies.",
  },
  {
    number: "03",
    title: "AI / ML",
    description:
      "Exploring Artificial Intelligence and Machine Learning to build useful and intelligent applications.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-6 py-24 md:px-10 md:py-32"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,200,150,0.035) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,200,150,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="absolute left-[-200px] top-[20%] h-[450px] w-[450px] rounded-full bg-[#00c896]/5 blur-[140px]" />

        <div className="absolute right-[-200px] bottom-[10%] h-[450px] w-[450px] rounded-full bg-[#00e5ff]/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-sm tracking-[0.25em] text-[#00c896]">
            // ABOUT_ME.exe
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            About <span className="text-[#00c896]">Me.</span>
          </h2>

          <div className="mt-5 h-[2px] w-20 bg-[#00c896]" />
        </motion.div>

        {/* ABOUT CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl border border-[#202a28] bg-[#080d0c]/80 p-7 backdrop-blur-xl md:p-9">

              <div className="mb-6 flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-[#00c896] shadow-[0_0_15px_#00c896]" />

                <span className="font-mono text-xs tracking-[0.2em] text-[#00c896]">
                  PROFILE_STATUS: ONLINE
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white md:text-3xl">
                I'm Ashok Allepu
              </h3>

              <p className="mt-5 text-base leading-8 text-gray-400">
                I am a B.Tech Computer Science & Machine Learning student
                passionate about software development, problem solving,
                Artificial Intelligence and modern web technologies.
              </p>

              <p className="mt-4 text-base leading-8 text-gray-400">
                Currently, I am focusing on Java and Data Structures &
                Algorithms while continuing to build practical projects
                using web development and AI/ML technologies.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#20332e] bg-[#050b09] p-5 transition duration-300 hover:border-[#00c896]/50">
                  <div className="mb-3 text-2xl">☕</div>

                  <h4 className="font-bold text-white">
                    Java + DSA
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Learning problem solving, algorithms and coding
                    fundamentals.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#20332e] bg-[#050b09] p-5 transition duration-300 hover:border-[#00c896]/50">
                  <div className="mb-3 text-2xl">⚡</div>

                  <h4 className="font-bold text-white">
                    Web Development
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Building responsive and interactive digital
                    experiences.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#20332e] bg-[#050b09] p-5 transition duration-300 hover:border-[#00c896]/50 sm:col-span-2">
                  <div className="mb-3 text-2xl">🧠</div>

                  <h4 className="font-bold text-white">
                    Artificial Intelligence & Machine Learning
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Exploring AI/ML concepts and developing intelligent
                    solutions.
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* RIGHT - FOCUS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-gray-500">
              CURRENT_FOCUS
            </p>

            {focusAreas.map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ x: 6 }}
                className="group rounded-2xl border border-[#202a28] bg-[#080d0c]/80 p-6 backdrop-blur-xl transition duration-300 hover:border-[#00c896]/50"
              >
                <div className="flex gap-5">
                  <span className="font-mono text-sm text-[#00c896]">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* EDUCATION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <div className="mb-10">
            <p className="font-mono text-xs tracking-[0.25em] text-[#00c896]">
              // EDUCATION.log
            </p>

            <h3 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Education
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">

            <div className="absolute bottom-0 left-[20px] top-0 w-px bg-[#00c896]/30 md:left-[30px]" />

            <div className="space-y-8">

              {education.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -20 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="relative pl-14 md:pl-20"
                >

                  {/* Timeline dot */}
                  <div className="absolute left-[13px] top-8 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#00c896] bg-[#050505] shadow-[0_0_15px_rgba(0,200,150,0.6)] md:left-[23px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#00c896]" />
                  </div>

                  {/* Education card */}
                  <div className="rounded-3xl border border-[#202a28] bg-[#080d0c]/90 p-6 backdrop-blur-xl transition duration-300 hover:border-[#00c896]/50 md:p-8">

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

                      {/* Education details */}
                      <div className="flex items-start gap-5">

                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#26352e] bg-[#0b1210] text-2xl">
                          {item.icon}
                        </div>

                        <div>

                          {/* Degree */}
                          <h4 className="text-lg font-bold text-white md:text-xl">
                            {item.degree}
                          </h4>

                          {/* College */}
                          <p className="mt-2 text-sm text-gray-500">
                            {item.college}
                          </p>

                        </div>
                      </div>

                      {/* ONLY YEAR — RIGHT SIDE */}
                      <div className="shrink-0 self-start rounded-full border border-[#00c896]/40 bg-[#06100e] px-5 py-2 font-mono text-xs font-bold text-[#00c896] md:self-center">
                        {item.year}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 grid gap-4 sm:grid-cols-3"
        >

          <div className="rounded-2xl border border-[#202a28] bg-[#080d0c]/80 p-6 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-[#00c896]">
              10+
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Technologies
            </p>
          </div>

          <div className="rounded-2xl border border-[#202a28] bg-[#080d0c]/80 p-6 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-[#00c896]">
              4+
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Experiences
            </p>
          </div>

          <div className="rounded-2xl border border-[#202a28] bg-[#080d0c]/80 p-6 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-[#00c896]">
              ∞
            </div>

            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-500">
              Learning
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;