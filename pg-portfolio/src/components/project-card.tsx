"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function ProjectCard({ project, index, open, onToggle }: ProjectCardProps) {
  const hasExpandableContent = !!(project.description || (project.technologies && project.technologies.length > 0) || project.github || project.live);

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
        onClick={hasExpandableContent ? onToggle : undefined}
        aria-expanded={open}
        disabled={!hasExpandableContent}
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          {project.featured && (
            <div className="absolute top-3 right-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm opacity-75"></div>
                <Badge className="relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 font-semibold shadow-xl border-0 rounded-full">
                  ⭐ Featured
                </Badge>
              </div>
            </div>
          )}
          {hasExpandableContent && (
            <ChevronDown
              className={`absolute bottom-3 right-3 h-7 w-7 text-white bg-background/80 rounded-full p-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          )}
        </div>
        {open && hasExpandableContent && (
          <CardContent className="p-6 bg-card text-foreground">
            <h3 className="font-bold text-xl mb-2 leading-tight">
              {project.title}
            </h3>
            <div className="text-sm leading-relaxed mb-4">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs px-2 py-1 h-auto glow-green">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center space-x-3 mt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow glow-green hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Visit Website <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              )}
            </div>
          </CardContent>
        )}
      </button>
    </motion.div>
  );
}
