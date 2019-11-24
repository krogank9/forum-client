import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Board extends Component {
  render() {
    return (
      <li>
        <div>
          <Link to={`/boards/${this.props.name.toLowerCase()}.${this.props.boardId}`}>{this.props.name}</Link>
        </div>
        <div>
          <small>Discussions: {this.props.threadCount}</small>
        </div>
      </li>
    );
  }
}

export default Board;