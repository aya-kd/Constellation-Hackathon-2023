import React from 'react';
import './header1.css'
import refugee from "../../assets/refugee.png";
import { useState } from "react";

 const Header1 = () => {
 
  const [walletAddress, setWalletAddress] = useState("");

async function requestAccount(){
  console.log('Requesting account....');
  
  if(window.ethereum) {
    console.log('detected.');

    try{
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);
    } catch (error){
      console.log('error connecting ...');
    }

  } else{
    console.log('metamask not detected.');
  }
}
  return (
    <div className="haven__header">
      <div className="haven__header-contentainer">
        <h1 className="gradient__text">Be The Key to a Safe Haven!</h1>
        <p>Contribute to our efforts in aiding refugees who have lost their homes due to conflict, persecution, or disasters by covering their rental expenses.</p>
        <button type="button" onClick={requestAccount} >Donate</button>
     </div>
      <div className="haven__header-image">
        <img src={refugee} alt="refugee" />
      </div>
    </div>
  );
};
 
export default Header1;