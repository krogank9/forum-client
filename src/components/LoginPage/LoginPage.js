import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <section>
        <h2>
          Login/Create Account
        </h2>

        <form>
          Username:
          <input type="text" />

          <br />

          Password:
          <input type="text" />

          <br />

          <input type="submit" value="Create Account" />
          <input type="submit" value="Log In" />
        </form>
      </section>
    );
  }
}

export default LoginPage;