import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Navigation from './Navigation'
import './Scss/App.scss';
import './Scss/Main.scss'
import Home from './Pages/Home';
import About from './Pages/About';
import Trips from './Pages/Trips';
import Study from './Pages/Study';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Navigation />
        <main className="main">
          <div className="main-page">
            <Switch>
              <Route path="/" exact>
                <Home/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/trips">
                <Trips/>
              </Route>
              <Route path="/study">
                <Study/>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
