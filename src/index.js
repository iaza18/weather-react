import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import WeatherApp from "./WeatherApp";
import CodedBy from "./CodedBy";

import "./App.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <div className="App">
      <WeatherApp defaultCity="Myrhorod"/>
      <CodedBy />
    </div>
  </React.StrictMode>
);

reportWebVitals();
