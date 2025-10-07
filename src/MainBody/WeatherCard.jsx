import './WeatherCard.css'
export function WeatherCard({ city, weather }) {
  const timeStamp = weather?.current_weather?.time || "7-9-2025";
  const date = new Date(timeStamp);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const properDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="weather-card">
      <div className="card-top">
        <p className="location">
          {city.name}, {city.country}
        </p>
        <p className="date">{properDate}</p>
      </div>

      <div className="card-main">
        <div className="weather-icon">☀️</div>
        <div className="temperature">
          {Math.round(weather?.current?.temperature_2m ?? 0)}
          <span className="degree">°</span>
        </div>
      </div>
    </div>
  );
}
