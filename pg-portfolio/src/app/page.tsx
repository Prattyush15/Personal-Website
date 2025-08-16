"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, Download, Code, User, Briefcase, FolderOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Section } from "@/components/section";
import { TimelineItem } from "@/components/timeline-item";
import { ProjectCard } from "@/components/project-card";
import { PMCard } from "@/components/pm-card";

import { profile, skills } from "@/data/profile";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { pmPortfolio } from "@/data/pm";
import { useState } from "react";

export default function Home() {
  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: Github },
    { name: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  // Gallery images for About section
  const galleryImages = [
    { src: "/images/avatar.jpg", alt: "Avatar" },
    { src: "/images/pm/bdaa.jpg", alt: "BDAA " },
    { src: "/images/pm/switchboard-thumb.jpg", alt: "Switchboard Project" },
    { src: "/images/pm/workspace-thumb.jpg", alt: "Workspace Project" },
  ];
  const [galleryIndex, setGalleryIndex] = useState(0);
  const nextImage = () => setGalleryIndex((galleryIndex + 1) % galleryImages.length);
  const prevImage = () => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length);

  // Hobbies/interests
  const hobbies = [
    "Rock climbing", "Marathon running", "Origami", "Piano", "Stock & investments", "Weightlifting", "Traveling", "Reading"
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [resumeOpen, setResumeOpen] = useState(false);
  const [openExperiences, setOpenExperiences] = useState(() => experiences.map(() => false));

  const handleToggleExperience = (idx: number) => {
    // Prevent opening blank/empty cards
    const exp = experiences[idx];
    const hasContent = (exp.highlights && exp.highlights.some(h => h && h.trim() !== "")) || (exp.skills && exp.skills.length > 0);
    if (!hasContent) return;
    setOpenExperiences((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  // For projects
  const [openProjects, setOpenProjects] = useState(() => projects.map(() => false));
  const handleToggleProject = (idx: number) => {
    setOpenProjects((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };
  // For PM portfolio
  const [openPMs, setOpenPMs] = useState(() => pmPortfolio.map(() => false));
  const handleTogglePM = (idx: number) => {
    setOpenPMs((prev) => prev.map((open, i) => (i === idx ? !open : open)));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <Section id="hero" className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 glow pointer-events-none" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-300" />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-700" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                Hi, I&apos;m{" "}
                <span className="text-primary font-bold">{profile.name}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                {profile.tagline}
              </p>
              
              <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
                {profile.bio}
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                {profile.bio2}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="focus-ring rounded-8 glow-green"
              >
                <Code className="h-5 w-5 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#pm-portfolio")}
                className="focus-ring rounded-8 glow-green"
              >
                <Briefcase className="h-5 w-5 mr-2" />
                PM Portfolio
              </Button>

            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center space-x-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2 glow-green"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-10 bg-card/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 accent-gold">
              <User className="inline h-8 w-8 mr-3 accent-gold" />
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A quick look at me and the skills I’m most confident showcasing.
            </p>
          </motion.div>
          {/* Gallery Carousel - Full width above skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center mb-10"
          >
            <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
              <Image
                src={galleryImages[galleryIndex].src}
                alt={galleryImages[galleryIndex].alt}
                fill
                className="object-cover transition-all duration-300"
                priority
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-2 shadow-lg hover:bg-black/80 border border-white"
                aria-label="Previous image"
                style={{ zIndex: 2 }}
              >
                <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 2px #0008)' }}><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-2 shadow-lg hover:bg-black/80 border border-white"
                aria-label="Next image"
                style={{ zIndex: 2 }}
              >
                <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 1px 2px #0008)' }}><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
            </div>
            <div className="flex gap-2 mt-2">
              {galleryImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setGalleryIndex(idx)}
                  className={`w-3 h-3 rounded-full ${galleryIndex === idx ? "bg-primary" : "bg-muted"}`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
          {/* Skills and Info - Single column */}
          <div className="space-y-8">
            {/* Top PM Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Top PM Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm glow-green" title="Led 6 cross-functional teams from ideation to delivery using Agile sprints">Agile</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Created product roadmaps aligning business goals and technical feasibility">Roadmaps</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Conducted 30+ interviews and surveys to guide product features">User Research</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Facilitated 40+ stakeholder meetings to align on priorities and unblock progress">Stakeholder Communications</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Designed and ran experiments to validate features and improve conversion rates">A/B Testing</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Developed analytics to track KPIs and inform product decisions">Product Analytics</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">(Hover over a skill to see more info)</p>
            </motion.div>
            {/* Top Technical Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Top Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-sm glow-green" title="Wrote 100+ SQL queries to analyze product performance and operations">SQL</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Built interactive dashboards and automation scripts for analytics">Python</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Deployed scalable data solutions and API integrations">AWS</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Developed internal data tools for real-time visualization">Streamlit</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Optimized ETL pipelines using pandas for 35% better data accuracy">pandas</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Created visual reports to communicate insights to stakeholders">Plotly</Badge>
                <Badge variant="outline" className="text-sm glow-green" title="Integrated machine learning models into production-ready pipelines">Docker</Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">(Hover over a skill to see more info)</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 accent-gold">
              <Briefcase className="inline h-8 w-8 mr-3 accent-gold" />
              Professional Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through product management and data engineering/analytics roles
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.company + index}
                experience={experience}
                index={index}
                open={openExperiences[index]}
                onToggle={() => handleToggleExperience(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 accent-gold">
              <Code className="inline h-8 w-8 mr-3 accent-gold" />
              Coding Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of technical projects I&apos;ve built
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                index={index}
                open={openProjects[index]}
                onToggle={() => handleToggleProject(index)}
              />
            ))}
          </div>
        </div>
      </Section>
      {/* PM Portfolio Section */}
      <Section id="pm-portfolio" className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 accent-gold">
              <FolderOpen className="inline h-8 w-8 mr-3 accent-gold" />
              PM Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Case studies and product management work
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-start">
            {pmPortfolio.map((item, index) => (
              <PMCard
                item={item}
                index={index}
                open={openPMs[index]}
                onToggle={() => handleTogglePM(index)}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="py-10 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <FileText className="inline h-8 w-8 mr-3 text-primary" />
              Resume
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Download my resume or view it below
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card
              className={`border-border bg-card/50 backdrop-blur-sm rounded-8 transition-all duration-300 flex ${resumeOpen ? '' : 'items-center'}`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center justify-center gap-4 mb-8 text-center h-full w-full">
                  <Button
                    size="lg"
                    className="focus-ring rounded-8 glow-green"
                    asChild
                  >
                    <motion.a
                      href={profile.resumeUrl}
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2"
                    >
                      <Download className="h-5 w-5" />
                      <span>Download Resume</span>
                    </motion.a>
                  </Button>
                  <Button
                    size="lg"
                    className="focus-ring rounded-8 glow-green"
                    onClick={() => setResumeOpen((open) => !open)}
                    aria-expanded={resumeOpen}
                    aria-controls="resume-iframe"
                  >
                    {resumeOpen ? "Hide Resume" : "View Resume"}
                  </Button>
                </div>
                {resumeOpen && (
                  <div
                    id="resume-iframe"
                    className="aspect-[8.5/11] bg-muted rounded-lg border border-border transition-all duration-300 overflow-hidden"
                  >
                    <iframe
                      src={`${profile.resumeUrl}#toolbar=0`}
                      width="100%"
                      height="100%"
                      className="rounded-lg"
                      title="Resume PDF"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>



      <Footer />
    </div>
  );
}