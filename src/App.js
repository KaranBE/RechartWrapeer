import React from "react";
import { Line, Bar, Area } from "recharts";
import { ChartWrapper } from "./components/ChartWrapper";
import { chartTheme } from "./constants/chartTheme";

const data = [
  { month: "Jan", sales: 1000, profit: 500 },
  { month: "Feb", sales: 1500, profit: 700 },
  { month: "Mar", sales: 1200, profit: 600 },
];

export default App = () => {
  return (
    <ChartWrapper type="line" data={data} xAxisDataKey="month" height={400}>
      <Line
        type="monotone"
        dataKey="sales"
        stroke={chartTheme.colors[0]}
        strokeWidth={2}
      />
      <Line
        type="monotone"
        dataKey="profit"
        stroke={chartTheme.colors[1]}
        strokeWidth={2}
      />
    </ChartWrapper>
  );
};
