import React, { Component } from 'react';

class Thread extends Component {
  render() {
    return (
      <li>
        <div>
          <div class="forum-post-content">
            {this.props.name}

            <br />

            <small>{this.props.user}, {this.props.date}</small>
          </div>
          <div class="forum-post-user">
            Replies: {this.props.replies}
            <br />
            Views: {this.props.views}
          </div>
        </div>
      </li>
    );
  }
}

export default Thread;