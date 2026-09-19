import { motion } from "framer-motion";

const education = [
  {
    year: "2025 — 2028",
    degree: "B.Tech — Computer Science & Machine Learning",
    college: "Malla Reddy College of Engineering and Technology",
    result: "CGPA: 7.55",
    icon: "🎓",
  },
  {
    year: "2022 — 2025",
    degree: "Diploma — Computer Science & Engineering",
    college: "St. Mary’s Group of Institutions, Hyderabad",
    result: "CGPA: 7.53",
    icon: "💻",
  },
  {
    year: "2022",
    degree: "CBSE — School Education",
    college: "Sri Chaitanya High School",
    result: "Percentage: 73.8%",
    icon: "📚",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#1b2b27 1px, transparent 1px), linear-gradient(90deg, #1b2b27 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= ABOUT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            About Me
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            Building ideas into{" "}
            <span className="text-[#00c896]">digital experiences.</span>
          </h2>
        </motion.div>

        {/* About Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">

          {/* Main About Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[30px] border border-[#1d2926] bg-[#080d0c] p-8 md:p-10"
          >
            <p className="text-lg leading-8 text-gray-400">
              I'm{" "}
              <span className="font-semibold text-white">
                Ashok Allepu
              </span>
              , a B.Tech Computer Science & Machine Learning student and
              aspiring software developer.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              I enjoy building modern web applications, learning Java and DSA,
              exploring Artificial Intelligence and Machine Learning, and
              solving practical problems through technology.
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              My goal is to continuously improve my development skills and
              create useful, scalable and user-friendly digital products.
            </p>

            {/* Focus Areas */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition hover:border-[#00c896]/50">
                <div className="text-2xl">☕</div>

                <h3 className="mt-4 font-bold text-white">
                  Java + DSA
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Problem solving and coding practice.
                </p>
              </div>

              <div className="rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition hover:border-[#00c896]/50">
                <div className="text-2xl">🌐</div>

                <h3 className="mt-4 font-bold text-white">
                  Web Development
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Modern frontend and backend applications.
                </p>
              </div>

              <div className="rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition hover:border-[#00c896]/50">
                <div className="text-2xl">🤖</div>

                <h3 className="mt-4 font-bold text-white">
                  AI / ML
                </h3>

                <p className="mt-2 text-xs leading-5 text-gray-500">
                  Exploring intelligent applications.
                </p>
              </div>

            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1"
          >

            <div className="rounded-[25px] border border-[#1d2926] bg-[#080d0c] p-7">
              <p className="text-4xl font-black text-[#00c896]">
                10+
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Technologies
              </p>
            </div>

            <div className="rounded-[25px] border border-[#1d2926] bg-[#080d0c] p-7">
              <p className="text-4xl font-black text-[#00c896]">
                4+
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Professional Experiences
              </p>
            </div>

            <div className="rounded-[25px] border border-[#1d2926] bg-[#080d0c] p-7">
              <p className="text-4xl font-black text-[#00c896]">
                ∞
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Learning & Building
              </p>
            </div>

          </motion.div>
        </div>

        {/* ================= EDUCATION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            Education
          </p>

          <h2 className="text-4xl font-black md:text-5xl">
            My <span className="text-[#00c896]">Education.</span>
          </h2>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative mt-14">

          {/* Center Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#00c896] via-[#00c896]/40 to-transparent md:block" />

          <div className="space-y-8">

            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative md:pl-16"
              >

                {/* Timeline Dot */}
                <div className="absolute left-[11px] top-8 hidden h-[19px] w-[19px] rounded-full border-4 border-[#050505] bg-[#00c896] shadow-[0_0_20px_rgba(0,200,150,0.5)] md:block" />

                {/* Card */}
                <div className="group rounded-[26px] border border-[#1d2926] bg-[#080d0c] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#00c896]/50 md:p-8">

                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div className="flex gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#202a28] bg-[#0d1312] text-2xl">
                        {item.icon}
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00c896]">
                          {item.year}
                        </p>

                        <h3 className="mt-2 text-lg font-bold text-white md:text-xl">
                          {item.degree}
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                          {item.college}
                        </p>
                      </div>

                    </div>

                    <div className="rounded-full border border-[#00c896]/30 bg-[#00c896]/5 px-4 py-2 text-sm font-semibold text-[#00c896]">
                      {item.result}
                    </div>

                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;