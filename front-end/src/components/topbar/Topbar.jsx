import React, {useState} from 'react';
import './topbar.scss';
import {RiMenu3Line, RiCloseLine, RiUserLine} from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Topbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='topbar__container'>

        <div className="topbar__container-left">
         <div className='haven__navbar-links_logo'>
          <img src={logo} alt='logo' />
          <span className='haven__navbar-links_name'>Haven</span>
         </div>
        </div>

        <div className="topbar__container-right">
        <div className='haven__navbar-user'>
          <button type='button'className='disconnect-button'>Disconnect</button>
          <button type='button' className='user-button'>
           <RiUserLine color="#fff" size={27} /></button>
        </div>
        <div className='haven__navbar-menu'>
         {toggleMenu
           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
         }
         {toggleMenu && (
          <div className='haven__navbar-menu_container'>
            <div className='haven__navbar-menu_container-links-user'>
              <p><a href="#user-account">User Account</a></p>
              <p><a href="#disconnect">Disconnect</a></p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div> 
  )
}

export default Topbar