export interface Experience {
  company: string;
  role: string;
  duration: string;
  period: string;
  logo: string;
  highlights: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    company: "Fifth Third Bank",
    role: "Product Manager Intern",
    duration: "May 2025 - Aug 2025",
    period: "Summer 2025",
    logo: "/images/logos/fifth-third.png",
    highlights: [
      "Led the development of a real-time pipeline observability tool to reduce incident diagnosis time and provide actionable insights. Defined and prioritized core features by gathering feedback from over 20 stakeholders, and coordinated cross-functional teams through agile sprints to deliver on-time milestones."
    ],
    skills: ["Product Management", "Jira", "Product Roadmapping", "Stakeholder Management", "Agile Methodologies"]
  },
  {
    company: "GE Aerospace",
    role: "Product Manager Intern",
    duration: "May 2024 - Aug 2024",
    period: "Summer 2024",
    logo: "/images/logos/ge-aerospace.png",
    highlights: [
      "Developed the PMO portal, a central hub to standardize project management processes across multiple teams. I created over 20 reusable templates, including project plans and RAID logs, to ensure consistency and efficiency. I also facilitated more than 40 cross-functional meetings and monthly reviews, aligning stakeholders on goals, progress, and challenges so the organization could move in sync."
    ],
    skills: ["Product Strategy", "Project Management Office (PMO)", "Requirement Gathering", "Confluence", "Smartsheet", "Process Design"]
  },
  {
    company: "GE Aerospace",
    role: "Product Manager Intern",
    duration: "May 2023 - Aug 2023",
    period: "Summer 2023",
    logo: "/images/logos/ge-aerospace.png",
    highlights: [
      "Led the development/design of a centralized asset inventory system to streamline operations across 45 sites. Partnered with over 50 stakeholders to define requirements and guide the project from concept to deployment, introducing automation that increased efficiency by 60 percent and implementing enhancements that reduced tracking errors by 45 percent."
    ],
    skills: ["Product Strategy", "Product Lifecycle Management (PLM)", "Requirements Gathering", "User Acceptance Testing (UAT)", "Visual Basic .NET", "MySQL"]
  },
  {
    company: "GE Corporate",
    role: "Data Engineer Intern",
    duration: "Jun 2022 - Aug 2022",
    period: "Summer 2022",
    logo: "/images/logos/ge-corporate.png",
    highlights: [
      "Improved reporting accuracy and support product decisions. Partnered with stakeholders to gather requirements, authored over 100 SQL queries, and redesigned ETL pipelines to boost data accuracy by 35 percent while reducing errors. Collaborated with data science teams to integrate machine learning models into production with clean, reliable data."
    ],
    skills: ["SQL", "Data Engineering", "ETL", "Data Analysis", "Query Optimization"]
  },
  {
    company: "GE Aviation",
    role: "Data Analyst Intern",
    duration: "Jun 2021 - Aug 2021",
    period: "Summer 2021",
    logo: "/images/logos/ge-aviation.png",
    highlights: [
      "Collaborated with internal engineering teams to map 1,000+ items into a unified network diagram, helping improve traceability for tooling decisions. Using Python, SQL, and Dataiku, I generated insights that shaped product planning discussions. I also automated reporting processes, saving the team over 10 hours a week and freeing up time for higher-value analysis."
    ],
    skills: ["Data Analysis", "Python", "SQL", "Dataiku", "Data Visualization"]
  }

];
