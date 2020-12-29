import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';
import { WeatherData } from 'models/weather-data';

const API_KEY = "fb308218343f86245f793d2f9145c2a9";

const initWeatherData: WeatherData = {
  dt: 0,
  main: {
    feels_like: 0,
    humidity: 0,
    pressure: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0
  },
  name: '',
  sys: {
    country: '',
    sunrise: 0,
    sunset: 0
  },
  weather: [],
  wind: {
    deg: 0,
    speed: 0
  }
}

const App = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>(initWeatherData);
  const [error, setError] = useState('');
  
  const getWeather = async (e: any) => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&type=like&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    if (api_call.status === 400) {
      setWeatherData(initWeatherData);
      setError('Please Enter a Zip Code');
    } else if (api_call.status === 404) {
      setWeatherData(initWeatherData);
      setError('Request not found');
    } else {
      setWeatherData({
        dt: data.dt,
        main: data.main,
        name: data.name,
        sys: data.sys,
        weather: data.weather,
        wind: data.wind
      })
      setError('');
    }
  };

  const reset = (e: any) => {
    e.preventDefault();
    setWeatherData(initWeatherData);
    const body = document.body;
    body.className = '';
    body.classList.add('richmond');
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid">
        <div className="wrap">
          {weatherData.weather.length ?
            <Weather weatherData={weatherData} error={error} reset={(e: MouseEvent) => reset(e)} /> :
            <Form getWeather={(e: MouseEvent) => getWeather(e)} />
          }
        </div>
      </div>
      <div className="preloader richmond" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader clear" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader thunderstorm" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader drizzle" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader rain" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader snow" style={{ width: '1px', height: '1px' }}></div>
      <div className="preloader clouds" style={{ width: '1px', height: '1px' }}></div>
    </div>
  );
}

export default App;
