"use client";

import { useRouter } from "next/navigation";
import { useNews } from "@/hooks/useNews";
import { NewsFilter } from "@/components/news/NewsFilter";
import { NewsList } from "@/components/news/NewsList";

export default function NewsPage() {
  const { posts, sources, isLoading, selectedCategory } = useNews();
  const router = useRouter();

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
        <NewsList posts={posts} isLoading={isLoading} />
      </div>
    </section>
  );
}
