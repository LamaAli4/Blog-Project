"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-background border-t border-border/50 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm text-muted-foreground mb-4">
          © {new Date().getFullYear()} Resonance. All rights reserved.
        </p>

        <div className="flex justify-center space-x-6 text-muted-foreground text-sm">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/news"
            className="hover:text-foreground transition-colors"
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
