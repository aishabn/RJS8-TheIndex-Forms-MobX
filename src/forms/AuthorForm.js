import React, { Component } from "react";
import { observer } from "mobx-react";

import authorStore from "../stores/AuthorStore";

class AuthorForm extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      imageUrl: "",
      books: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    authorStore.addAuthor(this.state);
  }

  render() {
    return (
      <div className="mt-5">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">First Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.first_name}
              name="first_name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Last Name</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.last_name}
              name="last_name"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Image URL</span>
            </div>
            <input
              type="text"
              className="form-control"
              value={this.state.imageUrl}
              name="imageUrl"
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" /> <br />
        </form>
      </div>
    );
  }
}

export default observer(AuthorForm);
