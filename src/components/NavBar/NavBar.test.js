import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import NavBar from './NavBar';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`NavBar component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the NavBar', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})