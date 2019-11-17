import React from 'react';
import ReactDOM from 'react-dom';
import ViewThreadPage from './ViewThreadPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewThreadPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
