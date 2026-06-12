import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import '../styles/About.css';

const education = [
  {
    degree: 'BSc. Information Technology',
    institution: 'Informatics College Pokhara',
    period: 'Ongoing',
    icon: <GraduationCap size={20} />,
  },
  {
    degree: '+2 Science',
    institution: 'Motherland Secondary School',
    period: 'Completed',
    icon: <BookOpen size={20} />,
  },
];

const About = () => (
  <section id="about" className="section about-section">
    <div className="container">
      <div className="section-header">
        <span className="section-label">About Me</span>
        <h2 className="section-title">Background &amp; Education</h2>
      </div>

      <div className="about-content">
        <div className="about-text animate-fade-in">
          <p>
            I'm a software developer based in Pokhara, Nepal, with a solid foundation
            in both computer science theory and hands-on application development.
            My curiosity about how things work under the hood led me to pursue IT.
          </p>
          <p>
            I focus on building scalable web solutions with Laravel and React,
            always keeping code clean and maintainable. I enjoy learning new
            tools and adapting quickly to whatever the project demands.
          </p>
        </div>

        <div className="education-timeline animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="edu-label">Education</span>
          {education.map((item, i) => (
            <div key={i} className="education-card">
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

export default About;
