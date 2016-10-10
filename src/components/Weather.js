import React from 'react';

const Weather = (props) => {
  if (props.data.list) {
      var currentTemp = props.data.list[0].main.temp;
      var city = props.data.city.name;
      var country = props.data.city.country;
    }
    return (
      <div>
        {(city) ?
          (<div>
            <div className="temp-wrapper">
              <span className="temp">{Math.round(currentTemp)}</span>
              <span className="temp-symbol">°C</span>
            </div>
            <span className="info">{`${city}, ${country}`}</span>
          </div>) :
          (<span></span>)
        }
      </div>
    );
}

export default Weather;
