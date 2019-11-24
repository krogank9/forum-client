import React from 'react';
import ReactDOM from 'react-dom';
import ViewThreadPage from './ViewThreadPage';

let dummyParams = {
  boardName: "programming.1",
  threadName: "test-thread.1",
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ViewThreadPage match={{params:dummyParams}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
