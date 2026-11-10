import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';
import { getProjects, useLocalCollection } from '../services/localStore';

const readProjects = () => getProjects();
export default function Work() {
  const projects = useLocalCollection(readProjects);
  return <><section className="page-hero"><div className="container"><span className="eyebrow">OUR WORK</span><h1>Ideas shaped into<br/><em>digital experiences.</em></h1><p>Explore selected work and examples of the digital products we help bring to life.</p></div></section>
    <section className="section container"><SectionHeading eyebrow="PORTFOLIO" title="A selection of" highlight="our projects." description="Each project begins with a business need and a focus on making the experience useful for its audience."/><div className="project-grid work-grid">{projects.map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div><p className="portfolio-disclaimer">Some entries are portfolio examples or concepts. Contact us for project-specific details and demonstrations.</p></section><CTA/></>;
}