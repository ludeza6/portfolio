import { useRef, useState, useEffect } from 'react';
import projects from '../data/projects';
import WorldHeading from '../components/WorldHeading';
import { Landscape, ProjectIcon } from '../components/PixelArt';
import './ProjectsWorld.css';
function ProjectDialog({
  project,
  onClose
}) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);
  return <dialog ref={ref} className="project-panel" onCancel={onClose} onClick={event => {
    if (event.target === event.currentTarget) onClose();
  }} aria-labelledby="project-title"><span className="eyebrow">{project.type}</span><h2 id="project-title">{project.title}</h2><p>{project.description}</p><div className="badges">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><div className="dialog-actions">{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>}<button type="button" onClick={onClose} autoFocus>Close ×</button></div></dialog>;
}
export default function ProjectsWorld() {
  const [selected, setSelected] = useState(null);
  return <section className="world projects-world" aria-label="Projects"><Landscape biome="ice" /><WorldHeading number={2} title="PROJECTS">Things I’ve built and shipped.<br />Select an iceberg to explore.</WorldHeading><div className="ice-field">{projects.map((project, index) => <button type="button" className={`iceberg ${selected === project ? 'iceberg-selected' : ''}`} key={project.title} onClick={() => setSelected(project)} aria-haspopup="dialog"><span className="project-index">0{index + 1} {project.featured && '· FEATURED'}</span><ProjectIcon kind={project.icon} /><span className="ice-surface"><span className="project-title">{project.title}</span><span className="project-explore">EXPLORE ↗</span></span></button>)}</div><p className="scene-caption">SMALL IDEAS. REAL-WORLD BUILDS.</p>{selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}</section>;
}
