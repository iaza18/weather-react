import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


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
                      <WeatherIcon code={props.data.icon}/>
                      </span>
                    </span>
                    <br />
                    <span className="temperature">
                      {Math.round(props.data.temperature)}
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
                      Wind: {Math.round(props.data.wind)} km/h
                      <br />
                      Humidity: {props.data.humidity}%
                    </p>
                </div>
        </div>
    );
}