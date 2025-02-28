// src/pages/Contact.js
import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission, like sending to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Have questions or want to schedule a consultation? Reach out to us!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>123 Nutrition Avenue<br />Healthy City, HC 12345</p>
          </div>
          
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>Main Office: (123) 456-7890<br />Support: (123) 456-7891</p>
          </div>
          
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>info@nutrilife.com<br />support@nutrilife.com</p>
          </div>
          
          <div className="info-card">
            <div className="icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Office Hours</h3>
            <p>Monday-Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
          </div>

          <div className="social-media">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <h2>Find Us</h2>
        <div className="map-placeholder">
          {/* In a real project, you would embed a Google Maps iframe here */}
          <img src="/api/placeholder/1200/400" alt="Map placeholder" />
          <div className="map-overlay">
            <p>Map would be embedded here in a real project</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>What should I expect during my first consultation?</h3>
            <p>During your first visit, we'll discuss your health history, dietary habits, lifestyle, and goals. This allows us to create a personalized nutrition plan tailored to your specific needs.</p>
          </div>
          <div className="faq-item">
            <h3>Do you accept insurance?</h3>
            <p>Yes, we accept many major insurance plans. Please contact our office with your insurance information to verify coverage prior to your appointment.</p>
          </div>
          <div className="faq-item">
            <h3>How often will I need to see my dietician?</h3>
            <p>This varies depending on your individual needs and goals. Typically, we recommend follow-up appointments every 2-4 weeks initially, then less frequently as you progress.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer virtual consultations?</h3>
            <p>Yes, we offer both in-person and virtual consultations to accommodate our clients' preferences and schedules.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;