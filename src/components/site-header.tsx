"use client";

import { useState, useEffect } from "react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent-soft"
        >
          {site.name}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-all hover:bg-surface hover:text-foreground active:scale-95"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resumePath}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-soft hover:shadow-accent/40 active:scale-95"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-all lg:hidden active:scale-90"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-surface lg:hidden"
          >
            <nav className="flex flex-col border-t border-border px-4 py-6 space-y-2">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-xl px-4 py-3 text-base font-medium text-muted transition-all hover:bg-background hover:text-foreground active:pl-6"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={site.resumePath}
                download
                className="flex items-center justify-center gap-2 rounded-xl bg-accent py-4 text-base font-bold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-soft active:scale-[0.98]"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
