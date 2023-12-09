import React from 'react';
import './informations.css';
import {  email,call, frame } from './imports';

const Informations = () => {
  return (
    <div className="haven__informations">
      <div className="haven__informations-about">
        <h4>About Us</h4>
        <div className="haven__informations-about-p">
          <p>Haven is a web3 application that helps refugees pay for rent.</p>
          <p >follow us  <img src={frame} alt="frame"  className="haven__informations-about-p-click"/></p>
        </div>
      </div>
      <div className="haven__informations-links">
        <h4>Links</h4>
        <div className="haven__informations-links-p">
          <p>about us</p>
          <p>meet our teams</p>
          <p>news & media</p>
          <p>our projects</p>
          <p>contacts</p>
        </div>
        
      </div>
      <div className="haven__informations-help">
          <h4 >Help?</h4>
          <div className="haven__informations-help-p">
            <p className="haven__informations-help-upper">FAQ</p>
            <p>term & condition</p>
            <p>contact support</p>
            <p>our services</p>
          </div>
      </div>
      <div className="haven__informations-contact">
        <h4>Quick Contact</h4>
        <div className="haven__informations-contact-p">
          <h5>contact us</h5>
          <p><img src={email} alt="email" /> info@haven.com</p>
          <p><img src={call} alt="call" />+777 2536 7885</p>
        </div>
      </div>
       
    </div>
  )
}

export default Informations