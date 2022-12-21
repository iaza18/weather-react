import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 id="current-city">{props.data.city}</h1>
                  <h6 id="current-date">
                    <FormattedDate date={props.data.date} />
                  </h6>
                  <div className="current-weather-block">
                    <span className="local-weather">
                      <span id="weather-description">{props.data.description}</span>
                     <span className="float-left" id="weather-icon">
                      <WeatherIcon code={props.data.icon} size={32} />
                      </span>
                    </span>
                    <br />
                    <WeatherTemperature celsius={props.data.temperature}/>
                    
                    <p className="currentData">
                      Wind: {Math.round(props.data.wind)} km/h
                      <br />
                      Humidity: {props.data.humidity}%
                    </p>
                </div>
        </div>
    );
}