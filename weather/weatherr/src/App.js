import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Weather from "./Weather";
import Form from "./Form";
import alertify from 'alertifyjs'

const API_KEY = "62bb09ec35b2008067ee9c3942dd7c3a";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Istanbul",
      country: undefined,
      temp: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: undefined,
      icon: undefined,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  getCelcius(prop) {
    return Math.floor(prop - 273.15);
  }
  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}`
      )
      .then(res => {
        console.log(res);
        this.setState({
          city: res.data.name,
          country: res.data.sys.country,
          temp: this.getCelcius(res.data.main.temp),
          temp_max: this.getCelcius(res.data.main.temp_max),
          temp_min: this.getCelcius(res.data.main.temp_min),
          description: res.data.weather[0].description.toUpperCase(),
          icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        });
      });
  }

  call = () => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${API_KEY}`
      )
      .then(res => {
        
        console.log(res);
        this.setState({
          city: res.data.name,
          country: res.data.sys.country,
          temp: this.getCelcius(res.data.main.temp),
          temp_max: this.getCelcius(res.data.main.temp_max),
          temp_min: this.getCelcius(res.data.main.temp_min),
          description: res.data.weather[0].description.toUpperCase(),
          icon: `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`
        });
      })
      .catch(err=>{alertify.error('Yanlış Veri Girdiniz');}
      )
  };

  render() {
    return (
      <div className="App py-4 container" >
        
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} call={this.call} />

        <Weather
          city={this.state.city}
          country={this.state.country}
          temp={this.state.temp}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
          icon={this.state.icon}
        />
      </div>
    );
  }
}
