"use client";

import { NewsPost } from "@/types/news";
import { NewsCard } from "./NewsCard";

interface NewsListProps {
  posts: NewsPost[];
  isLoading: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export function NewsList({
  posts,
  isLoading,
  onLoadMore,
  hasMore,
}: NewsListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-muted border-t-primary" />
          <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-4 border-primary/20" />
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          No articles found
        </h3>
        <p className="text-muted-foreground">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <NewsCard key={`${post.url}-${index}`} post={post} index={index} />
        ))}
      </div>

      {hasMore && onLoadMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={onLoadMore}
            className="px-6 py-2 text-sm font-medium text-primary border border-primary 
            rounded-full hover:bg-primary hover:text-white transition cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
