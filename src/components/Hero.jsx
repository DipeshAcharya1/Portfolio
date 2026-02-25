import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <span className="hero-subtitle">Available for new opportunities</span>
          <h1 className="hero-title">
            I'm <span className="gradient-text">Dipesh Acharya</span> <br />
            Full Stack Developer
          </h1>
          <p className="hero-description">
            A passionate software developer from Pokhara, Nepal. 
            I specialize in building robust web applications using Laravel, Java, and modern JavaScript frameworks.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Work <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="visual-card glass-morphism">
             <div className="card-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
             </div>
             <div className="card-content">
                <pre>
                  <code>
                    <span className="code-keyword">const</span> developer = &#123; <br />
                    &nbsp;&nbsp;name: <span className="code-string">'Dipesh Acharya'</span>, <br />
                    &nbsp;&nbsp;location: <span className="code-string">'Pokhara, Nepal'</span>, <br />
                    &nbsp;&nbsp;status: <span className="code-string">'Building amazing things'</span> <br />
                    &#125;;
                  </code>
                </pre>
             </div>
          </div>
          <div className="hero-abstract-shape"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
