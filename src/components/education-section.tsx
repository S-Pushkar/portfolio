"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <motion.section
      layout
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="education-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="education"
          titleId="education-title"
          eyebrow="Background"
          title="Education"
        />
        <div className="grid gap-12 md:grid-cols-2">
          {site.education.map((edu, idx) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
              className="glass-card group relative flex flex-col rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-2xl group-hover:shadow-accent/40">
                <GraduationCap className="h-7 w-7" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight text-foreground">
                {edu.school}
              </h3>
              <p className="mt-3 text-xl font-medium text-accent">{edu.degree}</p>
              <dl className="mt-10 grid gap-6 sm:grid-cols-2">
                {edu.details.map((d) => (
                  <div key={d.label} className="flex flex-col gap-1">
                    <dt className="text-xs font-bold uppercase tracking-wider text-muted">
                      {d.label}
                    </dt>
                    <dd className="text-lg font-semibold text-foreground">
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
