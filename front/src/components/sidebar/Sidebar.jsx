import React from 'react';
import './sidebar.scss';
import { IoMenu } from "react-icons/io5";
import fb from '../../assets/fb.png';
import insta from '../../assets/insta.png';
import linkdn from '../../assets/linkdn.png';
import x from '../../assets/x.png';

const Sidebar = () => {
  return (

    <div className='haven__sidebar'>
          <div className="haven__sideBar-menu__title">
            <a href='#Menu'><IoMenu color="#fff" size={35} /></a>
            <h3><a href='#Menu'>Menu</a></h3>
          </div>
          <ul className="haven__sideBar-menu__list">
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Home</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Account</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Notifications</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Settings</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">About</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Help</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Disconnect</span>
              </a>
            </li>
            <li className="haven__sideBar-menu__list-item">
              <a href="#" className="menuLink">
                <span className="menuLink__title">Contact us</span>
              </a>
            </li>

            <li className="haven__sideBar-menu__list-item">
              <div className='haven__sideBa-menu__list__icons'>
                <a href='#instagram'><img src={insta} alt='instagram'/></a>
                <a href='#facebook'><img src={fb} alt='fb'/></a>
                <a href='#linkdin'><img src={linkdn} alt='linkdn'/></a>
                <a href='#twitter'><img src={x} alt='x'/></a>
              </div>
            </li>
          </ul>
        </div>
    
  )
}

export default Sidebar
