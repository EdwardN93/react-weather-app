import { useState, useEffect } from "react";

function TempLimits({ getWeather }) {
  const [lowestTemp, setLowestTemp] = useState("");
  const [highestTemp, setHighestTemp] = useState("");

  useEffect(() => {
    async function getInfo() {
      const data = await getWeather();
      const day = data.forecast.forecastday[0];

      if (data) {
        setLowestTemp(Math.round(day.day.mintemp_c));
        setHighestTemp(Math.round(day.day.maxtemp_c));
      }
    }
    getInfo();
  }, [getWeather]);

  return (
    <div className="margins">
      <div className="lowest-temp">
        &darr; {`${lowestTemp}°C` || "Loading..."}
      </div>
      <div className="highest-temp">
        &uarr; {`${highestTemp}°C` || "Loading..."}
      </div>
    </div>
  );
}

export default TempLimits;
