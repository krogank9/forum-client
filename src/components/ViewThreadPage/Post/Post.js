import React, { Component } from 'react';
import { Link } from "react-router-dom";
//
import bbobReactRender from '@bbob/react/es/render'
import { createPreset } from '@bbob/preset'

// render: <p><strong>strong</strong></p>


import "./Post.css";

import Utils from "../../../utils";

const preset = createPreset({
  quote: (node) => {
    return ({
      tag: 'div',
      attrs: {},
      content: [
        {
          tag: 'div',
          attrs: {},
          content: [
            {
              tag: 'span',
              attrs: {},
              content: `${node.attrs["name"]} said:`,
            },
            {
              tag: 'a',
              attrs: {href: `#${node.attrs["postNumber"]}`},
              content: "↑",
            },
          ],
        },
        {
          tag: 'div',
          attrs: {},
          content: node.content,
        }
      ],
    })
  },
})

class Post extends Component {
  replyClicked = () => {
    this.props.onReply({
      author: this.props.user,
      content: this.props.content,
      numberInThread: this.props.postNum
    })
  }

  formatPost(text) {
    // change all double newlines to doubels <br>s
    // change all newlines to <brs> (don't allow more than 2 <br>s in a row)
    text = text.split("\n\n").join("<br><br>")
    text = text.split("\n").join("<br>")
    //return text

    // parse bbcode
    var html = 0//BBParser.parseString(text);

    return html
  }

  render() {
    //<img src={`${process.env.PUBLIC_URL}/assets/user-icon.png`} />
    const proPic = Math.max(Math.abs(parseInt(this.props.profilePicture)) % 10, 1)
    return (
      <li>
        <div>
          <div className="forum-post-user">
            <img src={`${process.env.PUBLIC_URL}/assets/profile-pictures/${proPic}.svg`} />
            <div>
              {this.props.user}
            </div>
          </div>
          <div className="forum-post-content">
            <div className="forum-post-header">
              Date Posted: {Utils.dateToHumanReadable(this.props.datePosted)}
              <span className="forum-post-num">
                <a name={`${this.props.postNum}`}>#{this.props.postNum}</a>
              </span>
            </div>
            <div className="forum-post-text">
              {bbobReactRender(this.props.content, preset(), {})}
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