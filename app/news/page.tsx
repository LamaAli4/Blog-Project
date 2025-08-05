"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNews } from "@/hooks/useNews";
import { NewsFilter } from "@/components/news/NewsFilter";
import { NewsList } from "@/components/news/NewsList";

export default function NewsPage() {
    const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(6);
  const { posts, sources, isLoading, selectedCategory } = useNews();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const displayedPosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const clearFilter = () => {
    router.push("/news");
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background/95 to-muted/20">
      <div className="max-w-7xl mx-auto">
        <NewsFilter
          sources={sources}
          selectedCategory={selectedCategory}
          onClearFilter={clearFilter}
        />
        <NewsList
          posts={displayedPosts}
          isLoading={isLoading}
          onLoadMore={handleLoadMore}
          hasMore={hasMore}
        />
      </div>
    </section>
  );
}
