"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience & { skills?: string[] };
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function TimelineItem({ experience, index, open, onToggle }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <button
        className={`bg-card border border-border rounded-2xl shadow-lg p-0 flex flex-col h-full min-h-[80px] transition-all duration-300 overflow-hidden w-full text-left focus:outline-none ${open ? '' : 'hover:shadow-xl'}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="flex items-center gap-4 px-8 py-6">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex-shrink-0 shadow-md flex items-center justify-center">
            <Image
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={56}
              height={56}
              className="object-contain p-2.5 w-14 h-14"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-extrabold text-2xl text-foreground leading-tight mb-1 truncate">
              {experience.company}
            </h3>
            <div className="text-primary font-semibold text-base leading-tight mb-0.5 truncate">
              {experience.role}
            </div>
            <div className="text-muted-foreground text-sm mb-1">
              {experience.duration}
            </div>
          </div>
          <ChevronDown
            className={`ml-2 h-6 w-6 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
        {open && (
          <div className="px-8 pb-8 pt-0 flex flex-col">
            <div className="text-foreground text-base leading-relaxed mt-2">
              {experience.highlights.map((highlight, highlightIndex) => (
                <div key={highlightIndex} className="mb-2 last:mb-0">
                  {highlight}
                </div>
              ))}
            </div>
            {experience.skills && experience.skills.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-muted-foreground mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs px-2 py-1 h-auto glow-green">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </button>
    </motion.div>
  );
}
