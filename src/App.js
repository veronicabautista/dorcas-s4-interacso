import React, { Component } from 'react';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects />
        <ProjectDetail />
      </div>
    );
  }
}

export default App;
