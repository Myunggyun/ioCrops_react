import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

type ChartDatas = {
  chartdata: {
    time: string;
    EC_slab1: number | string;
    EC_slab2: number | string;
    EC_drain_PC: number | string;
  }[];
};

type LegendDatas = {
  name: string;
  data: (string | number)[];
}[];

function LowValuesChart({ chartdata }: ChartDatas) {
  const [legendValue, setLegendValue] = useState<LegendDatas>([]);

  useEffect(() => {
    setLegendValue([
      {
        name: "EC_slab1",
        data: chartdata.map(data => data.EC_slab1),
      },
      {
        name: "EC_slab2",
        data: chartdata.map(data => data.EC_slab2),
      },
      {
        name: "EC_drain_PC",
        data: chartdata.map(data => data.EC_drain_PC),
      },
    ]);
  }, [chartdata]);

  const removeBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLegendValue([]);
  };

  const appearBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setLegendValue([
      {
        name: "EC_slab1",
        data: chartdata.map(data => data.EC_slab1),
      },
      {
        name: "EC_slab2",
        data: chartdata.map(data => data.EC_slab2),
      },
      {
        name: "EC_drain_PC",
        data: chartdata.map(data => data.EC_drain_PC),
      },
    ]);
  };

  const options = {
    chart: {
      type: "line",
      zoomType: "x",
    },
    title: {
      text: "DataSet Chart",
    },
    subtitle: {
      text: "Low Values",
    },
    xAxis: {
      categories: chartdata.map(data => data.time.substring(5)),
      title: {
        text: "date",
      },
    },
    yAxis: {
      title: {
        text: "value",
      },
    },
    colors: ["#0078FF", "#FF0068", "#3AFF00"],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 980,
          },
          chartOptions: {
            xAxis: {
              categories: chartdata.map(data => data.time.substring(5, 10)),
            },
            legend: {
              align: "center",
              verticalAlign: "bottom",
              layout: "horizontal",
            },
          },
        },
      ],
    },
    series: legendValue,
    legend: {
      title: {
        text: "Hide or Show by Click",
      },
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      borderWidth: 1,
      padding: 8,
      labelFormatter: function (): string {
        var obj: any = this;
        var lastVal: number =
          obj.yData.reduce(
            (acc: any, cur: number | string) =>
              typeof cur === "number" ? acc + cur : acc,
            0
          ) / chartdata.length;
        return `${obj.name} Ag : ` + lastVal.toFixed(2);
      },
    },
  };

  return (
    <>
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
      <ButtonWrapper>
        <Button onClick={appearBtnClick}>All Data Appear</Button>
        <Button onClick={removeBtnClick}>All Data Remove</Button>
      </ButtonWrapper>
    </>
  );
}

export default LowValuesChart;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-right: 3rem;
  margin-bottom: 5rem;
  float: right;
  color: tomato;
  background-color: transparent;
  border: 0.5px solid tomato;
  border-radius: 5px;
  padding: 5px 7px;
  box-shadow: 2px 2px 2px;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  :hover {
    background-color: crimson;
    color: black;
    transform: translate(0, -5px);
  }
`;
