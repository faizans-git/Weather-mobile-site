import "./App.css";
import { Header } from "./Header";
import { Title } from "./Title";
import { SearchContainer } from "./MainBody/SearchContainer";
import { WeatherCard } from "./MainBody/WeatherCard";
import { GeneralInfo } from "./MainBody/GeneralInfo";
import { HourlyForecast } from "./MainBody/HourlyForecast";

function App() {
  return (
    <>
      <div class="container">
        <Header />
        <Title />
        
        <div class="main-body">
          <SearchContainer />

          <WeatherCard />

          <GeneralInfo />

          <HourlyForecast />
        </div>
      </div>
    </>
  );
}

export default App;
