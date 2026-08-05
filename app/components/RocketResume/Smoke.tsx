"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  left: Math.random() * 80 - 40,
  delay: Math.random() * 0.4,
  duration: Math.random() * 1.5 + 1.5,
}));

export default function Smoke() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[99998] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            scale: 0.3,
            x: particle.left,
            y: "105vh",
          }}
          animate={{
            opacity: [0, 0.55, 0.25, 0],
            scale: [0.3, 1, 2.2],
            x: [
              particle.left,
              particle.left + (Math.random() * 80 - 40),
              particle.left + (Math.random() * 120 - 60),
            ],
            y: [
              "105vh",
              "65vh",
              "-20vh",
            ],
          }}
          transition={{
            delay: particle.delay,
            duration: particle.duration,
            ease: "easeOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            left: "50%",
            bottom: 0,
          }}
          className="absolute rounded-full bg-white/70 blur-xl"
        />
      ))}

      {/* Extra smoke cloud */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.2,
          y: "100vh",
          x: "-50%",
        }}
        animate={{
          opacity: [0, 0.25, 0],
          scale: [0.2, 3.5],
          y: ["100vh", "70vh"],
        }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute left-1/2 bottom-0 h-32 w-32 rounded-full bg-gray-300/40 blur-3xl"
      />

      {/* Rocket trail */}

      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          opacity: [0.7, 0.3, 0],
          height: ["0px", "100vh"],
        }}
        transition={{
          duration: 1.8,
          ease: "easeOut",
        }}
        className="absolute left-1/2 bottom-0 w-3 -translate-x-1/2 rounded-full bg-gradient-to-t from-orange-400/70 via-gray-300/40 to-transparent blur-md"
      />
    </div>
  );
}