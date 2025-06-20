
import React, { useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const formChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div >
      <Header />
      <h2>Contact Us</h2>


      <form onSubmit={formSubmit} style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={formChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={formChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={formChange}
            rows="4"
            required
            style={{ width: '100%', padding: '8px' }}
          />
        </div>

        <div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#333', color: '#fff', border: 'none' }}>
            Send Message
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}

export default Contact;
