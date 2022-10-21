import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Forecast({ items }) {
  return (
    <div className="forecast-container">
      {items.map((item) => (
        <div className="card">
          <p>{item.title}</p>
          <img src={iconUrlFromCode(item.icon)} alt="" />
          <h2>{`${item.temp.toFixed()}°`}</h2>
        </div>
      ))}
    </div>
  );
}

export default Forecast;
