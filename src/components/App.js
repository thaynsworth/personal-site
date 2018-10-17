import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import About from '../screens/About';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import Tech from '../screens/Tech';
import Work from '../screens/Work';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/tech" component={Tech} />
          <Route path="/work" component={Work} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
