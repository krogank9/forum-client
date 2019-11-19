import React, { Component } from 'react';

import "./ThreadListPage.css";

import { Link } from 'react-router-dom';

import Thread from './Thread/Thread';

class ThreadListPage extends Component {
  render() {
    let threads = [
      ["This is my first thread, what's up guys?", "Logan", "11/17/2019 4PM", 35, 123],
      ["Sports thread, this thread is about sports", "Sam", "11/15/2019 5PM", 26, 55],
      ["Programming general - discuss programming here", "Maggie", "11/17/2019 4PM", 22, 79],
      ["Health and Fitness Thread", "Logan", "11/18/2019 1PM", 15, 54],
      ["This thread is about the weather", "Logan", "11/22/2019 11AM", 29, 42],
    ].map((t, i) => <Thread name={t[0]} user={t[1]} date={t[2]} replies={t[3]} views={t[4]} key={i} />)

    return (
      <section>
        <h2>Threads</h2>

        <Link to={ "/boards/" + this.props.match.params.boardName  + "/create_thread" }>Create Thread</Link>

        <ul className="thread-list">
          {threads}
        </ul>
      </section>
    );
  }
}
    
export default ThreadListPage;