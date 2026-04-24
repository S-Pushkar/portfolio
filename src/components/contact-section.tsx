"use client";

import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Phone, Mail, Globe, Code, Trophy } from "lucide-react";

export function ContactSection() {
  return (
    <section
      className="px-4 py-24 sm:px-6 lg:px-8"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <SectionHeading
          id="contact"
          titleId="contact-title"
          eyebrow="Hello"
          title="Contact"
          description="Reach out for collaborations, internships, or a quick chat about systems and ML."
        />
        <address className="not-italic">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8 transition-all hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Phone
                </p>
                <a
                  href={site.contact.phoneHref}
                  className="mt-2 block text-xl font-bold text-foreground transition-colors hover:text-accent-soft"
                >
                  {site.contact.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8 transition-all hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Email
                </p>
                <a
                  href={site.contact.emailHref}
                  className="mt-2 block break-all text-xl font-bold text-foreground transition-colors hover:text-accent-soft"
                >
                  {site.contact.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-8 transition-all hover:border-accent/40 sm:col-span-2 lg:col-span-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Code className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted">
                  Profiles
                </p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href={site.profiles.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2 text-sm font-bold text-foreground transition-all hover:bg-accent hover:text-white"
                  >
                    <Globe className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={site.profiles.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2 text-sm font-bold text-foreground transition-all hover:bg-accent hover:text-white"
                  >
                    <Code className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href={site.profiles.leetcode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-background px-4 py-2 text-sm font-bold text-foreground transition-all hover:bg-accent hover:text-white"
                  >
                    <Trophy className="h-4 w-4" />
                    LeetCode
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </address>
      </div>
    </section>
  );
}
