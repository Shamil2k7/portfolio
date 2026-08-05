"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 60 }, (_, i) => {
  const angle = (i / 60) * Math.PI * 2;
  const distance = 80 + Math.random() * 120;

  return {
    id: i,
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size: 4 + Math.random() * 8,
    duration: 0.8 + Math.random() * 0.6,
    color: [
      "#ffffff",
      "#facc15",
      "#fb923c",
      "#ef4444",
      "#fde68a",
    ][Math.floor(Math.random() * 5)],
  };
});

export default function Explosion() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100001] overflow-hidden">
      {/* Main Flash */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 1,
        }}
        animate={{
          scale: [0, 2.5, 4],
          opacity: [1, 0.7, 0],
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="absolute left-1/2 top-[18%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300 blur-2xl"
      />

      {/* Inner Flash */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 1,
        }}
        animate={{
          scale: [0, 1.8, 3],
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.4,
        }}
        className="absolute left-1/2 top-[18%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-lg"
      />

      {/* Explosion Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: particle.duration,
            ease: "easeOut",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            background: particle.color,
          }}
          className="absolute left-1/2 top-[18%] rounded-full shadow-lg"
        />
      ))}

      {/* Spark Ring */}
      <motion.div
        initial={{
          scale: 0,
          opacity: 0.8,
        }}
        animate={{
          scale: [0, 5],
          opacity: [0.8, 0],
        }}
        transition={{
          duration: 0.8,
        }}
        className="absolute left-1/2 top-[18%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-300"
      />

      {/* Glow */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 1,
        }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [1, 7],
        }}
        transition={{
          duration: 1,
        }}
        className="absolute left-1/2 top-[18%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 blur-3xl"
      />
    </div>
  );
}