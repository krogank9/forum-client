import React, { Component } from 'react';

import "./Post.css";

class Post extends Component {
  render() {
    return (
      <li>
        <div>
          <div className="forum-post-user">
            <img src={`${process.env.PUBLIC_URL}/assets/user-icon.png`} />
            <div>
              {this.props.user}
            </div>
        </div>
          <div className="forum-post-content">
            <div className="forum-post-header">
              Date Posted: {new Date(this.props.datePosted).toLocaleString()}
              <span className="forum-post-num">
                #{this.props.postNum}
              </span>
            </div>
            <div>
              {this.props.content}
            </div>
        </div>
          <div className="forum-post-clear"></div>
        </div>
      </li>
    );
  }
}

export default Post;