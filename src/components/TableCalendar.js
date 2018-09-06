import React from 'react';
import Env from '../data/.env.json';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      datesToPrint: []
    };
    this.getCalendarDates();
  }
  componentDidMount() {
    this.getCalendarNotifications();
  }
  makeCalendarStructure() {
  let datesInHTML = [];
  this.state.datesToPrint.forEach(dateToPrint => {
    let dayContainerClass = 'day__container';
    if (dateToPrint.event !== null) {
      dayContainerClass += ' withEvent';
    }
    datesInHTML.push(
      <div className = {dayContainerClass}>
        <div className = "day__label">{dateToPrint.label}</div>
        <div className = "day__notifications">
          <div className = "day__notifications-event">{dateToPrint.event}</div>
          <div className = "day__notifications-deadline">{dateToPrint.deadline}</div>
        </div>
      </div>
    )
  })
  return <div className="calendar__container">
    <div className="calendar__weekday">Lunes</div>
    <div className="calendar__weekday">Martes</div>
    <div className="calendar__weekday">Miércoles</div>
    <div className="calendar__weekday">Jueves</div>
    <div className="calendar__weekday">Viernes</div>
    {datesInHTML}
  </div>
}
getCalendarDates() {
  let startDate = this.calculateStartDate();
  let weekDays = 0;
  let datesToPrint = this.state.datesToPrint;
  for (let i = 0; i < 20; i++) {
    datesToPrint.push(
      {
        date: this.formatDate(startDate),
        label: startDate.getDate(),
        event: null,
        deadline: null
      })
      startDate = this.incrementDaysInMiliseconds(startDate, 1);
      if (weekDays === 4){
        startDate = this.incrementDaysInMiliseconds(startDate, 2);
        weekDays = 0;
      } else {
        weekDays++;
      }
    }
    //No se puede hacer setState antes de montar el componente, como se le llama del constructor todavia no está montado. Lo guardamos tal cual.
    this.state.datesToPrint = datesToPrint;
  }
  formatDate(date) {
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let day = ('0' + date.getDate()).slice(-2);
    return date.getFullYear() + '-' + month + '-' + day;
  }
  getCalendarNotifications() {
    fetch(
      this.props.apiService + 'calendar',
      {
        method: 'get',
        withCredentials: true,
        headers: {
          'Cache-Control': 'no-cache',
          'Authorization': Env.token,
          'Content-Type': 'application/json'
        }
      }
    ).then(response => {
      return response.json();
    }
  ).then(json => {
    this.setDatesNotifications(json.data);
  });
}
setDatesNotifications(json){
  let datesToPrint = this.state.datesToPrint;
  datesToPrint.forEach((dateToPrint, index) => {
    json.forEach(dayFromApi => {
      if (dayFromApi.datecalendar === dateToPrint.date) {
        if (dayFromApi.datetype === 'event') {
          dateToPrint.event = dayFromApi.text
        }
        if (dayFromApi.datetype === 'deadline') {
          dateToPrint.deadline = dayFromApi.text
        }
      }
    });
    datesToPrint[index] = dateToPrint;
  });
  this.setState({
    datesToPrint: datesToPrint
  })
}
incrementDaysInMiliseconds(date, numDays) {
  let milisecondsInADay = 86400000;
  let totalMiliseconds = milisecondsInADay * numDays;
  return new Date(date.getTime() + totalMiliseconds);
}
calculateStartDate() {
  let today = new Date();
  let milisecondsInADay = 86400000;
  let mondayPastWeek = today.getDay()-1 + 7;
  let mondayPastWeekMiliseconds = milisecondsInADay * mondayPastWeek;
  let miliseconds = today.getTime() - mondayPastWeekMiliseconds;
  let startDate = new Date(miliseconds);
  return startDate; //objeto con el día de inicio
}
render() {
  return (
    <React.Fragment>
      {this.makeCalendarStructure()}
    </React.Fragment>
  );
}
}

export default Table;
