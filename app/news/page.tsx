"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NewsFilter } from "@/components/news/NewsFilter";
import { NewsList } from "@/components/news/NewsList";
import { useNews } from "@/hooks/useNews";

function NewsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const [visibleCount, setVisibleCount] = useState(6);
  const { posts, sources, isLoading } = useNews(selectedCategory);

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

export default function NewsPage() {
  return (
    <Suspense
      fallback={<div className="p-10 text-center">Loading News...</div>}
    >
      <NewsContent />
    </Suspense>
  );
}
