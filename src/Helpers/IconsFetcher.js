import clearsky from "../assets/WeatherIcons/clearsky.png";
import brokenclouds from "../assets/WeatherIcons/brokenclouds.png";
import fewClouds from "../assets/WeatherIcons/fewClouds.png";
import mist from "../assets/WeatherIcons/mist.png";
import rain from "../assets/WeatherIcons/rain.png";
import scatteredclouds from "../assets/WeatherIcons/scatteredclouds.png";
import showerrain from "../assets/WeatherIcons/showerrain.png";
import snow from "../assets/WeatherIcons/snow.png";
import thunderstorm from "../assets/WeatherIcons/thunderstorm.png";
export function WeatherICon(weather) {
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

      case "scattered clouds" || "Clouds":
        return scatteredclouds;
case "overcast clouds":
    return scatteredclouds;
      case "broken clouds" || "overcast clouds":
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