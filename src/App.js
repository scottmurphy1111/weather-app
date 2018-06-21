import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "fb308218343f86245f793d2f9145c2a9";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    zip: undefined,
    humidity: undefined,
    description: undefined,
    wind: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const zip = e.target.elements.zip.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&type=like&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(api_call.status);

    if(api_call.status === 400) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        zip: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Please Enter a Zip Code"
      })
    } else if(api_call.status === 404) {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        zip: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Request not found"
      })
    } else {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        zip: zip,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        wind: data.wind.speed,
        error: ""
      })
    }

    
  }
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          zip={this.state.zip}
          humidity={this.state.humidity}
          description={this.state.description}
          wind={this.state.wind}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
