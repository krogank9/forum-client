import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import LoginPage from './LoginPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LoginPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the LoginPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <LoginPage/>
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})