import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Utils from "../../../utils";

import parser, { Tag } from 'bbcode-to-react';

class QuoteTag extends Tag {
  toReact() {
    // using this.getContent(true) to get it's inner raw text.
    const attributes = {
      ...this.params,
      content: this.getContent(true)
    };
    return (
      <div className="post-quote">
        <div className="post-quote-header">
          <span>{`${attributes["name"]} said:`}</span>
          <a href={`#${attributes["postNumber"]}`}>{"↑"}</a>
        </div>
        <div className="post-quote-body">
          {attributes.content}
        </div>
      </div>
    );
  }
}

parser.registerTag('quote', QuoteTag);

/*
//import bbobReactRender from '@bbob/react/es/render'
//import { createPreset } from '@bbob/preset'

// render: <p><strong>strong</strong></p>

const preset = createPreset({
  quote: (node) => {
    return ({
      tag: 'div',
      attrs: {className: "post-quote"},
      content: [
        {
          tag: 'div',
          attrs: {className: "post-quote-header"},
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
          attrs: {className: "post-quote-body"},
          content: node.content,
        }
      ],
    })
  },
})
*/

class Post extends Component {

  replyClicked = () => {
    this.props.onReply({
      author: this.props.user,
      content: this.props.content,
      numberInThread: this.props.postNum
    })
  }

  render() {
    //<img src={`${process.env.PUBLIC_URL}/assets/user-icon.png`} />
    const proPic = Math.max(Math.abs(parseInt(this.props.profilePicture)) % 10, 1)
    return (
      <li>
        <div className="post-top-spacer">
        </div>
        <div className="forum-post-container">
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
              {parser.toReact(this.props.content || "")}
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