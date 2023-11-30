import React from 'react'
import { Footer, Blog, Possibility, Features, haven, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import Haven from './containers/haven/Haven';
import './App.css';
 

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Haven />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
    </div>
  )
}

export default App