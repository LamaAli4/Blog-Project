"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Filter, X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface NewsFilterProps {
  sources: string[];
  selectedCategory: string | null;
  onClearFilter: () => void;
}

export function NewsFilter({
  sources,
  selectedCategory,
  onClearFilter,
}: NewsFilterProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(true);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftScroll(scrollLeft > 10);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      containerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, [sources]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 shadow-lg shadow-primary/5"
        >
          <div className="relative">
            <Filter className="h-4 w-4" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="h-3 w-3 text-primary/60" />
            </motion.div>
          </div>
          Latest News Coverage
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            All News Articles
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Stay informed with the latest breaking news and stories from trusted
          sources worldwide. Filter by your preferred news outlets.
        </motion.p>
      </div>

      <div className="relative group">
        {showLeftScroll && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border hover:bg-accent transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          ref={containerRef}
          className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide scroll-smooth px-1"
          style={{ scrollBehavior: "smooth" }}
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/news")}
            className={`flex-shrink-0 px-5 py-2.5 rounded-full border-2 font-medium transition-all duration-300 whitespace-nowrap ${
              !selectedCategory
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 hover:bg-primary/90"
                : "bg-background text-muted-foreground border-border hover:bg-accent hover:border-primary/50"
            }`}
          >
            All Sources
          </motion.button>

          {sources.map((source) => (
            <motion.button
              key={source}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() =>
                router.push(`/news?category=${encodeURIComponent(source)}`)
              }
              className={`flex-shrink-0 px-5 py-2.5 rounded-full border-2 font-medium transition-all duration-300 whitespace-nowrap ${
                selectedCategory?.toLowerCase() === source.toLowerCase()
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 hover:bg-primary/90"
                  : "bg-background text-muted-foreground border-border hover:bg-accent hover:border-primary/50"
              }`}
            >
              {source}
            </motion.button>
          ))}
        </div>

        {showRightScroll && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-border hover:bg-accent transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex justify-center mt-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <span className="text-sm font-medium">
                Filtered by: {selectedCategory}
              </span>
              <button
                onClick={onClearFilter}
                className="p-1 hover:bg-primary/20 rounded-full transition-colors"
                aria-label="Clear filter"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
