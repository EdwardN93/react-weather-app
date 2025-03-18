import { useEffect, useState } from "react";

function WeatherImg({ getWeather }) {
  const [source, setSource] = useState("");
  useEffect(() => {
    async function fetchWeather() {
      const data = await getWeather();
      if (data) {
        setSource(data.current.condition.icon);
      }
    }
    fetchWeather();
  }, [getWeather]);

  return (
    <div className="weather-img">
      <img
        className="img"
        src={source ? `https:${source}` : null}
        alt="weather.img"
      />
    </div>
  );
}

export default WeatherImg;
