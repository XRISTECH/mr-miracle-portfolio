import { Project } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

 export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
      <div className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-75 rounded-lg transform rotate-3 scale-105"></div>
          <Image
            src={"/images/projects/" + project.image}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-lg shadow-lg relative z-10"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <ExternalLink size={20} className="mr-1" />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-primary hover:underline"
              >
                <Github size={20} className="mr-1" />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    )
  }