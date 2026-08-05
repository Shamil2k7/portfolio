"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code,
  ExternalLink,
} from "lucide-react";

import { projects } from "@/app/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[var(--cream)] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <span className="uppercase tracking-[0.3em] text-sm text-neutral-500">
            Portfolio
          </span>

          <h1 className="mt-4 font-display italic text-6xl md:text-8xl lg:text-9xl">
            All Projects
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            A collection of full-stack web applications, business websites,
            dashboards and creative digital experiences built using modern web
            technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="space-y-14">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-sm transition-all duration-500 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="relative overflow-hidden h-[260px] md:h-[420px] bg-neutral-100">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-6 top-6 rounded-full bg-black px-4 py-2 text-sm text-white">
                    {/* {project.id || String(index + 1).padStart(2, "0")} */}
                  </div>
                </div>

                {/* Content */}

                <div className="flex flex-col justify-between p-8 md:p-12">

                  <div>

                    <span className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                      {/* {project.category} */}
                    </span>

                    <h2 className="mt-4 font-display italic text-4xl md:text-6xl transition-transform duration-500 group-hover:translate-x-2">
                      {project.title}
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-neutral-600">
                      {project.subtitle}
                    </p>

                    {/* Tech */}

                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            scale: 1.08,
                            y: -2,
                          }}
                          className="rounded-full border border-black/15 px-4 py-2 text-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}

                  <div className="mt-10 flex flex-wrap gap-4">

                    

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
                    >
                      <Code size={18} />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-black px-6 py-3 transition hover:bg-black hover:text-white"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <h2 className="font-display italic text-5xl md:text-7xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-600">
            I'm always interested in building modern, fast and engaging web
            experiences.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105"
          >
            Let's Talk
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}