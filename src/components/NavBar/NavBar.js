import React from 'react';

import ForumContext from '../../contexts/ForumContext.js';

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  static contextType = ForumContext;

  constructor() {
    super();

    this.state = {
      loggedInUser: null
    }
  }

  render() {
    return (
      <ForumContext.Consumer>
        {({ loggedInUser }) => (
          <nav>
            <Link to="/boards">View boards</Link>
            <br />
            {loggedInUser ?
              <span>Logged in as {this.state.loggedInUser.user_name}</span>
              :
              <Link to="/login">Log In</Link>
            }
          </nav>
        )}
      </ForumContext.Consumer>
    );
  }
}

export default NavBar;
