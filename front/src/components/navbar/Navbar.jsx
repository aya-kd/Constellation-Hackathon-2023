import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import haven from '../../assets/Polygon 6.png';
import './navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="haven__navbar">
      <div className="haven__navbar-links">
        <div className="haven__navbar-links_logo">
           <img src={haven} />
        </div>
        <div className="haven__navbar-links_container">
          <p>Haven</p>
        </div>
        <div className="haven__navbar-sign">
          <p>Properties</p>
          <button type="button">Connect</button>
        </div>
        <div className="haven__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        </div>

      </div>

    </div>
  )
}

export default Navbar