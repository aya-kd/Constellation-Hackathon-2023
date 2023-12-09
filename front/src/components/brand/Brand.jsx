import React from 'react';
import './brand.css';
import { Group_1952,Group1940 } from './imports';


const Brand = () => {
  return (
    <div>
        <div className="haven__brand ">
        <div className="haven__brand-SupportRefugees">
          <div className="haven__brand-SupportRefugees-image">
            <img src={Group_1952} alt="Group_1952" className="haven__brand-SupportRefugees-image-img1" />
          </div>
          <div className="haven__brand-SupportRefugees-text">
            <h3 >Support Refugees</h3>
            <p >Help refugee families and individuals suffering loss and displacement due to conflict, persecution, or disaster find a safe haven.</p>
          </div>
        </div>
        <div className="haven__brand-Transparency">
          <div className="haven__brand-Transparency-text">
            <h3 >Transparency & Trust</h3>
            <p >Harness the capabilities of blockchain technology to trace your donations and ensure their secure and accurate delivery to the intended destination.</p>
          </div>
          <div className="haven__brand-Payments">
           <div className="haven__brand-Payments-text">
              <h3 >Cross-Boarder Payments</h3>
              <p >You can use cryptocurrencies to make  your donations in no time from anywhere across the globe.</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brand