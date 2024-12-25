import React, { useState } from 'react';
import '../styles/App.css'; // Add styles for the Contact page if needed

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Reset the form
    setFormData({ name: '', email: '', message: '' });
    alert('Your message has been sent successfully!');
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feedback, or suggestions, feel free to reach out using the form below:</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
