import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Finance Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    },
    {
      title: 'Social Network App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Selected <span className="gradient-text">Works</span></h2>
          <p className="section-subtitle">A glimpse into some of the projects I've built recently.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="icon-btn"><Github size={20} /></a>
                    <a href={project.live} className="icon-btn"><ExternalLink size={20} /></a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
