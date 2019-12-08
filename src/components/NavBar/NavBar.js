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
      loggedInUser: null,
      showDropdown: false
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
            <div className="nav-header">

              <div>
                <Link to="/" className="nav-log-link">
                  <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo_small.svg`} alt="Home"></img>
                </Link>
              </div>

              <div className="nav-expand"></div>

              <div>
                <span className="nav-button-padding-right-md nav-desktop-only">
                  <Link to="/boards">View Boards</Link>
                </span>

                {loggedInUser ?
                  <span className="nav-desktop-only">Logged in as {loggedInUser.userName} <Link to="#" onClick={this.logoutUser} className="nav-button-light">Logout</Link> </span>
                  :
                  <>
                    <span className="nav-desktop-only">
                      <Link to="/login" className="nav-button-light">Log In</Link>
                    </span>
                    <span className="nav-desktop-only">
                      <Link to="/create-account" className="nav-button">Create Account</Link>
                    </span>
                  </>
                }

                <span className="nav-dropdown-button">
                  <Link to="#" onClick={() => { this.setState({ showDropdown: !this.state.showDropdown }) }}>
                    <img src={`${process.env.PUBLIC_URL}/assets/menu-icon.svg`} className="menu-icon"></img>
                  </Link>
                </span>
              </div>

            </div>

            {this.state.showDropdown ?

              <div className="nav-dropdown-menu">
                <Link to="/boards" className="title-link-light">View Boards</Link>
                {loggedInUser ?
                  <>
                    <Link to="#" onClick={this.logoutUser} className="title-link-light">Logged in as {loggedInUser.userName} - Logout</Link>
                  </>
                  :
                  <>
                    <Link to="/login" className="title-link-light">Login</Link>
                    <Link to="/create-account" className="title-link-light">Create Account</Link>
                  </>
                }
              </div>

              : false}
          </nav>
        )}
      </ForumContext.Consumer>
    );
  }
}

export default NavBar;