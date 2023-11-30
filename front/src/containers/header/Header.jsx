import React from 'react'
import './header.css'
import refugee from "../../assets/Rectangle 43.png"

const Header = () => {
  return (

    <div className="haven__header-all">
      <div className="haven__header-content">
      <h1 className="gradient__text">Be The Key to a Safe Haven!</h1>
      <p>Contribute to our efforts in aiding refugees who have lost their homes due to conflict, persecution, or disasters by covering their rental expenses.</p>
      </div>
    
      <div className="haven__header-image-container">
        <img src={refugee} alt="refugee" className="haven__header-image-content" />
        <button type="button" className="haven__header-button">Donate</button>
      </div>
    </div>
  )
}

export default Header