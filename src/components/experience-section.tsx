"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="experience-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="experience"
          titleId="experience-title"
          eyebrow="Work"
          title="Experience"
        />
        <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-accent before:to-border sm:before:ml-8">
          {site.experience.map((job, idx) => (
            <motion.div
              key={`${job.company}-${job.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-12 sm:pl-20"
            >
              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white ring-8 ring-background sm:h-16 sm:w-16 sm:ring-[12px]">
                <Briefcase className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <article className="rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-lg font-bold text-accent-soft">{job.role}</p>
                  </div>
                  <div className="flex flex-col text-sm font-bold uppercase tracking-wider text-muted md:text-right">
                    <span>{job.period}</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <ul className="mt-8 list-none space-y-4">
                  {job.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-4 text-muted">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="text-base leading-relaxed">{h}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
