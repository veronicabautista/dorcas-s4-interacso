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

class MostHoursChart extends React.Component {

  render(){
    return (
      <Chart
        dataSource={this.props.hours}
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

  export default MostHoursChart;
