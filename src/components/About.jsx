import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const education = [
    {
      degree: 'BSc.IT',
      institution: 'Informatics College Pokhara',
      period: 'Present',
      icon: <GraduationCap size={24} />
    },
    {
      degree: '+2 Science',
      institution: 'Motherland Secondary School',
      period: 'Completed',
      icon: <BookOpen size={24} />
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          <p className="section-subtitle">My educational background and journey in technology.</p>
        </div>

        <div className="about-content">
          <div className="about-text animate-fade-in">
            <p>
              I am a dedicated software developer based in Pokhara, with a strong foundation in both 
              theoretical computer science and practical application development. My journey began with 
              a fascination for how things work under the hood, which led me to pursue a degree in IT.
            </p>
            <p>
              Currently, I focus on building scalable web solutions using modern technologies like 
              Laravel and React. I am constantly learning and adapting to new trends in the 
              ever-evolving tech landscape.
            </p>
          </div>

          <div className="education-timeline">
            {education.map((item, index) => (
              <div key={index} className="education-card glass-morphism animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="education-icon">{item.icon}</div>
                <div className="education-details">
                  <span className="education-period">{item.period}</span>
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-institution">{item.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
