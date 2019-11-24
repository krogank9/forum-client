import React from 'react';
import ReactDOM from 'react-dom';
import PageButtons from './PageButtons';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PageButtons />, div);
  ReactDOM.unmountComponentAtNode(div);
});
