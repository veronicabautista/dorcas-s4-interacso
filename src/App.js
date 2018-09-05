import React, { Component } from 'react';
import './App.css';
import Calendar from './components/Calendar';

class App extends Component {
  constructor(props){
    super(props);
    this.apiService = 'https://databoards-api.interacso.com/';
  }
  render() {
    return (
      <div className="App">
        <Calendar apiService = {this.apiService}/>
      </div>
    );
  }
}

export default App;
