// src/pages/Contact.jsx
import './Contact.css';
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
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
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
    <div className="contact-container">
      <h2>📬 Contact Us</h2>
      {submitted ? (
        <p className="thank-you">Thanks for reaching out! We’ll get back to you soon. 😊</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </label>

          <label>
            Message
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </label>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
