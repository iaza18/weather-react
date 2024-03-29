import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./WeatherApp.css";


export default function WeatherApp(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
    setWeatherData({
        ready: true,
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date(response.data.dt * 1000)
    });
}
    
function search() {
    const apiKey= `5f472b7acba333cd8a035ea85a0d4d4c`; 
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
    setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="WeatherApp">
                <div className="container">
                <div className="row">
                <div className="col-6" id="right-block">
                    <WeatherInfo data={weatherData} />
                </div>
                
                <div className="col-6" id="left-block">
                <div className="Search">
                <div className="row location">
                <div className="col-11">
                
                <form onSubmit={handleSubmit} className="d-flex" role="search">
                    <input
                    className="form-control me-2 shadow-sm"
                    id="search-city"
                    type="search"
                    placeholder="🌗 Enter Location..."
                    autoComplete="off"
                    onChange={handleCityChange}
                    />
                </form>
        </div>
      </div>
     <WeatherForecast coordinates={weatherData.coordinates}/>

             </div>
                </div>
              </div>
              </div>
            </div>
    
          );
    } else {
    search();
    return "Loading...";
      }
    }
