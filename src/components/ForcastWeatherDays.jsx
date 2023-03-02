import React from "react";
import clearsky from "../assets/WeatherIcons/clearsky.png";
import brokenclouds from "../assets/WeatherIcons/brokenclouds.png";
import fewClouds from "../assets/WeatherIcons/fewClouds.png";
import mist from "../assets/WeatherIcons/mist.png";
import rain from "../assets/WeatherIcons/rain.png";
import scatteredclouds from "../assets/WeatherIcons/scatteredclouds.png";
import showerrain from "../assets/WeatherIcons/showerrain.png";
import snow from "../assets/WeatherIcons/snow.png";
import thunderstorm from "../assets/WeatherIcons/thunderstorm.png";

const ForcastWeatherDays = ({ data }) => {
  function convertUnixTimestamp(dt) {
    const date = new Date(dt * 1000);
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
  function convertUnixTimestamp_Days(dt) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const date = new Date(dt * 1000);
    const dayOfWeek = days[date.getDay()];
    const month = date.toLocaleString("default", { month: "short" });
    const dayOfMonth = ("0" + date.getDate()).slice(-2);
    return `${dayOfWeek}, ${month} ${dayOfMonth}`;
  }
  function WeatherICon(weather) {
    // const Icons = {
    //   "clear sky": clearsky,
    //   "few clouds": fewClouds,
    //   "scattered clouds": scatteredclouds,
    //   "broken clouds": brokenclouds,
    //   "shower rain": showerrain,
    //   rain: rain,
    //   thunderstorm: thunderstorm,
    //   snow: snow,
    //   mist: mist,
    // };
    switch (weather) {
      case "clear sky":
        return clearsky;

      case "few clouds":
        return fewClouds;

      case "scattered clouds":
        return scatteredclouds;

      case "broken clouds":
        return brokenclouds;

      case "shower rain":
        return showerrain;

      case "rain":
        return rain;

      case "thunderstorm":
        return thunderstorm;

      case "snow":
        return snow;

      case "mist":
        return mist;

      default:
        return clearsky;
    }
  }
  return (
    <div>
      ForcastWeatherDays
      <div className="flex flex-col justify-between items-center text-black w-screen">
        {data.map((item) => (
          <div className="flex flex-row w-1/2 p-4 text-xl items-center" key={item.id}>
            <div className="flex flex-row w-full">
              {convertUnixTimestamp_Days(item.dt)}
            </div>
            <div className="flex flex-row w-full justify-center items-center">
            <div className="flex ">
                <img
                  src={WeatherICon(item.weather[0].description)}
                  alt="Weather Icon"
                  width={48}
                ></img>
              </div>
              <div className="text-center"> {Math.floor(item.temp.max)} / {Math.floor(item.temp.max)}°C</div>
            </div>
            <div className="flex flex-row w-full">
              
              {item.weather[0].description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForcastWeatherDays;
