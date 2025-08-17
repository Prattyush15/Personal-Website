"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { PMPortfolioItem } from "@/data/pm";
import { FigmaEmbed } from "@/components/figma-embed";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
      <div
        className={`bg-card border border-border rounded-2xl shadow-lg p-0 flex flex-col h-full transition-all duration-300 overflow-hidden w-full text-left focus:outline-none cursor-pointer${open ? '' : ' hover:shadow-xl'}`}
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') onToggle(); }}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={item.thumbnail}
            alt={item.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge className={`${categoryColors[item.category]} text-xs px-3 py-1 font-medium shadow-lg border-0 rounded-full`}>
              {item.category.toUpperCase()}
            </Badge>
          </div>
          <ChevronDown
            className={`absolute bottom-3 right-3 h-7 w-7 text-black bg-background/80 rounded-full p-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
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
              <div className="flex flex-col gap-4 mb-4">
                {item.figmaFileKey && (
                  <a
                    href={`https://www.figma.com/file/${item.figmaFileKey}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-card border border-border text-foreground font-semibold rounded-md shadow hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-primary w-fit"
                    onClick={e => e.stopPropagation()}
                  >
                    <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" width={20} height={20} className="mr-2" />
                    View Prototype
                  </a>
                )}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs px-2 py-1 h-auto glow-green">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow glow-green hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary" onClick={e => e.stopPropagation()}>
                      Read More
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-xl w-full h-[400px] bg-background/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-border p-8 flex flex-col items-center text-left overflow-y-auto">
                    <DialogHeader className="w-full flex flex-col items-center">
                      <DialogTitle className="text-2xl font-bold mb-2 text-foreground">
                        {item.title}
                        {item.dialogTitleSuffix && (
                          <span className="text-primary"> – {item.dialogTitleSuffix}</span>
                        )}
                      </DialogTitle>
                      <div className="w-16 h-1 bg-primary/40 rounded-full mb-4" />
                    </DialogHeader>
                    <DialogDescription className="text-base text-muted-foreground leading-relaxed text-left">
                      {item.longDescription.split(/\n\n+/).map((para, idx) => (
                        <p key={idx} className="mb-4 last:mb-0">{para}</p>
                      ))}
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
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
      </div>
    </motion.div>
  );
}
