import React from 'react';
import Header from './Header';
import TableCalendar from './TableCalendar';

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.texts= {
      title: "Calendario"
    }
  }
  render() {
    return (
      <div className= "databoard">
        <Header title= {this.texts.title}/>
        <TableCalendar apiService= {this.props.apiService}/>
      </div>
    );
  }
}

export default Calendar;
