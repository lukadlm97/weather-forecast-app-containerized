import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch('http://localhost:32771/WeatherForecast');
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <ul>
        {weatherData.map((weather, index) => (
          <li key={index}>
            <p>Date: {weather.date}</p>
            <p>Temperature (C): {weather.temperatureC}</p>
            <p>Temperature (F): {weather.temperatureF}</p>
            <p>Summary: {weather.summary}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
