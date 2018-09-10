import React from 'react';
import { Chart } from 'devextreme-react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.compact.css';

const settings =
        {
            type: "bar",
            argumentField: "member",
            color: "green"
        };
const series  =
       [
        {
          color: "#57718D",
          valueField: "commits"
        },

      ];
  const size =
      {
        height: 120

      }
  const axisSettings =
      {
        label: {
          overlappingBehavior: "none",
          visible: false
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
         <div className="chart-commits"><p>Proyectos más activos (commits)</p></div>
         <Chart
            dataSource={this.props.data}
            commonSeriesSettings={settings}
            series={series}
            size={size}
            argumentAxis={axisSettings}
            valueAxis={axisSettings}
            legend={legendsSettings}
        />
         <div className="chart-hours"><p>Proyectos más activos (horas)</p></div>
       </div>
      );
  }
}

export default ProjectsChart;
