import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";
import Search from "./Search";

export default function Weather() {
  return (
    <div className="Weather container">
      <Search />
      <h1>Berlin</h1>
      <ul>
        <li>Monday 07:00</li>
        <li>Mostly cloudy</li>
        <li> 10°C</li>
      </ul>

      <div className="row">
        <div className="col-6">1</div>
        <div className="col-6">2</div>
      </div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>

      {/* <div className="row">
        <div className="col-6">
          <h1>Berlin</h1>{" "}
          <div className="col-6">
            <div className="bigWeatherIcon">
              <ReactAnimatedWeather
                icon="SNOW"
                color="GREY"
                size={52}
                animate={true}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
