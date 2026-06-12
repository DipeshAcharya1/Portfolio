import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container hero-container">

      {/* LEFT — text */}
      <div className="hero-content animate-fade-in">
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Available for new opportunities
        </div>

        <h1 className="hero-title">
          Full Stack<br />
          <span className="name">Dipesh Acharya</span>
        </h1>

        <p className="hero-description">
          A software developer from Pokhara, Nepal — specialising in
          Laravel, Java, and modern JavaScript. I build clean, scalable
          web applications that solve real problems.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary">
            Get in touch
          </a>
        </div>
      </div>

      {/* RIGHT — info card */}
      <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.15s' }}>
        <div className="hero-card">
          <div className="card-dots">
            <span className="card-dot r"></span>
            <span className="card-dot y"></span>
            <span className="card-dot g"></span>
          </div>
          <div className="card-label">developer.js</div>
          <div className="card-code">
            <span className="kw">const</span> developer = &#123;<br />
            &nbsp;&nbsp;<span className="key">name</span>: <span className="str">'Dipesh Acharya'</span>,<br />
            &nbsp;&nbsp;<span className="key">location</span>: <span className="str">'Pokhara, Nepal'</span>,<br />
            &nbsp;&nbsp;<span className="key">role</span>: <span className="str">'Full Stack Dev'</span>,<br />
            &nbsp;&nbsp;<span className="key">open</span>: <span className="kw">true</span><br />
            &#125;;
          </div>
          <div className="card-tags">
            <span className="card-tag">Laravel</span>
            <span className="card-tag">React</span>
            <span className="card-tag">Java</span>
            <span className="card-tag">TypeScript</span>
            <span className="card-tag">MySQL</span>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Hero;
