"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      href: profile.github,
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      name: "Email",
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border-t border-border"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              © 2025 {profile.name}. All rights reserved.
            </p>
            <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
              <span>Deployed on</span>
              <motion.a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-foreground transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <span>▲ Vercel</span>
                <ExternalLink className="h-3 w-3" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
