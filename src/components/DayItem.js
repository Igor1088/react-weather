import React from 'react';
import { getDate } from '../utils/helpers';
import PropTypes from 'prop-types';

const DayItem = ({data}) => {
  return (
    <div className="day-item">
      <p>{getDate(data.dt)}</p>
      <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} className="img-forecast" alt="weather" />
      {data.temp.day + "°C"}
      <p>min: {data.temp.min}</p>
      <p>max: {data.temp.max}</p>
      <p>humidity: {data.humidity}</p>
      <p>wind: {data.speed}m/s</p>
    </div>
  );
}

DayItem.propTypes = {
  data: PropTypes.object
};

export default DayItem;
