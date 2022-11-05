import React from "react";
// import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="cont">
        <div class="mb">
          <p></p>
          <form id="search-form">
            <input
              type="text"
              class="search"
              id="city-input"
              placeholder="Type your city..."
              autocomplete="off"
            />
            <input type="submit" class="emoji" id="search" value="Search" />
          </form>
        </div>
        <p></p>
        <div class="box">
          <div class="cc">
            <div class="city">
              <h1 id="city">Kyiv</h1>
              <ul>
                <li id="date">today</li>
                <li class="cel" id="description"></li>
              </ul>
              <div class="cels">
                <p class="tt" id="tt">
                  {" "}
                  Sunny <span class="units"></span>
                </p>
                <span class="temperature" id="temperature"></span>
                <span class="units">°C</span>
              </div>
            </div>
            <div class="emo">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
                id="icon"
                class="cels"
                width="140"
              />
              <div class="wii">
                <ul>
                  <li>
                    Humidity: <span id="humidity"></span>%
                  </li>
                  <li>
                    Wind: <span id="wind"></span> km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="weather-fotecast" id="forecast"></div>
        </div>
      </div>
      <p class="code">
        <a href="https://github.com/AnastasiiaKhry/weather-react.git">
          {" "}
          Open-source code
        </a>{" "}
        by Anastasiia Khrystoforova{" "}
      </p>
        {/* <h1>Hello</h1>
        <Weather city="Paris" /> */}
        {/* <Weather /> */}
      </header>
    </div>
  );
}

export default App;
