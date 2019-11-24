import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';
import ForumContext from '../../contexts/ForumContext';

class LoginPage extends Component {
  static contextType = ForumContext

  handleSubmit = (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);

    ForumApiService.login(data.get('user_name'), data.get('password'))
      .then(json => {
        console.log(json)
        this.context.onUserLoggedIn(json.authToken, json.userName, json.userId)
        this.props.history.goBack()
      })
      .catch(e => {
        console.log(e)
        alert(`Error logging in`)
      })
  }

  render() {
    return (
      <section>
        <h2>
          Login/Create Account
        </h2>

        <form onSubmit={this.handleSubmit}>
          Username:
          <input type="text" name="user_name" />

          <br />

          Password:
          <input type="password" name="password" />

          <br />

          {false && <input type="submit" value="Create Account" />}

          <input type="submit" value="Log In" />
        </form>
      </section>
    );
  }
}

export default withRouter(LoginPage);