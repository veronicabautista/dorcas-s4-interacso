import React, { Component } from 'react';
import Projects from './components/Projects';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Projects />    
        <Footer />
      </div>
    );
  }
}

export default App;
