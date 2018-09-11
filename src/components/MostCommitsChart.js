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
        size: 25,
        family: "Open Sans"
      }
    }
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
    font: {
      color: "white",
      family: "Open Sans",
      size: 20
    }
  },
  grid:{
    visible: false
  },
}
const legendsSettings = {
  visible: false
}

class MostCommitsChart extends React.Component {

  render(){
    return (
      <Chart
        dataSource={this.props.data}
        commonSeriesSettings={settings}
        series={series}
        size={size}
        argumentAxis={axisSettings}
        valueAxis={axisSettings}
        legend={legendsSettings}
      />
    );
  }
}

export default MostCommitsChart;
