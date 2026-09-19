import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: "⌘",
      description: "Core programming & markup",
      skills: [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C",
        "C++",
        "SQL",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frontend",
      icon: "◈",
      description: "Modern web development",
      skills: [
        "React.js",
        "Next.js",
        "Vite",
        "Three.js",
        "Tailwind CSS",
        "Framer Motion",
        "Material UI",
        "React Router",
        "Shadcn UI",
      ],
    },
    {
      title: "Backend",
      icon: "⌁",
      description: "APIs & server-side development",
      skills: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Flask",
        "REST APIs",
        "GraphQL",
        "JWT Authentication",
      ],
    },
    {
      title: "AI / ML",
      icon: "✦",
      description: "Artificial intelligence & ML",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "OpenCV",
        "LangChain",
        "Hugging Face",
        "OpenAI API",
        "Gemini API",
        "Vector Databases",
        "LLMs",
      ],
    },
    {
      title: "Mobile Development",
      icon: "▣",
      description: "Mobile application development",
      skills: [
        "React Native",
        "Flutter",
        "Dart",
        "Android Studio",
      ],
    },
    {
      title: "Databases",
      icon: "◉",
      description: "Data storage & management",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB Atlas",
        "Supabase",
        "Firebase",
        "SQLite",
      ],
    },
    {
      title: "Tools",
      icon: "⚙",
      description: "Development workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "GitHub Actions",
        "Jupyter Notebook",
        "Cursor",
      ],
    },
    {
      title: "Cloud & Deployment",
      icon: "☁",
      description: "Deployment & infrastructure",
      skills: [
        "Vercel",
        "Render",
        "Railway",
        "Docker",
        "Cloudflare",
      ],
    },
    {
      title: "UI / UX",
      icon: "◇",
      description: "Design & user experience",
      skills: [
        "Figma",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#050505] px-6 py-28"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-emerald-500/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Skills
          </p>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Technologies I
            <span className="text-emerald-400"> work with.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-500">
            Technologies, frameworks and tools I've learned and used while
            building projects and improving my development skills.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.06,
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#090d0c] p-6 transition-all duration-500 hover:border-emerald-400/30 hover:bg-[#0b110f]"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              {/* Card Header */}
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10 text-xl text-emerald-400">
                  {group.icon}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-600">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="my-5 h-px bg-white/10" />

              {/* Skill pills */}
              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.04 + skillIndex * 0.025,
                    }}
                    className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/10 hover:text-emerald-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Bottom progress line */}
              <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-emerald-400 transition-all duration-500 group-hover:w-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
                Currently Learning
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Java + Data Structures & Algorithms
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Building strong problem-solving skills for software
                engineering placements.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Java", "DSA", "LeetCode", "Problem Solving"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-gray-300"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;