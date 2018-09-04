import React, { Component } from 'react';
import Projects from './Projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container__all">
        <Projects />
      </div>
    );
  }
}

export default App;
