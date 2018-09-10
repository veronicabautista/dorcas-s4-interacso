import React from 'react';
import { Chart } from 'devextreme-react';


const settings =
        {
            type: "bar",
            argumentField: "projectName",
            color: "green"
        };
const series  =
       [
        {
          color: "#57718D",
          valueField: "commits",
          label: {
            visible: true,
            backgroundColor: "none",
            font: {
              color: "white",
              size: 18
            }
          }
        },

      ];
  const size =
      {
        height: 300

      }
  const argumentAxisSettings =
      {
        label: {
          overlappingBehavior: "none",
        }
      }
  const valueAxisSettings = {
    grid: {
      visible: false
    }
  }
  const legendsSettings = {
    visible: false
  }

class ProjectsChart extends React.Component {


  render(){
    return (
       <div className="statistics__chart">
         <div className="chart-commits">
          <p>Proyectos más activos (commits)</p>
          <Chart
              dataSource={this.props.data}
              commonSeriesSettings={settings}
              series={series}
              size={size}
              argumentAxis={argumentAxisSettings}
              valueAxis={valueAxisSettings}
              legend={legendsSettings}
          />
        </div>
         <div className="chart-hours"><p>Proyectos más activos (horas)</p></div>
       </div>
      );
  }
}

export default ProjectsChart;
