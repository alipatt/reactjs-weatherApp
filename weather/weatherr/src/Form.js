import React, { Component } from 'react'
import "./form.css";

export default class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
          <div className="py-4 d-flex justify-content-center">
            <div className="d-sm-flex d-md-flex mr-2">
              <input
                className="form-control"
                name="value"
                type="text"
                onChange={this.props.handleChange}
                placeholder="Enter City"
              />
              </div>
              <div className="d-sm-flex d-md-flex ml-2">
              <button
                type="button"
                className="btn btn-outline-danger btn-md"
                onClick={this.props.call}
              >
                Get Weather
              </button>
            </div>
          </div>
        </form>
            </div>
        )
    }
}
