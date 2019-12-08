import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from "react-router-dom";
import Post from './Post';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/threads/programming.1"]} >
      <Route path="/threads/:threadName" component={Post} ></Route>
    </MemoryRouter>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
