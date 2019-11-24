import React, { Component } from 'react';

import ForumApiService from '../../services/forum-api-service';

import "./BoardListPage.css"

import Board from './Board/Board';

class BoardListPage extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      error: false
    }
  }

  componentDidMount() {
    ForumApiService.getBoards()
      .then(json => {
        this.setState({boards: json});
      })
      .catch(e => {
        this.setState({error: true});
      })
  }

  render() {
    let boards = this.state.boards.map((b, i) => <Board name={b.name} threadCount={b.threadCount} boardId={b.id} key={i} />)

    return (
      <section>
        <h2>Boards</h2>
        {this.state.error? <div>Error loading boards. Please try again later.</div> :false}
        <ul className="board-list">
          {boards}
        </ul>
      </section>
    );
  }
}

export default BoardListPage;