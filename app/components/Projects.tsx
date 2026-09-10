"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Sparkles, ChevronDown } from "lucide-react";
import { projects } from "@/app/data/projects";

type FilterType = "all" | "ai";

const FILTER_TABS: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "AI", value: "ai" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.type === "ai");

  const getCount = (type: FilterType) => {
    if (type === "all") return projects.length;
    return projects.filter((p) => p.type === "ai").length;
  };

  const toggleDetails = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section id="projects" className="py-28 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs md:text-sm uppercase tracking-[0.25em] text-neutral-500 font-semibold"
            >
              Selected Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display italic text-5xl md:text-7xl lg:text-8xl mt-2 tracking-tight"
            >
              Selected Work
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-neutral-600 max-w-md text-base md:text-lg leading-relaxed"
          >
            Explore my work across web applications and AI-driven platforms.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12 pb-4 border-b border-black/10"
        >
          {FILTER_TABS.map((tab) => {
            const count = getCount(tab.value);
            const isActive = activeFilter === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-black text-white shadow-md"
                    : "bg-neutral-100/80 text-neutral-700 hover:bg-neutral-200/80 hover:text-black border border-transparent"
                }`}
              >
                {tab.value === "ai" && (
                  <Sparkles size={14} className={isActive ? "text-yellow-300" : "text-neutral-500"} />
                )}
                <span>{tab.label}</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-black/5 text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedSlug === project.slug;

              return (
                <motion.article
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    layout: { duration: 0.4 },
                  }}
                  className="group rounded-3xl border border-black/10 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Type Badge in Project Details - ONLY for AI */}
                    {project.type === "ai" && (
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/90 text-white text-xs font-semibold backdrop-blur-md shadow-md border border-white/20">
                          <Sparkles size={12} className="text-yellow-400" />
                          AI
                        </span>
                      </div>
                    )}

                    {project.year && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="px-3 py-1.5 rounded-full bg-black/60 text-white/90 text-xs font-mono backdrop-blur-md">
                          {project.year}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-2">
                        {project.type === "ai" ? (
                          <span className="text-black font-bold flex items-center gap-1">
                            <Sparkles size={11} className="text-yellow-500" /> AI
                          </span>
                        ) : (
                          <span />
                        )}
                        {project.role && <span>{project.role}</span>}
                      </div>

                      <h3 className="font-display italic text-2xl sm:text-3xl text-neutral-900 group-hover:text-black transition-colors leading-tight">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-neutral-600 text-sm leading-relaxed line-clamp-2">
                        {project.subtitle}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full border border-black/10 bg-neutral-50 text-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="px-2.5 py-1 text-xs rounded-full border border-black/5 bg-neutral-100 text-neutral-500">
                            +{project.tech.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Expandable Project Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden mt-6 pt-5 border-t border-black/10 text-sm space-y-4"
                        >
                          {project.overview && (
                            <div>
                              <h4 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider mb-1">
                                Overview
                              </h4>
                              <p className="text-neutral-600 leading-relaxed text-xs sm:text-sm">
                                {project.overview}
                              </p>
                            </div>
                          )}

                          {project.features && project.features.length > 0 && (
                            <div>
                              <h4 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider mb-2">
                                Key Highlights
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                {project.features.slice(0, 6).map((feat, i) => (
                                  <li
                                    key={i}
                                    className="text-xs text-neutral-600 flex items-start gap-1.5"
                                  >
                                    <span className="text-neutral-400">•</span>
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Card Actions */}
                    <div className="mt-6 pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => toggleDetails(project.slug)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 hover:text-black transition-colors cursor-pointer"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-black/20 text-xs font-medium text-neutral-800 hover:bg-black hover:text-white transition-all"
                            title="View Source Code"
                          >
                            <Code size={14} />
                            Code
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-medium hover:bg-neutral-800 hover:scale-105 transition-all shadow-sm"
                            title="Open Live Preview"
                          >
                            <span>Live</span>
                            <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center text-neutral-500">
            <p className="text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}