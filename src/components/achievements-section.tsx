"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

export function AchievementsSection() {
  return (
    <motion.section
      layout
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="achievements-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="achievements"
          titleId="achievements-title"
          eyebrow="Highlights"
          title="Achievements"
        />
        <div className="grid gap-12 sm:grid-cols-2">
          {site.achievements.map((a, idx) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
              className="glass-card flex list-none gap-8 rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-2xl group-hover:shadow-accent/40">
                <Trophy className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  {a.title}
                </h3>
                <p className="mt-4 text-xl leading-relaxed text-muted">
                  {a.description}
                </p>
              </div>
            </motion.li>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
