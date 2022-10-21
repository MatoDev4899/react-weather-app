import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function Conditions({
  weather: {
    timezone,
    sunrise,
    humidity,
    sunset,
    feels_like,
    temp_max,
    temp_min,
  },
}) {
  return (
    <div className="grid">
      <div className="flex">
        <h2>{`${temp_max.toFixed()}°`}</h2>
        <p>High</p>
      </div>
      <div className="flex">
        <h2>{`${humidity}%`}</h2>
        <p>Humidity</p>
      </div>
      <div className="flex">
        <h2>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</h2>
        <p>Sunrise</p>
      </div>
      <div className="flex">
        <h2>{`${temp_min.toFixed()}°`}</h2>
        <p>Low</p>
      </div>
      <div className="flex">
        <h2>{`${feels_like.toFixed()}°`}</h2>
        <p>Feels</p>
      </div>
      <div className="flex">
        <h2>{formatToLocalTime(sunset, timezone, "hh:mm a")}</h2>
        <p>Sunset</p>
      </div>
    </div>
  );
}

export default Conditions;
