import React from 'react';
import ReactDOM from 'react-dom';
import MakeThreadPage from './MakeThreadPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MakeThreadPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
