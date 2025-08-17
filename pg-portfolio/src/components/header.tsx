"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "PM Portfolio", href: "#pm-portfolio" },
  { name: "Coding Projects", href: "#projects" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  let lastScrollY = 0;

  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: Github },
    { name: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      } ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center relative">
        {/* Centered Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-8">
          {navigation.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              {item.name}
            </motion.a>
          ))}
        </nav>
        {/* Theme Toggle & Social Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={document.documentElement.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode'}
              className="focus-ring"
            >
              {document.documentElement.classList.contains('dark') ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center space-x-4 ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="focus-ring">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur py-8">
              <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
              {/* Social Links (Mobile) */}
              <div className="flex justify-center space-x-8 mb-8 mt-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
                    aria-label={link.name}
                  >
                    <link.icon className="h-7 w-7" />
                  </a>
                ))}
                {mounted && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label={document.documentElement.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode'}
                    className="focus-ring"
                  >
                    {document.documentElement.classList.contains('dark') ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
                  </Button>
                )}
              </div>
              <nav className="flex flex-col items-center space-y-6 mt-8">
                {navigation.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-xl font-semibold text-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    whileHover={{ x: 8 }}
                    whileTap={{ x: 0 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
