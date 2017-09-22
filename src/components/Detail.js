import React from 'react';
import { getDate } from '../utils/helpers';

const Detail = (props) => {
  let data = props.data;
  let city, temp, temp_max, temp_min, icon, description, date, wind, humidity;
  if(data.name) {
    city = data.name;
    temp = `${data.main.temp}°C`;
    temp_max = ` | max: ${data.main.temp_max}°C`;
    temp_min = `min: ${data.main.temp_min}°C`;
    icon = data.weather[0].icon;
    description = data.weather[0].description;
    date = getDate(data.dt);
    wind = `Wind: ${data.wind.speed}m/s`;
    humidity = `Humidity: ${data.main.humidity}`;
  }
  return (
    <div className="container details">
      <p className="city">{city}</p>
      <img src={`http://openweathermap.org/img/w/${icon}.png`} className="img" />
      <span>{temp}</span>
      <p>{description}</p>
      <p>{temp_min}{temp_max}</p>
      <p>{wind}</p>
      <p>{humidity}</p>
      <p>{date}</p>
    </div>
  );
}

export default Detail;
