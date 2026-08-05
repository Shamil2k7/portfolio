"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import RocketResume from "./RocketResume/RocketResume";

function MarqueeRow({
  words,
  outline = false,
  reverse = false,
}: {
  words: string;
  outline?: boolean;
  reverse?: boolean;
}) {
  const item = (
    <span
      className={`font-display italic ${outline ? "text-outline" : "text-[var(--ink)]"
        } text-[12vw] leading-none pr-10 select-none`}
    >
      {words}
    </span>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`marquee-track ${reverse ? "reverse" : ""}`}
    >
      {item}
      {item}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full h-screen min-h-[720px] overflow-hidden pt-28"
    >
      {/* Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2 opacity-90">
        <MarqueeRow words="web Developer · WEB DESIGN · " />
        <MarqueeRow words="SHAMIL K · FULL-STACK DEVELOPER " />
      </div>

      {/* Center Image */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          rotate: -8,
          y: 80,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: 0,
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[280px] md:w-[360px] aspect-[3/4] torn-mask grain shadow-2xl overflow-hidden">
          <Image
            src="/heroimage.png"
            alt="Shamil K"
            fill
            priority
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 0.8,
        }}
        className="absolute bottom-10 left-6 md:left-10 text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]"
      >
        Interactive Designer
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.2,
          duration: 0.8,
        }}
        className="absolute bottom-10 right-6 md:right-10 text-xs tracking-[0.2em] uppercase text-[var(--ink-soft)]"
      >
      <RocketResume />
      </motion.div>
    </section>
  );
}