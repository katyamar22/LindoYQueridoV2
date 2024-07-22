import React from 'react';
import './GetInTouch.css';

const GetInTouch = () => {
  return (
    <div className='get-in-touch'>
      <h1>GET IN TOUCH</h1>
      <div className="contact-methods">
        <div className="locations-div">
    
            <p> View our Locations here.</p>
            <p>We'd love to hear from you! For any inquiries, feedback, or correspondence, please send your mail to our office at:</p>
            <p>
            Luz Y Tierra<br/>
            P.O. Box 12345<br/>
            Charlotte, NC 28201<br/>
            </p>
            <p>Our team will respond to your mail promptly. Thank you for reaching out to us!</p>
        </div>

        <div className="phone-div">
     
            <p>Have any questions or need assistance? Give us a call! Our customer service team is here to help during our business hours:</p>
            <p>
            <strong>Phone Number:</strong> +52 55 1234 5678<br/>
            <strong>Business Hours:</strong><br/>
            Monday - Friday: 9:00 AM - 6:00 PM<br/>
            Saturday: 10:00 AM - 4:00 PM<br/>
            Sunday: Closed
            </p>
            <p>We look forward to assisting you!</p>
        </div>

        <div className="email-div">

            <p>Prefer to reach out via email? No problem! Send us your inquiries, feedback, or any other messages to our email address, and our team will get back to you as soon as possible:</p>
            <p>
            <strong>Email Address:</strong> <a href="mailto:info@luzytierra.com">info@luzytierra.com</a>
            </p>
            <p>We aim to respond to all emails within 24 hours during our business days.</p>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
