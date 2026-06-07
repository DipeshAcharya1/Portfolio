import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Github, Linkedin, Instagram, Facebook } from './BrandIcons';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="logo">
          PORTFOLIO<span className="dot">.</span>
        </a>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="social-links">
            <a href="https://github.com/DipeshAcharya1"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/dipesh-acharya-13b806278/">
              <Linkedin size={20} />
            </a>
            <a href="https://www.instagram.com/dipesh_ach/">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/dipesh.acharya.5815">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
