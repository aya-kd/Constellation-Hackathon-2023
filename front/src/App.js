import React from 'react'
import { Footer,  Informations, Connect, Header, Achievements } from './containers';
import { Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Achievements />
    <Connect />
    <Informations />
    <Footer />
    </div>
  )
}

export default App