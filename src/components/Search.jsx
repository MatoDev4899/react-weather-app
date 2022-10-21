import React, { useState } from "react";
import icon from "/Users/mato-knaze/Desktop/weather-app/src/images/magnifying (1).png";

function Search({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) setUnits(selectedUnits);
  };

  const handeSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  return (
    <div className="search-div">
      <div className="input-div">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          className="search-box"
          type="text"
          placeholder="Search city"
        />
        <button className="search-button" onClick={handeSearchClick}>
          <img className="search-icon" src={icon} alt="" />
        </button>
        <button className="london" onClick={() => setQuery({ q: "london" })}>
          London
        </button>
      </div>

      <div className="conversion">
        <button name="metric" onClick={handleUnitsChange}>
          C
        </button>
        <p className="space">l</p>
        <button name="imperial" onClick={handleUnitsChange}>
          F
        </button>
      </div>
    </div>
  );
}

export default Search;
