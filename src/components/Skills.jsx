import React from 'react';
import { Code, Database, Wrench } from 'lucide-react';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Languages', icon: <Code size={32} />, desc: 'HTML, CSS, JavaScript, Java, Python, Laravel (PHP framework)' },
    { name: 'Databases', icon: <Database size={32} />, desc: 'MySQL, PostgreSQL' },
    { name: 'Tools', icon: <Wrench size={32} />, desc: 'Visual Studio, Github, Figma, Xampp' },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical <span className="gradient-text">Expertise</span></h2>
          <p className="section-subtitle">A collection of tools and technologies I use to bring ideas to life.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card glass-morphism animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
