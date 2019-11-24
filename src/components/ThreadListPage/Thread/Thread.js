import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Thread extends Component {
  render() {
    return (
      <li>
        <div>
          <div className="forum-thread-name">
            <Link to={`/boards/${this.props.match.params.boardName}/${this.props.linkName}.${this.props.threadId}`}>{this.props.name}</Link>

            <br />

            <small>{this.props.user}, {this.props.date}</small>
          </div>
          <div className="forum-thread-info">
            <span>
              Replies: {this.props.replies}
            </span>
            {false && <span>
              Views: {this.props.views}
            </span>}
          </div>
        </div>
      </li>
    );
  }
}

export default Thread;