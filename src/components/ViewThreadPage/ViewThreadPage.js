import React, { Component } from 'react';

import "./ViewThreadPage.css";

import Post from "./Post/Post";

class ViewThreadPage extends Component {
  render() {
    let posts = [
      ["Logan", "Hey guys what's up? Here's my first post."],
      ["Sam", "Nice weather we're having."],
      ["Maggie", "Hi everyone"],
      ["Sam", "Hi Maggie"],
      ["Logan", "Hello"],
    ].map((p, i) => <Post user={p[0]} content={p[1]} key={i} />)

    return (
      <>
        <header>
          <h1>Thread Title</h1>
        </header>

        <section>

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