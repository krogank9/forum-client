import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ProfilePictureChooser from './ProfilePictureChooser';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <ProfilePictureChooser />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
