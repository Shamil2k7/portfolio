"use client";

import { motion } from "framer-motion";

const commands = [
  {
    command: "whoami",
    output: [
      "Shamil K",
      "Full Stack Developer (MERN)",
    ],
  },
  {
    command: "stack",
    output: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    command: "tools",
    output: [
      "Git",
      "GitHub",
      "Tailwind CSS",
      "Bootstrap",
      "REST API",
      "JWT",
    ],
  },
  {
    command: "status",
    output: [
      "Available for Freelance",
      "Open to Full-Time",
      "Always Learning",
    ],
  },
];

export default function Terminal() {
  return (
    <section className="py-32 px-6 bg-[#111] text-white">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display italic text-6xl mb-20"
        >
          Terminal
        </motion.h2>

        <div className="rounded-3xl overflow-hidden border border-white/10">

          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-[#1c1c1c]">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <span className="ml-4 text-sm text-neutral-400">
              shamil@portfolio
            </span>
          </div>

          <div className="p-8 font-mono text-lg space-y-10">

            {commands.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                }}
              >
                <p className="text-green-400">
                  $ {item.command}
                </p>

                <div className="mt-3 space-y-2">
                  {item.output.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.1,
                      }}
                      className="text-neutral-300"
                    >
                      ✓ {line}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            ))}

            <div className="flex">
              <span className="text-green-400">$</span>

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                }}
                className="ml-2 w-3 h-6 bg-white"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}