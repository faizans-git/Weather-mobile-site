import './Search.css';
export function SearchContainer() {
    return (
        <div class="search-container">
          <input type="text" placeholder="Search city" class="search-input" />
          <button class="search-button">Search</button>
        </div>
    )
}