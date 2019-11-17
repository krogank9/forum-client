import React from 'react';
import ReactDOM from 'react-dom';
import Thread from './Thread';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Thread />, div);
  ReactDOM.unmountComponentAtNode(div);
});
