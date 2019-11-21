import React, { Component } from 'react';

import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my forum</h1>
        <p>Click the "View boards" button above to start browsing the various categories and topics.</p>
      </div>
    );
  }
}

export default LandingPage;