import React from 'react'
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"

type ChartDatas = {
  chartdata : {
    time:string;
    EC_slab1:number | string;
    EC_slab2:number | string;
    EC_drain_PC:number | string;
    WC_slab1:number | string;
    WC_slab2:number | string;
    CO2air:number | string;
    HumDef:number | string;
    Rhair:number | string;
    Tair:number | string;
    EnScr:number | string;
    BlackScr:number | string;
    PipeGrow:number | string;
    PipeLow:number | string;
    Iglob:number | string;
    RadSum:number | string;
    Tout:number | string;
  }[]
}

function Chart ({chartdata}:ChartDatas) {
  //chartdata는 배열형태
  // console.log(chartdata[0].time) => 2020.3.29 21:45 문자열
  const options = {
    chart: {
      type: 'line',
      zoomType: 'x'
    },
    title: {
      text: 'DataSet Chart'
    },
    xAxis:{
      categories:[],
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
        data: [1, 2, 3]
      },
    ]
  };

  return (<div>
    <HighchartsReact highcharts={Highcharts} options={options} />
    </div>)
}

export default Chart
