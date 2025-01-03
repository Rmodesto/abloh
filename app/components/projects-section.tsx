import { projects } from "../data/projects";
import { LinkButton } from "./link-button";

export const ProjectsSection: React.FC = () => {
  return (
    <div className="px-6">
      <h2 className="text-2xl text-gray-600 text-greenfont-semibold text-center mb-6 font-nasa">
        Projects
      </h2>
      {projects.map((project) => (
        <LinkButton
        
          key={project.id}
          href={project.href}
        >
          {project.label}
        </LinkButton>
      ))}
    </div>
  );
};
