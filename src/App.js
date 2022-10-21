import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Title from "./components/Title";
import Weather from "./components/Weather";
import Conditions from "./components/Conditions";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

function App() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="container">
      {weather && (
        <div>
          <Search setQuery={setQuery} units={units} setUnits={setUnits} />
          <Title weather={weather} />
          <div className="flex-container">
            <Weather weather={weather} />
            <Conditions weather={weather} />
          </div>
          <Forecast items={weather.hourly} />
          <Forecast items={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
