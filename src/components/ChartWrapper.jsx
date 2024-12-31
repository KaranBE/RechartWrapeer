import React from 'react';
import {
  PieChart, ComposedChart, RadarChart, ScatterChart,
  LineChart, BarChart, AreaChart, ResponsiveContainer,
  Tooltip, Legend
} from 'recharts';

const chartComponents = {
  pie: PieChart,
  composed: ComposedChart,
  radar: RadarChart,
  scatter: ScatterChart,
  line: LineChart,
  bar: BarChart,
  area: AreaChart
};

const ChartWrapper = ({
  type = 'line',
  width = '100%',
  height = 400,
  data = [],
  children,
  ...props
}) => {
  const ChartComponent = chartComponents[type];

  return (
    <ResponsiveContainer width={width} height={height}>
      <ChartComponent data={data} {...props}>
        <Tooltip />
        <Legend />
        {children}
      </ChartComponent>
    </ResponsiveContainer>
  );
};

export default ChartWrapper;
