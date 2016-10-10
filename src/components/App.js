import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Weather from './Weather';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(location) {
  	var urlPrefix = 'http://api.openweathermap.org/data/2.5/forecast?q=';
    var urlSuffix = '&APPID=1a42227474367ab5f28cac1dbe0b755d&units=metric';
    var url = urlPrefix + location + urlSuffix;
    axios.get(url).then(response => {
      const data = response.data;
      console.log(response);
      this.setState({data});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <Search onHandle={this.handleFormSubmit} />
        <Weather data={this.state.data}/>
        {console.log(this.state.data)}
      </div>
    );
  }
}

export default App;
