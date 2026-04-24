"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let raf: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const updatePosition = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (raf) return;
      raf = requestAnimationFrame(() => {
        setMousePosition({ x: lastX, y: lastY });
        raf = null;
      });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow halo */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -80,
          y: -80,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      >
        <div className="h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      </motion.div>

      {/* Inner glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -40,
          y: -40,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.3,
        }}
      >
        <div className="h-20 w-20 rounded-full bg-accent/30 blur-2xl" />
      </motion.div>

      {/* Core glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] mix-blend-screen"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          x: -12,
          y: -12,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.2,
        }}
      >
        <div className="h-6 w-6 rounded-full bg-white/40 blur-md" />
      </motion.div>
    </>
  );
}
