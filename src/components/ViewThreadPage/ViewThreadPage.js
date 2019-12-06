import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';

import ForumContext from '../../contexts/ForumContext'

import "./ViewThreadPage.css";

import Post from "./Post/Post";

import Utils from "../../utils";

class ViewThreadPage extends Component {
  static contextType = ForumContext

  constructor() {
    super();

    this.state = {
      posts: [],
      threadName: "",
      replyContent: "",
      replyFocused: false,
      threadId: 0,
      notFoundError: false,
      fetchError: false,
      postErrorMessage: "",
      loaded: false
    }

    this.replyTextareaRef = React.createRef();
  }

  handleSubmitPostForm = (evt) => {
    evt.preventDefault();
    let data = new FormData(evt.target);

    if (this.context.loggedInUser) {
      ForumApiService.postInThread(TokenService.getAuthToken(), this.state.threadId, data.get('content'))
        .then(json => {
          this.refreshPosts();
        })
        .catch(e => {
          this.setState({postErrorMessage: e.error})
        })
    }
    else {
      this.setState({postErrorMessage: "Please log in to post"});
    }
  }

  replyContentChanged = (evt) => {
    this.setState({ replyContent: evt.target.value })
  }

  replyPostClicked = (post) => {
    const postQuote = `[QUOTE name=${post.author} postNumber=${post.numberInThread}]${post.content}[/QUOTE]`;
    const hasNewline = this.state.replyContent.trim() === "" || this.state.replyContent.endsWith("\n") ? "" : "\n"
    const newReplyContent = `${this.state.replyContent}${hasNewline}${postQuote}\n`
    this.setState({ replyContent: newReplyContent })
    this.replyTextareaRef.current.focus()
  }

  refreshPosts = () => {
    ForumApiService.getPostsInThread(this.state.threadId)
      .then(json => {
        this.setState({ posts: json, loaded: true });
      })
      .catch(e => {
        this.setState({ fetchError: true });
      })
  }

  componentDidMount() {
    let threadName = this.props.match.params.threadName.split(".");
    let threadId = parseInt(threadName.pop());

    ForumApiService.getThreadInfo(threadId)
      .then(json => {
        Utils.setThreadURL(this.props.history, Utils.normalizeName(json.name), json.id)

        this.setState({ threadName: json.name, threadId: json.id })
        this.refreshPosts();
      })
      .catch(e => {
        console.log(e)
        const notFound = e.error && e.error.message.indexOf("doesn't exist") >= 0;
        this.setState({ notFoundError: notFound, fetchError: !notFound });
      })
  }

  render() {

    let posts = this.state.posts.map((p, i) => (
      <Post
        user={p.author_name}
        content={p.content}
        key={i}
        postNum={i + 1}
        profilePicture={p.author_picture}
        datePosted={p.date_created}
        onReply={this.replyPostClicked} />
    ))

    let content = false
    if (this.state.fetchError) {
      content = <div>Error connecting to the server. Please try again later.</div>
    }
    else if (this.state.notFoundError) {
      content = <div>Thread not found. 404</div>
    }
    else if (!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else { // loaded
      content = <ul className="forum-post-list">{posts}</ul>
    }

    return (
      <>
        <header>
          <h1>{this.state.threadName}</h1>
        </header>

        <section>
          {content}
        </section>

        {!this.state.loaded ? false :
          <section>

            <h2>Reply to Thread</h2>

            <form onSubmit={this.handleSubmitPostForm}>
              <div className="form-error">{this.state.postErrorMessage}</div>

              <textarea name="content" onChange={this.replyContentChanged} value={this.state.replyContent} ref={this.replyTextareaRef} required></textarea>

              <br />

              <input type="submit" value="Reply" />
            </form>

          </section>
        }
      </>
    );
  }
}

export default withRouter(ViewThreadPage);