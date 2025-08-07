import { Target } from "lucide-react";
import React from "react";

const Mission = () => {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 
            to-primary/5 rounded-3xl blur-xl"
      ></div>
      <div
        className="relative bg-gradient-to-br from-card/80 
            to-card/40 backdrop-blur-sm rounded-3xl p-12 border
             border-border/50 shadow-2xl"
      >
        <div className="text-center">
          <div
            className="inline-flex items-center justify-center 
                w-16 h-16 bg-gradient-to-br from-primary to-primary/70
                rounded-2xl mb-6 shadow-lg"
          >
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          <h2
            className="text-3xl font-bold mb-6 font-serif
                 bg-gradient-to-r from-foreground to-primary
                  bg-clip-text text-transparent"
          >
            Our Mission
          </h2>
          <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Our mission is to provide insightful content that not only informs
            but also inspires. Whether you&apos;re a tech enthusiast, a curious
            reader, or someone seeking daily inspiration, Resonance has
            something for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
