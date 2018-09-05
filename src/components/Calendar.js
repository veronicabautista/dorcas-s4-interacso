import React from 'react';
import Env from '../data/.env.json';

class Calendar extends React.Component {
  makeCalendarStructure() {
    let weeks = [];
    for (let i = 0; i < 4; i++) {
      let days = [];
      for (let j= 0; j < 5; j++) {
        days.push(<td className="day"></td>);
      }
      weeks.push(<tr className='week'>{days}</tr>);
    }
    this.getCalendarNotifications();
    return <table><tbody>{weeks}</tbody></table>;
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

  render() {
    console.log(Env.token);
    console.log('hola estoy funcionando')
    return (
      <React.Fragment>
        {this.makeCalendarStructure()}
      </React.Fragment>
      );
  }
}

export default Calendar;
