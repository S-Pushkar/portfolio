"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="education-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="education"
          titleId="education-title"
          eyebrow="Background"
          title="Education"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {site.education.map((edu, idx) => (
            <motion.article
              key={edu.school}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {edu.school}
              </h3>
              <p className="mt-2 text-lg font-medium text-accent-soft">{edu.degree}</p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
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
      </div>
    </section>
  );
}
