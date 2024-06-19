import { Pie } from "@ant-design/plots";
import React from "react";

const ChartPie = () => {
  const config = {
    data: [
      { type: "Quần Áo", value: 27 },
      { type: "Giày ", value: 25 },
      { type: "Mũ", value: 18 },
      { type: "Ví", value: 15 },
      { type: "Áo Thun", value: 10 },
      { type: "Quần Bò", value: 5 },
    ],
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default ChartPie;
