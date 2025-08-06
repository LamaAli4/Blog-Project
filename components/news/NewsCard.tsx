"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import { NewsPost } from "@/types/news";
import { useRouter } from "next/navigation";

interface NewsCardProps {
  post: NewsPost;
  index: number;
}

export function NewsCard({ post, index }: NewsCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const slug = encodeURIComponent(
      post.title.toLowerCase().replace(/\s+/g, "-")
    );
    sessionStorage.setItem("selectedArticle", JSON.stringify(post));
    router.push(`/news/${slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm hover:bg-card/90 h-full">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <Image
              src={
                post.urlToImage ||
                "/placeholder.svg?height=300&width=600&query=news"
              }
              alt={post.title}
              className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
              width={600}
              height={300}
              unoptimized
            />
            <div className="absolute top-4 left-4 z-20">
              <Badge
                variant="secondary"
                className="bg-background/90 backdrop-blur-md text-foreground font-medium shadow-lg border border-border/50"
              >
                {post.source?.name || "News"}
              </Badge>
            </div>
            <div className="absolute bottom-4 right-4 z-20">
              <div className="flex items-center text-xs text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(post.publishedAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3
              onClick={handleClick}
              className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight line-clamp-2 cursor-pointer"
            >
              {post.title}
            </h3>

            <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
              {post.description}
            </p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            {post.author && (
              <span className="text-xs text-muted-foreground font-medium">
                By {post.author}
              </span>
            )}
            <a
              href="#"
              onClick={handleClick}
              className="flex items-center text-primary font-semibold group-hover:underline transition-all duration-300"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
