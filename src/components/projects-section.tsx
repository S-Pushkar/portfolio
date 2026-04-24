"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

export function ProjectsSection() {
  return (
    <section
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="projects"
          titleId="projects-title"
          eyebrow="Builds"
          title="Projects"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, idx) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col rounded-3xl border border-border bg-surface p-8 shadow-sm transition-all hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Code2 className="h-6 w-6" />
                </div>
                <div className="flex gap-4 text-muted transition-colors group-hover:text-accent-soft">
                  <ExternalLink className="h-5 w-5 cursor-pointer hover:scale-110" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground">
                {project.name}
              </h3>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider text-accent-soft">
                {project.stack}
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {project.bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                    <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <p>{b}</p>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
