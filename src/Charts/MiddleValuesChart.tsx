import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    Rhair:number | string;
    WC_slab1:number | string;
    WC_slab2:number | string;
  }[]
}

function MiddleValuesChart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "Middle Values"
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
        name: "Rhair",
        data: chartdata.map(data=>data.Rhair)
      },
      {
        name: "WC_slab1",
        data: chartdata.map(data=>data.WC_slab1)
      },
      {
        name: "WC_slab2",
        data: chartdata.map(data=>data.WC_slab2)
      },
    ]
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default MiddleValuesChart
