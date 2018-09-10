import React from 'react';
import { Chart } from 'devextreme-react';


const settings =
        {
            type: "bar",
            argumentField: "hoursName",
            color: "green"
        };
const series  =
       [
        {
          color: "#57718D",
          valueField: "time",
        },

      ];
  const size =
      {
        height: 300

      }
  const axisSettings =
      {
        label: {
          overlappingBehavior: "none",

        },
        grid:{
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
         <div className="chart-hours">
            <p>Proyectos más activos (horas)</p>
            <Chart
              dataSource={this.props.hours}
              commonSeriesSettings={settings}
              series={series}
              size={size}
              argumentAxis={axisSettings}
              valueAxis={axisSettings}
              legend={legendsSettings}
            />
         </div>
       </div>
      );
  }
}

export default ProjectsChart;
