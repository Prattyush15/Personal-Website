export interface PMPortfolioItem {
  id: string;
  title: string;
  description: string;
  summary: string;
  figmaFileKey: string;
  category: "product" | "ux" | "research" | "strategy";
  tags: string[];
  thumbnail: string;
  longDescription: string;
  dialogTitleSuffix?: string;
}

export const pmPortfolio: PMPortfolioItem[] = [
  {
    id: "switchboard-observability",
    title: "Switchboard Pipeline Observability",
    description: "Designed and launched a real-time observability platform for data producers, enabling teams to monitor pipeline health, manage alerts, and streamline incident response workflows across ingestion, transformation, and orchestration layers.",
    summary: "Led the design and development of a critical observability platform for data infrastructure teams, focusing on real-time monitoring, alert management, and incident response workflows.",
    figmaFileKey: "proto/4KrjE2aJKxnK2eVTeVV8rk/Pipeline_Observability_Prototype?node-id=0-1&t=tMuxpYv4ghQqZfiH-1", // Changed to prototype link
    category: "product",
    tags: [],
    thumbnail: "/images/pm/switchboard-thumb.png",
    longDescription: `When I stepped into my rotation as a Product Owner on the Switchboard squad, I was asked to take on something new: lead a small sub-squad made up of two Interalliance interns. Switchboard itself is a self-service platform that powers our modern data pipeline—helping teams manage ingestion, transformation, and access using tools like Snowflake, Kafka, dbt, and AWS. The experiment of letting me guide a dedicated team was ambitious, but it became one of the most rewarding parts of my summer.

From the start, I knew my challenge was twofold: quickly absorb the complexities of our data pipeline and help first-time developers deliver a feature that mattered. I worked closely with stakeholders to define a clear vision—an observability platform that would let data producers monitor their pipelines in real time. Until then, teams had relied on static Excel sheets and mainframe screens; we wanted to replace those with something dynamic, intuitive, and scalable.

I guided the team through sprints, balancing business priorities with technical feasibility, and made sure they had both autonomy and support. Along the way, I ran weekly stakeholder sessions to gather feedback, refine our roadmap, and keep alignment across teams.

By the end of the summer, we had delivered Switchboard’s first-ever solution to visualize TWS data, giving infrastructure teams real-time visibility into ingestion, dbt transformations, and pipeline health. What started as an experiment ended as a production-ready feature that set a new standard for monitoring data flows at the bank.

The success of this project also opened the door to a second initiative—a personalized workspace for data producers—that the full Switchboard squad will finish after my departure. For me, the experience proved that I could step into true product leadership: bringing people together, charting a vision, and delivering impact that lasts.`,
    dialogTitleSuffix: "Internship"
  },
  {
    id: "switchboard-personalized-dashboard",
    title: "Switchboard Personalized Dashboard",
    description: "Designed and built a personalized dashboard for data professionals, reducing cognitive load and improving productivity through intelligent defaults and customization.",
    summary: "Designed and built a personalized dashboard for data professionals, focusing on reducing cognitive load and improving productivity through intelligent defaults and customization.",
    figmaFileKey: "proto/7fhVQkLvh9AFASFVbaq2LV/Switchboard-Personalized-Dashboard?node-id=0-1&t=dLelTkSqfOFR44wI-1", // Updated to prototype link
    category: "product",
    tags: [],
    thumbnail: "/images/pm/library-thumb.png",
    longDescription: `After delivering the observability feature, I helped initiate work on a second major initiative for Switchboard: a personalized dashboard for data professionals. While the observability platform gave teams visibility into the health of their pipelines, this new feature focused on making the day-to-day experience of working in Switchboard more efficient and less overwhelming.

The challenge was clear: Switchboard served a wide variety of data producers, but the interface wasn’t always tailored to individual needs. Users often had to sift through unnecessary information, slowing down productivity. My goal was to create a dashboard that adapted to the user, rather than forcing the user to adapt to the tool.

To achieve this, I designed a system that reduced cognitive load through intelligent defaults, while still allowing customization for advanced users. The experience aimed to improve productivity by surfacing the most relevant pipelines, alerts, and actions in one place.

Although the dashboard was still in development when my rotation ended, I set the direction, defined the requirements, and guided early prototyping. The work has since continued with the Switchboard squad, with the vision of creating a personalized workspace that empowers data professionals to be more efficient, focused, and confident in their work.`,
    dialogTitleSuffix: "Internship"
  }
];
