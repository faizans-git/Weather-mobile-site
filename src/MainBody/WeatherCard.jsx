import './WeatherCard.css';

export function WeatherCard() {
    return (
        <div class="weather-card">
            <div class="card-top">
              <p class="location">Berlin, Germany</p>
              <p class="date">Tuesday, Aug 5, 2025</p>
            </div>
            <div class="card-main">
              <div class="weather-icon">☀️</div>
              <div class="temperature">
                20<span class="degree">°</span>
              </div>
            </div>
          </div>
    )
}