import React from "react";
import "./Chart.css";

const Chart = () => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <Bar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
