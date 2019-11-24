import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Thread from './Thread';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Thread match={{params:{boardName:"Test", linkName:"test", threadId:2}}} />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
