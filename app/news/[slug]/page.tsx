"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { NewsPost } from "@/types/news";
import { ArrowLeft } from "lucide-react";

export default function NewsDetailsPage() {
  const router = useRouter();
  const [article, setArticle] = useState<NewsPost | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("selectedArticle");
    if (raw) {
      setArticle(JSON.parse(raw));
    } else {
      router.push("/news");
    }
  }, [router]);

  if (!article) return null;

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 text-primary hover:underline cursor-pointer"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to News
      </button>

      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-muted-foreground text-sm mb-2">
        {new Date(article.publishedAt).toLocaleDateString()} |{" "}
        {article.source?.name}
      </p>

      {article.urlToImage && (
        <div className="w-full h-96 relative mb-6">
          <Image
            src={article.urlToImage}
            alt={article.title}
            fill
            className="object-cover rounded-md"
            unoptimized
          />
        </div>
      )}

      <p className="text-lg leading-relaxed">
        {article.content || article.description}
      </p>

      {article.url && (
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 text-primary hover:underline"
        >
          Read full article ↗
        </a>
      )}
    </section>
  );
}
