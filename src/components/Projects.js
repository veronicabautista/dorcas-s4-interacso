import React from "react";
import Header from './Header';
import ProjectListStatusBar from "./ProjectListStatusBar"; 
import Notifications from "./Notifications";
import Env from '../data/.env.json';
import MostCommitsChart from "./MostCommitsChart";
import MostHoursChart from "./MostHoursChart";


class Projects extends React.Component {
  constructor(props) {
    super(props)
    this.texts = {
      title: "Proyectos"
    }
    this.state = {
      projectsCharts: [],
      hoursCharts: []
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
      }
  ).then(json => {
      let hoursData = [];

      for (var hoursProject in json.data[0].hourRank) {
        hoursData.push({
         hoursName: hoursProject,
         hours: json.data[0].hourRank[hoursProject]
       });
      }
        this.setState({
          hoursCharts: hoursData
        })
      });
    }


  render() {
    return (
      <div className="projects__container databoard">
        <Header title={this.texts.title} />
        <ProjectListStatusBar apiService={this.props.apiService} />
        <MostCommitsChart data={this.state.projectsCharts}/>
        <MostHoursChart time={this.state.hoursCharts}/>
        <Notifications />
     </div>
   );
 }
}
export default Projects;
