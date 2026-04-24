"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <section
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="achievements-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="achievements"
          titleId="achievements-title"
          eyebrow="Highlights"
          title="Achievements"
        />
        <div className="grid gap-8 sm:grid-cols-2">
          {site.achievements.map((a, idx) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex list-none gap-6 rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-lg leading-relaxed text-muted">
                  {a.description}
                </p>
              </div>
            </motion.li>
          ))}
        </div>
      </div>
    </section>
  );
}
