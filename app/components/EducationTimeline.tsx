"use client";

import { motion } from "framer-motion";

const education = [
  {
  year: "2025 - 2026",
  title: "Full Stack Development (MERN)",
  place: "GTEC Center of Excellence",
  description:
    "Completed an intensive MERN Stack development program covering MongoDB, Express.js, React.js, Node.js, REST APIs, Git, GitHub, responsive web design, and deployment of full-stack applications.",
},
  {
    year: "2022 - 2024",
    title: "Higher Secondary (+2)",
    place: "Computer Science",
    description:
      "Completed higher secondary education with Computer Science, Mathematics, and practical programming fundamentals.",
  },

];

export default function EducationTimeline() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[var(--cream)] py-32"
    >
      {/* Background Text */}
      <h1 className="absolute inset-0 flex items-center justify-center text-[18vw] font-display italic text-black/5 pointer-events-none select-none">
        EDUCATION
      </h1>

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="font-display italic text-5xl md:text-8xl mb-24"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/10 -translate-x-1/2" />

          {education.map((item, index) => {

            const left = index % 2 === 0;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: .4 }}
                transition={{
                  duration: .8,
                  delay: index * .2,
                }}
                className={`relative flex items-center mb-24 ${
                  left ? "justify-start" : "justify-end"
                }`}
              >

                {/* Card */}

                <div className="w-full lg:w-[45%]">

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    transition={{
                      duration: .3,
                    }}
                    className="rounded-3xl border border-black/10 bg-white p-8 shadow-xl"
                  >

                    <span className="text-xs uppercase tracking-[4px] text-neutral-500">
                      {item.year}
                    </span>

                    <h3 className="font-display italic text-4xl mt-4">
                      {item.title}
                    </h3>

                    <h4 className="mt-3 text-lg font-medium">
                      {item.place}
                    </h4>

                    <p className="mt-5 text-neutral-600 leading-8">
                      {item.description}
                    </p>

                  </motion.div>

                </div>

                {/* Dot */}

                <motion.div
                  whileInView={{
                    scale: [0, 1.3, 1],
                  }}
                  transition={{
                    duration: .5,
                  }}
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--clay)] border-[6px] border-[var(--cream)] shadow-xl"
                />

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}