import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';
  }
  render() {
    return (
      <div className="App">
        <Calendar apiService = {this.apiService}/>
        <Projects />
        <ProjectDetail />
      </div>
    );
  }
}

export default App;
