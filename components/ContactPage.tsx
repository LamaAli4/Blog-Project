"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Have questions, suggestions, or just want to say hello? We&apos;d love to
            hear from you. Fill out the form or reach out through our social
            channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <motion.div variants={item} className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">
                  Location
                </h3>
                <p className="text-muted-foreground">Gaza, Palestine</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Email</h3>
                <a
                  href="lama2015678@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  lama2015678@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground">Phone</h3>
                <p className="text-muted-foreground">+972 59 785 7788</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="pt-8">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={container}
            initial="hidden"
            animate="show"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form logic here
              alert("Message sent! We'll get back to you soon.");
            }}
            className="bg-card p-8 rounded-2xl shadow-lg border border-border/50"
          >
            <motion.div variants={item} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    required
                    className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="Subject"
                  className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  rows={5}
                  placeholder="Your message..."
                  required
                  className="px-4 py-3 rounded-lg focus-visible:ring-2 focus-visible:ring-offset-2"
                />
              </div>

              <motion.div
                variants={item}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="pt-2"
              >
                <Button
                  type="submit"
                  className="w-full py-6 text-base font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
