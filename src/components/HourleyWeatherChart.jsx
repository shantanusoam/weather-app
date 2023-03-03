import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
function convertUnixTimestamp(dt) {
  const date = new Date(dt * 1000);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  // return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return `${hours}:${minutes}`
}
const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
   
      data: [65, 59, 80, 81, 56]
    }
  ]
}


const HourleyWeatherChart = ({hourlyData}) => {

  var hourly12 = hourlyData.slice(0, 12);


  const chartData = {

    labels:  hourly12.map((data) => 
  
        convertUnixTimestamp(data.dt)
      
        
      
      ), 
    datasets: [
      {
        fill: false,
        lineTension: 0.5,
        borderWidth: 2,
        backgroundColor: 'rgba(75,192,192,1)',
        label: 'Temprature',
        data: hourly12.map((data) => data.temp),
        borderColor: 'rgb(255, 99, 132)',
      
      },
      // {
      //   label: 'Wind Speed',
      //   data: hourly12.map((data) => data.wind_speed),
      //   borderColor: 'rgb(54, 162, 235)',
      //   fill: false,
      // },
      // {
      //   label: 'Hourly Pressure',
      //   data: hourly12.map((data) => data.weather.description),
      //   borderColor: 'rgb(75, 192, 192)',
      //   fill: false,
      // },
    ],
  };

  return (
    <div>
      <Line data={chartData}  options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }} />
    </div>
  );
};

export default HourleyWeatherChart;