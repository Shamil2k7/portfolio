"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code,
  ChevronDown,
  ArrowLeft,
  ArrowRight,
  Search,
  X,
  Layers,
  Sparkles,
} from "lucide-react";
import { projects, Project } from "@/app/data/projects";
import WhatsAppButton from "../components/WhatsAppButton";

type CategoryFilter = "all" | "erp" | "fullstack" | "frontend";

export default function AllProjectsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("all");
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const toggleDetails = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Category match
      let matchesCategory = true;
      if (selectedCategory === "erp") {
        matchesCategory =
          project.slug.includes("erp") ||
          project.title.toLowerCase().includes("erp") ||
          project.title.toLowerCase().includes("pos");
      } else if (selectedCategory === "fullstack") {
        matchesCategory =
          (project.role && project.role.toLowerCase().includes("full stack")) ||
          project.tech.some((t) =>
            ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM"].includes(t)
          );
      } else if (selectedCategory === "frontend") {
        matchesCategory =
          (project.role &&
            (project.role.toLowerCase().includes("frontend") ||
              project.role.toLowerCase().includes("creative"))) ||
          (!project.tech.includes("PostgreSQL") && !project.tech.includes("MongoDB"));
      }

      // Query match
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const titleMatch = project.title.toLowerCase().includes(q);
      const subtitleMatch = project.subtitle.toLowerCase().includes(q);
      const techMatch = project.tech.some((t) => t.toLowerCase().includes(q));
      const roleMatch = project.role?.toLowerCase().includes(q);
      const overviewMatch = project.overview?.toLowerCase().includes(q);

      return matchesCategory && (titleMatch || subtitleMatch || techMatch || roleMatch || overviewMatch);
    });
  }, [searchQuery, selectedCategory]);

  const categoryCounts = useMemo(() => {
    return {
      all: projects.length,
      erp: projects.filter(
        (p) =>
          p.slug.includes("erp") ||
          p.title.toLowerCase().includes("erp") ||
          p.title.toLowerCase().includes("pos")
      ).length,
      fullstack: projects.filter(
        (p) =>
          (p.role && p.role.toLowerCase().includes("full stack")) ||
          p.tech.some((t) =>
            ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM"].includes(t)
          )
      ).length,
      frontend: projects.filter(
        (p) =>
          (p.role &&
            (p.role.toLowerCase().includes("frontend") ||
              p.role.toLowerCase().includes("creative"))) ||
          (!p.tech.includes("PostgreSQL") && !p.tech.includes("MongoDB"))
      ).length,
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--cream)] text-[var(--ink)]">
      {/* Sticky Navigation Bar */}
      <header className="sticky top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--cream)]/85 border-b border-black/10 px-6 md:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <Link
            href="/"
            className="font-display italic text-xl tracking-tight text-neutral-900 hover:opacity-80 transition-opacity"
          >
            Shamil K
          </Link>

          <Link
            href="/#contact"
            className="text-xs sm:text-sm font-medium px-4 py-2 rounded-full border border-black/15 hover:bg-black hover:text-white transition-all"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-12 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono uppercase tracking-widest text-neutral-600 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span>Complete Archive & Portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display italic text-5xl md:text-7xl lg:text-8xl tracking-tight text-neutral-950"
            >
              All Projects & Products
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-neutral-600 max-w-2xl text-base md:text-lg leading-relaxed"
            >
              Explore the complete showcase of enterprise ERP & POS systems, full-stack software applications, e-commerce stores, and interactive web experiences engineered by Shamil K.
            </motion.p>
          </div>

          {/* Search & Filter Controls */}
          <div className="mb-12 space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, tech (React, Node, PostgreSQL...), or keyword..."
                  className="w-full pl-11 pr-10 py-3 rounded-full border border-black/15 bg-white/80 focus:bg-white text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black transition-colors"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Status counter */}
              <div className="text-xs text-neutral-500 font-mono flex items-center gap-1.5 self-end md:self-center">
                <Layers className="w-4 h-4 text-neutral-400" />
                <span>
                  Showing {filteredProjects.length} of {projects.length} projects
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {(
                [
                  { key: "all", label: "All Projects", count: categoryCounts.all },
                  { key: "erp", label: "ERP & POS Systems", count: categoryCounts.erp },
                  { key: "fullstack", label: "Full Stack", count: categoryCounts.fullstack },
                  { key: "frontend", label: "Frontend & UI", count: categoryCounts.frontend },
                ] as const
              ).map((tab) => {
                const isActive = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setSelectedCategory(tab.key)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-black text-white shadow-sm"
                        : "bg-white/70 border border-black/10 text-neutral-700 hover:bg-white hover:text-black"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono ${
                        isActive ? "bg-white/20 text-white" : "bg-black/5 text-neutral-500"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}

              {(searchQuery || selectedCategory !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="text-xs text-neutral-500 hover:text-black underline underline-offset-4 px-2 py-2 transition-colors ml-auto"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-start">
              {filteredProjects.map((project, index) => {
                const isExpanded = expandedSlug === project.slug;

                return (
                  <motion.article
                    key={project.slug}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: Math.min(index * 0.05, 0.4),
                      ease: [0.22, 1, 0.36, 1],
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
                        {project.role && (
                          <div className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mb-2">
                            {project.role}
                          </div>
                        )}

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

                            {(project.duration || project.client) && (
                              <div className="pt-2 border-t border-black/5 flex flex-wrap gap-4 text-xs text-neutral-500">
                                {project.client && (
                                  <div>
                                    <span className="font-semibold text-neutral-700">Client: </span>
                                    {project.client}
                                  </div>
                                )}
                                {project.duration && (
                                  <div>
                                    <span className="font-semibold text-neutral-700">Timeline: </span>
                                    {project.duration}
                                  </div>
                                )}
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
            </div>
          ) : (
            <div className="text-center py-24 px-4 border border-dashed border-black/20 rounded-3xl bg-white/40">
              <Search className="w-10 h-10 mx-auto text-neutral-400 mb-3" />
              <h3 className="text-lg font-semibold text-neutral-800">No projects found</h3>
              <p className="text-sm text-neutral-500 mt-1 max-w-sm mx-auto">
                No projects matched &ldquo;{searchQuery}&rdquo;. Try another search keyword or reset filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-6 px-5 py-2 rounded-full bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-colors"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Bottom Collaboration CTA */}
          <div className="mt-24 rounded-3xl border border-black/10 bg-white p-8 md:p-12 shadow-sm text-center">
            <h3 className="font-display italic text-3xl md:text-5xl text-neutral-900">
              Have a Project or Opportunity in Mind?
            </h3>
            <p className="mt-4 text-neutral-600 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              I am open to full-stack engineering roles, enterprise system development, and contract collaborations. Let&apos;s build something impactful together.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-md"
              >
                <span>Send a Message</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919744844200?text=Hi%20Shamil%2C%20I%20saw%20your%20portfolio%20and%20projects%20and%20would%20like%20to%20connect!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-sm font-medium text-neutral-800 hover:bg-black/5 transition-all"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
