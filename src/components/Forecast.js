import React, { Component } from 'react';
import DayItem from './DayItem';
import PropTypes from 'prop-types';

class Foreacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forecastData: []
    }

    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount(){
    this.makeRequest(this.props.location);
  }

  componentDidUpdate(prevProps) {
    const oldLocation = prevProps.location;
    const newLocation = this.props.location;
    if (oldLocation !== newLocation) {
      this.makeRequest(this.props.location);
    }
  }

  makeRequest(location) {
    const urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
    const urlSufix = '&type=accurate&APPID=1a42227474367ab5f28cac1dbe0b755d&units=metric&cnt=5';
    const url = urlPrefix + location + urlSufix;
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState(function () {
          return {
            forecastData: json
          }
        });
      })
  }

  render() {
    const forecastData = this.state.forecastData;
    let temp, heading;
    if(forecastData.city) {
      heading = '5 Day Forecast';
      temp = forecastData.list.map((city) => {
        return (
          <DayItem data={city} />
        );
      })
    }
    return (
      <div className="container forecast">
        <h3>{heading}</h3>
        {temp}
      </div>
    );
  }
}

Forecast.propTypes = {
  location: PropTypes.string
};


export default Foreacts;
