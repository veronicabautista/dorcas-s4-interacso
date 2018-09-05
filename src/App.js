import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';
import './App.css';
import Calendar from './components/Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';

    setTimeout(function(){
      document.querySelector('.App').classList.toggle('slideleft1');
    }, 2000);

    setTimeout(function(){
      document.querySelector('.App').classList.toggle('slidereset');
    }, 5000);

  }
  render() {
    return (
      <div className="App">
        <Calendar apiService = {this.apiService}/>
        <Projects />
      </div>
    );
  }
}

export default App;
