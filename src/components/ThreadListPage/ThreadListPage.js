import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import ForumApiService from '../../services/forum-api-service';

import "./ThreadListPage.css";

import Utils from "../../utils";

import { Link } from 'react-router-dom';

import Thread from './Thread/Thread';

class ThreadListPage extends Component {
  constructor() {
    super();

    this.state = {
      threads: [],
      notFoundError: false,
      fetchError: false,
      loaded: false
    }
  }

  componentDidMount() {
    console.log(this.props.match)
    let boardId = this.props.match.params.boardName.split(".").pop();

    ForumApiService.getBoardById(parseInt(boardId))
      .then(json => {
        Utils.updateBoardURL(this.props.history, Utils.normalizeName(json.name), boardId)
        const boardName = json.name

        ForumApiService.getThreadsInBoard(parseInt(boardId))
          .then(json => {
            this.setState({ boardName: boardName, threads: json, loaded: true });
          })
          .catch(e => {
            this.setState({ fetchError: true });
          })
      })
      .catch(e => {
        const notFound = e.error && e.error.message.indexOf("doesn't exist") >= 0;
        this.setState({ notFoundError: notFound, fetchError: !notFound });
      })
  }

  render() {
    let threads_old = [
      ["This is my first thread, what's up guys?", "Logan", "11/17/2019 4PM", 35, 123],
      ["Sports thread, this thread is about sports", "Sam", "11/15/2019 5PM", 26, 55],
      ["Programming general - discuss programming here", "Maggie", "11/17/2019 4PM", 22, 79],
      ["Health and Fitness Thread", "Logan", "11/18/2019 1PM", 15, 54],
      ["This thread is about the weather", "Logan", "11/22/2019 11AM", 29, 42],
    ].map((t, i) => <Thread name={t[0]} user={t[1]} date={t[2]} replies={t[3]} views={t[4]} match={this.props.match} key={i} />)

    let threads = this.state.threads.map((t, i) => (
      <Thread
        name={t.name}
        linkName={Utils.normalizeName(t.name)}
        user={t.author_name}
        date={t.date_created}
        replies={t.reply_count}
        views={0}
        threadId={t.id}
        match={this.props.match}
        key={i} />
    ))

    let content = false
    if (this.state.fetchError) {
      content = <div>Error connecting to the server. Please try again later.</div>
    }
    else if (this.state.notFoundError) {
      content = <div>Board not found. 404</div>
    }
    else if (!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else { // loaded
      content = (
        <>
          <Link to={`/boards/${this.props.match.params.boardName}/create_thread`}>Create Thread</Link>
          <ul className="thread-list">{threads}</ul>
        </>
      )
    }

    return (
      <section className="thread-list-section">
        <h2>{this.state.boardName}</h2>

        {content}

      </section>
    );
  }
}

export default withRouter(ThreadListPage);