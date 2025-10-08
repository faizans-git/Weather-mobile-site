import dayjs from "dayjs";
import "./HourlyForecast.css";
import { useState, useEffect } from "react";

export function HourlyForecast({ city,getWeatherCodeResponse}) {
  const [hourlyWeatherList, setHourlyWeatherList] = useState([]);
  const [selectedDay, setSelectedDay] = useState(dayjs().format("YYYY-MM-DD"));
  

  useEffect(() => {
    const getHourlyData = async () => {
      const apiRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m,precipitation,weathercode,relative_humidity_2m,wind_speed_10m&timezone=auto`
      );
      const weatherData = await apiRes.json();

      const list = weatherData.hourly.time.map((time, i) => ({
        time,
        temperature: weatherData.hourly.temperature_2m[i],
        humidity: weatherData.hourly.relative_humidity_2m[i],
        precipitation: weatherData.hourly.precipitation[i],
        windSpeed: weatherData.hourly.wind_speed_10m[i],
        weatherCode: weatherData.hourly.weathercode[i],
      }));

      setHourlyWeatherList(list);
    };

    getHourlyData();
  }, [city]);

  
  const availableDays = [
    ...new Set(hourlyWeatherList.map(w => dayjs(w.time).format("YYYY-MM-DD"))),
  ];


  const filteredHours = hourlyWeatherList.filter(
    w => dayjs(w.time).format("YYYY-MM-DD") === selectedDay
  );

  return (
    <div className="hourly-forecast">
      <div className="hourly-forecast-header">
        <div className="hourly-forecast-header-title">Hourly Forecast</div>

        <select
          name="day-selector"
          className="day-selector"
          value={selectedDay}
          onChange={e => setSelectedDay(e.target.value)}
        >
          {availableDays.map(day => (
            <option key={day} value={day}>
              {dayjs(day).format("dddd")} 
            </option>
          ))}
        </select>
      </div>

      {filteredHours.length > 0 ? (
        filteredHours.filter(weather => dayjs(weather.time).isAfter(dayjs())).map((weather, index) => (
          <div key={index} className="forecast-hour">
            <div className="forecast-hour-info">
              <div className="forecast-hour-icon">{weather && getWeatherCodeResponse(weather.weatherCode)}</div>
              <div className="forecast-hour-time">
                {dayjs(weather.time).format("h A")}
              </div>
            </div>
            <div className="forecast-hour-temp">{weather.temperature}°C</div>
          </div>
        ))
      ) : (
        <p>Loading hourly forecast...</p>
      )}
    </div>
  );
}
