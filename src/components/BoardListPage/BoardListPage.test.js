import React from 'react';
import ReactDOM from 'react-dom';
import BoardListPage from './BoardListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BoardListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
