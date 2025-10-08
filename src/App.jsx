
import "./App.css";
import { Header } from "./Header";
import { Title } from "./Title";
import { SearchContainer } from "./MainBody/SearchContainer";
import { WeatherCard } from "./MainBody/WeatherCard";
import { GeneralInfo } from "./MainBody/GeneralInfo";
import { HourlyForecast } from "./MainBody/HourlyForecast";
import { useState,useEffect } from "react";

function App() {


  const getWeatherCodeResponse = (code) => {
    const weatherCodeResponse = {
      0: "☀️",
      1: "🌤️",
      2: "⛅",
      3: "☁️",
      45: "🌫️",
      48: "🌁",
      51: "🌦️",
      53: "🌧️",
      55: "🌧️☂️",
      56: "🌧️❄️",
      57: "🌧️❄️",
      61: "🌦️",
      63: "🌧️",
      65: "🌧️🌧️",
      66: "🌧️",
      67: "🌧️",
      71: "🌨️",
      73: "❄️🌨️",
      75: "❄️❄️🌨️",
      77: "🌨️",
      80: "🌦️",
      81: "🌧️",
      82: "🌧️⚡",
      85: "🌨️",
      86: "❄️🌨️",
      95: "⛈️",
      96: "⛈️🧊",
      99: "⛈️🧊",
    };
    return weatherCodeResponse[code]
  }

  const [city, setCity] = useState({
    id: 1164909,
    name: "Siālkot",
    latitude: 32.49268,
    longitude: 74.53134,
    elevation: 250,
    feature_code: "PPLA2",
    population: 911817,
    admin1: "Punjab",
    admin1_id: 1167710,
    admin2: "Sialkot",
    admin2_id: 1164908,
    country: "Pakistan",
    country_code: "PK",
    country_id: 1168579,
    timezone: "Asia/Karachi"
  });
  
  const [weather,setWeather] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {

      if (city) {
        try {
          console.log(city)
          const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,wind_speed_10m,weathercode&timezone=auto`)
          const weatherData = await weatherResponse.json();
          setWeather(weatherData)
          console.log(weatherData)
        }
        catch {
          console.log('api error')
        }
        
      }
      else console.log('select valid city please')
      
      
    }

    fetchWeatherData();
  
  },[city])

  //const hourlyRainProb = weather.hourly.precipitation_probability;
  //const hourlyPrecipitation = weather.hourly.precipitation;
  //const hourlySnow = weather.hourly.snowfall; 

  return (
    <>
      <div className="container">
        <Header />
        <Title />
        
        <div className="main-body">
          <SearchContainer setCity={setCity} city={city} />

          <WeatherCard city={city} weather={weather} getWeatherCodeResponse={getWeatherCodeResponse} />

          <GeneralInfo weather={weather} />

          <HourlyForecast city={city} getWeatherCodeResponse={getWeatherCodeResponse} />
        </div>
      </div>
    </>
  );
}

export default App;
