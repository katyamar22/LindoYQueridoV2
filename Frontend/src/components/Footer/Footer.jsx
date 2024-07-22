import React from 'react';
import './Footer.css';
import facebook from '/assets/facebook.svg';
import instagram from '/assets/instagram.svg';
import tiktok from '/assets/tiktok.svg';


const Footer = () => {
  return (
    <footer>
    <div className="pages">
        <ul>
            <h4 className='list-header'>Pages</h4>
            <li><a href='/'>Home</a></li>
            <li><a href='/products'>Products</a></li>
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
        <input type='text' placeholder='Enter email here'/>

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
