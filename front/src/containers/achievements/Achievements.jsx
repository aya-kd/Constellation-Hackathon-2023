import React from 'react';
import './achievements.css';
import {  Group_13 } from './imports';

const Achievements = () => {
  return (
    <div className="haven__achievements " >
      <div className="haven__achievements-title">
        <h3>Our Achievements</h3>
      </div>
      <div className="haven__achievements-images">
        <div className="haven__achievements-images-all">
          <img src={Group_13} alt="Group_13" />
        </div>
        <div className="haven__achievements-images-content1">
          <div className="haven__achievements-images-content1-title">
          <h3 className="haven__achievements-images-content1-title-title1"> Collected Donations</h3>
          <h3 className="haven__achievements-images-content1-title-title2">Helped Refugees</h3>
          <h3 className="haven__achievements-images-content1-title-title3">Listed Houses</h3>
          </div>
          <p className="haven__achievements-images-content1-text1">3M $</p>
          <p className="haven__achievements-images-content1-text2">150K</p>
          <p className="haven__achievements-images-content1-text3">82K</p>
        </div>
      </div>
    </div>
  )
}

export default Achievements