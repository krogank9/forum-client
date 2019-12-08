import React, { Component } from 'react';

import ForumApiService from '../../services/forum-api-service';

import "./BoardListPage.css"

import Board from './Board/Board';

class BoardListPage extends Component {
  constructor() {
    super();

    this.state = {
      boards: [],
      loaded: false,
      error: null
    }
  }

  componentDidMount() {
    ForumApiService.getBoards()
      .then(json => {
        this.setState({boards: json, loaded: true});
      })
      .catch(e => {
        this.setState({error: true});
      })
  }

  render() {
    let boards = this.state.boards.map((b, i) => <Board name={b.name} threadCount={b.threadCount} boardId={b.id} key={i} />)

    let content = false
    if(this.state.error) {
      content = <div>Could not load boards. Please try again later.</div>
    }
    else if(!this.state.loaded) {
      content = <div>Loading...</div>
    }
    else { // loaded
      content = <ul className="board-list">{boards}</ul>
    }

    return (
      <section className="boards-list-section">
        <h2>Boards</h2>

        {content}
      </section>
    );
  }
}

export default BoardListPage;