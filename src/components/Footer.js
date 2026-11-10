import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';
import { site } from '../config/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand"><Logo /><p>We turn business ideas into thoughtful digital experiences through web development and custom software.</p></div>
        <div><h4>Explore</h4><Link to="/services">Services</Link><Link to="/work">Our Work</Link><Link to="/about">About Us</Link><Link to="/contact">Contact</Link></div>
        <div><h4>Get in touch</h4><a href={`mailto:${site.email}`}><Mail size={16}/>{site.email}</a><span><MapPin size={16}/>{site.location}</span><Link className="footer-contact" to="/contact">Start a project <ArrowUpRight size={15}/></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} DivSpan Tech. All rights reserved.</span><span>Built with clarity. Designed to grow.</span></div>
    </footer>
  );
}