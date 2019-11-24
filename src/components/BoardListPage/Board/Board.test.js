import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Board from './Board';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Board name={"Test"} boardId={1} threadCount={3} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
