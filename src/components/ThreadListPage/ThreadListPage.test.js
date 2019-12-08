import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from "react-router-dom";
import ThreadListPage from './ThreadListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/boards/programming.1"]} >
      <Route path="/boards/:boardName" component={ThreadListPage} ></Route>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
