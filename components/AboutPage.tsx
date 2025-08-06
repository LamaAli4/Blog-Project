"use client";
import * as React from "react";
import * as motion from "motion/react-client";
import { Metadata } from "next";
import { useInView } from "framer-motion";

import {
  Rocket,
  Target,
  Sparkles,
  BookOpen,
  Users,
  FileText,
  Mail,
  Zap,
  MessageSquare,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

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
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground py-20 px-6 sm:px-10 lg:px-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-2xl transform scale-150"></div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 font-serif relative bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              About Resonance
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Resonance is a modern, elegant news blog that curates top stories
            from around the world. From cutting-edge technology to global
            affairs, we bring clarity and creativity to every article we
            feature.
          </motion.p>
        </div>

        {/* Mission Section */}
        <FadeInOnView delay={0.5} className="mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-2xl">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold mb-6 font-serif bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <p className="text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
                  Our mission is to provide insightful content that not only
                  informs but also inspires. Whether you&apos;re a tech
                  enthusiast, a curious reader, or someone seeking daily
                  inspiration, Resonance has something for you.
                </p>
              </div>
            </div>
          </div>
        </FadeInOnView>

        {/* Values Grid */}
        <FadeInOnView delay={0.7} className="mb-24">
          <h2 className="text-4xl font-bold mb-12 text-center font-serif bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div
                  className={`relative bg-gradient-to-br ${value.gradient} backdrop-blur-sm rounded-2xl p-8 border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300 h-full`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-card/60 to-card/30 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
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
        </FadeInOnView>

        {/* Story Section */}
        <FadeInOnView delay={0.9} className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 font-serif bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-6 text-lg leading-8 text-muted-foreground">
                <p>
                  We believe in clean design, thoughtful journalism, and
                  delivering stories that resonate. Every detail — from
                  typography to layout — is crafted to create a smooth and
                  enjoyable reading experience.
                </p>
                <p>
                  Built using modern technologies like{" "}
                  <span className="text-primary font-semibold">Next.js</span>,{" "}
                  <span className="text-primary font-semibold">
                    Tailwind CSS
                  </span>
                  , and
                  <span className="text-primary font-semibold">
                    {" "}
                    Framer Motion
                  </span>
                  , this project represents the fusion of aesthetics and
                  performance.
                </p>
                <p>
                  Whether you&apos;re browsing trending topics or diving into
                  in-depth pieces, we hope Resonance becomes a trusted space in
                  your daily web journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-2xl">
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
        </FadeInOnView>

        {/* Stats Section */}
        <FadeInOnView delay={0.5} className="mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-2xl">
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
                    className="text-center p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-border/30 hover:shadow-lg transition-all duration-300"
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
        </FadeInOnView>

        {/* Contact CTA */}
        <FadeInOnView delay={0.5} className="mb-24">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl"></div>
            <div
              className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 
            backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-2xl"
            >
              <div className="flex justify-center mb-8">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-3xl shadow-xl">
                  <MessageSquare className="w-10 h-10 text-white" />
                </div>
              </div>

              <h2
                className="text-4xl font-bold mb-6 font-serif bg-gradient-to-r from-foreground 
               to-primary bg-clip-text text-transparent text-center"
              >
                Get In Touch
              </h2>

              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed text-center">
                Have a story tip, feedback, or just want to say hello? We&apos;d
                love to hear from you. Your voice helps shape the future of
                Resonance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="mailto:hello@resonance.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl hover:shadow-xl transition-all duration-300 font-semibold text-lg shadow-lg"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </motion.a>
              </div>
            </div>
          </div>
        </FadeInOnView>
      </div>
    </main>
  );
}
