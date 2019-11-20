import React, { Component } from 'react';

import "./ViewThreadPage.css";

import Post from "./Post/Post";

class ViewThreadPage extends Component {
  render() {
    let posts = [
      ["Logan", "Hey guys what's up? Here's my first post.", "10/9/2019 10AM"],
      ["Sam", "Nice weather we're having.", "10/15/2019 11AM"],
      ["Maggie", "Hi everyone", "10/17/2018 12PM"],
      ["Sam", "Hi Maggie", "10/20/2018 1PM"],
      ["Logan", "Hello", "10/21/2018 4PM"],
    ].map((p, i) => <Post user={p[0]} content={p[1]} key={i} postNum={i+1} datePosted={p[2]} />)

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