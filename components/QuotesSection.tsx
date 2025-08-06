import { quotes } from "@/lib/data";
import { Quote } from "lucide-react";
import * as motion from "motion/react-client";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

export default function QuotesSection() {
  const randomQuote = getRandomQuote();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div>
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-serif font-medium text-foreground leading-relaxed mb-6">
              {`"${randomQuote.text}"`}
            </blockquote>
            <cite className="text-lg text-foreground font-medium not-italic">
              - {randomQuote.author}
            </cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
