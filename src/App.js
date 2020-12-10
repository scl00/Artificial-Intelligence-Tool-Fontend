import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Algoritmos } from './components/Algoritmos';
import { Inicio } from './components/Inicio';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <div className = "container p-4">
        <Switch>
          <Route path = "/about" component = {About} />
          <Route path = "/algoritmos" component = {Algoritmos} />
          <Route path = "/" component = {Inicio}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
