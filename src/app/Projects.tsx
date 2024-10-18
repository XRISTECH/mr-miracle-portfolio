import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/data/projects';


export default function ProjectSection() {
  return (
    <section className="py-16 bg-gray-50" id='projects'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

