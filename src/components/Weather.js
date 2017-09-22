import React, { Component } from 'react';
import Search from './Search';
import Detail from './Detail';
import Forecast from './Forecast';

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      weatherData: []
    }

    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest(location) {
    const urlPrefix = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const urlSufix = '&type=accurate&APPID=1a42227474367ab5f28cac1dbe0b755d&units=metric';
    const url = urlPrefix + location + urlSufix;

    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        this.setState(function () {
          return {
            weatherData: json
          }
        });
      })
    this.setState({ location });
  }
  render() {
    return (
      <div className="container weather">
        <Search handleSubmit={this.makeRequest} />
        <Detail data={this.state.weatherData}/>
        <Forecast location={this.state.location} />
      </div>
    );
  }
}

export default Weather;
