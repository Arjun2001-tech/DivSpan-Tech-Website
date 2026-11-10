import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  const Icon = service.icon;
  return <article className="service-card">
    <div className="service-card-top"><span className="service-icon"><Icon size={22}/></span><span className="service-number">{service.number}</span></div>
    <h3>{service.title}</h3><p>{service.description}</p>
    <Link to="/contact" className="text-link">Discuss this service <ArrowUpRight size={16}/></Link>
  </article>;
}