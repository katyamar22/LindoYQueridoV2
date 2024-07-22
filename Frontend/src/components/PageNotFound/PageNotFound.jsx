import React from 'react';
import './PageNotFound.css'
import { BiConfused } from "react-icons/bi";

const PageNotFound = () => {
  return (
    <div>
      <h1 className='error-header'>Oops! The page you were looking for doesn't exist!</h1>
      <div className="error-message">
        <div className="error-text">
            <p>You may have mistyped the address or the page may have been moved or deleted.</p>
            <button className='home-btn'><a href="/">Back to Home</a></button>
            </div>
        <div className="error-icon">
            <BiConfused />
        </div>
        </div>
    </div>
  )
}

export default PageNotFound
