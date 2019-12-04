import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CreateAccountPage from './CreateAccountPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <CreateAccountPage />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
