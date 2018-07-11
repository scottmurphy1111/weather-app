import React from 'react';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from "react-redux";
import renderer from 'react-test-renderer';

import App from './App';

configure({adapter: new Adapter()});
describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Provider store="mockStore">
        <App />
      </Provider>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
