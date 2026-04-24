"use client";

import { site } from "@/content/site";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border px-4 pb-24 pt-20 sm:px-6 sm:pt-32 lg:px-8"
      aria-labelledby="hero-heading"
    >
      {/* Background Glows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full blur-[120px]"
        style={{ background: "var(--glow)" }}
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-[100px]"
        style={{ background: "var(--glow)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-accent-soft">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight text-foreground sm:text-7xl lg:text-8xl"
        >
          {site.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-8 py-4 text-base font-bold text-white shadow-xl shadow-accent/25 transition-all hover:bg-accent-soft hover:shadow-accent/40 active:scale-95"
          >
            View projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl border border-border bg-surface px-8 py-4 text-base font-bold text-foreground transition-all hover:bg-surface-hover active:scale-95"
          >
            Get in touch
          </a>
          <a
            href={site.resumePath}
            download
            className="group inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-accent-soft transition-all hover:text-white active:scale-95"
          >
            <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
