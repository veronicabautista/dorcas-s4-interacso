import React, { Component } from 'react';
// import Projects from './components/Projects';
import Team from './components/Team';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Team />
        {/* <Projects /> */}
      </div>
    );
  }
}

export default App;
