// src/pages/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length === 0) {
      setSubmitted(true);
      setErrors({});
    } else {
      setErrors(valErrors);
    }
  };

  return (
    <div className="contact-page">
      <h2>Contact Us ✉️</h2>
      {submitted ? (
        <p>Thank you for your message! 😊</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <input
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}

          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
