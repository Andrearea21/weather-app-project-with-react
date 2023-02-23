import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let [message, setMessage] = useState("");
  function showTemperature(response) {
    let temperature = Math.round(response.data.main.temp);
    let city = response.data.name;
    setMessage(`It is currently ${temperature}°C in ${city}`);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "298f9405a9a634fd43294220b3f6b208";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${apiKey}&units=metric`;

    axios.get(url).then(showTemperature);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={handleChange}></input>
        <input type="submit" value="Search"></input>
      </form>
      <br />
      <div> {message} </div>
    </div>
  );
}
