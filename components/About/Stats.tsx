"use client";
import * as React from "react";
import * as motion from "motion/react-client";
import AnimatedCounter from "../AnimatedCounter";
import { BookOpen, Users, FileText, Zap } from "lucide-react";

const Stats = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 
            via-primary/5 to-primary/10 rounded-3xl blur-xl"
      ></div>
      <div
        className="relative bg-gradient-to-br from-card/60 to-card/30 
            backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-12 text-center font-serif">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Articles Published",
              icon: <FileText className="w-6 h-6" />,
              from: 120,
              to: 534,
              duration: 2.5,
              delay: 0.2,
            },
            {
              label: "Monthly Readers",
              icon: <Users className="w-6 h-6" />,
              from: 1000,
              to: 50432,
              duration: 2.8,
              delay: 0.4,
            },
            {
              label: "Categories Covered",
              icon: <BookOpen className="w-6 h-6" />,
              from: 5,
              to: 17,
              duration: 2,
              delay: 0.6,
            },
            {
              label: "Content Updates",
              icon: <Zap className="w-6 h-6" />,
              from: 0,
              to: 24,
              duration: 1.5,
              delay: 0.8,
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-muted/30
                     to-muted/10 rounded-2xl border border-border/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-3 flex justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text">
                <AnimatedCounter
                  from={stat.from}
                  to={stat.to}
                  duration={stat.duration}
                  delay={stat.delay}
                />
                {stat.label === "Monthly Readers"
                  ? "K+"
                  : stat.label === "Content Updates"
                  ? "/7"
                  : "+"}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
