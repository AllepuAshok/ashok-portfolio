import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00c896]/40 bg-[#0b100f]/95 text-xl font-bold text-[#00c896] shadow-2xl backdrop-blur-xl transition hover:border-[#00c896] hover:bg-[#00c896] hover:text-[#050505]"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;