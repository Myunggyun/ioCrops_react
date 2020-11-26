import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    CO2air:number | string;
    Iglob:number | string;
  }[]
}

function HighValuesChart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "High Values"
    },
    xAxis:{
      categories:chartdata.map((data, index)=>index%27===0 ? data.time : ""),
      title:{
        text:"date"
      },
    },
    yAxis:{
      title:{
        text:"value"
      }
    },
    series: [
      {
        name: "CO2air",
        data: chartdata.map(data=>data.CO2air)
      },
      {
        name: "Iglob",
        data: chartdata.map(data=>data.Iglob)
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default HighValuesChart
