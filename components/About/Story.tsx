import React from "react";
import AnimatedCounter from "../AnimatedCounter";

const Story = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h2
          className="text-4xl font-bold mb-8 font-serif bg-gradient-to-r 
                 from-foreground to-primary bg-clip-text text-transparent"
        >
          Our Story
        </h2>
        <div className="space-y-6 text-lg leading-8 text-muted-foreground">
          <p>
            We believe in clean design, thoughtful journalism, and delivering
            stories that resonate. Every detail — from typography to layout — is
            crafted to create a smooth and enjoyable reading experience.
          </p>
          <p>
            Built using modern technologies like{" "}
            <span className="text-primary font-semibold">Next.js</span>,{" "}
            <span className="text-primary font-semibold">Tailwind CSS</span>,
            and
            <span className="text-primary font-semibold"> Framer Motion</span>,
            this project represents the fusion of aesthetics and performance.
          </p>
          <p>
            Whether you&apos;re browsing trending topics or diving into in-depth
            pieces, we hope Resonance becomes a trusted space in your daily web
            journey.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
        <div
          className="relative bg-gradient-to-br from-card/80 to-card/40
                  backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-2xl"
        >
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                label: "Founded",
                from: 1990,
                to: 2025,
                duration: 2,
                delay: 0.1,
              },
              {
                label: "Team Size",
                from: 1,
                to: 12,
                duration: 2.5,
                delay: 0.2,
                suffix: "+",
              },
              {
                label: "Countries",
                from: 5,
                to: 25,
                duration: 2,
                delay: 0.3,
                suffix: "+",
              },
              {
                label: "Languages",
                from: 1,
                to: 8,
                duration: 1.8,
                delay: 0.4,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="text-center p-4 bg-gradient-to-br from-muted/50 to-muted/20 rounded-xl"
              >
                <div className="text-2xl font-bold text-primary mb-1">
                  <AnimatedCounter
                    from={item.from}
                    to={item.to}
                    duration={item.duration}
                    delay={item.delay}
                  />
                  {item.suffix ?? ""}
                </div>
                <div className="text-sm text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
