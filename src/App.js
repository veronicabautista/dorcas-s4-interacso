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

    this.state = {
      "currentView": 0,
      "currentTimeout": 3000
    }

    this.slideDashboard = this.slideDashboard.bind(this);

    setInterval(this.slideDashboard, this.state.currentTimeout);

  }

  slideDashboard() {
    if (this.state.currentView == 0) {
      document.querySelector('.App').classList.toggle('slideleft1');
      this.setState({
        "currentView": this.state.currentView + 1
      });
    } else {
      document.querySelector('.App').classList.toggle('slidereset');
      this.setState({
        "currentView": 0
      });
    }
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
