"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "919744844200";
  const defaultMessage = encodeURIComponent("Hi Shamil, I saw your portfolio and would like to discuss a project!");

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Shamil on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        scale: {
          duration: 0.5,
        },
        opacity: {
          duration: 0.5,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
        rotate: 8,
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="fixed bottom-8 right-8 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] transition-colors"
      title="Chat on WhatsApp (+91 9744844200)"
    >
      <FaWhatsapp className="text-4xl" />

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}