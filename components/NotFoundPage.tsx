"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, easeInOut } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFoundPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Page Not Found | Resonance";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: easeInOut,
      },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-20 w-4 h-4 bg-primary/20 rounded-full"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute top-40 right-32 w-6 h-6 bg-secondary/20 rotate-45"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
        className="absolute bottom-32 left-40 w-3 h-3 bg-accent/20 rounded-full"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Main 404 illustration */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative">
            <motion.h1
              className="text-8xl sm:text-9xl font-bold text-primary/10 select-none"
              animate={{
                textShadow: [
                  "0 0 20px rgba(var(--primary), 0.1)",
                  "0 0 40px rgba(var(--primary), 0.2)",
                  "0 0 20px rgba(var(--primary), 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              404
            </motion.h1>
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/20">
                <Compass
                  className="w-12 h-12 sm:w-16 sm:h-16 text-primary animate-spin"
                  style={{ animationDuration: "8s" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-2">
            The page you&apos;re looking for seems to have wandered off into the
            digital void.
          </p>
          <p className="text-muted-foreground text-base">
            Don&apos;t worry, even the best explorers sometimes take a wrong
            turn.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => router.push("/")}
            className="group min-w-[160px]"
            size="lg"
          >
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Go Home
          </Button>

          <Button
            onClick={() => router.back()}
            variant="outline"
            className="group min-w-[160px]"
            size="lg"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Button>
        </motion.div>

        {/* Additional helpful links */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-muted-foreground/10"
        >
          <p className="text-sm text-muted-foreground mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-2 justify-center ">
            {[
              { label: "Home", path: "/" },
              { label: "Articles", path: "/news" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((link, index) => (
              <motion.button
                key={link.path}
                onClick={() => router.push(link.path)}
                className="text-sm text-primary hover:text-primary/80 hover:underline transition-colors px-2 py-1 rounded cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {link.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/10 to-transparent pointer-events-none" />
    </section>
  );
}
