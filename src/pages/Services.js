import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTA from '../components/CTA';
import { services } from '../data/services';

export default function Services() {
  return <><section className="page-hero"><div className="container"><span className="eyebrow">OUR SERVICES</span><h1>Digital solutions for<br/><em>real business needs.</em></h1><p>Flexible web and software services to help you launch, improve and scale your digital presence.</p></div></section>
    <section className="section container"><SectionHeading eyebrow="HOW WE CAN HELP" title="One partner for" highlight="digital progress." description="Choose a focused service or combine capabilities into a solution that fits your business."/><div className="service-grid all-services">{services.map(s=><ServiceCard key={s.number} service={s}/>)}</div></section>
    <section className="process-band"><div className="container process-grid"><div><span className="eyebrow">OUR APPROACH</span><h2>A clear process.<br/><em>Better outcomes.</em></h2></div>{[['01','Discover','Understand your goals and requirements.'],['02','Plan','Agree on scope, timeline and direction.'],['03','Build','Design, develop and test the solution.'],['04','Launch','Go live and plan ongoing support.']].map(x=><div className="process-step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section><CTA/></>;
}