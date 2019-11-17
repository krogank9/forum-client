import React, { Component } from 'react';

class Board extends Component {
  render() {
    return (
      <li>
        <div>
          {this.props.name}
        </div>
        <div>
          <small>Discussions: {this.props.threadCount}</small>
        </div>
      </li>
    );
  }
}

export default Board;