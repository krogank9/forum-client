import React, { Component } from 'react';

import { Link } from "react-router-dom";

import Utils from "../../../utils";

class Thread extends Component {
  render() {
    return (
      <li className="thread-li">
        <div>
          <div className="forum-thread-name">
            <Link to={`/threads/${this.props.linkName}.${this.props.threadId}`} className="title-link">{this.props.name}</Link>

            <br />

            <small>{this.props.user}, {Utils.dateToHumanReadable(this.props.date)}</small>
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