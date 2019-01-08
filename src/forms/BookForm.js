import React, { Component } from "react";
import { observer } from "mobx-react";

import bookStore from "../stores/BookStore";

class BookForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      color: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    bookStore.addBook(this.state, this.props.authorID);
  }

  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.title}
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Color</span>
            </div>
            <select
              value={this.state.color}
              onChange={this.handleChange}
              name="color"
            >
              <option value="white">white</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="purple">purple</option>
              <option value="black">black</option>
              <option value="grey">grey</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(BookForm);
