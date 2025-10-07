import './HourlyForecast.css'

export function HourlyForecast() {
    return (
        <div className="hourly-forecast">
            <div className="hourly-forecast-header">
              <div className="hourly-forecast-header-title">Hourly Forecast</div>
              <select name="day-selector" className="day-selector">
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thurday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
              </select>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">🌧️</div>
                <div className="forecast-hour-time">4PM</div>
              </div>
              <div className="forecast-hour-temp">68°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">☀️</div>
                <div className="forecast-hour-time">5PM</div>
              </div>
              <div className="forecast-hour-temp">69°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">☀️</div>
                <div className="forecast-hour-time">3PM</div>
              </div>
              <div className="forecast-hour-temp">73°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">☀️</div>
                <div className="forecast-hour-time">8PM</div>
              </div>
              <div className="forecast-hour-temp">68°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">🌧️</div>
                <div className="forecast-hour-time">9PM</div>
              </div>
              <div className="forecast-hour-temp">67°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">⚡</div>
                <div className="forecast-hour-time">10PM</div>
              </div>
              <div className="forecast-hour-temp">68°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">🌧️</div>
                <div className="forecast-hour-time">11PM</div>
              </div>
              <div className="forecast-hour-temp">67°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">🌧️</div>
                <div className="forecast-hour-time">12PM</div>
              </div>
              <div className="forecast-hour-temp">69°</div>
            </div>

            <div className="forecast-hour">
              <div className="forecast-hour-info">
                <div className="forecast-hour-icon">🌧️</div>
                <div className="forecast-hour-time">1AM</div>
              </div>
              <div className="forecast-hour-temp">67°</div>
            </div>
          </div>
    )
}