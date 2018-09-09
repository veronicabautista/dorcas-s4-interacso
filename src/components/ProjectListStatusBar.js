import React from "react";
import Env from '../data/.env.json';

class ProjectListStatusBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectsdata: [],
      active: '',
      tasksTotal: '',
      tasksCompleted: '',
      commits: '',
      hours: ''
    }
  }

  componentDidMount() {
    this.callProjectsData();
  }

  callProjectsData() {
    fetch(
      this.props.apiService + 'projects',
      {
        method: 'get',
        withCredentials: true,
        headers: {
          'Cache-Control': 'no-cache',
          'Authorization': Env.token,
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      this.setState ({
        projectsdata: json.data
      });
    });
  }

  render() {
    return (
        <div className="projects__statistics--container">
        <div className="statistics__data projects__projects">
          <div className="data-number"><p>5</p></div>
          <div className="data-tags"><p>Proyectos activos</p></div>
        </div>
        <div className="statistics__data projects__tasks">
          <div className="data-number"><p>1.750</p></div>
          <div className="data-tags"><p>tareas a completar</p></div>
        </div>
        <div className="statistics__data projects__weeks">
          <div className="data-number"><p>205</p></div>
          <div className="data-tags"><p>completadas esta semana</p></div>
        </div>
        <div className="statistics__data projects__commits">
          <div className="data-number"><p>50</p></div>
          <div className="data-tags"><p>commits</p></div>
        </div>
        <div className="statistics__data projects__hours">
          <div className="data-number"><p>205.6</p></div>
          <div className="data-tags"><p>horas</p></div>
        </div>
      </div>
    );
  }
}

export default ProjectListStatusBar;
