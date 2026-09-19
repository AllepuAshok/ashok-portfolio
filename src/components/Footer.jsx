import { motion } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="border-t border-[#202a28] bg-[#050505] px-6 py-12 md:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-2xl font-black tracking-tight text-white"
            >
              ASHOK<span className="text-[#00c896]">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-500">
              B.Tech CSM Student passionate about Java, DSA, Web Development
              and AI/ML.
            </p>

            <p className="mt-4 text-sm text-[#00c896]">
              &gt; Building. Learning. Growing.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-500 transition duration-300 hover:translate-x-1 hover:text-[#00c896]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Connect
            </h3>

            <div className="flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/AllepuAshok/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#26352e] px-4 py-2 text-sm text-gray-400 transition hover:border-[#00c896] hover:text-[#00c896]"
              >
                GitHub
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/ashok-allepu-839b3735b/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#26352e] px-4 py-2 text-sm text-gray-400 transition hover:border-[#00c896] hover:text-[#00c896]"
              >
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ y: -3 }}
                href="https://leetcode.com/u/ashokallepu/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#26352e] px-4 py-2 text-sm text-gray-400 transition hover:border-[#00c896] hover:text-[#00c896]"
              >
                LeetCode
              </motion.a>
            </div>

            <a
              href="mailto:ashokallepu369@gmail.com"
              className="mt-5 inline-block text-sm text-gray-500 transition hover:text-[#00c896]"
            >
              ashokallepu369@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#202a28] pt-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
          <p>
                     © 2026 Ashok Allepu. All rights reserved.
          </p>

         
        </div>

      </div>
    </footer>
  );
}

export default Footer;