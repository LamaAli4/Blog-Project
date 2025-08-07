"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <div className="text-center mb-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative inline-block"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary/20
           to-primary/10 rounded-full blur-2xl transform scale-150"
        ></div>
        <h1
          className="text-5xl sm:text-7xl font-bold mb-6 font-serif 
          relative bg-gradient-to-r from-foreground via-foreground to-primary
          bg-clip-text text-transparent"
        >
          About Resonance
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
      >
        Resonance is a modern, elegant news blog that curates top stories from
        around the world. From cutting-edge technology to global affairs, we
        bring clarity and creativity to every article we feature.
      </motion.p>
    </div>
  );
}
