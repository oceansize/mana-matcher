import React from 'react'
import { shallow } from 'enzyme';
import Search from './search';

describe('Search', () => {

  const wrapper = shallow(<Search />);

  it('renders without crashing', () => {
    shallow(<Search />);
  });

  it('accepts text in an input', () => {
    const input = wrapper.find('input');
    input.simulate('keyPress', { key: 'a', keyCode: 65 });
  });
});

