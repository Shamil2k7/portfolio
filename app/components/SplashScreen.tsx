"use client";

import { AnimatePresence, motion } from "framer-motion";

interface SplashScreenProps {
  loading: boolean;
}

const name = "SHAMIL".split("");

export default function SplashScreen({ loading }: SplashScreenProps) {
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#111111] flex items-center justify-center"
          exit={{
            y: "-100%",
            transition: {
              duration: 1.3,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Background Text */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute text-[22vw] font-black tracking-tight text-white whitespace-nowrap pointer-events-none"
          >
            PORTFOLIO
          </motion.h1>

          {/* Main Name */}

          <div className="flex overflow-hidden">
            {name.map((letter, index) => (
              <motion.span
                key={index}
                initial={{
                  y: 160,
                  opacity: 0,
                  rotate: 8,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  y: -160,
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-display italic text-white text-7xl md:text-[9rem]"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Loading Line */}

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-1/2 h-[2px] w-52 origin-left -translate-x-1/2 bg-white"
          />

          {/* Expanding Circle */}

          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 12,
              opacity: 0.08,
            }}
            transition={{
              duration: 2.5,
              ease: "easeOut",
            }}
            className="absolute h-24 w-24 rounded-full border border-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}