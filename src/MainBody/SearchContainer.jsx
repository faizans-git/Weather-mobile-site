import { useRef, useState } from 'react';
import './Search.css';

export function SearchContainer({ setCity }) {
  const inputData = useRef();
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInput = async () => {
    const query = inputData.current.value.trim();
    if (!query) {
      setSuggestions([]);
      setShowDropdown(false);
      return;
    }

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5`
      );
      const data = await response.json();
      setSuggestions(data.results || []);
      setShowDropdown(true);
    } catch (err) {
      console.error('Error fetching city data:', err);
      setSuggestions([]);
      setShowDropdown(false);
    }
  };

  const selectCity = (city) => {
    inputData.current.value = `${city.name}, ${city.country}${city.admin1 ? ` (${city.admin1})` : ''}`;
    setCity(city);
    setShowDropdown(false);
    console.log('Selected city:', city.name, city.country, 'Lat:', city.latitude, 'Lon:', city.longitude);
  };

  const handleSearchClick = () => {
    const inputValue = inputData.current.value.trim();
    const match = suggestions.find(
      s =>
        inputValue === `${s.name}, ${s.country}${s.admin1 ? ` (${s.admin1})` : ''}`
    );

    if (match) {
      selectCity(match);
    } else {
      alert("Please select a city from the list!");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search city"
        className="search-input"
        ref={inputData}
        onInput={handleInput}
        onFocus={handleInput}
      />

      {showDropdown && suggestions.length > 0 && (
        <ul className="city-dropdown">
          {suggestions.map((s) => (
            <li key={s.id} onClick={() => selectCity(s)}>
              {s.name}, {s.country}{s.admin1 ? ` (${s.admin1})` : ''}
            </li>
          ))}
        </ul>
      )}

      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}
