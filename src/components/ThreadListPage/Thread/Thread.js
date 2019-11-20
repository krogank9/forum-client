import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Thread extends Component {
  render() {
    return (
      <li>
        <div>
          <div class="forum-thread-name">
            <Link to="/boards/aaa/123">{this.props.name}</Link>

            <br />

            <small>{this.props.user}, {this.props.date}</small>
          </div>
          <div class="forum-thread-info">
            <span>
              Replies: {this.props.replies}
            </span>
            <span>
              Views: {this.props.views}
            </span>
          </div>
        </div>
      </li>
    );
  }
}

export default Thread;