import React from "react";
import Header from './Header';
import WeekTasksChart from './WeekTasksChart';
import Notifications from './Notifications';
import Env from '../data/.env.json';
import '../App.css'

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.texts = {
      title: "Equipo"
    }
    this.state = {
      weekChartData: [],
      memberPics: []
    }
    this.getTeamData = this.getTeamData.bind(this);
  }

  componentDidMount() {
    this.getTeamData();
  }

  getTeamData() {
    fetch(
      this.props.apiService + 'team',
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
      let taskData = [];
      let memberPicsData = [];
      json.data.forEach(person => {
        // Recorro data del api y saco nombre y nro de tasks de cada uno
        taskData.push({
          member: person.nombre,
          tasks: person.tasks
        });
        // Recorro data del api y saco la foto de cada uno
        memberPicsData.push(person.photo);
      });
      this.setState({
        weekChartData: taskData,
        memberPics: memberPicsData
      })
    });
  }

  render() {
    return (
      <div className="team__container databoard">
        <Header title={this.texts.title} />
        <div className="main__container-team">
          <WeekTasksChart
            data={this.state.weekChartData}
            memberPics={this.state.memberPics}
          />
          <div className="dashborad chart__commits"><p className="commits-title">Commits Semana</p><div className="commits-pic"></div></div>
          <div className="dashborad average__container-commits"><p className="commits-number">5</p><p className="commits-text">Commits/dia/persona</p></div>
          <div className="dashborad average__container-tasks"><p className="tasks-number">4</p><p className="tasks-text">Tareas/dia/persona</p></div>
          <div className="dashborad people__container-asana"><p className="asana-title">Asana killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">145</p><p className="killer-detail">Tareas completadas esta semana</p></div>
          <div className="dashborad people__container-git"><p className="git-title">Git killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">305</p><p className="killer-detail">Commits esta semana</p></div>
        </div>
        <Notifications />
      </div>
    );
  }
}

export default Team;
