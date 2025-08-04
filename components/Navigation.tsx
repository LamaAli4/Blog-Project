"use client"
import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import { navItems } from "@/lib/constant";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-serif font-bold text-foreground">
              Resonance
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors 
                duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-[2px] 
                after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

            <ThemeToggle />
          </div>

          {/* Mobile nav */}
          <MobileNavigation />
        </div>
      </div>
    </motion.nav>
  );
}
