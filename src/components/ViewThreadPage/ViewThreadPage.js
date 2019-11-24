import React, { Component } from 'react';

import ForumApiService from '../../services/forum-api-service';

import "./ViewThreadPage.css";

import Post from "./Post/Post";
import ForumContext from '../../contexts/ForumContext';

class ViewThreadPage extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      threadName: "",
      error: false
    }
  }

  componentDidMount() {
    let threadName = this.props.match.params.threadName.split(".");
    let threadId = parseInt(threadName.pop());

    ForumApiService.getThreadInfo(threadId).then(json => {
      this.setState({threadName: json.name})
    })

    ForumApiService.getPostsInThread(threadId)
      .then(json => {
        this.setState({posts: json});
      })
      .catch(e => {
        this.setState({error: true});
      })
  }

  render() {

    console.log(this.state.posts)
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

          <form>
            <textarea></textarea>

            <br />

            <input type="submit" value="Reply" />
          </form>

        </section>
      </>
    );
  }
}

export default ViewThreadPage;