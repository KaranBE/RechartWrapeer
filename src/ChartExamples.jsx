import React from 'react';
import {
  Line, Bar, Area, Pie, Scatter, Radar,
  XAxis, YAxis, CartesianGrid, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis, Cell,
  Legend, Tooltip
} from 'recharts';
import ChartWrapper from './components/ChartWrapper';
import { chartTheme, getChartStyle } from './constants/chartTheme';

export const LineChartExample = ({ data }) => (
  <ChartWrapper type="line" data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} />
    <XAxis dataKey="name" stroke={chartTheme.axisColor} />
    <YAxis stroke={chartTheme.axisColor} />
    <Tooltip />
    <Legend />
    <Line name="Values" dataKey="value" {...getChartStyle(0)} />
  </ChartWrapper>
);

export const BarChartExample = ({ data }) => (
  <ChartWrapper type="bar" data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} />
    <XAxis dataKey="name" stroke={chartTheme.axisColor} />
    <YAxis stroke={chartTheme.axisColor} />
    <Tooltip />
    <Legend />
    <Bar name="Values" dataKey="value" {...getChartStyle(0)} />
  </ChartWrapper>
);

export const PieChartExample = ({ data }) => (
  <ChartWrapper type="pie" data={data}>
    <Tooltip />
    <Legend />
    <Pie
      dataKey="value"
      nameKey="name"
      data={data}
      label
    >
      {data.map((entry, index) => (
        <Cell key={index} fill={chartTheme.colors[index % chartTheme.colors.length]} />
      ))}
    </Pie>
  </ChartWrapper>
);

export const AreaChartExample = ({ data }) => (
  <ChartWrapper type="area" data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} />
    <XAxis dataKey="name" stroke={chartTheme.axisColor} />
    <YAxis stroke={chartTheme.axisColor} />
    <Tooltip />
    <Legend />
    <Area name="Values" dataKey="value" {...getChartStyle(0)} />
  </ChartWrapper>
);

export const ScatterChartExample = ({ data }) => (
  <ChartWrapper type="scatter" data={data}>
    <CartesianGrid strokeDasharray="3 3" stroke={chartTheme.gridColor} />
    <XAxis dataKey="x" stroke={chartTheme.axisColor} />
    <YAxis dataKey="y" stroke={chartTheme.axisColor} />
    <Tooltip />
    <Legend />
    <Scatter name="Values" data={data} {...getChartStyle(0)} />
  </ChartWrapper>
);

export const RadarChartExample = ({ data }) => (
  <ChartWrapper type="radar" data={data}>
    <PolarGrid stroke={chartTheme.gridColor} />
    <PolarAngleAxis dataKey="name" stroke={chartTheme.axisColor} />
    <PolarRadiusAxis stroke={chartTheme.axisColor} />
    <Tooltip />
    <Legend />
    <Radar name="Values" dataKey="value" {...getChartStyle(0)} />
  </ChartWrapper>
);