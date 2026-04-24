"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <motion.section
      layout
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="experience-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="experience"
          titleId="experience-title"
          eyebrow="Work"
          title="Experience"
        />
        <div className="relative space-y-20 before:absolute before:inset-0 before:ml-5 before:h-full before:w-px before:bg-gradient-to-b before:from-accent before:to-transparent sm:before:ml-8">
          {site.experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
              className="relative pl-14 sm:pl-24"
            >
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-2xl shadow-accent/40 ring-4 ring-background sm:h-16 sm:w-16 sm:ring-[12px]">
                <Briefcase className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <motion.article 
                whileHover={{ scale: 1.01, y: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="glass-card group rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight text-foreground">
                      {job.company}
                    </h3>
                    <p className="mt-1 text-xl font-bold text-accent">{job.role}</p>
                  </div>
                  <div className="flex flex-col text-sm font-bold uppercase tracking-[0.2em] text-muted md:text-right">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul className="mt-10 space-y-6">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-4 text-muted">
                      <div className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-accent/40" />
                      <p className="text-lg leading-relaxed">{h}</p>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
