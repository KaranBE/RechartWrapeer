export const chartTheme = {
  colors: [
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#E91E63',
    '#9C27B0',
    '#00BCD4',
    '#FFC107'
  ],
  fontFamily: 'Arial, sans-serif',
  fontSize: 12,
  axisColor: '#666666',
  gridColor: '#EEEEEE',
  tooltipBackground: 'rgba(255, 255, 255, 0.9)',
  tooltipBorder: '#CCCCCC'
};

export const getChartStyle = (index) => ({
  fill: chartTheme.colors[index % chartTheme.colors.length],
  stroke: chartTheme.colors[index % chartTheme.colors.length]
});
