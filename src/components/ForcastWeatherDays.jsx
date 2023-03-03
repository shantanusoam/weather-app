import React from "react";

import { convertUnixTimestamp_Days } from "../Helpers/functions/HelperFunctions";
import { WeatherICon } from "../Helpers/IconsFetcher";

const ForcastWeatherDays = ({ data }) => {

 

  return (
    <div>
   
      <div className="flex flex-col justify-between  text-black w-screen">
        {data.map((item) => (
          <div className="flex flex-row lg:w-1/2 w-full  text-xl items-center" key={item.id}>
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
