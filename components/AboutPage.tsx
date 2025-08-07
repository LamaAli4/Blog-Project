"use client";
import { Metadata } from "next";
import { useInView } from "framer-motion";
import * as React from "react";
import * as motion from "motion/react-client";
import ContactCTA from "./About/ContactCTA";
import AboutHero from "./About/Hero";
import Background from "./About/Background";
import Stats from "./About/Stats";
import Mission from "./About/Mission";
import Values from "./About/Values";
import Story from "./About/Story";

export const metadata: Metadata = {
  title: "About | Resonance",
  description:
    "Learn more about Resonance - your source for curated tech, news, and insights.",
};

function FadeInOnView({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main
      className="min-h-screen bg-gradient-to-br from-background via-background 
    to-muted/20 text-foreground py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <Background />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <AboutHero />
        {/* Mission Section */}
        <FadeInOnView delay={0.5} className="mb-24">
          <Mission />
        </FadeInOnView>
        {/* Values Grid */}
        <FadeInOnView delay={0.7} className="mb-24">
          <Values />
        </FadeInOnView>
        {/* Story Section */}
        <FadeInOnView delay={0.9} className="mb-24">
          <Story />
        </FadeInOnView>
        {/* Stats Section */}
        <FadeInOnView delay={0.5} className="mb-24">
          <Stats />
        </FadeInOnView>
        {/* Contact CTA */}
        <FadeInOnView delay={0.5} className="mb-24">
          <ContactCTA />
        </FadeInOnView>
      </div>
    </main>
  );
}
