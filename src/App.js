import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import MapContainer from "./pages/MapContainer";
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/map">
          <MapContainer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
