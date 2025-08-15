export interface Experience {
  company: string;
  role: string;
  duration: string;
  period: string;
  logo: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "Fifth Third Bank",
    role: "Product Manager Intern",
    duration: "May 2025 - Aug 2025",
    period: "Summer 2025",
    logo: "/images/logos/fifth-third.png",
    highlights: [
      "Led a pipeline observability product to reduce incident diagnosis time and surface real-time insights",
      "Prioritized core features by synthesizing input from many stakeholders",
      "Ran agile planning and execution to hit milestones"
    ]
  },
  {
    company: "GE Aerospace",
    role: "Product Manager Intern",
    duration: "May 2024 - Aug 2024",
    period: "Summer 2024",
    logo: "/images/logos/ge-aerospace.png",
    highlights: [
      "Delivered a PMO portal to standardize project processes",
      "Created core templates like a project plan and RAID log",
      "Led cross-functional reviews and operating meetings"
    ]
  },
  {
    company: "GE Corporate",
    role: "Data Engineer Intern",
    duration: "Jun 2022 - Aug 2022",
    period: "Summer 2022",
    logo: "/images/logos/ge-corporate.png",
    highlights: [
      "Authored many SQL queries for insights and product decisions",
      "Improved ETL pipelines to boost data accuracy",
      "Collaborated with data science teams on ML model deployment"
    ]
  },
  {
    company: "GE Aviation",
    role: "Data Analyst Intern",
    duration: "Jun 2021 - Aug 2021",
    period: "Summer 2021",
    logo: "/images/logos/ge-aviation.png",
    highlights: [
      "Built network diagrams to improve traceability for internal tools",
      "Used Python and SQL to deliver insights for planning",
      "Automated reporting processes saving 10+ hours per week"
    ]
  }
];
