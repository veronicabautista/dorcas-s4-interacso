import React from "react";
import Env from '../data/.env.json';

class ProjectListStatusBar extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        projectsInfo: [],
        active: 0
      };

      this.activeProjects = this.activeProjects.bind(this);
    }
    componentDidMount() {
      this.getProjectsInfo();
    }

    activeProjects(e) {
      const resultActive = parseInt(e.currentTarget.value, 10);
      this.setState({
        active: resultActive
      });
    }

    getProjectsInfo() {
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
      .then(response => {
        return response.json();
      }
    )
    }


  render() {
    return (
        <div className="projects__statistics--container">
        <div className="statistics__data projects__projects">
          <div className="data-number"><p>{this.state.active}</p></div>
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
