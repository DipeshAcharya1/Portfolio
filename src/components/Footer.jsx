import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} Dipesh Acharya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
