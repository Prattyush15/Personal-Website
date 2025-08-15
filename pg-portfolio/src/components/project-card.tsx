"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -2 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-200 flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
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
        </div>
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-base mb-2 text-foreground leading-tight">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>
          
          {/* Tech Stack - Show only top 3 */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs px-2 py-1 h-auto">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1 h-auto">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-3 mt-auto">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-4 w-4" />
              </motion.a>
            )}
            
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
