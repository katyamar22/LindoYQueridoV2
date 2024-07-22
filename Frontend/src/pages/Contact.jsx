import React from 'react';
import '../App.css'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import GetInTouch from '../components/GetInTouch/GetIntTouch';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <GetInTouch />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;