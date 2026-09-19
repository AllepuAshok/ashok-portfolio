import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setVisible(true);

      const target = e.target;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    const hideCursor = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full border border-[#00c896] md:block"
        animate={{
          x: position.x,
          y: position.y,
          width: hovering ? 80 : 52,
          height: hovering ? 80 : 52,
          opacity: visible ? 1 : 0,
          scale: hovering ? 1.05 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 180,
          damping: 22,
          mass: 0.5,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: hovering
            ? "0 0 25px rgba(0, 200, 150, 0.25)"
            : "0 0 15px rgba(0, 200, 150, 0.15)",
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[10000] hidden rounded-full bg-[#00e5ff] md:block"
        animate={{
          x: position.x,
          y: position.y,
          opacity: visible ? 1 : 0,
          width: hovering ? 6 : 8,
          height: hovering ? 6 : 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 12px rgba(0, 229, 255, 0.8)",
        }}
      />
    </>
  );
}

export default CustomCursor;