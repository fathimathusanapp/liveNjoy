// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>

      <p>
        We'd love to hear from you! Whether you have a question, suggestion, or simply want to share your thoughts — feel free to reach out anytime.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> support@livenjoy.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Peace Street, Wellness City, India</p>
      </div>

      <p>
        You can also follow us on social media for daily wellness inspiration, fitness tips, and positive lifestyle content.
      </p>

      <p>
        We're here for you — let’s grow stronger and healthier together!
      </p>
    </div>
  );
}

export default Contact;
