import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    HumDef:number | string;
    Tair:number | string;
  }[]
}

function SimilarGraph1Chart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "Similar Graph1"
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
        name: "HumDef",
        data: chartdata.map(data=>data.HumDef)
      },
      {
        name: "Tair",
        data: chartdata.map(data=>data.Tair)
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default SimilarGraph1Chart
