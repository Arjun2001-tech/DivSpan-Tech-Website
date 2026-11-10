import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return <article className="project-card">
    <div className={`project-art ${project.accent}`}>
      <div className="browser-frame"><div className="browser-top"><i/><i/><i/><span>{project.type}</span></div><div className="browser-preview"><div className="preview-copy"><b>{project.category}</b><i/><i/><i/></div><div className="preview-image"/></div></div>
      <span className="project-index">0{index + 1}</span>
    </div>
    <div className="project-details"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p>
      {project.url ? <a className="text-link" href={project.url} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a> : <span className="project-note">Project preview available on request</span>}
    </div>
  </article>;
}