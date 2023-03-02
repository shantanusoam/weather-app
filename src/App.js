import React, { useState } from 'react'
import axios from 'axios'
import ForcastWeatherDays from './components/ForcastWeatherDays'
import HourleyWeatherChart from './components/HourleyWeatherChart'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [Flocation, setFLocation] = useState('')
  const [Hlocation, setHLocation] = useState('')

  var appid = 'e2fe4bf0d3954e25a493b899a559f43d'
  // https://openweathermap.org/data/2.5/weather?id=1273294&appid=439d4b804bc8187953eb36d2a8c26a02
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${appid}`
  const furl = ({lat,lon}) => `https://openweathermap.org/data/2.5/onecall?lat=${lat}7&lon=${lon}&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
        
        axios.get(furl(response.data.coord)).then((response) => {
          setFLocation(response.data.daily)
          setHLocation(response.data.hourly)
          console.log(response.data.daily)
        })
      })
     
      setLocation('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
       


      </div>
      {Flocation&&<ForcastWeatherDays data={Flocation}/>}
      {Hlocation&&<HourleyWeatherChart hourlyData={Hlocation}/>}

    </div>
  );
}

export default App;