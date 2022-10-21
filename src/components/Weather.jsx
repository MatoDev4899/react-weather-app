import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

function Weather({ weather: { temp, details, icon } }) {
  return (
    <div className="temperature-div">
      <div className="weather-image-div">
        <img className="weather-image" src={iconUrlFromCode(icon)} alt="" />
      </div>
      <div className="temp">
        <h1>{`${temp.toFixed()}°`}</h1>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Weather;
