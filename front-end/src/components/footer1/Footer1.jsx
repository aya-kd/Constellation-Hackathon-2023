import React from 'react';
import './footer1.css';

const Footer1 = () => {
  return (
    <div className="haven__footer">
        <div className="havenn__footer-start">
          <p><a href="/terms">Terms Of Service</a></p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
        <div className="haven__footer-end">
           <p><a href="/">Home</a></p> 
           <p><a href="/about">About</a></p>
           <p><a href="/rent-house">Rent House</a></p>
           <p><a href="/blog">Blog</a></p>
           <p><a href="/contact">Contact</a></p>
      </div>
    </div>
  )
}

export default Footer1