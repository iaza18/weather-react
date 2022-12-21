import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
        <div className="WeatherForecast">
        <h3> 5-Day Forecast</h3>
        
        <div className="card WeatherForecast-days">
          <div className="card-body WeatherForecast-days-block">
            <div className="row ">
              <div className="col-4 WeatherForecast-day">Mon</div>
              <div className="col-4 WeatherForecast-icon"> <WeatherIcon code="01d" size={20}/> </div>
            <div className="col-4 WeatherForecast-temperature">
                <span className="WeatherForecast-temperature-max">10° </span>
                <span className="WeatherForecast-temperature-min"> 2°</span>
           
            </div>
          </div>
        </div>
        </div>
        </div>
    );
}