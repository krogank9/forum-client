import React, { Component } from 'react';

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
      <section>
        <h2>Thread Title</h2>

        <ul>
          {posts}
        </ul>
      </section>
    );
  }
}

export default ViewThreadPage;