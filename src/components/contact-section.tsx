"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, Code, Trophy } from "lucide-react";

export function ContactSection() {
  return (
    <motion.section
      layout
      className="px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <motion.div layout className="mx-auto max-w-6xl space-y-24">
        <SectionHeading
          id="contact"
          titleId="contact-title"
          eyebrow="Hello"
          title="Contact"
          description="Reach out for collaborations, internships, or a quick chat about systems and ML."
        />
        <address className="not-italic">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass-card flex flex-col gap-6 rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                <Phone className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Phone
                </p>
                <a
                  href={site.contact.phoneHref}
                  className="mt-3 block text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                >
                  {site.contact.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
              className="glass-card flex flex-col gap-6 rounded-[32px] p-10 transition-colors hover:bg-glass-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Email
                </p>
                <a
                  href={site.contact.emailHref}
                  className="mt-3 block break-all text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
                >
                  {site.contact.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02, y: -2 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              className="glass-card flex flex-col gap-6 rounded-[32px] p-10 transition-colors hover:bg-glass-hover sm:col-span-2 lg:col-span-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-all duration-500 group-hover:bg-accent group-hover:text-white">
                <Code className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                  Profiles
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={site.profiles.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent/10 px-6 py-3 text-base font-bold text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <Globe className="h-5 w-5" />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={site.profiles.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent/10 px-6 py-3 text-base font-bold text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <Code className="h-5 w-5" />
                    GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={site.profiles.leetcode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-accent/10 px-6 py-3 text-base font-bold text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <Trophy className="h-5 w-5" />
                    LeetCode
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </address>
      </motion.div>
    </motion.section>
  );
}
