import "./ProjectsWorld.css";
import projects from "../data/projects"
import { useState } from "react";

function ProjectsWorld() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="world projects-world">
      <div className="projects-heading">
        <span>WORLD 2</span>
        <h1>PROJECTS</h1>
        <p>Select an iceberg to inspect a project.</p>
      </div>

      <div className="ice-field">
        {projects.map((project) => (
          <button
          type="button"
            className={
              selectedProject === project
                ? "iceberg iceberg-selected"
                : "iceberg"
            }
            key={project.title}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-icon">{project.icon}</div>

            <div className="project-title">{project.title}</div>
          </button>
        ))}
      </div>

      {selectedProject && (
        <div className="project-panel">
          <h2>{selectedProject.title}</h2>

          <p>{selectedProject.description}</p>

          <button
          type="button" 
          onClick={() => setSelectedProject(null)}>CLOSE
          </button>
        </div>
      )}

    </section>
  );

}

export default ProjectsWorld;
