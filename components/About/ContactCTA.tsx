"use client";
import { MessageSquare, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

export default function ContactCTA() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 
        via-primary/30 to-primary/20 rounded-3xl blur-2xl"
      ></div>
      <div
        className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 
        backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-2xl"
      >
        <div className="flex justify-center mb-8">
          <div
            className="flex items-center justify-center w-20 h-20 
            bg-gradient-to-br from-primary to-primary/70 rounded-3xl shadow-xl"
          >
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
          Have a story tip, feedback, or just want to say hello? We&apos;d love
          to hear from you. Your voice helps shape the future of Resonance.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <MotionLink
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r
              from-primary to-primary/80 text-primary-foreground rounded-2xl
              hover:shadow-xl transition-all duration-300 font-semibold text-lg shadow-lg"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Us
          </MotionLink>
        </div>
      </div>
    </div>
  );
}
