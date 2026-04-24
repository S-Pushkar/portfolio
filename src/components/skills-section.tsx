"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";

export function SkillsSection() {
  return (
    <section
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="skills"
          titleId="skills-title"
          eyebrow="Toolkit"
          title="Technical skills"
        />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {site.skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent-soft">
                {group.title}
              </h3>
              <ul className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="inline-flex cursor-default rounded-xl border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface-hover">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
