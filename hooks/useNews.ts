import axios from "axios";
import { useEffect, useState } from "react";
import { NewsPost } from "@/types/news";

export function useNews(selectedCategory: string | null) {
    const [posts, setPosts] = useState<NewsPost[]>([]);
    const [sources, setSources] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            try {
                const baseUrl =
                    typeof window === "undefined"
                        ? process.env.NEXT_PUBLIC_SITE_URL
                        : "";

                const res = await axios.get(`${baseUrl}/api/news`);
                const articles: NewsPost[] = res.data.articles || [];

                const filtered = selectedCategory
                    ? articles.filter(
                        (post) =>
                            post.source?.name?.toLowerCase() ===
                            selectedCategory.toLowerCase()
                    )
                    : articles;

                setPosts(filtered);

                const uniqueSources = Array.from(
                    new Set(
                        articles
                            .map((post) => post.source?.name)
                            .filter(Boolean) as string[]
                    )
                );
                setSources(uniqueSources);
            } catch (error) {
                console.error("Failed to fetch news:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNews();
    }, [selectedCategory]);

    return {
        posts,
        sources,
        isLoading,
    };
}
