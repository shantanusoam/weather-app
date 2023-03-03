import React, { useState } from 'react'
import axios from 'axios'
import ForcastWeatherDays from './components/ForcastWeatherDays'
import HourleyWeatherChart from './components/HourleyWeatherChart'
import { convertUnixTimestamp, convertUnixTimestamp_Days } from './Helpers/functions/HelperFunctions'
import { WeatherICon } from './Helpers/IconsFetcher'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const [Flocation, setFLocation] = useState('')
  const [Hlocation, setHLocation] = useState('')
  const [error, seterror] = useState(false)

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
        }).catch(function (error) {
          seterror(true)
        })
      }).catch(function (error) {
        seterror(true)
        console.log(error)
      })
     
      setLocation('')
    }
  }

  return (
    <div className="app flex flex-col justify-center lg:items-center  bg-slate-200">

      <div className="search">
        <h2 className='text-2xl pb-0 mb-4 border-b-2 border-orange-500'> Search City name For Weather Forcast</h2>
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      {
        error&&<div class="bg-red-50 border-l-8 border-red-900 mb-2">
        <div class="flex items-center">
            <div class="p-2">
                <div class="flex items-center">
                    <div class="ml-2">
                        <svg class="h-8 w-8 text-red-900 mr-2 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <p class="px-6 py-4 text-red-900 font-semibold text-lg">Please fix the
                        following
                        errors.</p>
                </div>
                <div class="px-16 mb-4">
                    <li class="text-md font-bold text-red-500 text-sm">Name Is Incorrect</li>
                    <li class="text-md font-bold text-red-500 text-sm">field is required.</li>
                </div>
            </div>
        </div>
    </div>
      }
     { Flocation&&<div className="container w-4/5 ">
        <div className="top">
        <div className="flex flex-row gap-3 text-orange-500 text-xl font-medium ml-6">
            <p>{convertUnixTimestamp_Days(data.dt)}</p>
          </div>
          <div className="flex flex-row gap-3 text-2xl font-bold ml-6">
            <p>{data.name}</p>
            <p>{data.sys.country}</p>
          </div>
          <div className="flex flex-row  items-center w-full">
          <div className="flex justify-center items-center">
                <img
                  src={WeatherICon(data.weather[0].description)}
                  alt={`Weather Icon ${data.weather[0].description}`}
                  width={100}
                  height={80}
                ></img>
              </div>
            {data.main ? <h1 className='text-7xl font-bold text-center'>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="flex flex-row text-xl gap-2 ml-6 font-medium">
          {data.main ? <p> feels like {data.main.feels_like}°C</p> : null}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            
          </div>
          <div className='ml-6 border-l-4 border-orange-500 pl-4 text-xl mt-4'>
            <div className='flex flex-row gap-6'> 
            <div className="flex">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              
            </div>
            <div className="flex">
            <p>Humidity:</p>
              {data.main ? <p className=''>{data.main.humidity}%</p> : null}
              
            </div>
            </div>
        
            <div className="flex">
              {data.wind ? <p className=''>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
         
        </div>

       


      </div>}
      <div className='flex lg:flex-row flex-col w-screen mt-20 lg:w-4/5 lg:ml-0 mx-4'>
      <div className='lg:w-1/2 w-full'>{Hlocation&&<HourleyWeatherChart hourlyData={Hlocation}/>}</div>
        <div className='lg:w-1/2 w-full lg:ml-8'>   {Flocation&&<ForcastWeatherDays data={Flocation}/>}</div>
 
      
      </div>
      

    </div>
  );
}

export default App;