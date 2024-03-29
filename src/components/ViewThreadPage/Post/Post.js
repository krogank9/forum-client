import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Utils from "../../../utils";

class Post extends Component {

  replyClicked = () => {
    this.props.onReply({
      author: this.props.user,
      content: this.props.content,
      numberInThread: this.props.postNum
    })
  }

  render() {
    const proPic = Math.max(Math.abs(parseInt(this.props.profilePicture)) % 10, 1)
    return (
      <li>
        <div className="post-top-spacer">
        </div>
        <div className="forum-post-container">
          <div className="forum-post-user">
            <img src={`${process.env.PUBLIC_URL}/assets/profile-pictures/${proPic}.svg`} alt={`Avatar ${proPic}`} />
            <div>
              {this.props.user}
            </div>
          </div>
          <div className="forum-post-content">
            <div className="forum-post-header">
              Date Posted: {Utils.dateToHumanReadable(this.props.datePosted)}
              <span className="forum-post-num">
                <a name={`${this.props.postNum}`} href={`#${this.props.postNum}`}>#{this.props.postNum}</a>
              </span>
            </div>
            <div className="forum-post-text" dangerouslySetInnerHTML={{ __html: Utils.bbcodeToReact(this.props.content || "") }}>
            </div>
            <div className="forum-post-footer">
              <Link to="#" onClick={this.replyClicked}>Reply</Link>
            </div>
          </div>
          <div className="forum-post-clear"></div>
        </div>
      </li>
    );
  }
}

export default Post;