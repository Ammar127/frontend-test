import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Map from './pages/Map';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <Map />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
