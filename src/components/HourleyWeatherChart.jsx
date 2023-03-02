import React from 'react';
import { Line } from 'react-chartjs-2';

const HourleyWeatherChart = ({hourlyData}) => {




  const chartData = {
    labels: hourlyData.map((data) => data.dt_txt),
    datasets: [
      {
        label: hourlyData.map((data) => data.dt),
        data: hourlyData.map((data) => data.temp),
        borderColor: 'rgb(255, 99, 132)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default HourleyWeatherChart;