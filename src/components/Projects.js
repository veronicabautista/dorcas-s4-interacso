import React from "react";
import Header from './Header';
import Notifications from "./Notifications";

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
      return response.json();
    }
  ).then(json => {
      let projectsData = [];

      console.log(json.data)
      json.data.forEach(project => {
        // Recorro data del api y saco nombre y nro de tasks de cada uno
          projectsData.push({
----->>>          commitsChart: project.,
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
       <MostCommitsChart />
       <Notifications />
     </div>
   );
 }
}
export default Projects;
