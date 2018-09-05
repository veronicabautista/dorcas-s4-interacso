import React from 'react';
import Env from '../data/.env.json';
import Header from './Header';
import Footer from './Footer';

class Calendar extends React.Component {
  constructor(props){
    super(props)
    this.texts = {
      title: "Calendar"

    }
  }
  makeCalendarStructure() {
    let startDate = this.calculateStartDate();
    let weeks = [];
    let dateToPrint = 0;
    for (let i = 0; i < 4; i++) {
      let days = [];
      for (let j= 0; j < 5; j++) {
        dateToPrint = startDate.getDate(); // el día de inicio
        days.push(
          <td className="calendar__day">
            <h2 className="callendar__day--number">{dateToPrint}</h2>
          </td>
        );
        startDate.setDate(dateToPrint + 1);
      }
      startDate.setDate(dateToPrint + 2); // Para que entre en lunes en la siguiente vuelta, realmente ya estoy en sabado cuando termino el bucle.
      weeks.push(<tr className='calendar__week'>{days}</tr>);
    }
    this.getCalendarNotifications();
    return <table className="table__calendar"><tbody>{weeks}</tbody></table>;
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
      console.log('Funciono pero devuelvo un 204...')
      console.log(json);
    });
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
    console.log(Env.token);
    console.log('hola estoy funcionando')
    return (
      <React.Fragment>
        <Header title={this.texts.title}/>
          {this.makeCalendarStructure()}
        <Footer />
      </React.Fragment>
      );
  }
}

export default Calendar;
