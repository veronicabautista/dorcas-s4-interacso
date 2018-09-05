import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';
<<<<<<< HEAD
import Calendar from './components/Calendar';
=======
import Header from './components/Header';
import Footer from './components/Footer';
>>>>>>> master

class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';
  }
  render() {
    return (
<<<<<<< HEAD
<<<<<<< HEAD
      <div className="App">
        <Calendar apiService = {this.apiService}/>
=======
      <div className="container__all">
        <Projects />
>>>>>>> master
=======
      <div className="App">
        <Header />
        <Projects />    
        <Footer />
>>>>>>> master
      </div>
    );
  }
}

export default App;
