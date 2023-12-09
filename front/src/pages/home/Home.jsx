import React from 'react';
import './home.scss';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Properties from '../../components/properties/Properties';
import Footer from '../../components/footer/Footer';


const Home = () => {
  return (
    
      <>
      <Topbar/>
      <div className="home_container">
       <Sidebar/>
       <Header/>
       </div>
       <Properties />
       <Footer />
      </>
    
  )
}

export default Home