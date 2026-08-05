"use client";

import { motion } from "framer-motion";

export default function Rocket() {
  return (
    <motion.div
      initial={{
        y: "110vh",
        x: "-50%",
        rotate: -8,
        scale: 0.9,
      }}
      animate={{
        y: "-130vh",
        x: "-50%",
        rotate: 5,
        scale: [0.9, 1.05, 1],
      }}
      transition={{
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-1/2 bottom-0 z-[100000]"
    >
      {/* Rocket Flame */}

      <motion.div
        animate={{
          scaleY: [1, 1.6, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 0.15,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-[96px] h-12 w-6 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-yellow-300 via-orange-500 to-red-600 blur-[1px]"
      />

      {/* Outer Glow */}

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
        className="absolute inset-0 rounded-full bg-orange-400 blur-2xl"
      />

      {/* Rocket */}

      <div className="relative flex h-[110px] w-[54px] items-center justify-center">
        {/* Body */}

        <div className="absolute h-[80px] w-[38px] rounded-t-full rounded-b-2xl bg-gradient-to-b from-white via-neutral-200 to-neutral-400 shadow-2xl">
          {/* Window */}

          <div className="absolute left-1/2 top-4 h-8 w-8 -translate-x-1/2 rounded-full border-2 border-sky-300 bg-sky-500 shadow-inner">
            <div className="absolute inset-1 rounded-full bg-sky-200/70" />
          </div>
        </div>

        {/* Nose */}

        <div className="absolute top-0 h-6 w-6 rounded-t-full bg-red-500" />

        {/* Left Wing */}

        <div className="absolute bottom-6 left-[-8px] h-8 w-4 rounded-bl-xl rounded-tl-xl bg-red-500 rotate-[-20deg]" />

        {/* Right Wing */}

        <div className="absolute bottom-6 right-[-8px] h-8 w-4 rounded-br-xl rounded-tr-xl bg-red-500 rotate-[20deg]" />

        {/* Bottom Engine */}

        <div className="absolute bottom-[12px] h-3 w-5 rounded-b-md bg-neutral-700" />
      </div>
    </motion.div>
  );
}