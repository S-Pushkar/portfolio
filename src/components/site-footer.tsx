"use client";

import { site } from "@/content/site";
import { Download, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "@/components/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-4">
            <h2 className="font-mono text-2xl font-bold tracking-tight text-foreground">
              {site.name}
            </h2>
            <p className="max-w-xs text-sm text-muted">
              Computer Science student building reliable systems and distributed backends.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-12">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-soft">
                Social
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={site.profiles.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.profiles.github.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.profiles.leetcode.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <LeetcodeIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                    LeetCode
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-soft">
                Navigation
              </h3>
              <ul className="space-y-2">
                {site.nav.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-accent-soft">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={site.resumePath}
                    download
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Resume PDF
                  </a>
                </li>
                <li>
                  <a
                    href="#top"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Back to top
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center sm:text-left">
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved. Built with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
