import React, { Component } from 'react';

import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to my forum</h1>
        <Link to="/boards">View boards</Link>
      </div>
    );
  }
}

export default LandingPage;