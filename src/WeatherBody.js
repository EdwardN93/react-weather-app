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
        setCelsius(Math.round(data.current.temp_c));
        setCondition(data.current.condition.text);
        // setDate(data.location.localtime.split(" ")[0].reverse().join("-"));
        const dateNow = data.location.localtime
          .split(" ")[0]
          .split("-")
          .reverse();
        const newDate = new Date(
          Number(dateNow[2]),
          Number(dateNow[1]) - 1,
          Number(dateNow[0])
        );
        const dateOptions = {
          day: "numeric",
          month: "short",
          year: "numeric",
        };

        setDate(newDate.toLocaleDateString("ro-RO", dateOptions));
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
