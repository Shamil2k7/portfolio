"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "919876543210"; // Replace with your WhatsApp number

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
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
      className="fixed bottom-8 right-8 z-[999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl"
    >
      <FaWhatsapp className="text-4xl" />

      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}