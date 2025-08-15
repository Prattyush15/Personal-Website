"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30"></div>
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
        className="absolute left-6 top-8 w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full border-3 border-background shadow-lg z-10"
      />

      {/* Content Card */}
      <div className="pl-20 pb-3">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Left Side - Company & Role */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-start space-x-4">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex-shrink-0 shadow-md">
                  <Image
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    fill
                    className="object-contain p-2.5"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-foreground leading-tight mb-1">
                    {experience.company}
                  </h3>
                  <p className="text-primary font-semibold text-base leading-tight">{experience.role}</p>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg px-3 py-2 border border-primary/20">
                <p className="text-primary font-medium text-sm text-center">
                  {experience.duration}
                </p>
              </div>
            </div>

            {/* Right Side - Highlights */}
            <div className="lg:col-span-2">
              <ul className="space-y-3">
                {experience.highlights.map((highlight, highlightIndex) => (
                  <motion.li
                    key={highlightIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1 + highlightIndex * 0.1 + 0.6,
                    }}
                    className="flex items-start group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mr-3 mt-0.5 group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-br from-primary to-accent"></div>
                    </div>
                    <span className="text-foreground text-sm leading-relaxed group-hover:text-primary transition-colors">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
