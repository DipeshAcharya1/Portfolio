import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
          form.current.reset();
      }, (error) => {
          setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
          console.error(error.text);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">Have a project in mind? Reach out and let's build something together.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><Mail size={24} /></div>
              <div>
                <h3>Email</h3>
                <p>dipeshacharya463@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><Phone size={24} /></div>
              <div>
                <h3>Phone</h3>
                <p>+977 9805111882</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><MapPin size={24} /></div>
              <div>
                <h3>Location</h3>
                <p>Pokhara, Nepal</p>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label htmlFor="user_name">Your Name</label>
              <input id="user_name" type="text" name="user_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email Address</label>
              <input id="user_email" type="email" name="user_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary" 
              disabled={isSubmitting}
              style={{ width: '100%', border: 'none', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <Send size={18} style={{ marginLeft: '10px' }} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
