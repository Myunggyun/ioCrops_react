import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    PipeGrow:number | string;
    PipeLow:number | string;
    Tout:number | string;
  }[]
}

function MessValuesChart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "Mess Values"
    },
    xAxis:{
      categories:chartdata.map((data, index)=>index%27===0 ? data.time : ""),
      title:{
        text:"date"
      }
    },
    yAxis:{
      title:{
        text:"value"
      }
    },
    series: [
      {
        name: "PipeGrow",
        data: chartdata.map(data=>data.PipeGrow)
      },
      {
        name: "PipeLow",
        data: chartdata.map(data=>data.PipeLow)
      },
      {
        name: "Tout",
        data: chartdata.map(data=>data.Tout)
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default MessValuesChart
