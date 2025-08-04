"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/constant";
import ThemeToggle from "./ThemeToggle";

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center space-x-4">
      <ThemeToggle />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-accent/50 transition-all duration-200"
          >
            <Menu className="h-5 w-5 transition-transform duration-200" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[350px] border-l border-border/40 backdrop-blur-xl bg-background/95">
          <div className="flex items-center justify-between mb-8">
            <SheetTitle className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent" />
          </div>

          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-accent/50 transition-all duration-200 transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen
                    ? "slideInLeft 0.3s ease-out forwards"
                    : "none",
                }}
              >
                <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <span className="relative z-10 group-hover:font-semibold transition-all duration-200">
                  {item.name}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200" />
              </Link>
            ))}
          </div>

          <div className="absolute bottom-8 left-6 right-6">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
            <div className="flex items-center justify-center">
              <div className="text-xs text-muted-foreground font-medium">
                Swipe right to close
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes slideInLeft {
              from {
                opacity: 0;
                transform: translateX(-20px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </SheetContent>
      </Sheet>
    </div>
  );
}
