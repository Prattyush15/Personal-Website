"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FigmaEmbedProps {
  fileKey: string;
}

export function FigmaEmbed({ fileKey }: FigmaEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  // If no fileKey is provided, show placeholder
  if (!fileKey) {
    return (
      <div className="w-full h-full bg-muted rounded-lg border-2 border-dashed border-border flex flex-col items-center justify-center space-y-4 text-center p-8">
        <FileText className="h-12 w-12 text-muted-foreground" />
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-foreground">
            Case Study Coming Soon
          </h3>
          <p className="text-sm text-muted-foreground max-w-md">
            This case study is currently being prepared. The Figma prototype and detailed analysis will be available soon.
          </p>
        </div>
        <div className="text-xs text-muted-foreground bg-muted-foreground/10 px-3 py-1 rounded-full">
          TODO: Add Figma file key
        </div>
      </div>
    );
  }

  const figmaUrl = `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/${fileKey}`;

  return (
    <div className="w-full h-full relative">
      {isLoading && (
        <div className="absolute inset-0 bg-muted rounded-lg flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      )}
      
      <iframe
        src={figmaUrl}
        width="100%"
        height="100%"
        className={`rounded-lg border border-border transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
        allow="fullscreen"
      />
      
      {/* Open in Figma Button */}
      <div className="absolute top-4 right-4">
        <Button
          variant="secondary"
          size="sm"
          className="shadow-lg"
          asChild
        >
          <motion.a
            href={`https://www.figma.com/file/${fileKey}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open in Figma</span>
          </motion.a>
        </Button>
      </div>
    </div>
  );
}
