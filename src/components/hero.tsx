"use client";

import { site } from "@/content/site";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20,
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] flex-col justify-center px-4 pb-24 pt-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={springTransition}
        >
          <p className="inline-block rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="mt-8 max-w-5xl text-6xl font-extrabold tracking-[-0.03em] text-foreground sm:text-8xl lg:text-9xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="mt-10 max-w-2xl text-xl leading-relaxed text-muted sm:text-2xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.3 }}
          className="mt-16 flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-accent/25 transition-colors hover:bg-accent/90"
          >
            View projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
          
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            href="#contact"
            className="glass-card inline-flex items-center justify-center rounded-full px-10 py-5 text-lg font-bold text-foreground"
          >
            Get in touch
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
            href={site.resumePath}
            download
            className="group inline-flex items-center justify-center gap-2 px-8 py-5 text-lg font-bold text-accent transition-colors hover:text-accent-soft"
          >
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
