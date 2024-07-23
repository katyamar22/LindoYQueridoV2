import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Footer.css';
import facebook from '/assets/facebook.svg';
import instagram from '/assets/instagram.svg';
import tiktok from '/assets/tiktok.svg';


const Footer = () => {
    const form = useRef();

    const [email, setEmail] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    }
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vnsnelj', 'template_8ogkrro', form.current, {publicKey:'JEVFDCRxo2LAhti5L',
    })
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <footer>
    <div className="pages">
        <ul>
            <h4 className='list-header'>Pages</h4>
            <li><a href='/'>Home</a></li>
            <li><a href='/productpage'>Products</a></li>
            <li><a href='/locations'>Locations</a></li>
            <li><a href='/contact'>Contact Us</a></li>
        </ul>
    </div>

    <div className="resources">
        <ul>
            <h4 className='list-header'>Resources</h4>
            <li>Privacy Policy</li>
            <li>Refund Policy & Shipping Policy</li>
            <li>Terms of Service</li>
        </ul>
    </div>

    <div className="subscribe">
        <h4>Join our communidad :) </h4>
        <p>Subscribe to our email list</p>
        <div className="subscription-form">
            <form ref={form} onSubmit={sendEmail}>
                <input type='text' placeholder='Enter email here'/>
                <button className='subscribe-button'>Subscribe</button>
            </form>
        </div>


    </div>

    <div className="social">
        <img className='social-icon' src={facebook} alt ='facebook icon' />
        <img className='social-icon' src={instagram} alt ='instagram icon' />
        <img className='social-icon' src={tiktok} alt ='tiktok icon' />
    </div>

    <div className="copyright">
        <p>Copyright &copy;2024. All rights reserved.</p>
        
    </div>

    </footer>
  )
}

export default Footer
