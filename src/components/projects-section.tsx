"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { HiOutlineSparkles } from "react-icons/hi2";
import { skillIconMap } from "@/components/icons/skill-icon-map";

export function ProjectsSection() {
  return (
    <motion.section
      layout
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="projects-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="projects"
          titleId="projects-title"
          eyebrow="Builds"
          title="Projects"
        />
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project, idx) => (
            <Link
              href={project.href}
              key={project.name}
              target="_blank"
              className="block h-full"
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02, y: -3 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.1 }}
                className="glass-card group flex h-full flex-col rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
              >
                <div className="mb-10 flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white group-hover:shadow-2xl group-hover:shadow-accent/40">
                    <Code2 className="h-7 w-7" />
                  </div>
                  <div className="flex gap-4 text-muted transition-colors group-hover:text-accent">
                    <ExternalLink className="h-6 w-6 cursor-pointer hover:scale-110" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {project.name}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.split(",").map((tech) => {
                    const label = tech.trim();
                    const Icon = skillIconMap[label] ?? HiOutlineSparkles;

                    return (
                    <li key={`${project.name}-${label}`}>
                      <span className="glass-card inline-flex max-w-full items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent transition-colors hover:border-accent/40 hover:bg-glass-hover sm:px-4 sm:text-xs">
                        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-white/10">
                          <Icon className="h-2.5 w-2.5" />
                        </span>
                        {label}
                      </span>
                    </li>
                    );
                  })}
                </ul>
                <ul className="mt-10 flex-1 space-y-5">
                  {project.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-base leading-relaxed text-muted">
                      <div className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/40" />
                      <p>{b}</p>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
