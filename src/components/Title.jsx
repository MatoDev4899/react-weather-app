import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function Title({ weather: { dt, timezone, name, country } }) {
  return (
    <div className="title">
      <h1>{`${name}, ${country}`}</h1>
      <p>{formatToLocalTime(dt, timezone)}</p>
    </div>
  );
}

export default Title;
