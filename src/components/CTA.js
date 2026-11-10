import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div><span className="eyebrow">HAVE A PROJECT IN MIND?</span><h2>Let's build something<br/><em>meaningful.</em></h2><p>Tell us what you have in mind. We'll help you plan the right digital solution.</p></div><Link className="button button-white" to="/contact">Start a conversation <ArrowUpRight size={17}/></Link></div></section>;
}