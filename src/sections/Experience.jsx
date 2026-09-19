import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    role: "Internshala Student Partner",
    company: "Internshala",
    duration: "Feb 2026 — Present",
    location: "Hyderabad, Telangana • Remote",
    type: "Student Program",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    description:
      "Developing leadership, communication and networking skills while participating in student engagement and professional activities.",
    skills: ["Leadership", "Communication", "Networking"],
  },
  {
    number: "02",
    role: "Airbnb Host",
    company: "Airbnb",
    duration: "Sep 2025 — Present",
    location: "Hyderabad, Telangana • Remote",
    type: "Professional Experience",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    description:
      "Managing guest interactions and property-related responsibilities while developing customer service, communication and problem-solving skills.",
    skills: ["Customer Service", "Communication", "Management"],
  },
  {
    number: "03",
    role: "Josh Talks",
    company: "Josh Talks",
    duration: "Aug 2025 — Present",
    location: "Telangana • Remote",
    type: "Community Experience",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
    description:
      "Participating in communication and community activities while building confidence in public speaking, networking and professional interaction.",
    skills: ["Public Speaking", "Communication", "Networking"],
  },
  {
    number: "04",
    role: "Assistant Supervisor",
    company: "FOREVER LIVING PRODUCTS",
    duration: "Aug 2023 — Present",
    location: "Hyderabad, Telangana",
    type: "Professional Experience",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    description:
      "Supporting team coordination, marketing activities and online communication while developing leadership and organizational skills.",
    skills: ["Marketing", "Online Marketing", "Team Coordination"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "linear-gradient(#1b2b27 1px, transparent 1px), linear-gradient(90deg, #1b2b27 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[40%] h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#00c896]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            My Journey
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Experience<span className="text-[#00c896]">.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            Experiences that have helped me develop technical, communication,
            leadership and professional skills.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#00c896]/50 to-transparent md:block" />

          <div className="space-y-14 md:space-y-24">
            {experiences.map((experience, index) => {
              const isRight = index % 2 === 0;

              return (
                <div
                  key={experience.number}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-10 z-20 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#050505] bg-[#00c896] shadow-[0_0_20px_rgba(0,200,150,0.5)] md:block" />

                  {/* Card side */}
                  <div
                    className={`w-full md:w-[calc(50%-40px)] ${
                      isRight ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: isRight ? -50 : 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -7 }}
                      className="group overflow-hidden rounded-[28px] border border-[#202a28] bg-[#080d0c] transition duration-300 hover:border-[#00c896]/50"
                    >
                      {/* Image */}
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={experience.image}
                          alt={experience.role}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#080d0c] via-black/20 to-transparent" />

                        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-xs font-black backdrop-blur-md">
                          {experience.number}
                        </div>

                        <div className="absolute right-5 top-5 rounded-full border border-[#00c896]/30 bg-black/60 px-3 py-2 text-[10px] font-semibold text-[#00c896] backdrop-blur-md">
                          {experience.type}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00c896]">
                          {experience.company}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold">
                          {experience.role}
                        </h3>

                        <p className="mt-3 text-xs font-medium text-gray-500">
                          {experience.duration}
                        </p>

                        <p className="mt-1 text-xs text-gray-600">
                          {experience.location}
                        </p>

                        <p className="mt-5 text-sm leading-7 text-gray-500">
                          {experience.description}
                        </p>

                        {/* Skills */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-lg border border-[#202a28] bg-[#0d1312] px-3 py-2 text-[11px] text-gray-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-600">
            Every experience is another opportunity to learn, build and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;