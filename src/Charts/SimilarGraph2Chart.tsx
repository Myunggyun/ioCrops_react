import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    BlackScr:number | string;
    EnScr:number | string;
  }[]
}

function SimilarGraph2Chart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "Similar Graph2"
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
        name: "BlackScr",
        data: chartdata.map(data=>data.BlackScr)
      },
      {
        name: "EnScr",
        data: chartdata.map(data=>data.EnScr)
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default SimilarGraph2Chart
