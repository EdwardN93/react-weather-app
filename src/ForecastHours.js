import { useState, useEffect } from "react";

function ForecastHours({ getWeather }) {
  const [forecastHours, setForecastHours] = useState([]);

  useEffect(() => {
    async function fetchForecast() {
      const data = await getWeather();
      if (data && data.forecast && data.forecast.forecastday[0].hour) {
        setForecastHours(data.forecast.forecastday[0].hour);
      }
    }
    fetchForecast();
  }, [getWeather]);

  return (
    <div className="forecast-hours">
      {forecastHours.length > 0 ? (
        forecastHours.map((hour, index) => (
          <div key={index} className="forecast">
            <p>{hour.time.split(" ")[1]}</p>
            {/* <p>{hour.condition.text}</p> */}
            <img
              className="widget-img"
              src={`https:${hour.condition.icon}`}
              alt="weather icon"
            />
            <p>{Math.round(hour.temp_c)}°C</p>
          </div>
        ))
      ) : (
        <p>Loading hourly forecast...</p>
      )}
    </div>
  );
}

export default ForecastHours;
