import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';
import ForumContext from '../../contexts/ForumContext';

class LoginPage extends Component {
  static contextType = ForumContext

  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
      errorMessage: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();

    ForumApiService.login(this.state.userName, this.state.password)
      .then(json => {
        this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
        this.props.history.goBack()
      })
      .catch(e => {
        const errorMessage = e.error
        this.setState({errorMessage})
      })
  }

  updateFormState = (evt) => {
    let name = evt.target.getAttribute("name")

    this.setState({ [name]: evt.target.value })
  }

  render() {
    return (
      <section>
        <h2>
          Login
        </h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-error">{this.state.errorMessage}</div>

          Username: &nbsp;
          <input type="text" name="userName" onChange={this.updateFormState} required />

          <br />

          Password: &nbsp;
          <input type="password" name="password" onChange={this.updateFormState} required />

          <br />

          <input type="submit" value="Log In" />
        </form>
      </section>
    );
  }
}

export default withRouter(LoginPage);