"use client";

import { ActiveSectionProvider } from "@/context/active-section-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ActiveSectionProvider>{children}</ActiveSectionProvider>;
}
