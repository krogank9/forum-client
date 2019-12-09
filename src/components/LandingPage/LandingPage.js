import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page-description">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.svg`} alt="Logan Krumbhaar's Forum" className="forum-logo"></img>
        <h1>Welcome to my forum</h1>
        <p>Click the "View boards" button in the navigation bar above to start browsing the various categories and topics.</p>
        <p>To login to a demo account, use the username "test" with the password "abc123".</p>
        <p><a href="https://github.com/krogank9/forum-client">Client</a>: React, HTML, CSS. <a href="https://github.com/krogank9/forum-server">Server</a>: Node, ExpressJS, PostgreSQL.</p>
        <p>Created by <a href="http://ltkdigital.com">Logan Krumbhaar</a>.</p>
      </div>
    );
  }
}

export default LandingPage;