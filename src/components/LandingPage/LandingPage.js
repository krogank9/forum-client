import React, { Component } from 'react';
import './LandingPage.css';

//import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logan Krumbhaar's Forum" className="forum-logo"></img>
        <h1>Welcome to my forum</h1>
        <p>Click the "View boards" button above to start browsing the various categories and topics.</p>
      </div>
    );
  }
}

export default LandingPage;