import React, { useState, useEffect } from "react";
// import your CSS file
import "./WeatherCard.css"; // import your CSS file

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"9c3ab3a02b04f6ec7fc132dad5c2cc81"}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data));
    });
  }, []);

  if (!weatherData) return <div>Loading...</div>;
  console.log(weatherData);
  return (
    <div className="rounded-card">
      <h2>{weatherData.name}</h2>
      <h3>{weatherData.main.temp}°C</h3>
      <p>{weatherData.weather[0].description}</p>
    </div>
  );
};

export default WeatherCard;
