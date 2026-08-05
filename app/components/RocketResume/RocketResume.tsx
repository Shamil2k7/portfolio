"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download } from "lucide-react";

import Rocket from "./Rocket";
import Smoke from "./Smoke";
import Explosion from "./Explosion";
import useRocket from "./useRocket";

export default function RocketResume() {
  const { launching, explode, launch } = useRocket();

  return (
    <>
      <motion.button
        onClick={launch}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        className="rounded-full bg-black px-8 py-4 text-white flex items-center gap-3"
      >
        <Download size={18} />
        Download CV
      </motion.button>

      <AnimatePresence>
        {launching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] pointer-events-none"
          >
            <Rocket />
            <Smoke />
            {explode && <Explosion />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}