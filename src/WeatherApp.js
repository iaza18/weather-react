import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import Search from "./Search";
import "./WeatherApp.css";


export default function WeatherApp(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) {
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconUrl: "http://openweathermap.org/img/wn/$@2x.png",
        date: new Date(response.data.dt * 1000)
    });
}

    if (weatherData.ready) {
        return (
            <div className="WeatherApp">
                <div className="container">
              <div className="row">
                <div className="col-6" id="right-block">
                  <h1 id="current-city">{weatherData.city}</h1>
                  <h6 id="current-date">
                    <FormattedDate date={weatherData.date} />
                  </h6>
                  <div className="current-weather-block">
                    <span className="local-weather">
                      <span id="weather-description">{weatherData.description}</span>
                      <img
                      src={weatherData.iconUrl}
                      alt={weatherData.description}
                        className="float-left"
                        id="weather-icon"
                      />
                    </span>
                    <br />
                    <span className="temperature">
                      {Math.round(weatherData.temperature)}
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
            </div>
          );
    } else {
        const apiKey= `5f472b7acba333cd8a035ea85a0d4d4c`; 
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

      return "Loading..."
      };
    }
