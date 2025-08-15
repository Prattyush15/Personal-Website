export interface PMPortfolioItem {
  id: string;
  title: string;
  description: string;
  summary: string;
  figmaFileKey: string;
  category: "product" | "ux" | "research" | "strategy";
  tags: string[];
  thumbnail: string;
}

export const pmPortfolio: PMPortfolioItem[] = [
  {
    id: "switchboard-observability",
    title: "Switchboard Observability",
    description: "A comprehensive case study of building a real-time pipeline monitoring platform that reduced incident diagnosis time by 60% and improved system reliability across multiple data engineering teams.",
    summary: "Led the design and development of a critical observability platform for data infrastructure teams, focusing on real-time monitoring, alert management, and incident response workflows.",
    figmaFileKey: "", // TODO: Add actual Figma file key
    category: "product",
    tags: ["Data Platform", "Observability", "Real-time", "Enterprise"],
    thumbnail: "/images/pm/switchboard-thumb.jpg"
  },
  {
    id: "data-producer-workspace",
    title: "Data Producer Workspace",
    description: "Personalized landing concept for data engineers and analysts, featuring customizable dashboards, workflow automation, and collaborative tools. Improved daily active usage by 45% through better information architecture.",
    summary: "Conceptualized and designed a personalized workspace for data professionals, focusing on reducing cognitive load and improving productivity through intelligent defaults and customization.",
    figmaFileKey: "", // TODO: Add actual Figma file key
    category: "ux",
    tags: ["Personalization", "Data Tools", "Productivity", "Enterprise UX"],
    thumbnail: "/images/pm/workspace-thumb.jpg"
  },
  {
    id: "library-analytics",
    title: "Library Analytics",
    description: "Stakeholder workflow redesign for academic library systems, streamlining research processes and improving resource discovery. Reduced time-to-information by 40% through user-centered design principles.",
    summary: "Redesigned complex academic workflows for library stakeholders, focusing on research efficiency and resource accessibility through extensive user research and iterative design.",
    figmaFileKey: "", // TODO: Add actual Figma file key
    category: "research",
    tags: ["Academic", "Workflow Design", "User Research", "Information Architecture"],
    thumbnail: "/images/pm/library-thumb.jpg"
  }
];
