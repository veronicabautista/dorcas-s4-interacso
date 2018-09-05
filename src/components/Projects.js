import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="main__container hijo">
        <div className="statistics__container">
          <div className="statistics__data projects">
            <div className="data-number"><p>15</p></div>
            <div className="data-tags"><p>Proyectos activos</p></div>
          </div>
          <div className="statistics__data tasks">
            <div className="data-number"><p>1.750</p></div>
            <div className="data-tags"><p>tareas a completar</p></div>
          </div>
          <div className="statistics__data weeks">
            <div className="data-number"><p>205</p></div>
            <div className="data-tags"><p>completadas esta semana</p></div>
          </div>
          <div className="statistics__data commits">
            <div className="data-number"><p>50</p></div>
            <div className="data-tags"><p>commits</p></div>
          </div>
          <div className="statistics__data hours">
            <div className="data-number"><p>205.6</p></div>
            <div className="data-tags"><p>horas</p></div>
          </div>
        </div>
        <div className="statistics__chart">
          <div className="chart-commits"><p>Proyectos más activos (commits)</p></div>
          <div className="chart-hours"><p>Proyectos más activos (horas)</p></div>
        </div>
      </div>
    );
  }
}

export default Projects;
