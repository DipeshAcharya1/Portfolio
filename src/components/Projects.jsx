import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import '../styles/Projects.css';

const projects = [
  {
    num: '01',
    title: 'Treak',
    stack: ['Laravel', 'Blade', 'PHP', 'JS'],
    description:
      'A trekking and hiking route planner designed for Himalayan trails. Offers route recommendations, gear checklists, and itinerary management.',
    github: 'https://github.com/DipeshAcharya1/Treak',
    live:   'https://github.com/DipeshAcharya1/Treak',
  },
  {
    num: '02',
    title: 'FutsalHub',
    stack: ['JavaScript', 'HTML5', 'CSS3'],
    description:
      'Digital reservation and schedule coordinator for local futsal courts. Enables turf managers and players to book and manage time slots.',
    github: 'https://github.com/DipeshAcharya1/FutsalHub',
    live:   'https://github.com/DipeshAcharya1/FutsalHub',
  },
  {
    num: '03',
    title: 'DevMetrics Tracker',
    stack: ['TypeScript', 'Laravel', 'Tailwind'],
    description:
      'Workspace analyzer that tracks developer performance, commit trends, and repository throughput with a TypeScript dashboard.',
    github: 'https://github.com/DipeshAcharya1/DevMetrics-frontend',
    live:   'https://github.com/DipeshAcharya1/DevMetrics-frontend',
  },
  {
    num: '04',
    title: 'DailyReflect',
    stack: ['HTML', 'CSS', 'Vanilla JS'],
    description:
      'A minimal, distraction-free productivity planner and reflection log for jotting daily milestones and self-reflection notes.',
    github: 'https://github.com/DipeshAcharya1/DailyReflect',
    live:   'https://github.com/DipeshAcharya1/DailyReflect',
  },
  {
    num: '05',
    title: 'Gym Management System',
    stack: ['PHP', 'MySQL', 'Bootstrap'],
    description:
      'Full billing, trainer coordination, and member tracking software for mid-size fitness centers with an admin panel.',
    github: 'https://github.com/DipeshAcharya1/gym',
    live:   'https://github.com/DipeshAcharya1/gym',
  },
];

const Projects = () => (
  <section id="projects" className="section projects-section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">Projects I've Built</h2>
        <p className="section-subtitle">A collection of real-world applications from my GitHub.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            key={p.num}
            className="project-card animate-fade-in"
            style={{ animationDelay: `${parseInt(p.num, 10) * 0.08}s` }}
          >
            <div className="card-top">
              <span className="card-num">{p.num}</span>
              <div className="card-actions">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="card-link" title="View on GitHub">
                  <Github size={15} />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="card-link" title="Live / Repo">
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>

            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            <div className="card-footer">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="card-footer-link">
                View on GitHub <span className="card-footer-arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
