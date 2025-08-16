"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { PMPortfolioItem } from "@/data/pm";

interface PMCardProps {
  item: PMPortfolioItem;
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function PMCard({ item, index, open, onToggle }: PMCardProps) {
  const categoryColors = {
    product: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    ux: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    research: "bg-green-500/10 text-green-500 border-green-500/20",
    strategy: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <button
        className={`bg-card border border-border rounded-2xl shadow-lg p-0 flex flex-col h-full transition-all duration-300 overflow-hidden w-full text-left focus:outline-none ${open ? '' : 'hover:shadow-xl'}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${categoryColors[item.category]} text-xs px-3 py-1 font-medium shadow-lg border-0 rounded-full`}>
              {item.category.toUpperCase()}
            </Badge>
          </div>
          <ChevronDown
            className={`absolute bottom-3 right-3 h-7 w-7 text-muted-foreground bg-background/80 rounded-full p-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="font-bold text-xl mb-2 text-foreground leading-tight">
            {item.title}
          </h3>
          {open && (
            <>
              <div className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.summary}
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs px-2 py-1 h-auto glow-green">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center space-x-3 mt-2">
                {/*
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow glow-green hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    Visit Website <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                )}
                */}
              </div>
            </>
          )}
        </CardContent>
      </button>
    </motion.div>
  );
}
