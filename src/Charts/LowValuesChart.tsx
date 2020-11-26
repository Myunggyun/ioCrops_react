import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    EC_slab1:number | string;
    EC_slab2:number | string;
    EC_drain_PC:number | string;
  }[]
}

function LowValuesChart ({chartdata}:ChartDatas) {
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    subtitle:{
      text: "Low Values"
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
        name: "EC_slab1",
        data: chartdata.map(data=>data.EC_slab1)
      },
      {
        name: "EC_slab2",
        data: chartdata.map(data=>data.EC_slab2)
      },
      {
        name: "EC_drain_PC",
        data: chartdata.map(data=>data.EC_drain_PC)
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default LowValuesChart
