export type Project = {
  image: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  technologies: string[];
};

export const PROJECTS: Project[] = [
    {
      image: "portfolio.png",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
      url: "https://example-ecommerce.com",
      github: "https://github.com/yourusername/ecommerce-platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      image: "portfolio.png",
      title: "Task Management App",
      description: "A mobile app for managing tasks and projects with team collaboration features.",
      url: "https://taskmasterapp.com",
      github: "https://github.com/yourusername/task-management-app",
      technologies: ["Flutter", "Firebase", "Google Cloud"]
    },
    {
      image: "portfolio.png",
      title: "Weather Dashboard",
      description: "A responsive web app that displays real-time weather information and forecasts.",
      url: "https://weatherdashboard.example.com",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"]
    }
   
  ];
