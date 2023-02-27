import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
      realFeel: response.data.main.feels_like,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "298f9405a9a634fd43294220b3f6b208";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
  }

  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleCityChange}></input>
            <input type="submit" value="Search"></input>
          </form>
        </div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>DATE missing</li>
          {/* <li>{weatherData.date}</li> */}
          <li>{weatherData.description}</li>
          <li> {Math.round(weatherData.temperature)}°C</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <WeatherIcon />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)}km/h</li>
              <li>Feels like: {Math.round(weatherData.realFeel)}°C</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
