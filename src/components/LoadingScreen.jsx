import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setFinished(true);
          }, 400);

          return 100;
        }

        return prev + 2;
      });
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (finished) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: finished ? 0 : 1 }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505]"
    >
      <div className="w-[280px] text-center font-mono">

        {/* Logo */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black tracking-[0.25em] text-white"
        >
          ASHOK<span className="text-[#00c896]">.</span>
        </motion.h1>

        {/* Line */}
        <div className="my-5 h-[1px] w-full bg-[#26352e]">
          <motion.div
            className="h-full bg-[#00c896]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Initializing */}
        <div className="flex items-center justify-between text-xs tracking-[0.2em]">
          <span className="text-gray-500">
            INITIALIZING
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              ...
            </motion.span>
          </span>

          <span className="font-bold text-[#00c896]">
            {progress}%
          </span>
        </div>

        {/* Small status */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-[10px] tracking-[0.3em] text-gray-700"
        >
          DEVELOPER PORTFOLIO
        </motion.p>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;