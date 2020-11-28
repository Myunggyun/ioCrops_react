import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

type ChartDatas = {
  chartdata: {
    time: string;
    PipeGrow: number | string;
    PipeLow: number | string;
    Tout: number | string;
  }[];
};

type LegendDatas = {
  name: string;
  data: (string | number)[];
}[];

function MessValuesChart({ chartdata }: ChartDatas) {
  const [legendValue, setLegendValue] = useState<LegendDatas>([]);

  useEffect(() => {
    setLegendValue([
      {
        name: "PipeGrow",
        data: chartdata.map(data => data.PipeGrow),
      },
      {
        name: "PipeLow",
        data: chartdata.map(data => data.PipeLow),
      },
      {
        name: "Tout",
        data: chartdata.map(data => data.Tout),
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
        name: "PipeGrow",
        data: chartdata.map(data => data.PipeGrow),
      },
      {
        name: "PipeLow",
        data: chartdata.map(data => data.PipeLow),
      },
      {
        name: "Tout",
        data: chartdata.map(data => data.Tout),
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
      text: "Mess Values",
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
    colors: ["#520000", "#00522D", "#717171"],
    series: legendValue,
    legend: {
      title: {
        text: "Hide or Show by Click",
      },
      borderWidth: 1,
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      labelFormatter: function (): string {
        var obj: any = this;
        var lastVal: number =
          obj.yData.reduce(
            (acc: any, cur: number | string) =>
              typeof cur === "number" ? acc + cur : 0,
            0
          ) / chartdata.length;
        return `${obj.name} Avg : ` + lastVal.toFixed(2);
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

export default MessValuesChart;

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
