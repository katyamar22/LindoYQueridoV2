import React from 'react';
import './Hero-Home.css'
import { FaArrowRight } from 'react-icons/fa6';


const HeroHome = () => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <h1>Bringing a peice of Mexico into your home</h1>
        <p>Discover the vibrant artistry of authentic Mexican pottery at Luz Y Tierra. Each piece is handcrafted with love and tradition, bringing the rich culture and history of Mexico directly to your home. Explore our collection and add a touch of Mexican elegance to your decor.</p>
        <button className='shop-btn' href='/products'>Shop Now<FaArrowRight/> </button>
      </div>
    </div>
  )
}

export default HeroHome
