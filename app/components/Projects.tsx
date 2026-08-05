"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projects";

export default function Projects() {
  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-display italic text-6xl md:text-8xl mb-24"
        >
          Selected Work
        </motion.h2>

        <div className="space-y-32">

          {projects.slice(0, 3).map((project, index) => (

            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Image */}

              <div className="overflow-hidden rounded-2xl group relative h-[650px]">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

              </div>

              {/* Content */}

              <div>

                

                

                <h3 className="font-display italic text-5xl md:text-7xl mt-5 leading-none">
                  {project.title}
                </h3>

                <p className="mt-8 text-lg leading-9 text-neutral-600 max-w-xl">
                  {project.subtitle}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full border border-black/15 text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="flex items-center gap-8 mt-12">

                 

                  <Link
                    href={"/projects/"}
                    className="text-lg border-b border-black pb-1 hover:translate-x-2 transition-transform"
                  >
                    View Project →
                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        <div className="mt-24 text-center">

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            View All Projects
          </Link>

        </div>

      </div>
    </section>
  );
}