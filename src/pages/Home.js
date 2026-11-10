
import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Sparkles,
  Code2,
  Palette,
  ShoppingCart,
  Workflow
} from 'lucide-react';

import { Link } from 'react-router-dom';

import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import CTA from '../components/CTA';

import { services } from '../data/services';
import { getProjects, useLocalCollection } from '../services/localStore';

const readProjects = () => getProjects();

export default function Home() {
  const projects = useLocalCollection(readProjects);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">

          <div className="hero-content">
            <span className="eyebrow">
              <i /> YOUR DIGITAL GROWTH PARTNER
            </span>

            <h1>
              Technology that<br />
              moves your business <em>forward.</em>
            </h1>

            <p className="hero-description">
              We design and develop modern websites, online stores and custom
              software that help businesses work smarter and grow confidently.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="button button-primary">
                Start a project <ArrowUpRight size={17} />
              </Link>

              <Link to="/work" className="button button-outline">
                Explore our work
              </Link>
            </div>

            <div className="hero-proof">
              <span className="proof-icon">
                <CheckCircle2 size={18} />
              </span>
              <span>
                Thoughtful design · Reliable development · Clear communication
              </span>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div
            className="hero-visual"
            aria-label="DivSpan Tech services dashboard"
          >
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-panel">

              <div className="panel-head">
                <span className="panel-logo">DS</span>
                <span>DIVSPAN / DIGITAL STUDIO</span>
                <span className="live-dot" />
              </div>

              {/* UPDATED SERVICES DASHBOARD */}
              <div className="panel-main">

                <span className="panel-label">
                  WHAT WE DO
                </span>

                <div className="panel-title">
                  Digital solutions.<br />
                  <b>Built for growth.</b>
                </div>

                <div className="service-dashboard">

                  <div className="dashboard-service">
                    <span className="dashboard-icon">
                      <Code2 size={17} />
                    </span>

                    <div className="dashboard-info">
                      <strong>Web Development</strong>
                      <small>Modern websites & web apps</small>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="service-check"
                    />
                  </div>

                  <div className="dashboard-service">
                    <span className="dashboard-icon">
                      <Palette size={17} />
                    </span>

                    <div className="dashboard-info">
                      <strong>UI / UX Design</strong>
                      <small>Creative user experiences</small>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="service-check"
                    />
                  </div>

                  <div className="dashboard-service">
                    <span className="dashboard-icon">
                      <ShoppingCart size={17} />
                    </span>

                    <div className="dashboard-info">
                      <strong>E-commerce</strong>
                      <small>Online stores & solutions</small>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="service-check"
                    />
                  </div>

                  <div className="dashboard-service">
                    <span className="dashboard-icon">
                      <Workflow size={17} />
                    </span>

                    <div className="dashboard-info">
                      <strong>Custom Software</strong>
                      <small>Business-focused applications</small>
                    </div>

                    <CheckCircle2
                      size={16}
                      className="service-check"
                    />
                  </div>

                </div>
              </div>

              <div className="panel-foot">
                <Sparkles size={16} />
                <span>Designed around your goals</span>
                <b>↗</b>
              </div>

            </div>

            <div className="floating-chip chip-top">
              <Globe2 size={16} /> INDIA · WORLDWIDE
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-dot" /> Digital, made practical
            </div>

          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
        <div className="container trust-inner">
          <span>WHAT WE CREATE</span>
          <b>Business Websites</b>
          <b>E-commerce</b>
          <b>Custom Software</b>
          <b>Digital Workflows</b>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="section container">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="The right tools for"
          highlight="your next step."
          description="From your first website to a custom business platform, we help you choose and build what actually supports your goals."
        />

        <div className="service-grid home-services">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.number} service={s} />
          ))}
        </div>

        <div className="section-action">
          <Link to="/services" className="button button-outline">
            Explore all services <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section projects-section">
        <div className="container">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="A closer look at"
            highlight="what we build."
            description="A selection of portfolio work and project examples across different business needs."
          />

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
              />
            ))}
          </div>

          <div className="section-action">
            <Link to="/work" className="button button-outline">
              View our work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY DIVSPAN TECH SECTION */}
      <section className="why-section section">
        <div className="container why-grid">

          <div>
            <span className="eyebrow">WHY DIVSPAN TECH</span>

            <h2>
              Good technology<br />
              should feel <em>simple.</em>
            </h2>

            <p>
              We keep the process collaborative and focused: understand the
              problem, plan the right solution, build carefully and support
              you after launch.
            </p>

            <Link to="/about" className="text-link">
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="why-points">

            <div>
              <span>01</span>
              <section>
                <h3>Built around your business</h3>
                <p>
                  We start by understanding your goals, users and day-to-day needs.
                </p>
              </section>
            </div>

            <div>
              <span>02</span>
              <section>
                <h3>Clear at every step</h3>
                <p>
                  Practical timelines, agreed scope and straightforward communication.
                </p>
              </section>
            </div>

            <div>
              <span>03</span>
              <section>
                <h3>Ready to grow</h3>
                <p>
                  Responsive, maintainable solutions designed with the next stage in mind.
                </p>
              </section>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTA />
    </>
  );
}
