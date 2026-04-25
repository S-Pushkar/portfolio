"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaDatabase } from "react-icons/fa6";
import { MatplotlibIcon } from "@/components/icons/matplotlib-icon";
import { HiOutlineSparkles } from "react-icons/hi2";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import {
  SiApachehadoop,
  SiApachekafka,
  SiApachespark,
  SiCss,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGo,
  SiHtml5,
  SiIntellijidea,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPandas,
  SiPostman,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
  SiVim,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";

const skillIconMap: Record<string, IconType> = {
  Java: FaJava,
  Python: SiPython,
  "C/C++": SiCplusplus,
  Go: SiGo,
  HTML: SiHtml5,
  CSS: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Bash: SiGnubash,
  "React JS": SiReact,
  "Node JS": SiNodedotjs,
  "Express JS": SiExpress,
  "Fast API": SiFastapi,
  "Spring Boot": SiSpringboot,
  "Next JS": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  SQL: FaDatabase,
  NOSQL: SiMongodb,
  REST: TbApi,
  RAG: HiOutlineSparkles,
  Linux: SiLinux,
  Hadoop: SiApachehadoop,
  Kafka: SiApachekafka,
  Spark: SiApachespark,
  "Mongo DB": SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Vim: SiVim,
  "VS Code": VscVscode,
  IntelliJ: SiIntellijidea,
  "Scikit-learn": SiScikitlearn,
  Pandas: SiPandas,
  Matplotlib: MatplotlibIcon as IconType,
  "Lang Chain": SiLangchain,
};

export function SkillsSection() {
  return (
    <motion.section
      layout
      className="border-b border-border px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="skills-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="skills"
          titleId="skills-title"
          eyebrow="Toolkit"
          title="Technical skills"
        />
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {site.skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: groupIdx * 0.1 }}
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                {group.title}
              </h3>
              <ul className="mt-8 flex flex-wrap gap-4">
                {group.items.map((item) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    tabIndex={-1}
                  >
                    <span className="glass-card inline-flex cursor-default items-center gap-2 rounded-full px-5 py-3 text-base font-bold text-foreground transition-colors hover:bg-glass-hover hover:border-accent/40">
                      {(() => {
                        const Icon = skillIconMap[item] ?? HiOutlineSparkles;
                        return (
                          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-white/10">
                            <Icon className="h-4 w-4" />
                          </span>
                        );
                      })()}
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
