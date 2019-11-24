import React, { Component } from 'react';

import ForumApiService from '../../services/forum-api-service';
import TokenService from '../../services/token-service';

import ForumContext from '../../contexts/ForumContext'

import "./ViewThreadPage.css";

import Post from "./Post/Post";

class ViewThreadPage extends Component {
  static contextType = ForumContext

  constructor() {
    super();

    this.state = {
      posts: [],
      threadName: "",
      threadId: 0,
      error: false
    }
  }

  handleSubmitPostForm = (evt) => {
    evt.preventDefault();
    let data = new FormData(evt.target);

    if(this.context.loggedInUser && this.state.threadId !== 0) {
      ForumApiService.postInThread(TokenService.getAuthToken(), this.state.threadId, data.get('content'))
        .then(json => {
          this.refreshPosts();
        })
    }
    else if(!this.context.loggedInUser) {
      alert("Please log in to post");
    }
    else {
      alert("Error");
    }
  }

  refreshPosts = () => {
    ForumApiService.getPostsInThread(this.state.threadId)
      .then(json => {
        this.setState({posts: json});
      })
      .catch(e => {
        this.setState({error: true});
      })
  }

  componentDidMount() {
    let threadName = this.props.match.params.threadName.split(".");
    let threadId = parseInt(threadName.pop());

    ForumApiService.getThreadInfo(threadId).then(json => {
      this.setState({threadName: json.name, threadId: json.id})
      this.refreshPosts();
    })
  }

  render() {

    let posts = this.state.posts.map((p, i) => (
      <Post
        user={p.author_id}
        content={p.content}
        key={i}
        postNum={i+1}
        datePosted={p.date_created} />
    ))

    return (
      <>
        <header>
          <h1>{this.state.threadName}</h1>
        </header>

        <section>

        {this.state.error? <div>Error loading posts. Please try again later.</div> :false}

          <ul className="forum-post-list">
            {posts}
          </ul>
          
        </section>

        <section>

          <h2>Reply to Thread</h2>

          <form onSubmit={this.handleSubmitPostForm}>
            <textarea name="content"></textarea>

            <br />

            <input type="submit" value="Reply" />
          </form>

        </section>
      </>
    );
  }
}

export default ViewThreadPage;