"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/10 to-background px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center bg-card p-10 rounded-2xl shadow-xl max-w-xl border border-border"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Thank You!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Your message has been sent successfully. We’ll be in touch soon.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary text-white rounded-lg text-base font-medium hover:bg-primary/90 transition-all"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
