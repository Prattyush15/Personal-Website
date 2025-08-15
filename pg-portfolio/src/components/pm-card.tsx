"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PMPortfolioItem } from "@/data/pm";
import { FigmaEmbed } from "./figma-embed";

interface PMCardProps {
  item: PMPortfolioItem;
  index: number;
}

export function PMCard({ item, index }: PMCardProps) {
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
      whileHover={{ y: -2 }}
      className="group h-full"
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/30 hover:bg-card/50 transition-all duration-200 flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
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
        </div>
        
        <CardContent className="p-4 flex-1 flex flex-col">
          <h3 className="font-semibold text-base mb-2 text-foreground leading-tight">
            {item.title}
          </h3>
          
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
            {item.summary}
          </p>
          
          {/* Tags - Show only top 3 */}
          <div className="flex flex-wrap gap-1 mb-4">
            {item.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-1 h-auto">
                {tag}
              </Badge>
            ))}
            {item.tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-1 h-auto">
                +{item.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {/* View Case Study Button */}
          <div className="mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="w-full focus-ring"
                  variant="outline"
                  size="sm"
                >
                  View Case Study
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh] p-0">
                <div className="h-full flex flex-col">
                  {/* Header */}
                  <div className="p-6 border-b border-border">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={categoryColors[item.category]}>
                        {item.category.toUpperCase()}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-muted-foreground">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Figma Embed */}
                  <div className="flex-1 p-6">
                    <FigmaEmbed fileKey={item.figmaFileKey} />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
