"use client";

import { motion } from "framer-motion";

export function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <motion.div
        animate={{
          x: [0, 160, -90, 0],
          y: [0, -90, 150, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -left-[10%] -top-[10%] h-[60%] w-[60%] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 150, -120, 0],
          scale: [1, 0.75, 1.2, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-[8%] -top-[8%] h-[50%] w-[50%] rounded-full bg-violet-500/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 90, -160, 0],
          y: [0, 180, -110, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[8%] -left-[8%] h-[45%] w-[45%] rounded-full bg-violet-500/20 blur-[110px]"
      />
      <motion.div
        animate={{
          x: [0, -140, 100, 0],
          y: [0, -120, 140, 0],
          scale: [1, 1.3, 0.85, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[8%] -right-[8%] h-[42%] w-[42%] rounded-full bg-accent/20 blur-[105px]"
      />
    </div>
  );
}
