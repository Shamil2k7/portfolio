"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#F8F5EF] px-6 md:px-16 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-serif italic mb-20"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: .9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              ease: [0.22,1,0.36,1]
            }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/profileimage.png"
              alt="Profile"
              className="w-full h-[650px] object-cover hover:scale-105 duration-700"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: .2,
              ease: [0.22,1,0.36,1]
            }}
          >
            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-6">
              Full Stack Developer
            </p>

            <h3 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Crafting digital experiences that feel
              <span className="italic"> effortless.</span>
            </h3>

            <p className="text-gray-600 text-lg leading-9 mb-10">
              I'm a passionate Full Stack Developer from Kerala who enjoys
              building modern, responsive, and visually engaging web
              applications. My focus is creating clean user experiences with
              React, Next.js, Node.js, Express, and MongoDB.
            </p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="h-[1px] bg-black mb-8"
            />

            <div className="grid grid-cols-2 gap-8">

              <div>
                <h4 className="text-5xl font-bold">20+</h4>
                <p className="uppercase text-sm mt-2 tracking-widest">
                  Projects
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-bold">2+</h4>
                <p className="uppercase text-sm mt-2 tracking-widest">
                  Years Learning
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}