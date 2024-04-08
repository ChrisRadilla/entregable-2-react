import React, { useState } from 'react';
import './styles/weatherCard.css';

const WeatherCard = ({ weather, temp }) => {
  return (
    <div className='weather_card'>
      <h1 className='weather_title'>Weather App <span className='cloud_emoji'>🌦️</span></h1>
      <h2 className='weather_place'>{weather?.name}, {weather?.sys.country}</h2>
      <div className='weather_container'>
        <figure className='weather_img'>
          <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
               alt='weather image' />
        </figure>
        
        <div className='weather_info'>
          <h3 className='weather_description'>{`"${weather?.weather[0].description}"`}</h3>
          <ul className='weather_list'>
            <li className='weather_item'><span>Wind speed:</span><span className='weather_result'>{weather?.wind.speed} m/s</span></li>
            <li className='weather_item cloud'><span>Clouds:</span><span className='weather_result'>{weather?.clouds.all} %</span></li>
            <li className='weather_item pressure'><span>Pressure:</span><span className='weather_result'>{weather?.main.pressure} hPa</span></li>
          </ul>
        </div>
      </div>
      <div className='temp_results'>
        <p className='temp_result'>
          {`${temp?.cel} °C`} / {`${temp?.fah} °F`}
        </p>
      </div>
    </div>
  );
}

export default WeatherCard;