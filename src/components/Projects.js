import React from "react";
import Header from './Header';
import ProjectListStatusBar from "./ProjectListStatusBar";
import Notifications from "./Notifications";

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.texts = {
      title: "Proyectos"
    }
  }
  render() {
    return (
      <div className="projects__container databoard">
      <Header title={this.texts.title} />
      <ProjectListStatusBar apiService = {this.props.apiService} />
       <div className="statistics__chart">
         <div className="chart-commits"><p>Proyectos más activos (commits)</p></div>
         <div className="chart-hours"><p>Proyectos más activos (horas)</p></div>
       </div>
       <Notifications />
     </div>
   );
 }
}
export default Projects;
