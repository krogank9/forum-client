import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CreateThreadPage from './CreateThreadPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`CreateThreadPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CreateThreadPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the CreateThreadPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CreateThreadPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})