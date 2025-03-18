import TempLimits from "./TempLimits";
import { useEffect, useState } from "react";

function WeatherBody({ getWeather }) {
  const [celsius, setCelsius] = useState("");
  const [condition, setCondition] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    async function getInfo() {
      const data = await getWeather();
      if (data) {
        setCelsius(data.current.temp_c);
        setCondition(data.current.condition.text);
        setDate(data.location.localtime);
      }
    }
    getInfo();
  }, [getWeather]);

  return (
    <div className="day-info">
      <h1 className="celsius">{celsius ? `${celsius}°C` : "Loading..."}</h1>
      <h4 className="condition">{condition || "Loading..."}</h4>
      <h4 className="date">{date || "Loading..."}</h4>
      <TempLimits getWeather={getWeather} />
    </div>
  );
}

export default WeatherBody;
