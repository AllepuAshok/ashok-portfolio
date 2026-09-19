import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 180) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#202a28] bg-[#080d0c]/90 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-lg font-black tracking-tight text-white transition hover:text-[#00c896]"
          >
            ASHOK<span className="text-[#00c896]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const sectionName = link.href.replace("#", "");
              const isActive = active === sectionName;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative rounded-xl px-4 py-2 text-sm font-medium transition duration-300"
                  style={{
                    color: isActive ? "#00c896" : "#9ca3af",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute inset-0 -z-10 rounded-xl bg-[#00c896]/10"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {link.name}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-dot"
                      className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#00c896]"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Let's Talk */}
          <a
            href="#contact"
            className="hidden rounded-xl px-5 py-2.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 md:block"
            style={{
              backgroundColor: "#00c896",
              color: "#050505",
            }}
          >
            Let's Talk ↗
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#26352e] bg-[#0d1312] text-lg text-white md:hidden"
          >
            {open ? "×" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 border-t border-[#202a28] pt-3">
                <div className="flex flex-col gap-1">
                  {links.map((link) => {
                    const sectionName = link.href.replace("#", "");
                    const isActive = active === sectionName;

                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={closeMenu}
                        className="rounded-xl px-4 py-3 text-sm font-medium transition"
                        style={{
                          backgroundColor: isActive
                            ? "rgba(0, 200, 150, 0.08)"
                            : "transparent",
                          color: isActive ? "#00c896" : "#9ca3af",
                        }}
                      >
                        <span className="flex items-center justify-between">
                          {link.name}

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-[#00c896]" />
                          )}
                        </span>
                      </a>
                    );
                  })}

                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="mt-2 rounded-xl px-4 py-3 text-center text-sm font-bold"
                    style={{
                      backgroundColor: "#00c896",
                      color: "#050505",
                    }}
                  >
                    Let's Talk ↗
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;