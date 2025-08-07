"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsPost {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

const FeaturedSection = () => {
  const [posts, setPosts] = useState<NewsPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("/api/news");
        setPosts(res.data.articles || []);
      } catch (error) {
        console.error("Failed to fetch news with Axios:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const featuredPosts = posts.slice(0, 4);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Featured Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated thoughts and discoveries from the intersection of
            technology, design, and human experience.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-muted border-t-primary" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => {
                const handleClick = (e: React.MouseEvent) => {
                  e.preventDefault();
                  const slug = encodeURIComponent(
                    post.title.toLowerCase().replace(/\s+/g, "-")
                  );
                  sessionStorage.setItem(
                    "selectedArticle",
                    JSON.stringify(post)
                  );
                  router.push(`/news/${slug}`);
                };

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      onClick={handleClick}
                      className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0"
                    >
                      <CardHeader className="p-0">
                        <div className="relative">
                          <div className="w-full h-48 relative">
                            <Image
                              fill
                              src={post.urlToImage || "/default.jpeg"}
                              alt={post.title}
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              unoptimized
                            />
                          </div>
                          <div className="absolute top-4 left-4">
                            <Badge
                              variant="secondary"
                              className="bg-background/80 backdrop-blur-xs"
                            >
                              {post.source?.name || "News"}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>

                        <h3
                          onClick={handleClick}
                          className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 cursor-pointer"
                        >
                          {post.title}
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-3">
                          {post.description}
                        </p>

                        <a
                          href="#"
                          onClick={handleClick}
                          className="flex items-center text-primary font-medium group-hover:underline"
                        >
                          Read more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <motion.button
                onClick={() => router.push("/news")}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="px-6 py-2 text-sm font-medium text-primary border border-primary rounded-full 
                hover:bg-primary hover:text-white transition cursor-pointer"
              >
                View All Articles →
              </motion.button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default FeaturedSection;
