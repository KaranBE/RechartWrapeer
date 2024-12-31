import React from 'react';
import {
  LineChartExample,
  BarChartExample,
  PieChartExample,
  AreaChartExample,
  ScatterChartExample,
  RadarChartExample
} from './ChartExamples';

const App = () => {
  const sampleData = [
    { name: 'A', value: 400 },
    { name: 'B', value: 300 },
    { name: 'C', value: 500 },
    { name: 'D', value: 200 },
  ];

  const scatterData = [
    { x: 100, y: 200 },
    { x: 120, y: 100 },
    { x: 170, y: 300 },
    { x: 140, y: 250 },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Line Chart</h2>
      <LineChartExample data={sampleData} />
      
      <h2>Bar Chart</h2>
      <BarChartExample data={sampleData} />
      
      <h2>Pie Chart</h2>
      <PieChartExample data={sampleData} />
      
      <h2>Area Chart</h2>
      <AreaChartExample data={sampleData} />
      
      <h2>Scatter Chart</h2>
      <ScatterChartExample data={scatterData} />
      
      <h2>Radar Chart</h2>
      <RadarChartExample data={sampleData} />
    </div>
  );
};

export default App;
