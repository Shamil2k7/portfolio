"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in your name, email, and message.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/shamil2k7g@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType || "General Inquiry",
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name} (${formData.projectType || "New Inquiry"})`,
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok || result.success === "true" || result.success === true) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        "Could not send automatically. You can email directly to shamil2k7g@gmail.com or contact via WhatsApp."
      );
    }
  };

  const mailtoFallback = `mailto:shamil2k7g@gmail.com?subject=${encodeURIComponent(
    formData.projectType ? `Project: ${formData.projectType}` : "Project Inquiry"
  )}&body=${encodeURIComponent(
    `Hi Shamil,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject: ${formData.projectType}\n\n${formData.message}`
  )}`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#111] text-white py-32 px-6"
    >
      {/* Background Watermark Text */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center font-display italic text-[18vw] whitespace-nowrap pointer-events-none select-none"
      >
        CONTACT
      </motion.span>

      <div className="relative max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-display italic text-5xl md:text-8xl leading-none"
        >
          Let's Build <br /> Something Amazing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-neutral-400 text-lg max-w-xl"
        >
          Whether you have a startup, portfolio, business website or
          full-stack application, I'd love to hear about it.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-24 mt-24">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 text-center flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>

                  <h3 className="font-display italic text-3xl text-white">
                    Message Sent!
                  </h3>

                  <p className="text-neutral-300 text-sm max-w-md leading-relaxed">
                    Thank you for reaching out. Your message has been delivered directly to{" "}
                    <span className="text-white font-medium">shamil2k7g@gmail.com</span>. I will review it and reply as soon as possible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  noValidate
                >
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name *"
                      className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500 text-white focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email Address *"
                      className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500 text-white focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      placeholder="Project Type (e.g. Full-Stack App, Website, ERP)"
                      className="w-full bg-transparent border-b border-white/20 py-4 outline-none placeholder:text-neutral-500 text-white focus:border-white transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project... *"
                      className="w-full bg-transparent border-b border-white/20 py-4 outline-none resize-none placeholder:text-neutral-500 text-white focus:border-white transition-colors"
                    />
                  </div>

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl border border-red-500/40 bg-red-950/20 text-red-300 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <AlertCircle size={16} className="text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                      <a
                        href={mailtoFallback}
                        className="underline text-white font-medium hover:text-red-200 shrink-0"
                      >
                        Send via Mail App
                      </a>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileHover={{ x: status === "loading" ? 0 : 10 }}
                    whileTap={{ scale: status === "loading" ? 1 : 0.95 }}
                    className="flex items-center gap-3 uppercase tracking-[4px] mt-8 text-white hover:text-neutral-300 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <span>Sending to shamil2k7g@gmail.com</span>
                        <Loader2 size={20} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowUpRight size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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
                WhatsApp
              </p>

              <a
                href="https://wa.me/919744844200"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display italic text-3xl hover:text-emerald-400 transition flex items-center gap-3"
              >
                <FaWhatsapp className="text-emerald-500 text-2xl" />
                +91 9744844200
              </a>
            </div>

            <div>
              <p className="uppercase text-xs tracking-[5px] text-neutral-500">
                GitHub
              </p>

              <a
                href="https://github.com/Shamil2k7"
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
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