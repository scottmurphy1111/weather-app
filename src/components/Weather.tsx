import React, { useEffect, useState } from 'react'

const Weather = (params: any) => {
  const { dt, main, name, sys, weather, wind } = params.weatherData;
  const [currentTime, setCurrentTime] = useState('');
  const [currentTemps, setCurrentTemps] = useState({ temp: '', feelsLike: '', humidity: '' });
  const [currentSunData, setCurrentSunData] = useState({ sunrise: '', sunset: '' });
  const [currentWeather, setCurrentWeather] = useState({ description: '', icon: '' });
  const [currentWind, setCurrentWind] = useState({ deg: '', speed: '' });
  const [showMore, setShowMore] = useState(false);

  const getCurrentTime = (passedTime: number) => {
    if (!passedTime) return;
    const time = new Date(passedTime * 1000).toLocaleString();

    setCurrentTime(time);
  }

  const getTemps = (passedTemps: any) => {
    if (!passedTemps.temp) return;
    const temp = Math.round(passedTemps.temp).toString();
    const feelsLike = Math.round(passedTemps.feels_like).toString();
    const humidity = Math.round(passedTemps.humidity).toString();

    setCurrentTemps({ temp, feelsLike, humidity });
  }

  const getSunData = (passedSunData: any) => {
    if (!passedSunData.sunrise) return;
    const sunrise = new Date(passedSunData.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(passedSunData.sunset * 1000).toLocaleTimeString();

    setCurrentSunData({ sunrise, sunset });
  }

  const getWeather = (passedWeather: any) => {
    if (passedWeather.length === 0) return;
    const description = passedWeather[0].description;
    const icon = passedWeather[0].icon;
    const mainWeather = passedWeather[0].main.toLowerCase();

    const body = document.body;
    body.className = '';
    body.classList.add(mainWeather);
    setCurrentWeather({ description, icon })
  }

  const getWind = (passedWind: any) => {
    if (!passedWind.deg && !passedWind.speed) return;
    const deg = passedWind.deg;
    const speed = Math.round(passedWind.speed).toString();

    setCurrentWind({ deg, speed });
  }

  const handleShowMore = () => {
    setShowMore(!showMore);
  }

  useEffect(() => {
    getCurrentTime(dt);
    getTemps(main);
    getSunData(sys);
    getWeather(weather);
    getWind(wind)
  }, [dt, main, weather, sys, wind])

  return (
    <div className='row'>
      <div className='col-xs-12'>
        <div className="component-container">
          <div className="name-wrapper">
            <div className="weather-icon">
              {currentWeather.icon ?
                <img alt="weather icon" src={`http://openweathermap.org/img/wn/${currentWeather.icon}@2x.png`} /> :
                <></>
              }
            </div>
            <h1>{name} {currentTemps.temp}º</h1>
          </div>
          <div className="more-info" data-active={showMore}>
            <div><p>Feels Like: {currentTemps.feelsLike}º</p></div>
            <div><p>Humidity: {currentTemps.humidity}%</p></div>
            <div><p>Sunrise: {currentSunData.sunrise}</p></div>
            <div><p>Sunset: {currentSunData.sunset}</p></div>
            <div className="wind-wrapper">
              <span>{currentWind.speed}mph</span>
              <div className="wind-direction" style={{ transform: `rotate(${currentWind.deg}deg)` }}></div>
            </div>
            <div className="last-updated"><p>Last Updated: {currentTime}</p></div>
            <a className="start-over" href="#!" onClick={(e: any) => params.reset(e)}>Start Over</a>
          </div>
          <button className="show-more" onClick={() => handleShowMore()}>{showMore ? 'Show Less' : 'Show More'}</button>
          
        </div>
      </div>
    </div>
  );
};

export default Weather
