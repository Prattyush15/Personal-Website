export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "anime-match",
    title: "AnimeMatch",
    description: "A smart anime recommendation app that learns your preferences through swiping and provides personalized suggestions based on your taste.    ",
    image: "/images/projects/anime-match.jpg",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vercel"],
    github: "https://github.com/Prattyush15/AnimeMatch",
    live: "https://anime-match-ten.vercel.app/",
    featured: true
  },
  {
    id: "manga-reader",
    title: "Manga Reader",
    description: "Modern manga reading application with chapter navigation, bookmarks, and reading progress tracking. Features clean UI and responsive design.",
    image: "/images/projects/manga-reader.jpg",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Prattyush15/manga-reader",
    live: "https://manga-reader-rose.vercel.app/",
    featured: true
  },
  {
    id: "strava-viz",
    title: "StravaViz",
    description: "Personal running analytics dashboard with interactive visualizations and performance tracking over time.",
    image: "/images/projects/strava-viz.jpg",
    technologies: ["Python", "Streamlit", "Plotly", "Strava API"],
    github: "https://github.com/Prattyush15/strava-viz",
    live: "https://strava-viz.streamlit.app"
  }
];
