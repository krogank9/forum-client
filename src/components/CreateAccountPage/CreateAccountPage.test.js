import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CreateAccountPage from './CreateAccountPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`CreateAccountPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CreateAccountPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the CreateAccountPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CreateAccountPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
