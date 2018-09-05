import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';
import Calendar from './components/Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';
  }
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Calendar apiService = {this.apiService}/>
=======
      <div className="container__all">
        <Projects />
>>>>>>> master
      </div>
    );
  }
}

export default App;
