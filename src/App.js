import React, { Component } from 'react';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Team from './components/Team';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';
    this.state = {
      currentDataboard: 0,
      currentTransition: "0.5s",
      currentSlideLeft: "0",
      totalDataboards: 4
    }
    this.showNextDashboard = this.showNextDashboard.bind(this)
  }

  // componentDidMount() {
  //   this.effect = setInterval(this.showNextDashboard, 3000);
  // }

  showNextDashboard(){
    if (this.state.currentDataboard == this.state.totalDataboards) {
      this.setState({
        currentDataboard: 0,
        currentSlideLeft: "0"
      })
    } else {
      const newSlide = this.state.currentDataboard * -100;
      this.setState({
        currentDataboard: this.state.currentDataboard + 1,
        currentSlideLeft: `${newSlide}%`
      })
    }
  }

  render() {
    const sliderStyles = {
     left: this.state.currentSlideLeft,
     transition: this.state.currentTransition
   }
    return (
      <div className="visor" style={sliderStyles}>
        <Calendar apiService = {this.apiService}/>
        <Projects />
        <ProjectDetail />
        <Team />
      </div>
    );
  }
}

export default App;
