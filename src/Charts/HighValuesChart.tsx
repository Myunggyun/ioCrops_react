import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";

type ChartDatas = {
  chartdata: {
    time: string;
    CO2air: number | string;
    Iglob: number | string;
  }[];
};

type LegendDatas = {
  name: string;
  data: (number | string)[];
}[];

function HighValuesChart({ chartdata }: ChartDatas) {
  const [legendValue, setLegendValue] = useState<LegendDatas>([]);

  useEffect(() => {
    setLegendValue([
      {
        name: "CO2air",
        data: chartdata.map(data => data.CO2air),
      },
      {
        name: "Iglob",
        data: chartdata.map(data => data.Iglob),
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
        name: "CO2air",
        data: chartdata.map(data => data.CO2air),
      },
      {
        name: "Iglob",
        data: chartdata.map(data => data.Iglob),
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
      text: "High Values",
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
    colors: ["#2EA4CA", "#FF5D00"],
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

export default HighValuesChart;

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
