"use client";
import { motion } from "framer-motion";
import { Rocket, Target, Sparkles } from "lucide-react";

const values = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Quality",
    description:
      "Every story is carefully curated and fact-checked to ensure the highest standards.",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Clarity",
    description:
      "Complex topics made accessible through clear, engaging storytelling.",
    gradient: "from-green-500/20 to-blue-500/20",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Innovation",
    description:
      "Embracing modern design and technology to enhance your reading experience.",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
];

export default function AboutValues() {
  return (
    <>
      <h2
        className="text-4xl font-bold mb-12 text-center font-serif
        bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
      >
        Our Values
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="group"
          >
            <div
              className={`relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm
              rounded-2xl p-8 border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-card/60 to-card/30 rounded-2xl" />
              <div className="relative z-10">
                <div
                  className="w-16 h-16 bg-gradient-to-br
                  from-primary/20 to-primary/10 rounded-2xl flex items-center
                  justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
