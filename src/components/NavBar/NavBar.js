import React from 'react';

import './NavBar.css';

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
            <div>
              <Link to="/">
                <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo_small.svg`} alt="Home"></img>
              </Link>
            </div>
            <div className="nav-expand"></div>
            <div>
              <span className="nav-button-padding-right-md">
                <Link to="/boards">View boards</Link>
              </span>

              {loggedInUser ?
                <span>Logged in as {loggedInUser.userName} <Link to="#" onClick={this.logoutUser} className="nav-button-light">Logout</Link> </span>
                :
                <>
                  <span>
                    <Link to="/login" className="nav-button-light">Log In</Link>
                  </span>
                  <span>
                    <Link to="/create-account" className="nav-button">Create Account</Link>
                  </span>
                </>
              }
            </div>
          </nav>
        )}
      </ForumContext.Consumer>
    );
  }
}

export default NavBar;