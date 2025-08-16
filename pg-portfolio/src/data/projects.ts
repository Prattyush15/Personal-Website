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
    id: "strava-viz",
    title: "StravaViz",
    description: "An interactive dashboard for visualizing and analyzing personal fitness data from Strava, featuring custom insights, weekly trends, performance analysis, and training recommendations.",
    image: "/images/projects/strava-viz.jpg",
    technologies: ["Python", "Streamlit", "Plotly", "NumPy", "pandas", "Strava API"],
    github: "https://github.com/Prattyush15/strava-viz",
    live: "https://strava-viz.streamlit.app",
    featured: true
  },
  {
    id: "manga-reader",
    title: "Manga Reader",
    description: "A responsive manga reading app with chapter navigation, bookmarks, reading progress tracking, and advanced search using the MangaDex API.",
    image: "/images/projects/manga-reader.jpg",
    technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS", "MangaDex API", "Vercel"],
    github: "https://github.com/Prattyush15/manga-reader",
    live: "https://manga-reader-rose.vercel.app/",
    featured: true
  },
  {
    id: "anime-match",
    title: "AnimeMatch",
    description: "A smart anime recommendation app that learns your preferences through swiping and provides personalized suggestions based on your taste.    ",
    image: "/images/projects/anime-match.jpg",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vercel"],
    github: "https://github.com/Prattyush15/AnimeMatch",
    live: "https://anime-match-ten.vercel.app/",
    featured: false
  }
];
