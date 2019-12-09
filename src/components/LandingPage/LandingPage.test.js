import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LandingPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LandingPage />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the LandingPage', () => {
    const wrapper = shallow(
      <LandingPage />
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
