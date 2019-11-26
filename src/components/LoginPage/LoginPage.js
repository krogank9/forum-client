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
      password: ""
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);

    ForumApiService.login(this.state.userName, this.state.password)
      .then(json => {
        console.log(json)
        this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
        this.props.history.goBack()
      })
      .catch(e => {
        console.log(e)
        alert(`Error logging in: ${e.error}`)
      })
  }

  handleCreateAccount = (evt) => {
    ForumApiService.registerUser(this.state.userName, this.state.password)
      .then(json => {
        console.log(json)
        alert("Account created successfuly")
      })
      .catch(e => {
        console.log(e)
        alert(`Error creating account: ${e.error}`)
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
          Login/Create Account
        </h2>

        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" name="userName" onChange={this.updateFormState} />

          <br />

          Password:
          <input type="password" name="password" onChange={this.updateFormState} />

          <br />

          <input type="button" value="Create Account" name="create_account" onClick={this.handleCreateAccount} />

          <input type="submit" value="Log In" name="login" />
        </form>
      </section>
    );
  }
}

export default withRouter(LoginPage);