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
        "sticky top-0 z-50 w-full transition-all duration-500 py-8 transform-gpu",
        scrolled && !isOpen && "bg-black/20 backdrop-blur-xl"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <a
          href="#top"
          className="text-2xl font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {site.name}
        </a>

        {/* Desktop Navigation */}
        <nav 
          className="hidden items-center gap-1 lg:flex" 
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full px-4 py-2 text-sm font-bold text-muted transition-all hover:bg-glass hover:text-foreground"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href={site.resumePath}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white shadow-2xl shadow-accent/20 transition-all hover:bg-accent/90"
          >
            <Download className="h-4 w-4" />
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-2xl border border-glass-border bg-glass text-foreground transition-all lg:hidden hover:bg-glass-hover"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
              transition={{ duration: 0.15, ease: "circOut" }}
              className="flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute left-0 right-0 top-0 z-50 flex h-screen items-start justify-center p-6 pt-24 lg:hidden">
            {/* Backdrop to close menu when clicking outside */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 backdrop-blur-[8px]"
            />
            
            <motion.nav
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative flex w-full max-w-sm flex-col space-y-6 rounded-[48px] border border-white/20 bg-black/40 p-8 shadow-[0_32px_64px_rgba(0,0,0,0.6)] backdrop-blur-3xl"
            >
              <div className="flex flex-col space-y-2">
                {site.nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between rounded-3xl px-6 py-4 text-xl font-bold text-white/70 transition-all hover:bg-white/5 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-all group-hover:scale-[2] group-hover:opacity-100" />
                  </a>
                ))}
              </div>
              
              <div className="h-px w-full bg-white/5" />

              <a
                href={site.resumePath}
                download
                className="flex items-center justify-center gap-3 rounded-full bg-accent px-8 py-5 text-xl font-bold text-white shadow-2xl shadow-accent/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="h-6 w-6" />
                Resume
              </a>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
