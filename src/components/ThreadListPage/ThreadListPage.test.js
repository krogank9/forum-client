import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ThreadListPage from './ThreadListPage';

let dummyParams = {
  boardName: "programming.1",
  threadName: "test-thread.1",
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ThreadListPage match={{ params: dummyParams }} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
