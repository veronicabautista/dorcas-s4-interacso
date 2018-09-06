import React from 'react';
import Header from './Header';
import Table from './TableCalendar';

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.texts = {
      title: "Calendario"
    }
  }
render() {
  return (
    <React.Fragment>
      <Header title={this.texts.title}/>
      <Table apiService = {this.props.apiService}/>
    </React.Fragment>
  );
}
}

export default Calendar;
