import React from "react";
import PropTypes from "prop-types";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  BarChart,
  AreaChart,
} from "recharts";
import { chartTheme } from "../constants/chartTheme";

export const ChartWrapper = ({
  type,
  data,
  width = "100%",
  height = 400,
  children,
  xAxisDataKey,
  showGrid = true,
  showLegend = true,
  showTooltip = true,
}) => {
  const ChartComponent = {
    line: LineChart,
    bar: BarChart,
    area: AreaChart,
  }[type];

  const commonProps = {
    data,
    margin: { top: 20, right: 30, left: 20, bottom: 20 },
  };

  return (
    <ResponsiveContainer width={width} height={height}>
      <ChartComponent {...commonProps}>
        {showGrid && (
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={chartTheme.gridColor}
            vertical={false}
          />
        )}

        <XAxis
          dataKey={xAxisDataKey}
          tick={{ fill: chartTheme.legendColor, fontSize: chartTheme.fontSize }}
          tickLine={{ stroke: chartTheme.gridColor }}
          axisLine={{ stroke: chartTheme.gridColor }}
        />

        <YAxis
          tick={{ fill: chartTheme.legendColor, fontSize: chartTheme.fontSize }}
          tickLine={{ stroke: chartTheme.gridColor }}
          axisLine={{ stroke: chartTheme.gridColor }}
        />

        {showTooltip && (
          <Tooltip
            contentStyle={{
              background: chartTheme.tooltipBackground,
              border: `1px solid ${chartTheme.tooltipBorder}`,
              borderRadius: "6px",
              fontSize: chartTheme.fontSize,
              fontFamily: chartTheme.fontFamily,
            }}
          />
        )}

        {showLegend && (
          <Legend
            wrapperStyle={{
              fontSize: chartTheme.fontSize,
              fontFamily: chartTheme.fontFamily,
              color: chartTheme.legendColor,
            }}
          />
        )}

        {children}
      </ChartComponent>
    </ResponsiveContainer>
  );
};

ChartWrapper.propTypes = {
  type: PropTypes.oneOf(["line", "bar", "area"]).isRequired,
  data: PropTypes.array.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node.isRequired,
  xAxisDataKey: PropTypes.string.isRequired,
  showGrid: PropTypes.bool,
  showLegend: PropTypes.bool,
  showTooltip: PropTypes.bool,
};
