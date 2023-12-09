import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Lending from './pages/lending/Lending';



function App() {
  return (
    <>
      <Router>
          <Switch>
            <Route exact path='/'  component={Lending} />
            <Route path='/Home' component={Home} />
          </Switch>
      </Router>
    
    </>
  );
}
export default App;
