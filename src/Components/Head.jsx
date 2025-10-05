import 'Header.css';
import logo from '../assets/logo.png'

export function Head() {
    return (
        <div className="header">
          <div className="right-head">
            <img
              src={logo}
              alt="."
              className="header-logo"
            />
            CF Weather
          </div>
          <div className="selector-head">
            <label for="unit-selector">⚙️ Units</label>
            <select name="unit-selector">
              <option value="metric">°C</option>
              <option value="imperial">°F</option>
            </select>
          </div>
        </div>
    )
}