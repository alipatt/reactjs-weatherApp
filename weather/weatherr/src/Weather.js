import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="py-4">
          {this.props.city} ({this.props.country})
        </h1>
        <img
          className="display-1"
          height="auto"
          width="auto"
          src={this.props.icon}
          alt="weather_icon"
        />
        <h1 className="py-4">{this.props.temp}°</h1>
        <h3>
          <span className="px-4">{this.props.temp_min}°</span>
          <span className="px-4">{this.props.temp_max}°</span>
        </h3>
        <h2 className="py-4">{this.props.description}</h2>
      </div>
    );
  }
}
