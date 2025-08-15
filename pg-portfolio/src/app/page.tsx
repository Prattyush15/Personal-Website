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

export default function Home() {
  const socialLinks = [
    { name: "GitHub", href: profile.github, icon: Github },
    { name: "LinkedIn", href: profile.linkedin, icon: Linkedin },
    { name: "Email", href: `mailto:${profile.email}`, icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
              
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                {profile.bio}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="focus-ring"
              >
                <Code className="h-5 w-5 mr-2" />
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#pm-portfolio")}
                className="focus-ring"
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
                  className="text-muted-foreground hover:text-foreground transition-colors focus-ring rounded-full p-2"
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
      <Section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <User className="inline h-8 w-8 mr-3 text-primary" />
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate about building products that make a real difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Skills */}
            <div className="lg:col-span-2 space-y-8">
              {/* Coding Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.coding.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((tool) => (
                    <Badge key={tool} variant="outline" className="text-sm">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* PM Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Product Management
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.pm.map((pmSkill) => (
                    <Badge key={pmSkill} variant="default" className="text-sm">
                      {pmSkill}
                    </Badge>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.certs.map((cert) => (
                    <Badge key={cert} className="text-sm bg-accent text-accent-foreground">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Briefcase className="inline h-8 w-8 mr-3 text-primary" />
              Experience
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My journey through product management and data engineering roles
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.company}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Code className="inline h-8 w-8 mr-3 text-primary" />
              Coding Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of technical projects I&apos;ve built
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {projects.map((project, index) => (
              <div key={project.id} className="w-80">
                <ProjectCard
                  project={project}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* PM Portfolio Section */}
      <Section id="pm-portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <FolderOpen className="inline h-8 w-8 mr-3 text-primary" />
              PM Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Case studies and product management work
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {pmPortfolio.map((item, index) => (
              <div key={item.id} className="w-80">
                <PMCard
                  item={item}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Resume Section */}
      <Section id="resume" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Button
                    size="lg"
                    className="focus-ring"
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
                </div>

                {/* PDF Viewer */}
                <div className="aspect-[8.5/11] bg-muted rounded-lg border border-border">
                  <iframe
                    src={`${profile.resumeUrl}#toolbar=0`}
                    width="100%"
                    height="100%"
                    className="rounded-lg"
                    title="Resume PDF"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>



      <Footer />
    </div>
  );
}