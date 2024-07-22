// src/components/ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error message on change
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.message) formErrors.message = 'Message is required';
    if (!formData.phone) formErrors.phone = 'Phone Number is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // Handle form submission logic here, such as sending the data to a server or email
      console.log('Form submitted:', formData);
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: '',
        phone: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="contact-form">
    <div className="text">
        <p>Have a question, feedback, or just want to get in touch? Fill out the form below, and our team will respond to your message as soon as possible:</p>
    </div>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label><br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
        
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label><br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
 
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="phone">
            <label htmlFor="phone">Phone Number:</label><br />
            <input type="text" id='phone' name='phone' value={FormData.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label><br />
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
        
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default ContactForm;

