import React, {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import logo from '/assets/logo.png';
import { FaBars, FaCartShopping, FaX } from "react-icons/fa6";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  }

  return (
    <header>
      <img class="logo" src={logo} alt="Lindo Y Querido Logo" />
      <nav ref={navRef}>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/locations">Locations</a>
          <a href="/contact">Contact Us</a>
          <button className='nav-btn nav-close-btn' onClick={showNavbar}>
            <FaX/>
          </button>
      </nav>  
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>          
    </header>
  );
}

export default Navbar
