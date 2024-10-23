import React, { useState } from 'react';
import axios from 'axios';
import '../ components/contactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contacts/submit', formData);
      alert('Message submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting the message', error);
      alert('Error submitting the message');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>Get in touch</p>
        <div className="contact-details">
          <p><i className="fas fa-map-marker-alt"></i> 4671 Richard St, Nashville, New York</p>
          <p><i className="fas fa-envelope"></i> example@mail.com</p>
          <p><i className="fas fa-phone"></i> +1 234 567 890</p>
        </div>
      </div>

      <div className="contact-right">
        <h2>Get In Touch With Us</h2>
        <p>And we will get back to you.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
