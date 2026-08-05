"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111] text-white py-32 px-6"
    >
      {/* Background Text */}

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center font-display italic text-[18vw] whitespace-nowrap pointer-events-none"
      >
        CONTACT
      </motion.h1>

      <div className="relative max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="font-display italic text-5xl md:text-8xl leading-none"
        >
          Let's Build <br /> Something Amazing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-8 text-neutral-400 text-lg max-w-xl"
        >
          Whether you have a startup, portfolio, business website or
          full-stack application, I'd love to hear about it.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-24 mt-24">

          {/* Form */}

          <motion.form
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="space-y-10"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500"
            />

            <input
              type="text"
              placeholder="Project Type"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500"
            />

            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none resize-none placeholder:text-neutral-500"
            />

            <motion.button
              whileHover={{ x: 10 }}
              whileTap={{ scale: .95 }}
              className="flex items-center gap-3 uppercase tracking-[4px] mt-8"
            >
              Send Message
              <ArrowUpRight size={20} />
            </motion.button>

          </motion.form>

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="space-y-12"
          >

            <div>
              <p className="uppercase text-xs tracking-[5px] text-neutral-500">
                Email
              </p>

              <a
                href="mailto:shamil2k7g@gmail.com"
                className="font-display italic text-3xl hover:text-neutral-400 transition"
              >
                shamil2k7g@gmail.com
              </a>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[5px] text-neutral-500">
                GitHub
              </p>

              <a
                href="https://github.com/Shamil2k7"
                target="_blank"
                className="font-display italic text-3xl hover:text-neutral-400 transition"
              >
                github.com/Shamil2k7
              </a>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[5px] text-neutral-500">
                LinkedIn
              </p>

              <a
                href="https://www.linkedin.com/in/shamil-k-575936387/"
                target="_blank" 
                className="font-display italic text-3xl hover:text-neutral-400 transition"
              >
                linkedin.com/in/shamil
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}