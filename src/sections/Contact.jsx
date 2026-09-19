import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#050505] px-5 py-28 text-white md:px-10 lg:px-16"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#1b2b27 1px, transparent 1px), linear-gradient(90deg, #1b2b27 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Green glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c896]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00c896]">
            Get In Touch
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            Let's build something
            <br />
            <span className="text-[#00c896]">great together.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            I'm open to internships, projects, collaborations and
            opportunities where I can learn, contribute and grow.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-14 max-w-4xl rounded-[30px] border border-[#1d2926] bg-[#080d0c] p-7 md:p-10"
        >

          {/* Email */}
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#202a28] bg-[#0d1312] p-6 md:flex-row">

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#00c896]/30 bg-[#00c896]/5 text-xl text-[#00c896]">
                ✉
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-sm font-semibold text-white md:text-base">
                  ashokallepu369@gmail.com
                </p>

                <p className="mt-1 text-sm font-semibold text-white md:text-base">
                  +91 9989768149
                </p>
              </div>

            </div>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashokallepu369@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-6 py-3 text-sm font-bold transition duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: "#00c896",
                color: "#050505",
              }}
            >
              Send Email ↗
            </a>

          </div>

          {/* Location */}
          <div className="mt-5 flex items-center gap-5 rounded-2xl border border-[#202a28] bg-[#0d1312] p-6">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#202a28] text-xl">
              📍
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Location
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Hyderabad, India
              </p>
            </div>

          </div>

          {/* Social Links */}
          <div className="mt-8">

            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">
              Connect with me
            </p>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

              {/* GitHub */}
              <a
                href="https://github.com/AllepuAshok/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00c896]/50"
              >
                <div className="text-lg font-bold group-hover:text-[#00c896]">
                  GitHub ↗
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Projects & Code
                </p>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ashok-allepu-839b3735b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00c896]/50"
              >
                <div className="text-lg font-bold group-hover:text-[#00c896]">
                  LinkedIn ↗
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  Professional Profile
                </p>
              </a>

              {/* LeetCode */}
              <a
                href="https://leetcode.com/u/ashokallepu/"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00c896]/50"
              >
                <div className="text-lg font-bold group-hover:text-[#00c896]">
                  LeetCode ↗
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  DSA Practice
                </p>
              </a>

              {/* Resume */}
              <a
                href="https://drive.google.com/file/d/1zKshx7VBiiMkKn1JFq2DL9p7DVeKwdn-/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#202a28] bg-[#0d1312] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00c896]/50"
              >
                <div className="text-lg font-bold group-hover:text-[#00c896]">
                  Resume ↗
                </div>

                <p className="mt-1 text-xs text-gray-500">
                  View Resume
                </p>
              </a>

            </div>
          </div>

        </motion.div>

        {/* Footer */}
        <div className="mt-20 border-t border-[#1d2926] pt-8">

          <div className="flex flex-col justify-between gap-5 text-sm text-gray-600 md:flex-row md:items-center">

            <div>
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-gray-400">
                Ashok Allepu
              </span>
              . All rights reserved.
            </div>

            <div className="flex items-center gap-2">
              Designed & Built with
              <span className="text-[#00c896]">♥</span>
              using React
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;