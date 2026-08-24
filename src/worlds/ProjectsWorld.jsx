import "./ProjectsWorld.css";
import projects from "../data/projects"

function ProjectsWorld() {
  return (
    <section className="world projects-world">
      <div className="ice-field">
        {projects.map((project) => (
          <div className="iceberg" key={project.title}>
            <div className="project-icon">{project.icon}</div>

            <div className="project-title">{project.title}</div>
          </div>
        ))}
      </div>
    </section>
  );

}

export default ProjectsWorld;
