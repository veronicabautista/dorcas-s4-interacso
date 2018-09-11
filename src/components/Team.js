import React from "react";
import Header from './Header';
import Notifications from './Notifications';
import '../App.css'
import Env from '../data/.env.json';

class Team extends React.Component {
  constructor(props) {
    super(props)
    this.texts = {
      title: "Equipo"
    }
    this.state = {
      tasksWinner: {},
      commitsWinner: {}
    }
  }

  componentDidMount() {
    this.getKillerInfo();
  }

  getKillerInfo() {
    if(typeof Env !== "undefined" & Env.token !== "undefined") {
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
        if(response.status === 401){
          throw Error(response.statusText);
        } else {
          return response.json();
        }
      }
    ).then(json => {
      this.getTasksWinner(json);
      this.getCommitsWinner(json);
    }).catch(error => {
      alert("El token es incorrecto");
      console.error(error);
    });
  } else {
    alert("No esta usted autorizado");
  }
}

  getTasksWinner(json) {
    let maxTasks = 0;
    let winnerTasksObj = {};
    for (let i = 0; i < json.data.length; i++) {
      if (json.data[i].tasks > maxTasks) {
        maxTasks = json.data[i].tasks;
        winnerTasksObj = json.data[i];
      }
    }
    this.setState({
      tasksWinner: winnerTasksObj,
    });
  }

  getCommitsWinner(json) {
    let maxCommits = 0;
    let winnerCommitsObj = {};
    json.data.map(peopleData => {
      if (peopleData.commits > maxCommits) {
        maxCommits = peopleData.commits;
        winnerCommitsObj = peopleData;
      }
    });
    this.setState({
      commitsWinner: winnerCommitsObj,
    });
  }

  render() {
    return (
      <div className="team__container databoard">
        <Header title={this.texts.title} />
        <div className="main__container-team">
          <div className="dashborad chart__tasks">
            <p className="tasks-title">Tareas Semana</p>
            <div className="tasks-pic">
            </div>
          </div>
          <div className="dashborad chart__commits">
            <p className="commits-title">Commits Semana</p>
            <div className="commits-pic"></div>
          </div>
          <div className="dashborad average__container-commits">
            <p className="commits-number">5</p>
            <p className="commits-text">Commits/dia/persona</p>
          </div>
          <div className="dashborad average__container-tasks">
            <p className="tasks-number">4</p>
            <p className="tasks-text">Tareas/dia/persona</p>
          </div>
          <div className="dashborad people__container-asana">
            <p className="asana-title">Asana killer</p>
            <img className="profile-pic" src={this.state.tasksWinner.photo}></img>
            <p className="killer-name">{this.state.tasksWinner.nombre}</p>
            <p className="killer-record">{this.state.tasksWinner.tasks}</p>
            <p className="killer-detail">Tareas completadas esta semana</p>
          </div>
          <div className="dashborad people__container-git">
            <p className="git-title">Git killer</p>
            <img className="profile-pic" src={this.state.commitsWinner.photo}></img>
            <p className="killer-name">{this.state.commitsWinner.nombre}</p>
            <p className="killer-record">{this.state.commitsWinner.commits}</p>
            <p className="killer-detail">Commits esta semana</p>
          </div>
        </div>
        <Notifications />
      </div>
    );
  }
}

export default Team;
