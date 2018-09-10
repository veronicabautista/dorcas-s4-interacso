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

class MostCommitsChart extends React.Component {


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
              argumentAxis={axisSettings}
              valueAxis={axisSettings}
              legend={legendsSettings}
          />
        </div>
       </div>
      );
  }
}

export default MostCommitsChart;
