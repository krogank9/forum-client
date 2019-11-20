import React, { Component } from 'react';

import "./Post.css";

class Post extends Component {
  render() {
    return (
      <li>
        <div>
          <div class="forum-post-user">
            <img src={`${process.env.PUBLIC_URL}/assets/user-icon.png`} />
            <div>
              {this.props.user}
            </div>
        </div>
          <div class="forum-post-content">
            <div class="forum-post-header">
              Date Posted: {this.props.datePosted}
              <span class="forum-post-num">
                #{this.props.postNum}
              </span>
            </div>
            <div>
              {this.props.content}
            </div>
        </div>
          <div class="forum-post-clear"></div>
        </div>
      </li>
    );
  }
}

export default Post;