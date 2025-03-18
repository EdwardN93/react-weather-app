import "./style.css";
import WeatherImg from "./WeatherImg";
import ForecastHours from "./ForecastHours";
import WeatherBody from "./WeatherBody";
import { weatherApiKey } from "./config";

function App() {
  async function getWeather() {
    const url = `https://api.weatherapi.com/v1/forecast.json?days=1&key=${weatherApiKey}&q=Bucuresti`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Status ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <WeatherImg getWeather={getWeather} />
      <WeatherBody getWeather={getWeather} />
      <ForecastHours getWeather={getWeather} />
    </div>
  );
}

export default App;
