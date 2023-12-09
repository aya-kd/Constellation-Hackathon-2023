import React from 'react';
import './header1.css'
import refugee from "../../assets/refugee.png";


 const Header1 = () => {
  const handleDonateClick = () => {
    console.log('Button clicked! ');
  }
  return (
    <div className="haven__header">
      <div className="haven__header-contentainer">
        <h1 className="gradient__text">Be The Key to a Safe Haven!</h1>
        <p>Contribute to our efforts in aiding refugees who have lost their homes due to conflict, persecution, or disasters by covering their rental expenses.</p>
        <button type="button" onClick={handleDonateClick} >Donate</button>
     </div>
      <div className="haven__header-image">
        <img src={refugee} alt="refugee" />
      </div>
    </div>
  );
};
 
export default Header1;