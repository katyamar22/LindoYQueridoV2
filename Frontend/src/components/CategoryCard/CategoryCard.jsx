import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ image, caption, icon}) => {
  return (
    <div className='category-card'>
      <img src={image} alt={caption} className='category-img' />
      <div className="overlay">
        <div className="icon">{icon}</div>
        <div className="caption">{caption}</div>
      </div>
    </div>
  )
}

export default CategoryCard
