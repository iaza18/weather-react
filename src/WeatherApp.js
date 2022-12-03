import React from "react";
import Search from "./Search";
import "./WeatherApp.css";

export default function WeatherApp() {
  let weatherData = {
    city: "Kharkiv",
    date: "Tuesday, October 20",
    time: "20:25",
    description: "Cloudy ",
    wind: "5",
    humidity: "80"
  };
  return (
    <div className="WeatherApp">
      <div className="row">
        <div className="col-6" id="right-block">
          <h1 id="current-city">{weatherData.city}</h1>
          <h6 id="current-date">
            {weatherData.date} <br /> {weatherData.time}
          </h6>
          <div className="current-weather-block">
            <span className="local-weather">
              <span id="weather-description">{weatherData.description}</span>
              <i
                className="fa-solid fa-cloud-sun float-left"
                id="weather-icon"
              ></i>
            </span>
            <br />
            <span className="currentTemp" id="curTemp">
              19
            </span>

            <span className="units">
              <a href="###" id="celsius-temp" className="active">
                °C
              </a>{" "}
              |
              <a href="###" id="fahrenheit-temp">
                °F
              </a>
            </span>
            <p className="currentData">
              Wind: {weatherData.wind} km/h
              <br />
              Humidity: {weatherData.humidity}%
            </p>
          </div>
        </div>
        <div className="col-6" id="left-block">
          <Search />
        </div>
      </div>
    </div>
  );
}
