"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { site } from "@/content/site";

type ActiveSectionContextValue = {
  activeSectionId: string | null;
  isScrolled: boolean;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null,
);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = useMemo(
    () => site.nav.map((item) => item.href.replace(/^#/, "")),
    [],
  );

  const updateScrolled = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      updateScrolled();
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-120px 0px -50% 0px",
        threshold: 0,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", updateScrolled);
      observer.disconnect();
    };
  }, [sectionIds, updateScrolled]);

  const value = useMemo(
    () => ({ activeSectionId, isScrolled }),
    [activeSectionId, isScrolled],
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection(): ActiveSectionContextValue {
  const ctx = useContext(ActiveSectionContext);
  if (!ctx) {
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider",
    );
  }
  return ctx;
}
