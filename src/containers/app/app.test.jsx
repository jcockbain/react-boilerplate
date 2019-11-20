import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', () => {
  test('should have correct header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toHaveLength(1);
  });
});
