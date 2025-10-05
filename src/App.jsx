

import "./App.css";
import { Head } from "./Components/Head";

function App() {
  return (
    <>
      <div class="container">
        <Head />
        <div class="title">
          <div class="title-text">How's the</div>
          <div class="title-text">sky looking</div>
          <div class="title-text">today?</div>
        </div>

        <div class="main-body">
          <div class="search-container">
            <input type="text" placeholder="Search city" class="search-input" />
            <button class="search-button">Search</button>
          </div>

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

          <div class="general-info">
            <div class="row">
              <div class="element">
                <div class="element-title">Feels like</div>
                <div class="element-value">64 °</div>
              </div>
              <div class="element">
                <div class="element-title">Humidity</div>
                <div class="element-value">46 %</div>
              </div>
            </div>
            <div class="row">
              <div class="element">
                <div class="element-title">Wind</div>
                <div class="element-value">9 mph</div>
              </div>
              <div class="element">
                <div class="element-title">Precepitation</div>
                <div class="element-value">0 in</div>
              </div>
            </div>
          </div>

          <div class="daily-forecast-title">Daily Forecast</div>

          <div class="daily-forecast-flex-box">
            <div class="forecast-box">
              <div class="forecast-day">Tue</div>
              <div class="forecast-icon">☀️</div>
              <div class="forecast-temp">
                <div class="highest-temp">75°</div>
                <div class="lowest-temp">57°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Wed</div>
              <div class="forecast-icon">🌧️</div>
              <div class="forecast-temp">
                <div class="highest-temp">59°</div>
                <div class="lowest-temp">48°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Thur</div>
              <div class="forecast-icon">☀️</div>
              <div class="forecast-temp">
                <div class="highest-temp">65°</div>
                <div class="lowest-temp">51°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Fri</div>
              <div class="forecast-icon">🌧️</div>
              <div class="forecast-temp">
                <div class="highest-temp">49°</div>
                <div class="lowest-temp">44°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Sat</div>
              <div class="forecast-icon">☀️</div>
              <div class="forecast-temp">
                <div class="highest-temp">75°</div>
                <div class="lowest-temp">57°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Sun</div>
              <div class="forecast-icon">🌥️</div>
              <div class="forecast-temp">
                <div class="highest-temp">65°</div>
                <div class="lowest-temp">59°</div>
              </div>
            </div>
            <div class="forecast-box">
              <div class="forecast-day">Mon</div>
              <div class="forecast-icon">⚡</div>
              <div class="forecast-temp">
                <div class="highest-temp">70°</div>
                <div class="lowest-temp">68°</div>
              </div>
            </div>
          </div>

          <div class="hourly-forecast">
            <div class="hourly-forecast-header">
              <div class="hourly-forecast-header-title">Hourly Forecast</div>
              <select name="day-selector" class="day-selector">
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thurday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
              </select>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">🌧️</div>
                <div class="forecast-hour-time">4PM</div>
              </div>
              <div class="forecast-hour-temp">68°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">☀️</div>
                <div class="forecast-hour-time">5PM</div>
              </div>
              <div class="forecast-hour-temp">69°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">☀️</div>
                <div class="forecast-hour-time">3PM</div>
              </div>
              <div class="forecast-hour-temp">73°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">☀️</div>
                <div class="forecast-hour-time">8PM</div>
              </div>
              <div class="forecast-hour-temp">68°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">🌧️</div>
                <div class="forecast-hour-time">9PM</div>
              </div>
              <div class="forecast-hour-temp">67°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">⚡</div>
                <div class="forecast-hour-time">10PM</div>
              </div>
              <div class="forecast-hour-temp">68°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">🌧️</div>
                <div class="forecast-hour-time">11PM</div>
              </div>
              <div class="forecast-hour-temp">67°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">🌧️</div>
                <div class="forecast-hour-time">12PM</div>
              </div>
              <div class="forecast-hour-temp">69°</div>
            </div>

            <div class="forecast-hour">
              <div class="forecast-hour-info">
                <div class="forecast-hour-icon">🌧️</div>
                <div class="forecast-hour-time">1AM</div>
              </div>
              <div class="forecast-hour-temp">67°</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
