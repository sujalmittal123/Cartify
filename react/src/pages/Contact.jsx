import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form-container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        <div className="contact-info-container">
          <h2>Contact Information</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Main St, Anytown, USA</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>(123) 456-7890</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contact@shoppy.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;