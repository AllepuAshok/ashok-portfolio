import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Weather Report App",
    category: "Web Application",
    description:
      "A weather application that displays real-time weather information using API integration and a clean responsive interface.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "REST API", "JSON", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Student Management System",
    category: "Academic Project",
    description:
      "A database-driven application designed to manage student information with structured records and CRUD functionality.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "SQLite", "CRUD", "Database"],
  },
  {
    number: "03",
    title: "AI Powered Task Manager",
    category: "AI / Web Application",
    description:
      "An intelligent task management concept designed to organize tasks and explore AI-powered productivity features.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "AI", "Flask", "SQLite"],
  },
  {
    number: "04",
    title: "Quick Delivery App",
    category: "Mobile Application",
    description:
      "A quick-commerce application concept focused on product discovery, ordering and a smooth mobile user experience.",
    image:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "Kivy", "Firebase", "Maps"],
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(#1b2b27 1px, transparent 1px), linear-gradient(90deg, #1b2b27 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute right-[-150px] top-40 h-[400px] w-[400px] rounded-full bg-[#00c896]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            My Work
          </p>

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-5xl font-black tracking-tight md:text-7xl">
              Selected
              <br />
              <span className="text-gray-500">Projects.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-gray-500 md:text-base">
              A collection of projects where I explore software development,
              web technologies, databases, AI and problem solving.
            </p>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-[28px] border border-[#202a28] bg-[#080d0c] transition duration-300 hover:border-[#00c896]/50"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080d0c] via-transparent to-black/20" />

                {/* Number */}
                <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/60 text-sm font-black backdrop-blur-md">
                  {project.number}
                </div>

                {/* Category */}
                <div className="absolute right-5 top-5 rounded-full border border-[#00c896]/30 bg-black/60 px-4 py-2 text-xs font-semibold text-[#00c896] backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold transition duration-300 group-hover:text-[#00c896]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-[#202a28] bg-[#0d1312] px-3 py-2 text-xs font-medium text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-[#202a28] pt-5">
                  <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    Project {project.number}
                  </span>

                  <span className="text-sm font-bold text-[#00c896] transition group-hover:translate-x-1">
                    Explore ↗
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-600">
            More projects coming as I continue learning and building.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;