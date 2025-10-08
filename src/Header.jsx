import logo from './assets/logo.png';
import './Header.css';

export function Header({unit,setUnit}) {
    const handleChange = (e) => {
      setUnit(e.target.value)
      console.log(e.target.value)
      console.log('ooooogaaaaa')
    }
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
            <label htmlFor="unit-selector">⚙️ Units</label>
            <select name="unit-selector" value={unit} onChange={handleChange}>
              <option value="metric">°C</option>
              <option value="imperial">°F</option>
            </select>
          </div>
        </div>
    )
}