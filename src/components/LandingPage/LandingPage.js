import React, { Component } from 'react';
import './LandingPage.css';

//import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <img className="nav-logo" src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logan Krumbhaar's Forum" className="forum-logo"></img>
        <h1>Welcome to my forum</h1>
        <p>Click the "View boards" button in the navigation bar above to start browsing the various categories and topics.</p>
        <p>To login to a demo account, use the username "test" with the password "abc123".</p>
        <p>Frontend: React. Backend: Node, ExpressJS, PostgreSQL.</p>
        <p>Created by <a href="http://ltkdigital.com">Logan Krumbhaar</a>.</p>
      </div>
    );
  }
}

export default LandingPage;