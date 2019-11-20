import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/components/app';

describe('<App />', () => {
  test('should have correct header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).toBe('React Starter App');
  });
});
