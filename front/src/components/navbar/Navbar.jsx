import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import haven from '../../assets/haven.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
    <div className="haven__navbar">
      <div className="haven__navbar-links">
          <div className="haven__navbar-links_logo">
            <img src={haven} alt="haven" />
          </div>
          <div className="haven__navbar-links_container">
            <p >Haven</p>
            <div className="haven__navbar-links_container-sign">
              <a href="#">Properties</a>
              <button type="button" onClick={requestAccount}>Connect</button>
            </div>
            <div className="haven__navbar-menu">
              {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
              {toggleMenu && (
                  <div className="haven__navbar-menu_container scale-up-center">
                    <div className="haven__navbar-menu_container-sign">
                    <a href="#">Properties</a>
                      <button type="button" onClick={requestAccount} >Connect</button>
                    </div>                          
                  </div>
              )}
            </div>
          </div>
      </div>
    </div>
  )

}

export default Navbar