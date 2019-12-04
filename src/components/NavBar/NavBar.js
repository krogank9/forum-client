import React from 'react';

import ForumContext from '../../contexts/ForumContext.js';
import TokenService from '../../services/token-service'

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  static contextType = ForumContext;

  constructor() {
    super();

    this.state = {
      loggedInUser: null
    }
  }

  logoutUser = () => {
    this.context.onUserLogout();
  }

  render() {
    return (
      <ForumContext.Consumer>
        {({ loggedInUser }) => (
          <nav>
            <Link to="/boards">View boards</Link>
            <br />
            {loggedInUser ?
              <span>Logged in as {loggedInUser.userName} <Link to="#" onClick={this.logoutUser}>Logout</Link> </span>
              :
              <>
                <Link to="/login">Log In</Link> / <Link to="/create-account">Create Account</Link>
              </>
            }
          </nav>
        )}
      </ForumContext.Consumer>
    );
  }
}

export default NavBar;