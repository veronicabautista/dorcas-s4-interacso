import React from "react";
import Header from './Header';
import Notifications from "./Notifications";
import Env from '../data/.env.json';
import MostCommitsChart from "./MostCommitsChart"

class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.texts = {
      title: "Proyectos"
    }
    this.state = {
      projectsCharts: [],
    }
    this.getProjectsData = this.getProjectsData.bind(this);
  }

  componentDidMount() {
    this.getProjectsData();
  }

  getProjectsData() {
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
    ).then(response => {
      console.log(response)
      return response.json();
    }
  ).then(json => {
      let projectsData = [];

      console.log(json.data[0])
      for (var elemento in json.data[0].commitRank) {
        projectsData.push({
         projectName: elemento,
         commits: json.data[0].commitRank[elemento]
       });
      }
        this.setState({
          projectsCharts: projectsData
        })
        console.log(projectsData)
      });
    }


  render() {
    return (
      <div className="projects__container databoard">
      <Header title={this.texts.title} />
       <div className="projects__statistics--container">
         <div className="statistics__data projects__projects">
           <div className="data-number"><p>15</p></div>
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
       <MostCommitsChart
        data={this.state.projectsCharts}/>
       <Notifications />
     </div>
   );
 }
}
export default Projects;
