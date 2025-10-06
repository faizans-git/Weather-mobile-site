import logo from './assets/logo.png';
import './Header.css';

export function Header() {
    return (
        <div class="header">
          <div class="right-head">
            <img
              src={logo}
              alt="."
              class="header-logo"
            />
            CF Weather
          </div>
          <div class="selector-head">
            <label for="unit-selector">⚙️ Units</label>
            <select name="unit-selector">
              <option value="metric">°C</option>
              <option value="imperial">°F</option>
            </select>
          </div>
        </div>
    )
}