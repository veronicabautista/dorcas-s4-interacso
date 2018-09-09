import React from "react";
import Header from './Header';
import WeekTasksChart from './WeekTasksChart';
import WeekCommitsChart from './WeekCommitsChart';
import TeamStatusBar from './TeamStatusBar';
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
      let teamData = [];
      let memberPicsData = [];
      let averageCommits = 0;
      let averageTask = 0;

      console.log(json.data)
      json.data.forEach(person => {
        // Recorro data del api y saco nombre y nro de tasks de cada uno
        averageCommits = averageCommits + person.commits
        averageTask = averageTask + person.tasks
        teamData.push({
          member: person.nombre,
          tasks: person.tasks,
          commits: person.commits
        });
        // Recorro data del api y saco la foto de cada uno
        memberPicsData.push(person.photo);
      });
      this.setState({
        weekChartData: teamData,
        memberPics: memberPicsData,
        averageTask: averageTask/json.data.length,
        averageCommits: averageCommits/json.data.length
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
          <WeekCommitsChart
            data={this.state.weekChartData}
            memberPics={this.state.memberPics}
          />
          <TeamStatusBar
           averageTask={this.state.averageTask}
           averageCommits={this.state.averageCommits}
          />
          <div className="dashborad people__container-asana"><p className="asana-title">Asana killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">145</p><p className="killer-detail">Tareas completadas esta semana</p></div>
          <div className="dashborad people__container-git"><p className="git-title">Git killer</p><div className="profile-pic"></div><p className="killer-name">John Doe</p><p className="killer-record">305</p><p className="killer-detail">Commits esta semana</p></div>
        </div>
        <Notifications />
      </div>
    );
  }
}

export default Team;
