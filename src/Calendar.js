import React from 'react';

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
            'Authorization': 'Bearer D6RFLhez9daKPzS9GbCWmVYosadjwWDXSTyQFseD6eLrJnCa',
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
    return (
      <React.Fragment>
        {this.makeCalendarStructure()}
      </React.Fragment>
      );
  }
}

export default Calendar;
