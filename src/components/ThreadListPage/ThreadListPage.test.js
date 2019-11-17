import React from 'react';
import ReactDOM from 'react-dom';
import ThreadListPage from './ThreadListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ThreadListPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
