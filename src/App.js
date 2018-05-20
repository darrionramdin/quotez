import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import QuoteGenerator from './containers/QuoteGenerator';
import SavedQuotes from './containers/SavedQuotes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={QuoteGenerator} />
          <Route path="/saved" component={SavedQuotes} />
        </div>
      </Router>
    );
  }
}

export default App;
