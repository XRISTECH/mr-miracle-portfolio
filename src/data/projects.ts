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
      image: "ecommercewebsite.jpeg",
      title: "E-commerce Platform",
      description: "A full and responsive electronics  e-commerce website built with  Html, Css and Bootstrap",
      url: "https://ecommerce-delta-ebon.vercel.app/",
      github: "https://github.com/XRISTECH/ecommerce",
      technologies: ["Html", "Css", "Bootstrap"]
    }, 
    
    {
      image: "luggage ecommerece.jpeg",
      title: "Luggage E-commerce Platform",
      description: "A full-featured luggage e-commerce platform with product management, cart functionality, and secure checkout.",
      url: "https://bronxluggage.vercel.app/",
      github: "https://github.com/XRISTECH/bronxluggage",
      technologies: ["Html", "Css", "Bootstrap", "JavaScript"]
    },

    {
      image: "biography website.jpeg",
      title: "Biography Website",
      description: "A responsive biography website using Albert Einstein as a case study.",
      url: "https://biography-ruby.vercel.app/",
      github: "https://github.com/XRISTECH/biography",
      technologies: ["HtmL", "Css", "Bootstrap"]
    },
    
  ];

