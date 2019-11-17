import React, { Component } from 'react';

import Board from './Board/Board';

class BoardListPage extends Component {
  render() {
    let boards = [
      ["Programming", 10],
      ["Gaming", 5],
      ["Nature", 12],
      ["Funny", 3],
      ["Lounge", 10],
    ].map((b, i) => <Board name={b[0]} threadCount={b[1]} key={i} />)

    return (
      <section>
        <h2>Boards</h2>
        <ul>
          {boards}
        </ul>
      </section>
    );
  }
}

export default BoardListPage;