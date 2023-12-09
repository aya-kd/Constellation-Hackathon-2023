import React from 'react'
import { Brand, Navbar, Footer1,  Informations, Connect, Header1, Achievements } from '../../components';
import './lending.css';

const Lending = () => {
  return (
    <div className="lending">
      <div className="gradient__bg">
      <Navbar />
      <Header1 />
    </div>
    <Brand />
    <Achievements />
    <Connect />
    <Informations />
    <Footer1 />
    </div>
  )
}

export default Lending