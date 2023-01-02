import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

   if (loaded) {
    return (
        <div className="WeatherForecast">
        <h3> 5-Day Forecast</h3>     
        
            {forecast.map(function(dailyForecast, index) {
                if (index < 5) {
            return (
                <div className="card WeatherForecast-days" key={index}>
                <div className="card-body WeatherForecast-days-block">  
                <WeatherForecastDay data={dailyForecast}/>
                 </div>
                 </div>
            );
                }
            })}
    
        </div>   
    );
   
   } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
 
    axios.get(apiUrl).then(handleResponse);

    return null;
   }
   
}