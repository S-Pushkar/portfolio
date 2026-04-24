"use client";

import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-[5%] top-[10%] h-[50%] w-[50%] rounded-full bg-accent-soft/10 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -100, 0],
          y: [0, 120, -60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] left-[20%] h-[45%] w-[45%] rounded-full bg-blue-600/10 blur-[110px]"
      />
    </div>
  );
}
